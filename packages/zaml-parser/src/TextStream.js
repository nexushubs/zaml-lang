import _ from 'lodash';
import {
  P_FULL_WIDTH_CHARACTER
} from './constants';

// improved from https://github.com/codemirror/CodeMirror/blob/master/src/util/StringStream.js
const NOT_FOUND = -1;
const LINE_BREAKS = /\r?\n/g;

/**
 * @typedef {string|RegExp} TextPattern
 */

/**
 * Class holding text line data
 * @typicalname line
 */
class TextLine {
  /**
   * @constructor
   * @param {TextLine[]} lines
   * @param {string} text
   * @param {number} ln
   * @param {number} offset
   * @param {number} length
   */
  constructor(lines, text, ln, offset, length) {
    /**
     * @type {TextLine[]}
     */
    this.lines = lines;

    /**
     * @type {string}
     */
    this.text = text;

    /**
     * @type {number}
     */
    this.ln = ln;

    /**
     * @type {number}
     */
    this.offset = offset;
  }

  /**
   * Get the previous line
   * @returns {TextLine}
   */
  prev() {
    return this.lines[this.ln - 2];
  }

  /**
   * Get the next line
   * @returns {TextLine}
   */
  next() {
    return this.lines[this.ln];
  }

  /**
   * Get text length of the line
   * @returns {number}
   */
  get length() {
    return this.text.length;
  }

  /**
   * Start position of the line, alias of `offset`
   * @returns {number}
   */
  get start() {
    return this.offset;
  }

  /**
   * End position of the line
   * @returns {number}
   */
  get end() {
    return this.offset + this.length;
  }

  /**
   * Convert to JSON serializable object
   * @returns {{ln:number,start:number,end:number,text:number}}
   */
  toJSON() {
    return {
      ln: this.ln,
      start: this.start,
      end: this.end,
      text: this.text,
    };
  }
}

/**
 * Stream like text string
 * @typicalname stream
 */
class TextStream {

  constructor(text, tabSize) {

    /**
     * @type {number}
     * @description Current cursor position
     */
    this.pos = this.start = 0;

    /**
     * @readonly
     * @type {string}
     * @description Original text
     */
    this.text = text;

    /**
     * @type {number}
     * @description Tab size
     */
    this.tabSize = tabSize || 8;

    /**
     * @type {TextLine[]}
     * @description Lines, separated by line breaks
     */
    this.lines = [];

    /**
     * @inner
     * @type {{start:number,data:any}}
     * @description Stream markers, used by `pushMarker()`, `popMarker()`, `setMarkerData()`
     */
    this.markers = [];

    /**
     * @inner
     * @type {number[]}
     * @description Cursor stack, used by `pushCursor()` and `popCursor`
     */
    this.cursorStack = [];

    this.init();
  }

