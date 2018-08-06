import Parser from './Parser';
import Tokenizer from './Tokenizer';
import TextStream, { TextLine } from './TextStream';
import Node from './Node';

export {
  Parser,
  Tokenizer,
  TextStream,
  TextLine,
  Node,
};

/**
 * Parse a plain text or EAML source string, and extract common entities
 * @param {string} text Source string
 * @returns {Node}
 */
export function parse(text) {
  const parser = new Parser(text);
  return parser.parse();
}

/**
 * Tokenize a EAML source string
 * @param {string} text Source string
 * @returns {Node}
 */
export function tokenize(text) {
  const tokenizer = new Tokenizer(text);
  return tokenizer.process();
}
