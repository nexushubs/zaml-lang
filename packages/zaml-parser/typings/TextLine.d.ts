export interface TextLineData {
    ln: number;
    start: number;
    end: number;
    text: string;
}
/**
 * Class holding text line data
 */
declare class TextLine {
    lines: TextLine[];
    text: string;
    ln: number;
    offset: number;
    constructor(lines: TextLine[], text: string, ln: number, offset: number);
    /**
     * Get the previous line
     */
    prev(): TextLine;
    /**
     * Get the next line
     */
    next(): TextLine;
    /**
     * Get text length of the line
     */
    readonly length: number;
    /**
     * Start position of the line, alias of `offset`
     */
    readonly start: number;
    /**
     * End position of the line
     */
    readonly end: number;
    /**
     * Convert to JSON serializable object
     */
    toJSON(): TextLineData;
}
export default TextLine;
