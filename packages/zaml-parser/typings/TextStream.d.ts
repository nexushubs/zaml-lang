import TextLine from './TextLine';
export declare type TextTester = (text: string) => boolean;
export declare type TextPattern = string | RegExp | TextTester;
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
export declare type MarkerData = {
    [key: string]: any;
};
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
declare class TextStream {
    /** Current cursor position */
    pos: number;
    /** Original text */
    text: string;
    /** Tab size */
    tabSize: number;
    /** Text lines */
    lines: TextLine[];
    /** Start position of each line */
    lineOffsetIndexes: number[];
    /** Markers */
    markers: Marker[];
    /** Cursor stack positions */
    cursorStack: number[];
    /** Last matched string of methods like eat() match() */
    lastMatch: string;
    constructor(text: string, tabSize?: number);
    /**
     * Prepare line indexes
     */
    init(): void;
    /**
     * Get line and column position of the cursor
     * @param pos Cursor position of the text
     */
    getPosition(pos?: number): {
        ln: number;
        col: number;
        pos: number;
        line: TextLine;
    };
    /**
     * Check if cursor is at the start of a line
     * @param [trimSpaces] Whether to trim starting spaces
     */
    sol(trimSpaces?: boolean): boolean;
    /**
     * Check if cursor is at the end of a line
     * @param [trimSpaces] Whether to trim ending spaces
     */
    eol(trimSpaces?: boolean): boolean;
    /**
     * Check if cursor is at the end of whole text
     * @param {number} [pos]
     */
    eof(pos?: number): boolean;
    /**
     * Get one next char, but keep the cursor position (if available)
     * @returns The next char
     */
    peek(): string;
    /**
     * Get one next char, and move cursor forward (if available)
     * @returns The next char
     */
    next(): string;
    /**
     * Consumes one char if the next char fitting the pattern
     * @param pattern
     * @returns The char been eaten
     */
    eat(pattern: TextPattern): string;
    /**
     * Consumes chars while fitting the pattern
     * @param match
     * @returns Eaten characters
     */
    eatWhile(pattern: TextPattern): string;
    /**
     * Consumes chars until the first char not fitting the pattern
     * @param pattern char or pattern
     * @returns eaten characters
     */
    eatUntil(pattern: TextPattern): string;
    /**
     * Consumes spaces
     * @returns {boolean} If any space has been consumed
     */
    eatSpaces(): boolean;
    /**
     * Find position of matched text to the pattern
     * @param pattern
     * @param options
     */
    search(pattern: TextPattern, options?: SearchOptions): {
        index: number;
        length: number;
        matched: string;
    };
    /**
     * Read n chars after current cursor
     * @param [n] Number of chars to read
     */
    read(n?: number): string;
    /**
     * Read to text or pattern
     * @param pattern
     * @param [options]
     * @returns Sub-text after current cursor and before (or contains) matched text
     */
    readTo(pattern: TextPattern, options?: ReadOptions): string;
    /**
     * Read to pattern (contains the matched text)
     * @param {} pattern Text to find or pattern
     * @param {object} options Match options
     * @returns {string} Sub-text after current cursor and until the end of matched text
     */
    readOver(pattern: TextPattern, options?: ReadOptions): string;
    /**
     * Read one line
     * @returns {string} Text containing one line (not including line break)
     */
    readLine(): string;
    /**
     * Move cursor to end of text
     */
    skipToEnd(): void;
    /**
     * Skip to the beginning of matched text
     * @param pattern
     * @param options
     */
    skipTo(pattern: TextPattern, options?: ReadOptions): boolean;
    /**
     * Skip to the end of matched text
     * @param pattern
     */
    skipOver(pattern: TextPattern, options?: ReadOptions): boolean;
    /**
     * Move cursor back
     * @param n Steps
     */
    backUp(n?: number): void;
    /**
     * Check if rest text begins with pattern
     * @param pattern
     * @param [options]
     */
    match(pattern: TextPattern, options?: MatchOptions): string;
    /**
     * Reset the marker stack
     */
    resetMarker(): void;
    /**
     * Add a marker to stack
     * @param data
     * @param start
     */
    pushMarker(data: MarkerData, start: number): void;
    /**
     * Set data for current marker
     * @param data
     */
    setMarkerData(data: MarkerData): void;
    /**
     * Get data of current markder
     */
    getMarkerData(): MarkerData;
    /**
     * Return a combined structure of text and it's position according to the previously set start
     * marker
     * @param [data] Additional data
     * @param [end] End marker, if not set, previous set value will be used
     */
    popMarker(_data: MarkerData | undefined, end: number): MarkerInfo | undefined;
    findLine(text: string): TextLine | undefined;
    /**
     * Push current cursor to cursor stack, if new position provided, set current cursor to it
     * @param [pos]
     */
    pushCursor(pos: number): void;
    /**
     * Pop last from cursor stack and set it to current cursor
     */
    popCursor(): number;
    /**
     * Debug a single line
     * @param line
     * @param numWidth
     * @param col
     */
    debugLine(line: TextLine, numWidth: number, col: number): void;
    /**
     * Debug cursor column position
     * @param text Text of the line
     * @param col Cursor position
     * @param numWidth fixed line number width
     */
    debugCursor(text: string, col: number, numWidth: number): void;
    /**
     * Debug current position state, with previous and following lines set by range
     * @param range
     */
    debugState(range?: number): void;
}
export { TextLine };
export default TextStream;
