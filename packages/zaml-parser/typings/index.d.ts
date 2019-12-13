import Tokenizer, { ParsingOptions } from './Tokenizer';
import TextStream, { TextLine } from './TextStream';
import Node, { NodeType } from './Node';
import ParseError from './ParseError';
/**
 * @module @zaml/parser
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
export { ParseError, Tokenizer, TextStream, TextLine, Node, NodeType, tokenize, parse, };
declare const _default: {
    ParseError: typeof ParseError;
    Tokenizer: typeof Tokenizer;
    TextStream: typeof TextStream;
    TextLine: typeof TextLine;
    Node: typeof Node;
    NodeType: typeof NodeType;
    tokenize: typeof tokenize;
    parse: typeof parse;
};
export default _default;
