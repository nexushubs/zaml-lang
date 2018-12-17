import Node from './Node';
/**
 * Stringify attribute value
 * @param value
 */
export declare function formatValue(value: any): any;
/**
 * Parse attribute value
 * @param value
 */
export declare function parseValue(value: any): any;
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
export declare function stringify(node: Node, options?: StringifyOptions | number, indent?: number, pos?: number): string;
