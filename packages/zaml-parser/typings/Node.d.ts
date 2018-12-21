import { StringifyOptions } from './util';
export declare enum NodeType {
    FRAGMENT = "fragment",
    ROOT = "root",
    PARAGRAPH = "paragraph",
    TAG = "tag",
    ENTITY = "entity",
    TEXT = "text",
    COMMENT = "comment"
}
export declare const NodeTypes: string[];
export declare const BlockNodeTypes: NodeType[];
export declare const BlockTags: string[];
export declare const WrappingTags: string[];
export declare type ExtractorFunction = (text: string) => EntityItem[];
export interface ExtractorInstance {
    extract: (text: string[]) => EntityItem[][];
}
export declare type Extractor = ExtractorFunction | ExtractorInstance;
declare type FinderCallback = (node: Node) => boolean;
declare type FinderPattern = FinderCallback | string;
/**
 * Recursive node finder
 * @param node Node to find
 * @param pattern Searching pattern
 * @param Node List
 */
declare function find(node: Node, pattern?: FinderPattern, result?: Node[]): Node[];
export { find };
export declare type KeyValueMap = {
    [key: string]: any;
};
export interface NodeProps {
    source?: string;
    start?: number;
    end?: number;
    states?: KeyValueMap;
    attributes?: KeyValueMap;
    metadata?: KeyValueMap;
    labels?: string[];
    parent?: Node;
    content?: string;
    text?: string;
}
export interface NodeSelector {
    type?: NodeType;
    name?: string;
    text?: string;
    source?: string;
    label?: string;
}
export interface EntityItem {
    type: string;
    start: number;
    end: number;
    data?: any;
}
export interface JsonOptions {
    position?: boolean;
    textPosition?: boolean;
}
export interface SourceMapRange {
    start: string;
    end: string;
}
export interface JsonNode {
    type: NodeType;
    name?: string;
    content?: string;
    attributes?: KeyValueMap;
    metadata?: KeyValueMap;
    labels?: string[];
    position?: SourceMapRange;
    textPosition?: SourceMapRange;
    children?: JsonNode[];
}
export interface NodeRange {
    startNode: Node;
    startOffset: number;
    endNode: Node;
    endOffset: number;
}
/**
 * AST node class
 * @class
 */