  /**
   * Prepare line indexes
   */
  init() {
    const lines = [];
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
   * @param {number} pos Cursor position of the text
   * @returns {{ln:number,col:number,pos:number,line:TextLine}}
   */
  getPosition(pos) {
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
   * @param {boolean} [trimSpaces] Trim starting spaces
   * @returns {boolean}
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
   * @param {boolean} [trimSpaces] Trim ending spaces
   * @returns {boolean}
   */
  eol(trimSpaces = false) {
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
   * @returns {boolean}
   */
  eof(pos) {
    if (_.isUndefined(pos)) {
      pos = this.pos;
    }
    return pos >= this.text.length;
  }

  /**
   * Get one next char, but keep the cursor position (if available)
   * @returns {string} The next char
   */
  peek() {
    return this.text.charAt(this.pos) || undefined;
  }

  /**
   * Get one next char, and move cursor forward (if available)
   * @returns {string} The next char
   */
  next() {
    if (this.pos < this.text.length) {
      return this.text.charAt(this.pos++);
    }
    return undefined;
  }

  /**
   * Consumes one char if the next char fitting the pattern
   * @param {TextPattern} pattern 
   * @returns {string} The char been eaten
   */
  eat(pattern) {
    const ch = this.text.charAt(this.pos) || undefined;
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
    return undefined;
  }

  /**
   * Consumes chars while fitting the pattern
   * @param {TextPattern} match 
   * @returns {string} eaten characters
   */
  eatWhile(pattern) {
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
   * @param {TextPattern} pattern char or pattern
   * @returns {string} eaten characters
   */
  eatUntil(pattern) {
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
   * @param {TextPattern} pattern 
   * @param {object} [options]
   * @param {boolean} [options.caseInsensitive=false] Case insensitive for string pattern
   */
  search(pattern, options = {}) {
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
   * @param {number} [n=1] Number of chars to read
   */
  read(n = 1) {
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
   * @param {TextPattern} pattern 
   * @param {object} [options]
   * @param {boolean} [options.toEOL=false] If no matched text is found, read to the end
   * @param {boolean} [options.toEOF=false] If read to matched text or to the end of line
   * @param {boolean} [options.consume=false] Read to end of the matched text
   * @param {boolean} [options.skipMatched=false] Read to the matched text, move cursor to the end
   * @returns {string} Sub-text after current cursor and before (or contains) matched text
   */
  readTo(pattern, options = {}) {
    const {
      toEOL = false,
      toEOF = false,
      consume = false,
      skipMatched = false,
    } = options;
    const start = this.pos;
    let { index, length } = this.search(pattern);
    let match = null;
    let end = null;
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
    if (end !== null) {
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
   * @param {TextPattern} pattern Text to find or pattern
   * @param {object} options Match options
   * @returns {string} Sub-text after current cursor and until the end of matched text
   */
  readOver(pattern, options = {}) {
    return this.readTo(pattern, {...options, consume: true });
  }

  /**
   * Read one line
   * @returns {string} Text containing one line (not including line break)
   */
  readLine() {
    const { line } = this.getPosition();
    const nextLine = line.next();
    if (this.eof()) {
      return null;
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
   * @param {TextPattern} pattern
   * @param {object} options
   * @returns {boolean}
   */
  skipTo(pattern, options) {
    const start = this.pos;
    this.readTo(pattern, options);
    return start !== this.pos;
  }

  /**
   * Skip to the end of matched text
   * @param {TextPattern} pattern
   * @returns {boolean}
   */
  skipOver(pattern, options = {}) {
    const start = this.pos;
    this.readTo(pattern, { ...options, skipMatched: true });
    return start !== this.pos;
  }

  /**
   * Move cursor back
   * @param {number} n Steps
   */
  backUp(n) {
    this.pos -= n;
  }

  /**
   * Check if rest text begins with pattern
   * @param {TextPattern} pattern 
   * @param {object} [options] 
   * @param {boolean} [options.consume=false]
   * @param {boolean} [options.caseInsensitive=false]
   */
  match(pattern, options = {}) {
    const { consume = true, caseInsensitive } = options;
    const { index, length, matched } = this.search(pattern, { caseInsensitive });
    if (index !== this.pos) {
      return null;
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
   * @param {any} data
   * @param {number} [pos]
   */
  pushMarker(data, start) {
    if (_.isUndefined(start)) {
      start = this.pos;
    }
    this.markers.push({ data, start });
  }

  /**
   * Set data for current marker
   * @param {Object.<string,any>} data
   */
  setMarkerData(data) {
    const marker = _.last(this.markers);
    if (!marker) return;
    _.extend(marker.data, data);
  }

  /**
   * Get data of current markder
   * @returns {any}
   */
  getMarkerData() {
    const marker = _.last(this.markers);
    if (!marker) return;
    return marker.data;
  }

  /**
   * Return a combined structure of text and it's position according to the previously set start
   * marker
   * @param {object} [data] Additional data
   * @param {number} [end] End marker, if not set, previous set value will be used
   * @returns {{text:string,start:number,end:number}}
   */
  popMarker(_data = {}, end) {
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
      text: this.text.substring(marker.start, end),
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

  findLine(text) {
    return _.find(this.lines, line => _.trim(line.text) === text);
  }

  /**
   * Push current cursor to cursor stack, if new position provided, set current cursor to it
   * @param {number} [pos] 
   */
  pushCursor(pos) {
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
    this.pos = this.cursorStack.pop();
    if (_.isUndefined(this.pos)) {
      throw new Error('out of cursor stack!');
    }
    return this.pos;
  }

  debugLine(line, numWidth, isCurrent) {
    const { ln, text } = line;
    if (_.isUndefined(numWidth)) {
      numWidth = (ln + '').length;
    }
    console.log(`${isCurrent ? '>' : ' '} ${_.padStart(ln, numWidth)} | ${text}`);
  }

  debugCursor(text, col, numWidth) {
    const pos = text.substr(0, col - 1).replace(P_FULL_WIDTH_CHARACTER, 'XX').length;
    console.log(`  ${_.repeat(' ', numWidth)} | ${_.repeat(' ', pos)}^`);
  }

  debugState(range = 1) {
    const { ln, col } = this.getPosition();
    const lineIndex = ln - 1;
    const lines = _.slice(this.lines, _.max([lineIndex - range, 0]), _.min([lineIndex + range + 1, this.lines.length]));
    const numWidth = _.max(lines.map(l => (l.ln + '').length));
    lines.forEach((line) => {
      const isCurrent = line.ln === ln;
      this.debugLine(line, numWidth, isCurrent);
      if (isCurrent) {
        this.debugCursor(line.text, col, numWidth);
      }
    });
    console.log();
  }

}

export { TextLine };
export default TextStream;
