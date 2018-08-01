import _ from 'lodash';

// improved from https://github.com/codemirror/CodeMirror/blob/master/src/util/StringStream.js
const NOT_FOUND = -1;
const LINE_BREAKS = /\r?\n/g;

/**
 * @typedef {string|RegExp} TextPattern
 */

/**
 * Class holding text line data
 */
export class TextLine {
  constructor(text, ln, offset, length) {
    this.text = text;
    this.ln = ln;
    this.offset = offset;
    this.length = length;
  }

  valueOf() {
    return this.text;
  }
}

/**
 * Stream like text string
 */
export default class TextStream {

  constructor(text, tabSize, lineOracle) {
    this.pos = this.start = 0;
    this.text = text;
    this.tabSize = tabSize || 8;
    this.lastColumnPos = this.lastColumnValue = 0;
    this.lineStart = 0;
    this.lineOracle = lineOracle;
    this.lines = [];
    this.markers = [];
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
        lines.push(new TextLine(text, ln, offset, length));
        offset += length + matched[0].length;
      } else {
        const length = this.text.length - offset;
        // process last line without line break symbol
        if (length > 0) {
          const text = this.text.substr(offset);
          lines.push(new TextLine(text, ln, offset, length));
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
   * @returns {{ln:number,col:number,index:number}}
   */
  getPosition(pos) {
    if (_.isUndefined(pos)) {
      pos = this.pos;
    }
    const lineIndex = _.findLastIndex(this.lineOffsetIndexes, offset => pos >= offset);
    const line = this.lines[lineIndex];
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
   * @param {number} [pos] 
   * @returns {boolean}
   */
  sol(pos) {
    if (_.isUndefined(pos)) {
      pos = this.pos;
    }
    const position = this.getPosition(pos);
    return position.col - 1 === 0;
  }

  /**
   * Check if cursor is at the end of a line
   * @param {number} [pos] 
   * @returns {boolean}
   */
  eol(pos) {
    if (_.isUndefined(pos)) {
      pos = this.pos;
    }
    const position = this.getPosition(pos);
    return position.col - 1 === position.line.length;
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
    if (typeof pattern == "string") {
      ok = ch == pattern;
    } else {
      ok = ch && (pattern.test ? pattern.test(ch) : pattern(ch))
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
   * @returns {boolean} If any chars been consumed
   */
  eatWhile(pattern) {
    const start = this.pos;
    while (this.eat(pattern)) { };
    return this.pos > start;
  }

  /**
   * Consumes chars until the first char not fitting the pattern
   * @param {TextPattern} pattern char or pattern
   * @returns {boolean} If any chars been consumed
   */
  eatUntil(pattern) {
    const start = this.pos;
    let ch;
    do {
      ch = this.eat(pattern);
      if (!ch) {
        this.pos++;
      } else {
        this.pos--;
      }
    } while (!ch && !this.eof());
    return this.pos > start;
  }

  /**
   * Consumes spaces
   * @returns {boolean} If any space has been consumed
   */
  eatSpace() {
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
          ({ length } = pattern);
          matched = this.text.substr(index, length);
        }
      }
    }
    if (pattern instanceof RegExp) {
      pattern.flags
      pattern.lastIndex = this.pos;
      const result = pattern.exec(this.text);
      if (result) {
        index = result.index;
        length = result[0].length;
        matched = result[0];
      } else {
        index = NOT_FOUND;
        length = 0;
      }
    }
    if (index === NOT_FOUND) {
      length = 0;
    }
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
   * Read to pattern
   * @param {TextPattern} pattern 
   * @param {object} [options]
   * @param {boolean} [options.toEOF] If no matched text is found, read to the end
   * @param {boolean} [options.consume] Read to end of matched text
   * @param {boolean} [options.skipMatched] Read to previous char before matched text, move cursor
   * to the end
   * @returns {string} Sub-text after current cursor and before (or contains) matched text
   */
  readTo(pattern, options = {}) {
    const { index, length } = this.search(pattern);
    const start = this.pos;
    let match;
    if (index === NOT_FOUND) {
      if (options.toEOF) {
        this.pos = this.text.length;
        match = this.text.substr(start);
      } else {
        match = '';
      }
    } else {
      this.pos = index;
      let end = index;
      if (options.consume || options.skipMatched) {
        this.pos += length;
        if (!options.skipMatched) {
          end += length;
        }
      }
      match = this.text.substring(start, end);
    }
    this.lastMatch = match || null;
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
   * @param {TextPattern} [lineBreak=LINE_BREAKS] Line break separator
   * @returns {string} Text containing one line (not including line break)
   */
  readLine(lineBreak = LINE_BREAKS) {
    return this.readTo(lineBreak, { toEOF: true, skipMatched: true });
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
   */
  setMarkerData(data) {
    const marker = _.last(this.markers);
    if (!marker) return;
    _.extend(marker.data, data);
  }

  /**
   * Get data of current markder
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

  debugLine(line, numWidth, isCurrent) {
    const { ln, text } = line;
    if (_.isUndefined(numWidth)) {
      numWidth = (ln + '').length;
    }
    console.log(`${isCurrent ? '>' : ' '} ${_.padStart(ln, numWidth)} | ${text}`);
  }

  debugCursor(col, numWidth) {
    console.log(`  ${_.repeat(' ', numWidth)} | ${_.repeat(' ', col - 1)}^`);
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
        this.debugCursor(col, numWidth);
      }
    });
    console.log();
  }

}
