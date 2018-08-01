import Parser from './Parser';
import Tokenizer from './Tokenizer';
import TextStream from './TextStream';

export { Parser, Tokenizer, TextStream };

export function parse(text) {
  const parser = new Parser(text);
  return parser.parse();
}

export function tokenize(text) {
  const tokenizer = new Tokenizer(text);
  return tokenizer.process();
}
