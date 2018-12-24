import * as _ from 'lodash';
import chalk from 'chalk';
import TextStream, { SourcePosition } from './TextStream';
import ParseError from './ParseError';
import Node, { NodeType } from './Node';
import {
  T_SPACE,
  T_TAB,
  T_METADATA_MARKER,
  T_ENTITY_START,
  T_ENTITY_END,
  T_TAG_START,
  T_TAG_CLOSING,
  T_TAG_END,
  T_ASSIGN_XML,
  P_ASSIGN_YAML,
  T_METADATA_FAVORED_ASSIGN,
  T_TAG_ATTRIBUTE_FAVORED_ASSIGN,
  T_LINE_BREAKS,
  T_SINGLE_LINE_COMMENT,
  P_MULTIPLE_LINE_COMMENT,
  P_SPACE_WRAPPED_LINE_BREAK,
  P_LINE_BREAK,
  P_PARAGRAPH_BREAK,
  P_WHITE_SPACE,
  P_WHITE_SPACES_EXT,
  P_TAG_NAME,
  P_LABEL_START,
  P_LABEL_NAME,
  P_ATTRIBUTE_ASSIGN,
  P_ATTRIBUTE_NAME,
  P_ATTRIBUTE_LIST,
  T_STRING_START,
  P_DATE_LITERAL,
  P_NUMBER_START,
  P_NUMBER_LITERAL,
  P_STRING_LITERAL_QUOTED,
  P_STRING_LITERAL_UNQUOTED,
  P_BOOLEAN_TRUE,
  P_BOOLEAN_FALSE,
  START_MARKERS,
  END_MARKERS,
  P_MARKER,
  PROCESSING_TIMEOUT,
  T_LINE_BREAK,
} from './constants';

enum State {
  METADATA = 0,
  NORMAL,
  SINGLE_COMMENT,
  MULTIPLE_COMMENT,
  START,
  TAG_START,
  TAG_NAME,
  ATTRIBUTE_LIST,
  ATTRIBUTE_NAME,
  ATTRIBUTE_ASSIGN,
  ATTRIBUTE_VALUE,
  ATTRIBUTE_FINISH,
  TAG_END,
  LABEL_START,
  ENTITY_START,
  ENTITY_BODY,
  ENTITY_END,
  END,
  FINISH,
};

const stateNames = [
  'METADATA',
  'NORMAL',
  'SINGLE_COMMENT',
  'MULTIPLE_COMMENT',
  'START',
  'TAG_START',
  'TAG_NAME',
  'ATTRIBUTE_LIST',
  'ATTRIBUTE_NAME',
  'ATTRIBUTE_ASSIGN',
  'ATTRIBUTE_VALUE',
  'ATTRIBUTE_FINISH',
  'TAG_END',
  'LABEL_START',
  'ENTITY_START',
  'ENTITY_BODY',
  'ENTITY_END',
  'END',
  'FINISH',
];

const getStateName = (state: State) => {
  return stateNames[state];
}

const countLineBreaks = (text: string) => {
  const result = text.match(P_LINE_BREAK);
  return result ? result.length : 0;
}

export interface ParsingOptions {
  verbose?: boolean;
};

/**
 * Tokenizer class
 * @class
 */
class Tokenizer {

  static from(text: string, options: ParsingOptions) {
    return new Tokenizer(text, options);
  }

  public text: string;
  public stream: TextStream;
  public options: ParsingOptions;
  public parsed: boolean;

  /**
   * @param text 
   * @param options Constructor options
   */
  constructor(text: string, options?: ParsingOptions) {
    this.text = text;
    this.stream = new TextStream(text);
    const defaultOptions = {
      verbose: process && process.env.DEBUG === 'verbose',
    };
    this.options = _.defaults(options, defaultOptions);
    this.parsed = false;
  }

  debug(...params: any[]) {
    if (this.options.verbose) {
      console.log(...params);
    }
  }

