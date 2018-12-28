import TextStream from './TextStream';
import Node from './Node';
export interface ParsingOptions {
    verbose?: boolean;
    needMetadataMarker?: boolean;
}
/**
 * Tokenizer class
 * @class
 */
declare class Tokenizer {
    static from(text: string, options: ParsingOptions): Tokenizer;
    text: string;
    stream: TextStream;
    options: ParsingOptions;
    parsed: boolean;
    /**
     * @param text
     * @param options Constructor options
     */
    constructor(text: string, options?: ParsingOptions);
    debug(...params: any[]): void;
    /**
     * Process a text and parse to AST
     * @returns Root node of parsed AST
     */
    process(): Node;
}
export default Tokenizer;
