import _ from 'lodash';
import TextStream from './TextStream';
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

let stateValue = 0;

/**
 * @typedef {number} TokenizingState
 **/

/**
 * @enum {TokenizingState}
 */
const STATE = {
  METADATA: stateValue++,
  NORMAL: stateValue++,
  SINGLE_COMMENT: stateValue++,
  MULTIPLE_COMMENT: stateValue++,
  START: stateValue++,
  TAG_START: stateValue++,
  TAG_NAME: stateValue++,
  ATTRIBUTE_LIST: stateValue++,
  ATTRIBUTE_NAME: stateValue++,
  ATTRIBUTE_ASSIGN: stateValue++,
  ATTRIBUTE_VALUE: stateValue++,
  ATTRIBUTE_FINISH: stateValue++,
  TAG_END: stateValue++,
  LABEL_START: stateValue++,
  ENTITY_START: stateValue++,
  ENTITY_BODY: stateValue++,
  ENTITY_END: stateValue++,
  END: stateValue++,
  FINISH: stateValue++,
};

const stateNames = _.keys(STATE);

const getStateName = (state) => {
  return stateNames[state];
}

const countLineBreaks = (text) => {
  const result = text.match(P_LINE_BREAK);
  return result ? result.length : 0;
}

/**
 * Tokenizer class
 * @class
 */
class Tokenizer {

  static from(...params) {
    return new Tokenizer(...params);
  }

  /**
   * @constructor
   * @param {TextStream} stream 
   * @param {object} [options] Constructor options
   * @param {boolean} [options.verbose=false] Debug verbose process of tokenizing
   */
  constructor(text, options) {
    this.text = text;
    this.stream = new TextStream(text);
    const defaultOptions = {
      verbose: process.env.DEBUG === 'verbose',
    };
    this.options = _.defaults(options, defaultOptions);
    this.parsed = false;
    this.tokens = [];
  }

  debug(...params) {
    if (this.options.verbose) {
      console.log(...params);
    }
  }

