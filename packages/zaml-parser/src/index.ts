import Tokenizer, { ParsingOptions } from './Tokenizer';
import TextStream, { TextLine } from './TextStream';
import Node, { NodeType } from './Node';

/**
 * @module @zaml/parser
 * @typicalname parser
 */

/**
 * Parse ZAML source into node
 * @param text ZAML source string
 */
function parse(text: string, options?: ParsingOptions) {
  const tokenizer = new Tokenizer(text, options);
  return tokenizer.process();
}

/**
 * Parse ZAML source into node
 * @deprecated
 * @param {string} text Source string
 */
function tokenize(text: string, options: ParsingOptions) {
  console.warn('zaml.tokenize() is deprecated, please use zaml.parse() instead');
  return parse(text, options);
}

export {
  Tokenizer,
  TextStream,
  TextLine,
  Node,
  NodeType,
  tokenize,
  parse,
};

export default {
  Tokenizer,
  TextStream,
  TextLine,
  Node,
  NodeType,
  tokenize,
  parse,
};
