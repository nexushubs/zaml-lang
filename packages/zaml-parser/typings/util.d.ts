import * as _ from 'lodash';
import Node from './Node';
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
export declare const chalk: _.Dictionary<(text: string) => string>;
