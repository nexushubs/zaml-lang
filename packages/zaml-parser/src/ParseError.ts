export default class ParseError extends Error {

  public message: string;
  public text: string;
  public pos: number;
  
  constructor(message: string, text: string, pos: number) {
    super(message);
    this.message = message;
    this.text = text;
    this.pos = pos;
  }
}
