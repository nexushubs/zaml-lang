import util from 'util';
import Tokenizer from './Tokenizer';
import TextStream, { TextLine } from './TextStream';
import Node, { NODE_TYPES } from './Node';

/**
 * @module zaml-parser
 * @typicalname parser
 */

/**
 * Parse ZAML source into node
 * @param {string} text ZAML source string
 * @returns {Node}
 */
function parse(text, options) {
  const tokenizer = new Tokenizer(text, options);
  return tokenizer.process();
}

/**
 * Parse ZAML source into node
 * @deprecated
 * @param {string} text Source string
 */
const tokenize = util.deprecate(parse, 'zaml.tokenize() is deprecated, please use zaml.parse() instead')

export {
  Tokenizer,
  TextStream,
  TextLine,
  Node,
  NODE_TYPES,
  tokenize,
  parse,
};

export default {
  Tokenizer,
  TextStream,
  TextLine,
  Node,
  NODE_TYPES,
  tokenize,
  parse,
};
