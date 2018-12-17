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
declare function parse(text: string, options?: ParsingOptions): Node;
/**
 * Parse ZAML source into node
 * @deprecated Please use zaml.parse() instead
 * @param {string} text Source string
 */
declare function tokenize(text: string, options: ParsingOptions): Node;
export { Tokenizer, TextStream, TextLine, Node, NodeType, tokenize, parse, };
declare const _default: {
    Tokenizer: typeof Tokenizer;
    TextStream: typeof TextStream;
    TextLine: typeof TextLine;
    Node: typeof Node;
    NodeType: typeof NodeType;
    tokenize: typeof tokenize;
    parse: typeof parse;
};
export default _default;
