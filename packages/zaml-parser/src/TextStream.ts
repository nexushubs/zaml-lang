import * as _ from 'lodash';
import chalk from 'chalk';
import TextLine from './TextLine';
import {
  P_FULL_WIDTH_CHARACTER
} from './constants';

// improved from https://github.com/codemirror/CodeMirror/blob/master/src/util/StringStream.js
const NOT_FOUND = -1;
const LINE_BREAKS = /\r?\n/g;

export type TextTester = (text: string) => boolean;
export type TextPattern = string | RegExp | TextTester;

export interface SearchOptions {
  /** Case insensitive for string pattern */
  caseInsensitive?: boolean;
}

export interface ReadOptions {
  /** If no matched text is found, read to the end */
  toEOL?: boolean;
  /** If read to matched text or to the end of line */
  toEOF?: boolean;
  /** Read to end of the matched text */
  consume?: boolean;
  /** Read to the matched text, move cursor to the end */
  skipMatched?: boolean;
}

export interface MatchOptions {
  /** Read to end of the matched text */
  consume?: boolean;
  /** Read to the matched text, move cursor to the end */
  skipMatched?: boolean;
  /** Case insensitive for string pattern */
  caseInsensitive?: boolean;
}

export type MarkerData = {[key: string]: any};

export interface MarkerInfo {
  text: string;
  position: {
    start?: number;
    end?: number;
  };
  data: MarkerData;
}

export interface Marker {
  start?: number;
  end?: number;
  data?: any;
}

/**
 * Stream like text string
 * @typicalname stream
 */
class TextStream {

  /** Current cursor position */
  public pos: number;

  /** Original text */
  public text: string;

  /** Tab size */
  public tabSize: number;

  /** Text lines */
  public lines: TextLine[];

  /** Start position of each line */
  public lineOffsetIndexes: number[] = [];

  /** Markers */
  public markers: Marker[];

  /** Cursor stack positions */
  public cursorStack: number[];

  /** Last matched string of methods like eat() match() */
  public lastMatch: string = '';

  constructor(text: string, tabSize: number = 2) {
    this.pos = 0;

    /**
     * @readonly
     * @type {string}
     * @description Original text
     */
    this.text = text;

    /**
     * @description Tab size
     */
    this.tabSize = tabSize;

    /**
     * @description Lines, separated by line breaks
     */
    this.lines = [];

    /**
     * @description Stream markers, used by `pushMarker()`, `popMarker()`, `setMarkerData()`
     */
    this.markers = [];

    /**
     * @description Cursor stack, used by `pushCursor()` and `popCursor`
     */
    this.cursorStack = [];

    this.init();
  }

  /**
   * Prepare line indexes
   */
  init() {
    const lines: TextLine[] = [];
    let matched;
    let offset = 0;
    let ln = 1;
    LINE_BREAKS.lastIndex = 0;
    do {
      matched = LINE_BREAKS.exec(this.text);
      if (matched) {
        const length = matched.index - offset;
        const text = this.text.substr(offset, length);
        lines.push(new TextLine(lines, text, ln, offset));
        offset += length + matched[0].length;
      } else {
        const length = this.text.length - offset;
        // process last line without line break symbol
        if (length > 0) {
          const text = this.text.substr(offset);
          lines.push(new TextLine(lines, text, ln, offset));
        }
      }
      ln++;
    } while (matched);
    this.lines = lines;
    this.lineOffsetIndexes = _.map(lines, 'offset');
  }

  /**
   * Get line and column position of the cursor
   * @param pos Cursor position of the text
   */
  getPosition(pos?: number) {
    if (_.isUndefined(pos)) {
      pos = this.pos;
    }
    const lineIndex = _.sortedLastIndex(this.lineOffsetIndexes, pos) - 1;
    const line = this.lines[lineIndex];
    if (!line) {
      throw new Error('cursor position is invalid');
    }
    const { ln, offset } = line;
    const col = pos - offset + 1;
    return {
      ln,
      col,
      pos,
      line,
    };
  }

  /**
   * Check if cursor is at the start of a line
   * @param [trimSpaces] Whether to trim starting spaces
   */
  sol(trimSpaces = false) {
    const { col, line } = this.getPosition();
    if (col - 1 === 0) {
      return true;
    }
    if (!trimSpaces) {
      return false;
    }
    const { length } = _.trimStart(line.text);
    return col - 1 <= line.length - length;
  }

  /**
   * Check if cursor is at the end of a line
   * @param [trimSpaces] Whether to trim ending spaces
   */
  eol(trimSpaces = false): boolean {
    const { col, line } = this.getPosition();
    if (col - 1 === line.length) {
      return true;
    }
    if (!trimSpaces) {
      return false;
    }
    const { length } = _.trimEnd(line.text);
    return col - 1 >= length;
  }

  /**
   * Check if cursor is at the end of whole text
   * @param {number} [pos] 
   */
  eof(pos?: number): boolean {
    if (_.isUndefined(pos)) {
      pos = this.pos;
    }
    return pos >= this.text.length;
  }

  /**
   * Get one next char, but keep the cursor position (if available)
   * @returns The next char
   */
  peek(): string {
    return this.text.charAt(this.pos);
  }

