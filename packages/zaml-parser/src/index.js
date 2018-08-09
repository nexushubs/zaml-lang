import Parser from './Parser';
import Tokenizer from './Tokenizer';
import TextStream, { TextLine } from './TextStream';
import Node, { NODE_TYPES } from './Node';

/**
 * @module zaml-parser
 * @typicalname parser
 */

export {
  Parser,
  Tokenizer,
  TextStream,
  TextLine,
  Node,
  NODE_TYPES,
};

/**
 * Parse a plain text or ZAML source string, and extract common entities
 * @param {string} text Source string
 * @returns {Node}
 */
export function parse(text) {
  const parser = new Parser(text);
  return parser.parse();
}

/**
 * Tokenize a ZAML source string
 * @param {string} text Source string
 * @returns {Node}
 */
export function tokenize(text) {
  const tokenizer = new Tokenizer(text);
  return tokenizer.process();
}