  /**
   * Process a text and parse to AST
   * @returns {Node} Root node of parsed AST
   */
  process() {
    const { text, stream } = this;
    const timeStart = Date.now();
    let state = STATE.METADATA;
    let start = 0;
    const states = {
      unwrapped: false,
      inline: false,
      embedded: false,
      isClosing: false,
      key: null,
      value: null,
    };
    const root = Node.create(NodeType.ROOT, null, { source: text });
    const nodeStack = [];
    let node = root;

    const pushNode = n => {
      this.debug(`==> pushNode: ${n.type}:${n.name}`);
      this.debug();
      if (node.start === -1) {
        node.start = stream.pos;
      }
      nodeStack.push(node);
      node = n;
    }

    const popNode = error => {
      this.debug(`<== popNode: ${node.type}:${node.name}`);
      node.end = stream.pos;
      if (node.start === node.end || (node.type === NodeType.PARAGRAPH && !node.hasChild())) {
        node.parentNode.removeChild(node);
      }
      node = nodeStack.pop();
      this.debug();
      if (!node) {
        throw createError(error || 'unexpected closing node');
      }
    };

    // replace wrapping paragraph with current block tag
    const levelUpBlock = () => {
      if (node.parentNode.type === NodeType.PARAGRAPH) {
        const blockNode = node;
        popNode();
        node.removeChild(blockNode);
        popNode();
        node.appendChild(blockNode);
        pushNode(blockNode);
      }
    }

    const createError = message => {
      this.debug(`error: '${message}'`);
      this.debug('current node:');
      this.debug(node.toJSON());
      this.debug('current parsing state:');
      this.debug(JSON.stringify(root, null, 2));
      return new ParseError(message, text, stream.pos);
    };
    
    let lastState = null;
    let lastPos = -1;

    while (state !== STATE.FINISH) {
      // parse failure watcher
      if (Date.now() - timeStart >= PROCESSING_TIMEOUT) {
        this.debug('parsing timeout!');
        state = STATE.FINISH;
      }
      if (state === lastState && lastPos === stream.pos) {
        throw new Error('Parser fall into infinite loop!');
      }
      lastState = state;
      lastPos = stream.pos;
      this.debug('#', getStateName(state), 'pos:', stream.pos);
      if (this.options.verbose) {
        stream.debugState();
      }
      
      switch (state) {

        case STATE.METADATA: {
          stream.eatWhile(P_WHITE_SPACES_EXT);
          if (stream.match(T_METADATA_MARKER) || stream.match(P_ATTRIBUTE_LIST, { consume: false })) {
            node.states.metadata = true;
            state = STATE.ATTRIBUTE_LIST;
          } else {
            state = STATE.NORMAL;
          }
          break;
        }

        case STATE.NORMAL: {
          let lineBreaks = 0;
          if (stream.sol(true) || stream.eol(true)) {
            const spaces = stream.eatWhile(P_WHITE_SPACES_EXT);
            lineBreaks = countLineBreaks(spaces);
          }
          start = stream.pos;
          if (node.type !== NodeType.PARAGRAPH && !node.isInlineBlock && stream.sol(true)) {
            const child = node.createChild(NodeType.PARAGRAPH, null, { start });
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
          if (stream.match(P_PARAGRAPH_BREAK) || (!text && lineBreaks === 2) || countLineBreaks(originalText) > 0) {
            popNode();
            if (node.states.unwrapped) {
              popNode();
            }
          } else {
            state = STATE.START;
          }
          break;
        }
        
        case STATE.START: {
          start = stream.pos;
          const ch = stream.eat(P_MARKER);
          P_LABEL_START.lastIndex = 0;
          if (ch === T_SINGLE_LINE_COMMENT) {
            const rest = stream.eatWhile(T_SINGLE_LINE_COMMENT);
            if (rest.length === 0) {
              state = STATE.SINGLE_COMMENT;
            } else {
              state = STATE.MULTIPLE_COMMENT;
            }
          } else if (ch === T_TAG_START) {
            state = STATE.TAG_START;
          } else if (P_LABEL_START.test(ch)) {
            states.unwrapped = true;
            state = STATE.TAG_START;
          } else if (ch === T_TAG_END) {
            states.isClosing = true;
            state = STATE.TAG_END;
          } else if (ch === T_ENTITY_START) {
            state = STATE.ENTITY_START;
          } else if (stream.eof()) {
            state = STATE.END;
          } else {
            throw createError('empty start')
          }
          break;
        }

        case STATE.SINGLE_COMMENT:
        case STATE.MULTIPLE_COMMENT: {
          start = stream.pos;
          let content;
          if (state === STATE.SINGLE_COMMENT) {
            content = stream.readTo(P_LINE_BREAK);
          } else {
            content = stream.readTo(P_MULTIPLE_LINE_COMMENT, { skipMatched: true });
          }
          if (content) {
            if (state === STATE.MULTIPLE_COMMENT) {
              content = content.replace(P_SPACE_WRAPPED_LINE_BREAK, '\n');
            }
            content = _.trim(content);
          }
          if (content) {
            node.createChild(NodeType.COMMENT, null, {
              start,
              end: stream.pos,
              content,
            });
          }
          state = STATE.NORMAL;
          break;
        }
        
        case STATE.TAG_START: {
          if (stream.eat(T_TAG_CLOSING)) {
            states.isClosing = true;
            state = STATE.TAG_NAME;
          } else if (stream.match(P_LINE_BREAK)) {
            state = STATE.NORMAL;
          } else if (node.type !== NodeType.ENTITY && (states.unwrapped || stream.eat(P_LABEL_START))) {
            state = STATE.LABEL_START;
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
            state = STATE.TAG_NAME;
          }
          if (state === STATE.NORMAL || state === STATE.LABEL_START) {
            if (node.type = NodeType.PARAGRAPH) {
              popNode();
            }
            const child = node.createChild(NodeType.TAG, 'BLOCK', {
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
        
        case STATE.TAG_NAME: {
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
            state = STATE.TAG_END;
          } else {
            node.name = name;
            if (node.isWrappingTag) {
              stream.pushCursor(node.start);
              if (node.name === 'BLOCK' && !stream.sol(true)) {
                throw createError('unexpected start of block inline');
              }
              stream.popCursor();
              if (node.isBlock) {
                levelUpBlock();
              }
            }
            state = STATE.ATTRIBUTE_LIST;
          }
          break;
        }
        
        case STATE.ATTRIBUTE_LIST: {
          const spacePattern = (node.states.simpleBlock || node.states.unwrapped) ? P_WHITE_SPACE : P_WHITE_SPACES_EXT;
          const spaces = stream.eatWhile(spacePattern);
          const isParsingMetadata = node.states.metadata;
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
              state = STATE.NORMAL;
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
              state = STATE.NORMAL;
              break;
            }
          }
          if (stream.match(P_LINE_BREAK)) {
            state = STATE.NORMAL;
          } else if (stream.eat(T_TAG_END)) {
            state = STATE.TAG_END;
          } else if (stream.match(P_LABEL_START)) {
            state = STATE.LABEL_START;
          } else {
            if (!(spaces || isParsingMetadata) && this.stream.pos > 1) {
              if (_.isEmpty(node.attributes) && P_ATTRIBUTE_ASSIGN.test(stream.peek())) {
                states.key = node.name;
                node.name = 'BLOCK';
                node.states.simpleBlock = true;
                levelUpBlock();
                state = STATE.ATTRIBUTE_ASSIGN;
                break;
              } else {
                throw createError('expecting end of tag "}" or attribute list');
              }
            }
            state = STATE.ATTRIBUTE_NAME;
          }
          break;
        }
        
        case STATE.ATTRIBUTE_NAME: {
          const key = stream.match(P_ATTRIBUTE_NAME);
          if (!key) {
            throw createError('expecting attribute name');
          }
          states.key = key;
          state = STATE.ATTRIBUTE_ASSIGN;
          break;
        }
        
        case STATE.ATTRIBUTE_ASSIGN: {
          let ch = stream.peek();
          if (ch === T_TAG_END) {
            state = STATE.ATTRIBUTE_FINISH;
          } else {
            ch = stream.eat(P_ATTRIBUTE_ASSIGN);
            if (!ch) {
              throw createError('expecting assignment "=" or ":"');
            }
            if (P_ASSIGN_YAML.test(ch)) {
              stream.eatSpaces();
            }
            state = STATE.ATTRIBUTE_VALUE;
          }
          break;
        }

        case STATE.ATTRIBUTE_VALUE: {
          const ch = stream.peek();
          let value;
          if (ch === T_TAG_START || ch === T_ENTITY_START) {
            states.embedded = true;
            state = STATE.START;
            break;
          } else if (ch === T_STRING_START) {
            value = stream.match(P_STRING_LITERAL_QUOTED);
            value = JSON.parse(value);
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
          state = STATE.ATTRIBUTE_FINISH;
          break;
        }

        case STATE.ATTRIBUTE_FINISH: {
          let { key, value } = states;
          states.key = null;
          states.value = null;
          if (_.isUndefined(value)) {
            value = true;
          }
          if (node.states.metadata) {
            node.setMetadata(key, value);
          } else {
            node.setAttribute(key, value);
          }
          this.debug(`# ${node.states.metadata ? 'metadata' : 'attribute'} ${key}=${JSON.stringify(value)}`);
          this.debug();
          state = STATE.ATTRIBUTE_LIST;
          break;
        }

        case STATE.TAG_END: {
          const parseMetadata = node.isBlockTag && !states.isClosing;
          let tagNode = node;
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
              state = STATE.ENTITY_END;
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
          if (states.isClosing) {
            if (!states.inline) {
              stream.skipOver(P_LINE_BREAK);
            }
            states.isClosing = false;
          }
          states.inline = false;
          if (parseMetadata) {
            state = STATE.METADATA;
          } else if (tagNode.states.embedded && (!tagNode.isWrappingTag || states.isClosing)) {
            state = STATE.ATTRIBUTE_LIST;
          } else {
            state = STATE.NORMAL;
          }
          break;
        }
        
        case STATE.LABEL_START: {
          const label = stream.match(P_LABEL_NAME);
          if (!label) {
            throw createError('expected label name');
          }
          node.addLabel(label);
          state = STATE.ATTRIBUTE_LIST;
          break;
        }

        case STATE.ENTITY_START: {
          const child = Node.create(NodeType.ENTITY, '', { start });
          if (states.embedded) {
            child.states.embedded = true;
            child.states.metaKey = states.key;
            states.embedded = false;
          } else {
            node.appendChild(child);
          }
          pushNode(child);
          state = STATE.ENTITY_BODY;
          break;
        }
        
        case STATE.ENTITY_BODY: {
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
            state = STATE.TAG_START;
          } else {
            state = STATE.ENTITY_END;
          }
          break;
        }
        
        case STATE.ENTITY_END: {
          popNode();
          state = STATE.NORMAL;
          break;
        }
        
        case STATE.END: {
          if (node.type !== NodeType.ROOT) {
            popNode();
          }
          state = STATE.FINISH;
          break;
        }

        case STATE.FINISH: {
          break;
        }
      }
    }
    root.toString();
    this.parsed = true;
    this.debug('parsed result:');
    this.debug(JSON.stringify(root.toJSON({ position: true }), null, 2));
    return root;
  }

}

export default Tokenizer;
