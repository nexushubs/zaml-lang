import Tokenizer from './Tokenizer';
import TextStream, { TextLine } from './TextStream';
import Node, { NodeType } from './Node';
import ParseError from './ParseError';
import { tokenize, parse } from './util';
/**
 * @module @zaml/parser
 */
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
