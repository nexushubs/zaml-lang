import _ from 'lodash';
import TextStream from './TextStream';
import ParseError from './ParseError';
import Node, { NODE_TYPES } from './Node';
import {
  T_SPACE,
  T_TAB,
  T_FRONT_MATTER,
  T_ENTITY_START,
  T_ENTITY_END,
  T_TAG_START,
  T_TAG_CLOSING,
  T_TAG_END,
  T_ASSIGN_XML,
  T_ASSIGN_YAML,
  T_FRONT_MATTER_FAVORED_ASSIGN,
  T_TAG_ATTRIBUTE_FAVORED_ASSIGN,
  P_LINE_BREAK,
  P_PARAGRAPH_BREAK,
  P_WHITE_SPACE,
  P_WHITE_SPACES_EXT,
  P_TAG_ATTRIBUTE_ASSIGN,
  P_TAG_NAME,
  P_TAG_ATTRIBUTE_NAME,
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
} from './constants';

let stateValue = 0;

/**
 * @typedef {number} TokenizingState
 **/

/**
 * @enum {TokenizingState}
 */
const STATE = {
  FRONT_MATTER: stateValue++,
  NORMAL: stateValue++,
  START: stateValue++,
  TAG_START: stateValue++,
  TAG_NAME: stateValue++,
  TAG_ATTRIBUTE_LIST: stateValue++,
  TAG_ATTRIBUTE_NAME: stateValue++,
  TAG_ATTRIBUTE_VALUE: stateValue++,
  TAG_ATTRIBUTE_FINISH: stateValue++,
  TAG_END: stateValue++,
  ENTITY_START: stateValue++,
  ENTITY_BODY: stateValue++,
  ENTITY_END: stateValue++,
  FINISH: stateValue++,
};

const stateNames = _.keys(STATE);