  /**
   * Get one next char, and move cursor forward (if available)
   * @returns The next char
   */
  next(): string {
    if (this.pos < this.text.length) {
      return this.text.charAt(this.pos++);
    }
    return '';
  }

  /**
   * Consumes one char if the next char fitting the pattern
   * @param pattern 
   * @returns The char been eaten
   */
  eat(pattern: TextPattern): string {
    const ch = this.text.charAt(this.pos) || '';
    let ok;
    if (_.isUndefined(ch)) {
      ok = false;
    } else if (_.isString(pattern)) {
      ok = ch === pattern;
    } else if (_.isRegExp(pattern)) {
      pattern.lastIndex = 0;
      ok = pattern.test(ch);
    } else if (_.isFunction(pattern)) {
      ok = pattern(ch);
    }
    if (ok) {
      this.lastMatch = ch;
      ++this.pos;
      return ch;
    }
    return '';
  }

  /**
   * Consumes chars while fitting the pattern
   * @param match 
   * @returns Eaten characters
   */
  eatWhile(pattern: TextPattern): string {
    const start = this.pos;
    let chr;
    let string = '';
    do {
      chr = this.eat(pattern);
      if (chr) {
        string += chr;
      }
    } while (chr && !this.eof());
    return string;
  }

  /**
   * Consumes chars until the first char not fitting the pattern
   * @param pattern char or pattern
   * @returns eaten characters
   */
  eatUntil(pattern: TextPattern): string {
    const start = this.pos;
    let ch;
    let string = '';
    do {
      ch = this.eat(pattern);
      if (!ch) {
        string += this.peek();
        this.pos++;
      } else {
        this.pos--;
      }
    } while (!ch && !this.eof());
    return string;
  }

  /**
   * Consumes spaces
   * @returns {boolean} If any space has been consumed
   */
  eatSpaces() {
    let start = this.pos
    while (/[\s\u00a0]/.test(this.text.charAt(this.pos))) {
      this.pos++;
    }
    return this.pos > start;
  }

  /**
   * Find position of matched text to the pattern
   * @param pattern 
   * @param options
   */
  search(pattern: TextPattern, options: SearchOptions = {}) {
    const { caseInsensitive } = options;
    let index = NOT_FOUND;
    let length = 0;
    let matched = '';
    if (typeof pattern === 'string') {
      if (caseInsensitive) {
        pattern = new RegExp(_.escapeRegExp(pattern), 'i');
      } else {
        index = this.text.indexOf(pattern, this.pos);
        if (index !== NOT_FOUND) {
          matched = pattern;
        }
      }
    }
    if (pattern instanceof RegExp) {
      pattern.lastIndex = this.pos;
      const result = pattern.exec(this.text);
      if (result) {
        index = result.index;
        matched = result[0];
      } else {
        index = NOT_FOUND;
      }
    }
    ({ length } = matched);
    return {
      index,
      length,
      matched,
    };
  }

  /**
   * Read n chars after current cursor
   * @param [n] Number of chars to read
   */
  read(n = 1): string {
    const left = this.text.length - this.pos;
    if (left <= 0) {
      return '';
    } else if (left < n) {
      n = left;
    }
    const result = this.text.substr(this.pos, n);
    this.pos += n;
    return result;
  }

  /**
   * Read to text or pattern
   * @param pattern 
   * @param [options]
   * @returns Sub-text after current cursor and before (or contains) matched text
   */
  readTo(pattern: TextPattern, options: ReadOptions = {}): string {
    const {
      toEOL = false,
      toEOF = false,
      consume = false,
      skipMatched = false,
    } = options;
    const start = this.pos;
    let { index, length } = this.search(pattern);
    let match = '';
    let end = -1;
    if (toEOL) {
      const { line } = this.getPosition();
      end = line.offset + line.length;
    } else if (toEOF) {
      end = this.text.length;
    }
    if (index !== NOT_FOUND) {
      if (toEOL || toEOF) {
        if (index < end) {
          end = index;
        } else {
          length = 0;
        }
      } else {
        end = index;
      }
    }
    if (end !== -1) {
      this.pos = end;
      if (consume) {
        end += length;
        this.pos = end;
      } else if (skipMatched) {
        this.pos += length;
      }
      match = this.text.substring(start, end);
    }
    this.lastMatch = match;
    return match;
  }

  /**
   * Read to pattern (contains the matched text)
   * @param {} pattern Text to find or pattern
   * @param {object} options Match options
   * @returns {string} Sub-text after current cursor and until the end of matched text
   */
  readOver(pattern: TextPattern, options: ReadOptions = {}) {
    return this.readTo(pattern, {...options, consume: true });
  }

  /**
   * Read one line
   * @returns {string} Text containing one line (not including line break)
   */
  readLine(): string {
    const { line } = this.getPosition();
    const nextLine = line.next();
    if (this.eof()) {
      return '';
    }
    if (nextLine) {
      this.pos = nextLine.offset;
      return line.text;
    } else {
      const length = line.offset + line.length - this.pos;
      return this.read(length);
    }
  }