declare class Node {
    static Types: typeof NodeType;
    /**
     * @param type
     * @param [name]
     * @param [options]
     */
    static create(type: NodeType, name?: string, options?: NodeProps): Node;
    /**
     * Create node instance from ZAML source
     * @param source
     */
    static fromSource(source: string): Node;
    /**
     * Create node from json serializable data
     * @param {object} json
     * @returns {Node}
     */
    static fromJSON(json: JsonNode): Node;
    /**
     * Creating fragment node
     * @returns {Node}
     */
    static createFragment(): Node;
    /**
     * Check if a node is valid
     * @param node
     */
    static validNode(node: any): void;
    /**
     * Check if a node could be parent
     * @param node
     */
    static validParent(node: any): void;
    /**
     * Check if a node could be parent
     * @param node
     */
    static validChild(node: any): void;
    static findCommonAncestor(n1: Node, n2: Node): Node | undefined;
    /**
     * Create a block and move nodes or text within the range into it
     * @param start
     * @param end
     */
    static createBlockByRange(range: NodeRange, props: NodeProps): Node | undefined;
    private _source?;
    id: string;
    type: NodeType;
    name?: string;
    start: number;
    end: number;
    textStart: number;
    textEnd: number;
    states: KeyValueMap;
    attributes: KeyValueMap;
    metadata: KeyValueMap;
    labels: string[];
    parent?: Node;
    content?: string;
    text?: string;
    children: Node[];
    /**
     * @constructor
     * @param type
     * @param [name]
     * @param [options]
     */
    constructor(type: NodeType, name?: string, options?: NodeProps);
    /**
     * Get a short descriptor to identify node's type and basic information
     */
    readonly descriptor: string;
    /**
     * Check if the node is tag
     */
    readonly isTag: boolean;
    /**
     * Check if the node is wrapping tag
     */
    readonly isWrappingTag: boolean;
    /**
     * Check if the node is block tag
     */
    readonly isBlockTag: boolean;
    /**
     * Check if the node is simple block or inline block
     */
    readonly isSimpleTag: boolean;
    /**
     * Property indicates if the node is a block (wrapping other nodes)
     */
    readonly isBlock: boolean;
    /**
     * If node is inline block
     */
    readonly isInlineBlock: boolean;
    /**
     * Get parent node, alias for node.parent
     */
    readonly parentNode: Node | undefined;
    /**
     * Get child nodes, alias for node.children
     */
    readonly childNodes: Node[];
    /**
     * If the node is root
     */
    readonly isRoot: boolean;
    /**
     * Get source code of the node
     */
    readonly source: string;
    /**
     * Get node inner text
     */
    readonly innerText: string | undefined;
    /**
     * Check if the node is the first child of its parent
     */
    readonly isFirstChild: boolean;
    /**
     * Check if the node is the last child of its parent
     */
    readonly isLastChild: boolean;
    /**
     * Siblings from same parent
     */
    readonly siblings: Node[];
    /**
     * Get index of parent children
     */
    readonly childIndex: number;
    /**
     * Next sibling node
     */
    readonly nextSibling: Node | undefined;
    /**
     * Previous sibling node
     */
    readonly previousSibling: Node | undefined;
    /**
     * Property indicates if the root is root (which has no children)
     */
    getRootNode(): Node | undefined;
    /**
     * Check node match the expression
     * @example
     * `BLOCK`: tag
     * `@LOC`: entity
     * @param expression
     */
    is(expression: string): boolean;
    /**
     * whether a node is a descendant of a given node
     * @param node
     */
    contains(node: Node): boolean;
    /**
     * Get a list of ancestors
     */
    readonly path: Node[];
    /**
     * Get the first child of current node
     */
    readonly firstChild: Node | undefined;
    /**
     * Get the last child of current node
     */
    readonly lastChild: Node | undefined;
    /**
     * Check if this node has any children
     */
    hasChild(): boolean;
    /**
     * Create a child node
     * @param type
     * @param [name]
     * @param [options]
     */
    createChild(type: NodeType, name?: string, options?: NodeProps): Node;
    /**
     * Append a node to children list
     * @param node
     */
    appendChild(node: Node): Node;
    /**
     * Append text node child
     * @param text
     * @param [options]
     */
    appendText(text: string, options?: NodeProps): Node;
    /**
     * Remove 1 or more children
     * @param node
     */
    removeChild(node: Node): Node;
    /**
     * Insert a node at specified position
     * @param node
     * @param index
     */
    insertAt(node: Node, index: number): Node;
    /**
     * Insert a node before another
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
     * @param node Node to be inserted
     * @param ref A child node to be referenced
     */
    insertBefore(node: Node, ref: Node): Node;
    /**
     * Insert a node after another
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/insertAfter
     * @param node Node to be inserted
     * @param ref A child node to be referenced
     */
    insertAfter(node: Node, ref: Node): Node;
    /**
     * Replace a child with another node, assuming current node is a parent
     * @param newChild
     * @param oldChild
     * @returns The replaced child
     */
    replaceChild(newChild: Node, oldChild: Node): Node;
    /**
     * Replace current child node with another node, assuming current node is child
     * @param node Node to be replaced with
     */
    replaceWith(node: Node): Node;
    /**
     * Set single attribute value
     * @param {string} key Attribute key
     * @param {any} value Attribute value
     */
    setAttribute(key: string, value: any): void;
    /**
     * Set multiple attributes
     * @param data Key-value pair
     */
    setAttributes(data: KeyValueMap): void;
    /**
     * Get attribute value
     * @param key
     */
    getAttribute(key: string): any;
    /**
     * Check if a specified attribute key exists
     * @param key
     */
    hasAttribute(key: string): boolean;
    /**
     * Remove an attribute
     * @param {string} key
     */
    removeAttribute(key: string): void;
    /**
     * Remove all attributes
     */
    clearAttributes(): void;
    /**
     * Set single metadata value
     * @param key Metadata key
     * @param value Metadata value
     */
    setMetadata(key: string, value: any): void;
    /**
     * Get metadata value
     * @param key
     */
    getMetadata(key: string): any;
    /**
     * Remove a metadata
     * @param key
     */
    removeMetadata(key: string): void;
    /**
     * Remove all metadata
     */
    clearMetadata(): void;
    /**
     * Check if a specified metadata key exists
     * @param key
     */
    hasMetadata(key: string): boolean;
    /**
     * Add label to node
     * @param label
     */
    addLabel(label: string): void;
    /**
     * Check if the node has specified label
     * @param label
     */
    hasLabel(label: string): boolean;
    /**
     * Remove label
     * @param label
     */
    removeLabel(label: string): void;
    /**
     * Remove all labels
     */
    clearLabels(): void;
    /**
     * Rebuild text and source position, in case modification has been applied to node
     */
    normalize(): void;
    /**
     * Get node by id
     * @param id
     */
    getNodeById(id: string): Node | undefined;
    /**
     * Find matched descendants recursively
     * @param selector Node selector object
     * @param [one] Find the first matched node or a list of node
     */
    findBy(selector?: NodeSelector, one?: boolean): Node | Node[] | undefined;
    /**
     * Find nodes by selector recursively and return the first one
     * @param selector
     */
    findOneBy(selector?: NodeSelector): Node | Node[] | undefined;
    /**
     * Find matched text node by text source range
     * @param start
     * @param end
     */
    findTextByRange(start: number, end: number): Node | undefined;
    /**
     * Find matched children recursively by callback
     * @param callback
     */
    find(callback: FinderCallback): Node[];
    /**
     * Find matched children recursively and return the first one
     * @param callback
     */
    findOne(callback: FinderCallback): Node | undefined;
    /**
     * Find all nodes by selector, compared by is()
     * @param selector
     */
    querySelectorAll(selector: string): Node[];
    /**
     * Find nodes by selector and return the first one, compared by is()
     * @param selector
     */
    querySelector(selector: string): Node | undefined;
    createBlockByTextRange(start: number, end: number, props?: NodeProps): Node;
    /**
     * Process text node in current node and parse entities
     */
    createEntities(items: EntityItem[]): Node[];
    /**
     * Create entity nodes based on text source position
     * @param {Array.<{start:number,end:number,type:string,data:any}>} entities
     */
    createEntitiesFromText(entities: EntityItem[]): void;
    /**
     * Extract entities from text node
     */
    extractEntities(extractor: Extractor): Promise<void>;
    /**
     * Remove wrapping entity and put text back
     */
    removeEntity(): Node;
    /**
     * Build plain text of the node (stripping tags & entities)
     * @param [options]
     */
    toString(options?: StringifyOptions): string;
    /**
     * Build source code of the node
     * @param [options]
     */
    toSource(options?: StringifyOptions): string;
    /**
     * Convert node to JSON serializable object
     * @param options
     */
    toJSON(options?: JsonOptions): JsonNode;
}
export default Node;