  /**
   * Process a text and parse to AST
   * @returns Root node of parsed AST
   */
  process(): Node {
    const { text, stream } = this;
    const timeStart = Date.now();
    let state: State = State.METADATA;
    let start = 0;
    let lastState: State = 0;
    let lastPos = -1;
    const states: {
      unwrapped: boolean,
      inline: boolean,
      embedded: boolean,
      isClosing: boolean,
      key?: string,
      value?: any,
    } = {
      unwrapped: false,
      inline: false,
      embedded: false,
      isClosing: false,
      key: undefined,
      value: undefined,
    };
    const root = Node.create(NodeType.ROOT, undefined, { source: text });
    const nodeStack: Node[] = [];
    let node: Node = root;

    const getNodeString = (node: Node): string => `${node.type}${node.name ? `:${node.name}` : ''}`;

    const debugStack = (lastNode?: Node) => {
      if (!this.options.verbose) {
        return;
      }
      const separator = ' > ';
      const stack = [...nodeStack, node];
      const list = stack.map((n, i) => {
        let text = getNodeString(n);
        if (i === stack.length - 1) {
          text = chalk.cyanBright(text);
        } else {
          text = chalk.green(text);
        }
        return text;
      });
      let result = list.join(chalk.redBright(separator));
      if (lastNode) {
        result += chalk.grey(`${separator}${getNodeString(lastNode)}`);
      }
      return result;
    }

    const pushNode = (n: Node) => {
      if (node.start === -1) {
        node.start = stream.pos;
      }
      nodeStack.push(node);
      node = n;
      this.debug(`push: ${debugStack()}\n`);
    }

    const popNode = (error?: string) => {
      const lastNode = node;
      node.end = stream.pos;
      if (node.start === node.end || (node.type === NodeType.PARAGRAPH && !node.hasChild()) && node.parent) {
        (<Node> node.parent).removeChild(node);
      }
      node = <Node> nodeStack.pop();
      this.debug(`pop : ${debugStack(lastNode)}\n`);
      if (!node) {
        throw createError(error || 'unexpected closing node');
      }
    };

    // replace wrapping paragraph with current block tag
    const levelUpBlock = () => {
      if (node.parent && node.parent.type === NodeType.PARAGRAPH) {
        const blockNode = node;
        popNode();
        node.removeChild(blockNode);
        popNode();
        node.appendChild(blockNode);
        pushNode(blockNode);
      }
    }

    const createError = (message: string) => {
      let from: SourcePosition;
      let to: SourcePosition;
      from = stream.getPosition(lastPos);
      to = stream.pos === lastPos ? stream.getPosition(lastPos + 1) : stream.getPosition();
      this.debug(`error: '${message}' at ${from.ln}:${from.col}`);
      this.debug('current node:');
      this.debug(node.toJSON());
      this.debug('current parsing state:');
      this.debug(JSON.stringify(root, null, 2));
      return new ParseError(message, text, from, to);
    };

    while (state !== State.FINISH) {
      // parse failure watcher
      if (Date.now() - timeStart >= PROCESSING_TIMEOUT) {
        this.debug('parsing timeout!');
        state = State.FINISH;
      }
      if (state === lastState && lastPos === stream.pos) {
        throw new Error('Parser fall into infinite loop!');
      }
      lastState = state;
      lastPos = stream.pos;
      this.debug(chalk.magenta(`# ${getStateName(state)}, pos = ${stream.pos}`));
      if (this.options.verbose) {
        stream.debugState();
      }
      
      switch (state) {

        case State.METADATA: {
          stream.eatWhile(P_WHITE_SPACES_EXT);
          if (stream.match(T_METADATA_MARKER) || stream.match(P_ATTRIBUTE_LIST, { consume: false })) {
            node.states.metadata = true;
            state = State.ATTRIBUTE_LIST;
          } else {
            state = State.NORMAL;
          }
          break;
        }

        case State.NORMAL: {
          if (stream.sol(true) || stream.eol(true)) {
            stream.eatWhile(P_WHITE_SPACE);
          }
          if (stream.match(P_PARAGRAPH_BREAK)) {
            popNode();
            if (node.states.unwrapped) {
              popNode();
            }
            break;
          }
          start = stream.pos;
          if (node.type !== NodeType.PARAGRAPH && !node.isInlineBlock && stream.sol(true)) {
            const child = node.createChild(NodeType.PARAGRAPH, undefined, { start });
            pushNode(child);
          }
          const originalText = stream.readTo(P_MARKER, { toEOF: true });
          let text = originalText;
          if (text) {
            if (node.children.length === 0) {
              text = _.trimStart(text);
            }
            text = text.replace(P_SPACE_WRAPPED_LINE_BREAK, T_LINE_BREAK);
            text = _.trimEnd(text, T_LINE_BREAKS);
            if (text) {
              node.appendText(text, { start, end: stream.pos });
            }
          }
          if (stream.match(P_PARAGRAPH_BREAK, { consume: false })) {
            state = State.NORMAL;
          } else {
            state = State.START;
          }
          break;
        }
        
        case State.START: {
          start = stream.pos;
          const ch: string = stream.eat(P_MARKER);
          P_LABEL_START.lastIndex = 0;
          if (ch === T_SINGLE_LINE_COMMENT) {
            const rest = stream.eatWhile(T_SINGLE_LINE_COMMENT);
            if (rest.length === 0) {
              state = State.SINGLE_COMMENT;
            } else {
              state = State.MULTIPLE_COMMENT;
            }
          } else if (ch === T_TAG_START) {
            state = State.TAG_START;
          } else if (P_LABEL_START.test(ch)) {
            states.unwrapped = true;
            state = State.TAG_START;
          } else if (ch === T_TAG_END) {
            states.isClosing = true;
            state = State.TAG_END;
          } else if (ch === T_ENTITY_START) {
            state = State.ENTITY_START;
          } else if (stream.eof()) {
            state = State.END;
          } else {
            throw createError('empty start')
          }
          break;
        }

        case State.SINGLE_COMMENT:
        case State.MULTIPLE_COMMENT: {
          start = stream.pos;
          let content: string;
          if (state === State.SINGLE_COMMENT) {
            content = stream.readTo(P_LINE_BREAK);
          } else {
            content = stream.readTo(P_MULTIPLE_LINE_COMMENT, { skipMatched: true });
          }
          if (content) {
            if (state === State.MULTIPLE_COMMENT) {
              content = content.replace(P_SPACE_WRAPPED_LINE_BREAK, '\n');
            }
            content = _.trim(content);
          }
          if (content) {
            node.createChild(NodeType.COMMENT, undefined, {
              start,
              end: stream.pos,
              content,
            });
          }
          state = State.NORMAL;
          break;
        }
        
        case State.TAG_START: {
          if (stream.eat(T_TAG_CLOSING)) {
            states.isClosing = true;
            state = State.TAG_NAME;
          } else if (stream.match(P_LINE_BREAK)) {
            state = State.NORMAL;
          } else if (node.type !== NodeType.ENTITY && (states.unwrapped || stream.eat(P_LABEL_START))) {
            state = State.LABEL_START;
          } else {
            const child = Node.create(NodeType.TAG, '', { start });
            if (states.embedded) {
              child.states.embedded = true;
              child.states.metaKey = states.key;
              states.embedded = false;
            } else {
              node.appendChild(child);
            }
            pushNode(child);
            state = State.TAG_NAME;
          }
          if (state === State.NORMAL || state === State.LABEL_START) {
            stream.pushCursor(start);
            const tagName = stream.sol(true) ? 'BLOCK' : 'INLINE';
            stream.popCursor();
            if (node.type === NodeType.PARAGRAPH && tagName === 'BLOCK') {
              popNode();
            }
            const child = node.createChild(NodeType.TAG, tagName, {
              start,
              states: {
                simpleBlock: true,
                unwrapped: states.unwrapped,
              },
            });
            states.unwrapped = false;
            pushNode(child)
          }
          break;
        }
        
        case State.TAG_NAME: {
          const name = stream.match(P_TAG_NAME);
          if (!name) {
            throw createError('expected tag name');
          }
          states.inline = name === 'INLINE';
          if (states.isClosing) {
            if (node.type === NodeType.PARAGRAPH) {
              stream.pushCursor(start);
              popNode();
              stream.popCursor();
            }
            if (name !== node.name) {
              throw createError('unexpected closing tag');
            }
            const ch = stream.eat(T_TAG_END);
            if (!ch) {
              throw createError('invalid closing tag');
            }
            if (!states.inline && !stream.eol()) {
              throw createError('closing block tag must take the whole line');
            }
            state = State.TAG_END;
          } else {
            node.name = name;
            if (node.isWrappingTag) {
              stream.pushCursor(node.start || 0);
              if (node.name === 'BLOCK' && !stream.sol(true)) {
                throw createError('unexpected start of block inline');
              }
              stream.popCursor();
              if (node.isBlock) {
                levelUpBlock();
              }
            }
            state = State.ATTRIBUTE_LIST;
          }
          break;
        }
        
        case State.ATTRIBUTE_LIST: {
          const spacePattern = (node.states.simpleBlock || node.states.unwrapped) ? P_WHITE_SPACE : P_WHITE_SPACES_EXT;
          const spaces = stream.eatWhile(spacePattern);
          const isParsingMetadata: boolean = node.states.metadata;
          if (isParsingMetadata) {
            let endOfFrontMatter = false;
            if (stream.match(T_METADATA_MARKER)) {
              if (!stream.match(P_LINE_BREAK)) {
                throw createError('expected new line after metadata closed');
              }
              endOfFrontMatter = true;
            }
            const lineBreaks = countLineBreaks(spaces);
            if (lineBreaks > 1) {
              endOfFrontMatter = true;
            }
            if (endOfFrontMatter) {
              state = State.NORMAL;
              node.states.metadata = false;
              break;
            }
            // deal with simple block at the beginning
            if (node.type === NodeType.ROOT && !stream.match(P_ATTRIBUTE_LIST, { consume: false }) && lineBreaks === 1) {
              const child = node.createChild(NodeType.TAG, 'BLOCK', {
                labels: node.labels,
                states: {
                  unwrapped: true,
                },
                metadata: node.metadata,
              });
              node.clearLabels();
              node.clearMetadata();
              pushNode(child);
              state = State.NORMAL;
              break;
            }
          }
          if (stream.match(P_LINE_BREAK)) {
            state = State.NORMAL;
          } else if (stream.eat(T_TAG_END)) {
            state = State.TAG_END;
          } else if (stream.match(P_LABEL_START)) {
            state = State.LABEL_START;
          } else {
            if (!(spaces || isParsingMetadata) && this.stream.pos > 1) {
              if (_.isEmpty(node.attributes) && P_ATTRIBUTE_ASSIGN.test(stream.peek())) {
                states.key = node.name;
                node.name = 'BLOCK';
                node.states.simpleBlock = true;
                levelUpBlock();
                state = State.ATTRIBUTE_ASSIGN;
                break;
              } else {
                throw createError('expecting end of tag "}" or attribute list');
              }
            }
            state = State.ATTRIBUTE_NAME;
            if (stream.match(P_ATTRIBUTE_LIST, { consume: false })) {
              state = State.ATTRIBUTE_NAME;
            } else {
              state = State.NORMAL;
            }
          }
          break;
        }
        
        case State.ATTRIBUTE_NAME: {
          const key = stream.match(P_ATTRIBUTE_NAME);
          if (!key) {
            throw createError('expecting attribute name');
          }
          states.key = key;
          state = State.ATTRIBUTE_ASSIGN;
          break;
        }
        
        case State.ATTRIBUTE_ASSIGN: {
          let ch = stream.peek();
          if (ch === T_TAG_END) {
            state = State.ATTRIBUTE_FINISH;
          } else {
            ch = stream.eat(P_ATTRIBUTE_ASSIGN);
            if (!ch) {
              throw createError('expecting assignment "=" or ":"');
            }
            if (P_ASSIGN_YAML.test(ch)) {
              stream.eatSpaces();
            }
            state = State.ATTRIBUTE_VALUE;
          }
          break;
        }

        case State.ATTRIBUTE_VALUE: {
          const ch = stream.peek();
          let value;
          if (ch === T_TAG_START || ch === T_ENTITY_START) {
            states.embedded = true;
            state = State.START;
            break;
          } else if (ch === T_STRING_START) {
            value = stream.match(P_STRING_LITERAL_QUOTED);
            try {
              value = JSON.parse(value);
            } catch (e) {
              throw createError('invalid string literal');
            }
          } else if (stream.match(P_DATE_LITERAL)) {
            value = stream.lastMatch;
            value = new Date(value);
          } else if (P_NUMBER_START.test(ch)) {
            value = stream.match(P_NUMBER_LITERAL);
            value = parseFloat(value);
          } else if (stream.match(P_BOOLEAN_TRUE)) {
            value = true;
          } else if (stream.match(P_BOOLEAN_FALSE)) {
            value = false;
          } else {
            value = stream.match(P_STRING_LITERAL_UNQUOTED);
            if (_.isNull(value)) {
              throw createError('unrecognized attribute value');
            }
          }
          if (_.isNull(value)) {
            throw createError('invalid attribute value');
          }
          states.value = value;
          state = State.ATTRIBUTE_FINISH;
          break;
        }

        case State.ATTRIBUTE_FINISH: {
          let { key, value } = states;
          states.key = undefined;
          states.value = undefined;
          if (_.isUndefined(value)) {
            value = true;
          }
          if (node.states.metadata) {
            node.setMetadata(<string>key, value);
          } else {
            node.setAttribute(<string>key, value);
          }
          this.debug(`# ${node.states.metadata ? 'metadata' : 'attribute'} ${key}=${JSON.stringify(value)}`);
          this.debug();
          state = State.ATTRIBUTE_LIST;
          break;
        }

        case State.TAG_END: {
          const parseMetadata = node.isBlockTag && !states.isClosing;
          let tagNode = node;
          states.inline = tagNode.isInlineBlock;
          if (!node.isWrappingTag || states.isClosing) {
            if (node.type === NodeType.PARAGRAPH) {
              popNode();
            }
            popNode();
            if (node.type === NodeType.ENTITY) {
              // copy tag properties to entity and remove temporary tag node
              node.setAttributes(tagNode.attributes);
              node.name = tagNode.name;
              node.removeChild(tagNode);
              state = State.ENTITY_END;
              tagNode = node;
              popNode();
            }
            if (tagNode.states.embedded) {
              if (node.states.metadata) {
                node.setMetadata(tagNode.states.metaKey, tagNode);
              } else {
                node.setAttribute(tagNode.states.metaKey, tagNode);
              }
            }
          }
          if (states.isClosing && !states.inline) {
            stream.skipOver(P_LINE_BREAK);
          }
          states.isClosing = false;
          states.inline = false;
          if (parseMetadata) {
            state = State.METADATA;
          } else if (tagNode.states.embedded && (!tagNode.isWrappingTag || states.isClosing)) {
            state = State.ATTRIBUTE_LIST;
          } else {
            state = State.NORMAL;
          }
          break;
        }
        
        case State.LABEL_START: {
          const label = stream.match(P_LABEL_NAME);
          if (!label) {
            throw createError('expected label name');
          }
          node.addLabel(label);
          state = State.ATTRIBUTE_LIST;
          break;
        }

        case State.ENTITY_START: {
          const child = Node.create(NodeType.ENTITY, '', { start });
          if (states.embedded) {
            child.states.embedded = true;
            child.states.metaKey = states.key;
            states.embedded = false;
          } else {
            node.appendChild(child);
          }
          pushNode(child);
          state = State.ENTITY_BODY;
          break;
        }
        
        case State.ENTITY_BODY: {
          start = stream.pos;
          const text = stream.readTo(T_ENTITY_END, { skipMatched: true });
          if (!text) {
            throw createError('empty entity');
          } else if (text.search(P_LINE_BREAK) !== -1) {
            throw createError('unexpected line break of entity');
          }
          node.appendText(text, { start, end: start + text.length });
          const ch = stream.eat(T_TAG_START);
          if (ch) {
            state = State.TAG_START;
          } else {
            state = State.ENTITY_END;
          }
          break;
        }
        
        case State.ENTITY_END: {
          popNode();
          state = State.NORMAL;
          break;
        }
        
        case State.END: {
          if (node.type !== NodeType.ROOT) {
            popNode();
          }
          state = State.FINISH;
          break;
        }

        case State.FINISH: {
          break;
        }
      }
    }
    root.toString();
    this.parsed = true;
    this.debug('parsed result:');
    this.debug(JSON.stringify(root.toJSON(), null, 2));
    return root;
  }

}

export default Tokenizer;