const getStateName = (state) => {
  return stateNames[state];
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
    let state = STATE.FRONT_MATTER;
    let start = 0;
    const states = {
      isClosing: false,
      isFrontMatter: false,
    };
    const root = Node.create(NODE_TYPES.ROOT, null, { source: text });
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
      node.end = stream.pos;
      node = nodeStack.pop();
      this.debug(`<== popNode: ${node.type}:${node.name}`);
      this.debug();
      if (!node) {
        throw new PassError(error || 'unexpected closing node');
      }
    };

    const createError = message => {
      this.debug(JSON.stringify(root, null, 2));
      return new ParseError(message, text, stream.pos);
    };
    
    while (state !== STATE.FINISH) {
      if (Date.now() - timeStart >= PROCESSING_TIMEOUT) {
        this.debug('parsing timeout!');
        state = STATE.FINISH;
      }
      this.debug('#', getStateName(state), 'pos:', stream.pos);
      if (this.options.verbose) {
        stream.debugState();
      }
      switch (state) {

        case STATE.FRONT_MATTER: {
          if (stream.match(T_FRONT_MATTER)) {
            states.isFrontMatter = true;
            state = STATE.TAG_ATTRIBUTE_LIST;
          } else {
            state = STATE.NORMAL;
          }
          break;
        }

        case STATE.NORMAL: {
          if (stream.sol()) {
            stream.eatSpace();
          }
          start = stream.pos;
          if (node.type !== NODE_TYPES.PARAGRAPH) {
            const child = node.createChild(NODE_TYPES.PARAGRAPH, null, { start })
            pushNode(child);
          }
          let text = stream.readTo(P_MARKER, { toEOF: true });
          if (text) {
            if (node.children.length === 0) {
              text = _.trimStart(text);
            }
            node.appendText(text, { start, end: stream.pos });
          }
          if (stream.match(P_PARAGRAPH_BREAK)) {
            popNode();
          } else {
            state = STATE.START;
          }
          break;
        }
        
        case STATE.START: {
          start = stream.pos;
          const ch = stream.eat(P_MARKER);
          if (ch === T_TAG_START) {
            state = STATE.TAG_START;
          } else if (ch === T_ENTITY_START) {
            state = STATE.ENTITY_START;
          } else if (stream.eof()) {
            state = STATE.END;
          }
          break;
        }
        
        case STATE.TAG_START: {
          const chr = stream.eat(T_TAG_CLOSING);
          states.isClosing = false;
          if (chr) {
            states.isClosing = true;
          } else {
            const child = node.createChild(NODE_TYPES.TAG, '', { start });
            pushNode(child);
          }
          state = STATE.TAG_NAME;
          break;
        }
        
        case STATE.TAG_NAME: {
          const name = stream.match(P_TAG_NAME);
          if (!name) {
            throw createError('expected tag name');
          }
          if (states.isClosing) {
            if (node.type === NODE_TYPES.PARAGRAPH) {
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
            if (!stream.eol()) {
              throw createError('closing block tag must take the whole line');
            }
            stream.readLine();
            if (stream.sol())
            state = STATE.TAG_END;
          } else {
            node.name = name;
            if (node.isBlock) {
              stream.pushCursor(node.start);
              if (!stream.sol(true)) {
                throw createError('unexpected start of block inline');
              }
              stream.popCursor();
              // replace wrapping paragraph with current block tag
              if (node.parent.type === NODE_TYPES.PARAGRAPH) {
                const blockNode = node;
                popNode();
                node.removeChild(blockNode);
                popNode();
                node.appendChild(blockNode);
                pushNode(blockNode);
              }
            }
            state = STATE.TAG_ATTRIBUTE_LIST;
          }
          break;
        }
        
        case STATE.TAG_ATTRIBUTE_LIST: {
          const hasSpaces = stream.eatWhile(P_WHITE_SPACES_EXT);
          if (states.isFrontMatter && stream.match(T_FRONT_MATTER)) {
            if (!stream.match(P_LINE_BREAK)) {
              throw createError('expected new line after front matter closed');
            }
            state = STATE.NORMAL;
          } else if (stream.eat(T_TAG_END)) {
            state = STATE.TAG_END;
          } else {
            if (!hasSpaces) {
              throw createError('expecting end of tag "}" or attribute list')
            }
            state = STATE.TAG_ATTRIBUTE_NAME;
          }
          break;
        }
        
        case STATE.TAG_ATTRIBUTE_NAME: {
          stream.pushMarker({ type: 'attribute' });
          const key = stream.match(P_TAG_ATTRIBUTE_NAME);
          if (!key) {
            throw createError('expecting attribute name');
          }
          stream.setMarkerData({ key });
          let ch = stream.peek();
          if (ch === T_TAG_END) {
            state = STATE.TAG_ATTRIBUTE_FINISH;
          } else {
            ch = stream.eat(P_TAG_ATTRIBUTE_ASSIGN);
            if (!ch) {
              throw createError('expecting assignment "=" or ":"');
            }
            if (ch = T_ASSIGN_YAML) {
              stream.eatSpace();
            }
            state = STATE.TAG_ATTRIBUTE_VALUE;
          }
          break;
        }

        case STATE.TAG_ATTRIBUTE_VALUE: {
          const ch = stream.peek();
          let value;
          if (ch === T_STRING_START) {
            value = stream.match(P_STRING_LITERAL_QUOTED);
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
          stream.setMarkerData({ value });
          state = STATE.TAG_ATTRIBUTE_FINISH;
          break;
        }

        case STATE.TAG_ATTRIBUTE_FINISH: {
          const attribute = stream.popMarker();
          let { key, value } = attribute.data;
          if (_.isUndefined(value)) {
            value = true;
          }
          node.setAttribute(key, value);
          this.debug(`# attribute ${key}=${JSON.stringify(value)}`);
          this.debug();
          state = STATE.TAG_ATTRIBUTE_LIST;
          break;
        }

        case STATE.TAG_END: {
          if (!node.isBlock || states.isClosing) {
            const tagNode = node;
            popNode();
            if (node.type === NODE_TYPES.ENTITY) {
              // copy tag properties to entity and remove temporary tag node
              node.setAttributes(tagNode.attributes);
              node.name = tagNode.name;
              node.removeChild(tagNode);
              state = STATE.ENTITY_END;
              popNode();
            }
          }
          if (states.isClosing) {
            stream.skipOver(P_LINE_BREAK);
          }
          state = STATE.NORMAL;
          break;
        }
        
        case STATE.ENTITY_START: {
          const child = node.createChild(NODE_TYPES.ENTITY, '', { start });
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
          node.end = stream.pos;
          state = STATE.FINISH;
          break;
        }

        case STATE.FINISH: {
          break;
        }
      }
    }
    
    this.parsed = true;
    this.debug(JSON.stringify(root, null, 2));
    return root;
  }

}

export default Tokenizer;
