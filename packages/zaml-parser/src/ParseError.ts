import { SourcePosition } from "./TextStream";

export default class ParseError extends Error {

  public message: string;
  public text: string;
  public from: SourcePosition;
  public to: SourcePosition;
  
  constructor(message: string, text: string, from: SourcePosition, to: SourcePosition) {
    super(message);
    this.message = message;
    this.text = text;
    this.from = from;
    this.to = to;
  }
}
