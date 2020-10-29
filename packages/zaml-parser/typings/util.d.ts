import Node from './Node';
import { ParsingOptions } from './Tokenizer';
/**
 * Stringify attribute value
 * @param value
 */
export declare function formatValue(value: any, asString?: boolean): any;
/**
 * Parse attribute value
 * @param value
 */
export declare function parseValue(value: any): any;
/**
 * Parse number
 * @param value
 */
export declare function parseNumber(value: string, bigIntAsString?: boolean): string | number;
/**
 * Generate indent spaces
 * @param space
 * @param indent
 */
export declare function spacer(space: number, indent: number): string;
export interface StringifyOptions {
    space?: number;
    simple?: boolean;
    toSource?: boolean;
    metadataMarker?: boolean;
    attributeAsString?: boolean;
}
/**
 * Stringify node
 * @param node
 * @param [options]
 * @param [options.space] White spaces each indent
 * @param [options.simple] Enable simple block when suitable
 * @param [options.toSource] To ZAML source code
 * @param [indent] Initial indent, increases 1 each block
 * @param Initial position
 */
export declare function stringify(node: Node, options?: StringifyOptions, indent?: number, pos?: number): string;
export declare const isNode: boolean;
export declare const isChrome: boolean;
export declare const isAnsiSupported: boolean;
export declare const chalk: {
    reset: (text: string) => string;
    bold: (text: string) => string;
    dim: (text: string) => string;
    italic: (text: string) => string;
    underline: (text: string) => string;
    inverse: (text: string) => string;
    hidden: (text: string) => string;
    strikethrough: (text: string) => string;
    black: (text: string) => string;
    red: (text: string) => string;
    green: (text: string) => string;
    yellow: (text: string) => string;
    blue: (text: string) => string;
    magenta: (text: string) => string;
    cyan: (text: string) => string;
    white: (text: string) => string;
    blackBright: (text: string) => string;
    grey: (text: string) => string;
    gray: (text: string) => string;
    redBright: (text: string) => string;
    greenBright: (text: string) => string;
    yellowBright: (text: string) => string;
    blueBright: (text: string) => string;
    magentaBright: (text: string) => string;
    cyanBright: (text: string) => string;
    whiteBright: (text: string) => string;
    bgBlack: (text: string) => string;
    bgRed: (text: string) => string;
    bgGreen: (text: string) => string;
    bgYellow: (text: string) => string;
    bgBlue: (text: string) => string;
    bgMagenta: (text: string) => string;
    bgCyan: (text: string) => string;
    bgWhite: (text: string) => string;
    bgBlackBright: (text: string) => string;
    bgGrey: (text: string) => string;
    bgGray: (text: string) => string;
    bgRedBright: (text: string) => string;
    bgGreenBright: (text: string) => string;
    bgYellowBright: (text: string) => string;
    bgBlueBright: (text: string) => string;
    bgMagentaBright: (text: string) => string;
    bgCyanBright: (text: string) => string;
    bgWhiteBright: (text: string) => string;
};
/**
 * Parse ZAML source into node
 * @param text ZAML source string
 */
export declare function parse(text: string, options?: ParsingOptions): Node;
/**
 * Parse ZAML source into node
 * @deprecated Please use zaml.parse() instead
 * @param {string} text Source string
 */
export declare function tokenize(text: string, options: ParsingOptions): Node;
