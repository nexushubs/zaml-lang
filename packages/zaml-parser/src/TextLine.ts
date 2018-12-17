export interface TextLineData {
  ln: number;
  start: number;
  end: number;
  text: string;
}

/**
 * Class holding text line data
 */
class TextLine {

  public lines: TextLine[];
  public text: string;
  public ln: number;
  public offset: number;

  constructor(lines: TextLine[], text: string, ln: number, offset: number) {
    this.lines = lines;
    this.text = text;
    this.ln = ln;
    this.offset = offset;
  }

  /**
   * Get the previous line
   */
  prev(): TextLine {
    return this.lines[this.ln - 2];
  }

  /**
   * Get the next line
   */
  next(): TextLine {
    return this.lines[this.ln];
  }

  /**
   * Get text length of the line
   */
  get length(): number {
    return this.text.length;
  }

  /**
   * Start position of the line, alias of `offset`
   */
  get start(): number {
    return this.offset;
  }

  /**
   * End position of the line
   */
  get end(): number {
    return this.offset + this.text.length;
  }

  /**
   * Convert to JSON serializable object
   */
  toJSON(): TextLineData {
    return {
      ln: this.ln,
      start: this.start,
      end: this.end,
      text: this.text,
    };
  }
}

export default TextLine