  /**
   * Move cursor to end of text
   */
  skipToEnd() {
    this.pos = this.text.length;
  }

  /**
   * Skip to the beginning of matched text
   * @param pattern
   * @param options
   */
  skipTo(pattern: TextPattern, options?: ReadOptions): boolean {
    const start = this.pos;
    this.readTo(pattern, options);
    return start !== this.pos;
  }

  /**
   * Skip to the end of matched text
   * @param pattern
   */
  skipOver(pattern: TextPattern, options?: ReadOptions) {
    const start = this.pos;
    this.readTo(pattern, { ...options, skipMatched: true });
    return start !== this.pos;
  }

  /**
   * Move cursor back
   * @param n Steps
   */
  backUp(n: number = 1) {
    this.pos -= n;
  }

  /**
   * Check if rest text begins with pattern
   * @param pattern 
   * @param [options] 
   */
  match(pattern: TextPattern, options: MatchOptions = {}): string {
    const { consume = true, caseInsensitive } = options;
    const { index, length, matched } = this.search(pattern, { caseInsensitive });
    if (index !== this.pos) {
      return '';
    }
    if (consume) {
      this.pos += length;
    }
    this.lastMatch = matched;
    return matched;
  }

  /**
   * Reset the marker stack
   */
  resetMarker() {
    this.markers = [];
  }

  /**
   * Add a marker to stack
   * @param data
   * @param start
   */
  pushMarker(data: MarkerData, start: number) {
    if (_.isUndefined(start)) {
      start = this.pos;
    }
    this.markers.push({ data, start });
  }

  /**
   * Set data for current marker
   * @param data
   */
  setMarkerData(data: MarkerData) {
    const marker = _.last(this.markers);
    if (!marker) return;
    _.extend(marker.data, data);
  }

  /**
   * Get data of current markder
   */
  getMarkerData(): MarkerData {
    const marker = _.last(this.markers);
    if (!marker) return {};
    return marker.data;
  }

  /**
   * Return a combined structure of text and it's position according to the previously set start
   * marker
   * @param [data] Additional data
   * @param [end] End marker, if not set, previous set value will be used
   */
  popMarker(_data: MarkerData = {}, end: number): MarkerInfo | undefined {
    if (!_.isPlainObject(_data)) {
      throw new TypeError('invalid data parameter');
    }
    if (_.isUndefined(end)) {
      end = this.pos;
    }
    const marker = this.markers.pop();
    if (!marker) {
      return undefined;
    }
    const { data, start } = marker;
    return {
      text: this.text.substring(marker.start || 0, end),
      position: {
        start,
        end,
      },
      data: {
        ...data,
        ..._data,
      },
    };
  }

  findLine(text: string) {
    return _.find(this.lines, line => _.trim(line.text) === text);
  }

  /**
   * Push current cursor to cursor stack, if new position provided, set current cursor to it
   * @param [pos] 
   */
  pushCursor(pos: number) {
    if (_.isUndefined(pos)) {
      pos = this.pos;
    }
    this.cursorStack.push(this.pos);
    this.pos = pos;
  }

  /**
   * Pop last from cursor stack and set it to current cursor
   */
  popCursor() {
    if (this.cursorStack.length === 0) {
      throw new Error('out of cursor stack!');
    }
    this.pos = <number>this.cursorStack.pop();
    return this.pos;
  }

  /**
   * Debug a single line
   * @param line 
   * @param numWidth 
   * @param col 
   */
  debugLine(line: TextLine, numWidth: number, col: number) {
    let { ln, text } = line;
    if (_.isUndefined(numWidth)) {
      numWidth = (ln + '').length;
    }
    if (col) {
      text = text.substring(0, col - 1) + chalk.bgBlue(text.charAt(col - 1)) + text.substring(col);
    }
    console.log(`${chalk.blueBright(`${col ? '>' : ' '} ${_.padStart(ln + '', numWidth)} |`)} ${text}`);
  }

  /**
   * Debug cursor column position
   * @param text Text of the line
   * @param col Cursor position
   * @param numWidth fixed line number width
   */
  debugCursor(text: string, col: number, numWidth: number) {
    const pos = text.substr(0, col - 1).replace(P_FULL_WIDTH_CHARACTER, 'XX').length;
    console.log(chalk.blueBright(`  ${_.repeat(' ', numWidth)} | ${_.repeat(' ', pos)}^ ${col}`));
  }

  /**
   * Debug current position state, with previous and following lines set by range
   * @param range 
   */
  debugState(range = 0) {
    const { ln, col } = this.getPosition();
    const lineIndex = ln - 1;
    const lines = _.slice(this.lines, _.max([lineIndex - range, 0]), _.min([lineIndex + range + 1, this.lines.length]));
    const numWidth = <number>_.max(lines.map(l => (l.ln + '').length));
    lines.forEach((line) => {
      const isCurrent = line.ln === ln;
      this.debugLine(line, numWidth, isCurrent ? col : 0);
      if (isCurrent) {
        this.debugCursor(line.text, col, numWidth);
      }
    });
    console.log();
  }

}

export { TextLine };
export default TextStream;
