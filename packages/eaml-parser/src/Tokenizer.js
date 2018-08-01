import _ from 'lodash';
import TextStream from './TextStream';
import ParseError from './ParseError';
import Node, { NODE_TYPES } from './Node';

const T_TAG_START = '{';
const T_TAG_CLOSING = '/';
const P_TAG_NAME = /[A-Z]+(?:\.[A-Z]+)*(?=[\s}])/g;
const P_TAG_ATTRIBUTE_NAME = /[a-z][a-zA-Z0-9]*(?=[=}])/g;
const T_STRING_START = '"';
const P_DATE_LITERAL = /\d{4}-[01]\d-[0-3]\d(?:T[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))?/;
const P_NUMBER_START = /[\d\.]/;
const P_NUMBER_LITERAL = /(\d+|\d*\.\d+|\d+\.\d*)(e\d+)?/g;
const P_STRING_LITERAL_QUOTED = /"([^"\\]|\\.)*"/g;
const P_STRING_LITERAL_UNQUOTED = /[^\s}]*/g;
const P_BOOLEAN_TRUE= /(TRUE|True|true)/g;
const P_BOOLEAN_FALSE= /(FALSE|False|false)/g;
const T_TAG_ATTRIBUTE_ASSIGN = '=';
const T_TAG_END = '}';
const T_ENTITY_START = '[';
const T_ENTITY_END = ']';
const P_LINE_BREAK = /\r?\n/g;
const T_SPACE = ' ';

const START_MARKERS = [T_TAG_START, T_ENTITY_START];
const END_MARKERS = [T_TAG_END, T_ENTITY_END];
const P_MARKER = new RegExp(`(${START_MARKERS.map(_.escapeRegExp).join('|')})`, 'g');
const MARKER_END = new RegExp(`(${END_MARKERS.map(_.escapeRegExp).join('|')})`, 'g');

const PROCESSING_TIMEOUT = 10000;

let stateValue = 0;

/**
 * @typedef {number} TokenizingState
 **/

/**
 * @enum {TokenizingState}
 */
const STATE = {
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

export default class Tokenizer {

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
    let state = STATE.NORMAL;
    let start = 0;
    const root = new Node(NODE_TYPES.ROOT, null, { source: text });
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

        case STATE.NORMAL: {
          start = stream.pos;
          const text = stream.readTo(P_MARKER, { toEOF: true });
          if (text) {
            node.appendText(text, {
              start,
              end: stream.pos,
            });
          }
          state = STATE.START;
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
          if (chr) {
            node.isClosing = true;
          } else {
            const child = node.createChild(NODE_TYPES.TAG, '',{ start: stream.pos - 1 })
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
          if (node.isClosing) {
            if (name !== node.name) {
              throw createError('unexpected closing tag');
            }
            const ch = stream.eat(T_TAG_END);
            if (!ch) {
              throw createError('invalid closing tag');
            }
            state = STATE.TAG_END;
          } else {
            node.name = name;
            state = STATE.TAG_ATTRIBUTE_LIST;
          }
          break;
        }
        
        case STATE.TAG_ATTRIBUTE_LIST: {
          const ch = stream.read();
          if (ch === T_TAG_END) {
            state = STATE.TAG_END;
          } else if (ch === T_SPACE) {
            stream.eatWhile(T_SPACE);
            state = STATE.TAG_ATTRIBUTE_NAME;
          } else {
            throw createError('expecting tag end "}" or attribute list')
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
          const ch = stream.peek();
          if (ch === T_TAG_END) {
            state = STATE.TAG_ATTRIBUTE_FINISH;
          } else {
            if (!stream.eat(T_TAG_ATTRIBUTE_ASSIGN)) {
              throw createError('expecting assignment "="');
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
          } else if (stream.match(P_DATE_LITERAL, { consume: false })) {
            value = stream.match(P_DATE_LITERAL);
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

        // '}'
        case STATE.TAG_END: {
          if (!node.isBlock || node.isClosing) {
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
    return node;
  }

}
