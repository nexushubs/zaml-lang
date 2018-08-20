import Tokenizer from './Tokenizer';
import TextStream, { TextLine } from './TextStream';
import Node, { NODE_TYPES } from './Node';

/**
 * @module zaml-parser
 * @typicalname parser
 */

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
  tokenize,
};
