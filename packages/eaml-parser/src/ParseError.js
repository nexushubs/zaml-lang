export default class ParseError extends Error {
  constructor(message, text, pos) {
    super(message);
    this.message = message;
    this.text = text;
    this.pos = pos;
  }
}
