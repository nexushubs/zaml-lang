import Tokenizer from './Tokenizer';
import TextStream, { TextLine } from './TextStream';
import Node, { NODE_TYPES } from './Node';

/**
 * @module zaml-parser
 * @typicalname parser
 */

/**
 * Parse a plain text or ZAML source string, and extract common entities
 * @param {string} text Source string
 * @returns {Node}
 */
function parse(text) {
  const parser = new Parser(text);
  return parser.parse();
}

/**
 * Tokenize a ZAML source string
 * @param {string} text Source string
 * @returns {Node}
 */
function tokenize(text, options) {
  const tokenizer = new Tokenizer(text, options);
  return tokenizer.process();
}

export {
  Tokenizer,
  TextStream,
  TextLine,
  Node,
  NODE_TYPES,
  parse,
  tokenize,
};
