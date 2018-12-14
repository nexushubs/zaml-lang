import * as _ from 'lodash';
import { stringify, parseValue, StringifyOptions } from './util';
import { parse } from '.';

export enum NodeType {
  FRAGMENT = 'fragment',
  ROOT = 'root',
  PARAGRAPH = 'paragraph',
  TAG=  'tag',
  ENTITY = 'entity',
  TEXT = 'text',
  COMMENT = 'comment',
}

export const NodeTypes = _.values(NodeType);

export const BlockNodeTypes = [
  NodeType.ROOT,
  NodeType.PARAGRAPH,
];

export const BlockTags = [
  'BLOCK',
  'QUOTE',
  'SECTION',
  'HEADER',
  'FOOTER',
];

export const WrappingTags = [
  ...BlockTags,
  'INLINE',
  'NUM',
  'HEADING',
];

export type ExtractorFunction = (text: string) => EntityItem[];

export interface ExtractorInstance {
  extract: (text: string[]) => EntityItem[][];
}

export type Extractor = ExtractorFunction | ExtractorInstance;

type FinderCallback = (node: Node) => boolean;

type FinderPattern = FinderCallback | string;

const defaultFinderCallback: FinderCallback = (node: Node) => true;

function testNode(pattern: FinderPattern, node: Node): boolean {
  if (_.isFunction(pattern)) {
    return (<FinderCallback> pattern)(node);
  } else if (_.isString(pattern)) {
    return node.is(pattern);
  } else {
    throw new TypeError('invalid finding pattern');
  }
}

/**
 * Recursive node finder
 * @param node Node to find 
 * @param pattern Searching pattern
 * @param Node List
 */
function find(node: Node, pattern: FinderPattern = defaultFinderCallback, result: Node[] = []): Node[] {
  if (testNode(pattern, node)) {
    result.push(node);
  }
  if (!_.isEmpty(node.children)) {
    for (const childNode of node.children) {
      find(childNode, pattern, result);
    }
  }
  return result;
}

/**
 * Recursive node finder
 * @param node 
 * @param pattern 
 */
function findOne(node: Node, pattern: FinderPattern = defaultFinderCallback): Node | undefined {
  if (testNode(pattern, node)) {
    return node;
  }
  if (!_.isEmpty(node.children)) {
    for (const childNode of node.children) {
      const result = findOne(childNode, pattern);
      if (result) {
        return result;
      }
    };
  }
  return undefined;
}

function parseJson(json: JsonNode) {
  const node = Node.create(json.type, json.name, {
    attributes: parseJsonMap(json.attributes),
    metadata: parseJsonMap(json.metadata),
    content: json.content,
  });
  if (json.children) {
    _.each(json.children, childData => {
      node.appendChild(parseJson(childData));
    });
  }
  node.normalize();
  return node;
}

/**
 * Map metadata & attributes to JSON
 * @param  map 
 */
function toJsonMap(map?: KeyValueMap): KeyValueMap | undefined{
  if (_.isEmpty(map)) {
    return undefined;
  }
  return _.mapValues(map, (value) => {
    if (value instanceof Node) {
      return value.toJSON();
    }
    return value;
  })
}

function parseJsonMap(json?: KeyValueMap): KeyValueMap | undefined {
  if (_.isEmpty(json)) {
    return undefined;
  }
  return _.mapValues(json, (value) => {
    if (_.isPlainObject(value)) {
      return parseJson(value);
    }
    return parseValue(value);
  });
}

export { find };

export type KeyValueMap = {[key: string]: any};

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

/**
 * AST node class
 * @class
 */
class Node {

  static Types = NodeType;

  /**
   * @param type 
   * @param [name]
   * @param [options]
   */
  static create(type: NodeType, name?: string, options?: NodeProps) {
    return new Node(type, name, options);
  }

  /**
   * Create node instance from ZAML source
   * @param source 
   */
  static fromSource(source: string): Node {
    return parse(source);
  }

  /**
   * Create node from json serializable data
   * @param {object} json 
   * @returns {Node}
   */
  static fromJSON(json: JsonNode) {
    return parseJson(json)
  }

  /**
   * Creating fragment node
   * @returns {Node}
   */
  static createFragment() {
    return Node.create(NodeType.FRAGMENT);
  }

  /**
   * Check if a node is valid
   * @param node 
   */
  static validNode(node: any) {
    if (!(node instanceof Node)) {
      throw new TypeError('invalid node');
    }
  }

  /**
   * Check if a node could be parent
   * @param node 
   */
  static validParent(node: any) {
    if (!_.isArray(node.children)) {
      throw new Error('node is not a valid parent');
    }
  }

  /**
   * Check if a node could be parent
   * @param node 
   */
  static validChild(node: any) {
    if (!node.parent) {
      throw new Error('node is not a valid child');
    }
  }

  private _source?: string;
  public type: NodeType;
  public name?: string;
  public start: number = -1;
  public end: number = -1;
  public textStart: number = -1;
  public textEnd: number = -1;
  public states: KeyValueMap;
  public attributes: KeyValueMap;
  public metadata: KeyValueMap;
  public labels: string[];
  public parent?: Node;
  public content?: string;
  public text?: string = '';
  public children: Node[];

  /**
   * @constructor
   * @param type 
   * @param [name]
   * @param [options]
   */
  constructor(type: NodeType, name?: string, options: NodeProps = {}) {
    let {
      source = '',
      start = -1,
      end = -1,
      states,
      attributes = {},
      metadata = {},
      labels = [],
      parent,
      content = '',
      text = '',
    } = options;

    if (type && !NodeTypes.includes(type)) {
      throw new TypeError(`invalid node type ${type}`);
    }

    /**
     * Parser states
     * @type {Object<string,any>}
     */
    this.states = states || {};

    /**
     * @type {NodeType}
     * @description Node type
     */
    this.type = type;

    /**
     * @type {string}
     * @description Node name, for tag, entity
     */
    this.name = undefined;

    /**
     * @type {number}
     * @description Start source position to root node
     */
    this.start = start;

    /**
     * @type {number}
     * @description End source position to root node
     */
    this.end = end;

    /**
     * @type {number}
     * @description Start text source position to root node
     */
    this.textStart = -1;
    

    /**
     * @type {number}
     * @description End text source position to root node
     */
    this.textEnd = -1;
  
    /**
     * @private
     * @type {Node}
     * @description Parent node
     */
    this.parent = parent;

    /**
     * @private
     * @type {string}
     * @description Source code string, only for root node
     */
    this._source = undefined;

    /**
     * @type {string}
     * @description Text content, only for text node
     */
    this.content = undefined;

    /**
     * @type {Node[]}
     * @description Child nodes, only for block node
     */
    this.children = [];

    /**
     * @type {string[]}
     * @description node labels
     */
    this.labels = [];

    /**
     * @type {Object.<string,any>}
     * @description Attributes, for root, tag, entity node
     */
    this.attributes = {};

    /**
     * @type {Object.<string,any>}
     * @description Block metadata
     */
    this.metadata = {};

    /**
     * @type {string[]}
     * @description Node labels
     */
    this.labels = [];

    if (type === NodeType.ROOT) {
      this.start = 0;
      this.end = source.length;
      this._source = source;
    }
    
    if (text) {
      this.appendText(text);
    }

    if (BlockNodeTypes.includes(type) || [NodeType.ENTITY, NodeType.TAG, NodeType.FRAGMENT].includes(type)) {
      if (type !== NodeType.PARAGRAPH) {
        this.name = name;
        this.attributes = attributes;
        this.metadata = metadata;
        this.labels = labels;
      }
    } else if (type === NodeType.TEXT || type === NodeType.COMMENT) {
      this.content = content;
    }
  }

  /**
   * Check if the node is tag
   * @returns {boolean}
   */
  get isTag() {
    return this.type === NodeType.TAG;
  }

  /**
   * Check if the node is wrapping tag
   */
  get isWrappingTag() {
    return this.isTag && WrappingTags.includes(<string> this.name);
  }

  /**
   * Check if the node is block tag
   */
  get isBlockTag() {
    return this.isTag && BlockTags.includes(<string> this.name);
  }

  /**
   * Check if the node is simple block or inline block
   */
  get isSimpleTag() {
    return this.isTag && ['BLOCK', 'INLINE'].includes(<string> this.name);
  }

  /**
   * Property indicates if the node is a block (wrapping other nodes)
   */
  get isBlock() {
    const { type, name } = this;
    return BlockNodeTypes.includes(type) || this.isBlockTag;
  }

  /**
   * If node is inline block
   * @returns {boolean}
   */
  get isInlineBlock() {
    return this.isTag && !this.isBlockTag;
  }

  /**
   * Get parent node, alias for node.parent
   */
  get parentNode() {
    return this.parent;
  }

  /**
   * Get child nodes, alias for node.children
   */
  get childNodes() {
    return this.children;
  }

  /**
   * If the node is root
   */
  get isRoot(): boolean {
    return this.type === NodeType.ROOT;
  }

  /**
   * Get source code of the node
   */
  get source(): string {
    if (this.type === NodeType.ROOT) {
      return this._source || '';
    }
    const rootNode = this.getRootNode();
    if (!rootNode) {
      throw new Error('ROOT node not found');
    }
    return rootNode.source.substring(this.start || 0, this.end);
  }

  /**
   * Get node inner text
   */
  get innerText() {
    if (this.type === NodeType.TEXT) {
      return this.content;
    } else if (this.type === NodeType.ENTITY) {
      const textNode = this.children[0];
      return textNode ? textNode.content : '';
    } else {
      return this.toString();
    }
  }

  /**
   * Check if the node is the first child of its parent
   */
  get isFirstChild() {
    const { parent } = this;
    if (!parent) {
      return false;
    }
    return _.first(parent.children) === this;
  }

  /**
   * Check if the node is the last child of its parent
   * @returns {boolean}
   */
  get isLastChild() {
    const { parent } = this;
    if (!parent) {
      return false;
    }
    return _.last(parent.children) === this;
  }

  /**
   * Siblings from same parent
   * @returns {Node[]}
   */
  get siblings() {
    const { parent } = this;
    if (!parent || !parent.isBlock) {
      return [];
    }
    return parent.children;
  }

  /**
   * Get index of parent children
   * @returns {number}
   */
  get childIndex() {
    const { siblings } = this;
    return siblings.indexOf(this);
  }

  /**
   * Next sibling node
   * @returns {Node}
   */
  get nextSibling() {
    if (!this.parent) return null;
    const { childIndex, siblings } = this;
    return siblings[childIndex + 1] || null;
  }

  /**
   * Previous sibling node
   * @returns {Node}
   */
  get previousSibling() {
    if (!this.parent) return null;
    const { childIndex, siblings } = this;
    return siblings[childIndex - 1] || null;
  }

  /**
   * Property indicates if the root is root (which has no children)
   * @returns {boolean}
   */
  getRootNode() {
    let node: Node = this;
    while (node.parent) {
      node = node.parent;
    }
    if (node === this) {
      return null;
    }
    return node;
  }

  /**
   * Check node match the expression
   * @example
   * `BLOCK`: tag
   * `@LOC`: entity
   * @param expression 
   * @returns {boolean}
   */
  is(expression: string) {
    if (!_.isString(expression)) {
      return false;
    }
    expression = expression.toUpperCase();
    if (/^[A-Z]/.test(expression)) {
      return this.type === NodeType.TAG && this.name === expression;
    } else if (/^#/.test(expression)) {
      return this.type === NodeType.TAG && this.labels.includes(expression.substr(1));
    } else if (/^@[A-Z]/.test(expression)) {
      return this.type === NodeType.ENTITY && this.name === expression.substr(1);
    }
    return false;
  }

  /**
   * whether a node is a descendant of a given node
   * @param node 
   */
  contains(node: Node) {
    Node.validNode(node);
    while (node) {
      if (node === this) {
        return true;
      }
      if (!node.parent) {
        return false;
      }
      node = node.parent;
    }
    return false;
  }

  /**
   * Get the first child of current node
   */
  get firstChild() {
    Node.validParent(this);
    return _.first(this.children);
  }

  /**
   * Get the last child of current node
   */
  get lastChild() {
    Node.validParent(this);
    return _.last(this.children);
  }

  /**
   * Check if this node has any children
   */
  hasChild() {
    return !_.isEmpty(this.children);
  }

  /**
   * Create a child node
   * @param type 
   * @param [name]
   * @param [options]
   */
  createChild(type: NodeType, name?: string, options?: NodeProps) {
    const node = new Node(type, name, options);
    this.appendChild(node);
    return node;
  }

  /**
   * Append a node to children list
   * @param node 
   */
  appendChild(node: Node) {
    return this.insertAt(node, Infinity);
  }

  /**
   * Append text node child
   * @param text 
   * @param [options] 
   */
  appendText(text: string, options?: NodeProps) {
    return this.createChild(NodeType.TEXT, undefined, { ...options, content: text });
  }

  /**
   * Remove 1 or more children
   * @param node
   */
  removeChild(node: Node) {
    _.pull(this.children, node);
    node.parent = undefined;
    return node;
  }

  /**
   * Insert a node at specified position
   * @param node 
   * @param index 
   */
  insertAt(node: Node, index: number) {
    if (node.type === NodeType.FRAGMENT) {
      this.children.splice(index, 0, ...node.children);
      node.children.forEach(child => child.parent = this);
      node.children = [];
    } else {
      this.children.splice(index, 0, node);
      node.parent = this;
    }
    return node;
  }

  /**
   * Insert a node before another
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
   * @param node Node to be inserted
   * @param ref A child node to be referenced
   */
  insertBefore(node: Node, ref: Node) {
    Node.validParent(this);
    const refIndex = this.children.indexOf(ref);
    this.insertAt(node, refIndex);
    return node;
  }

  /**
   * Insert a node after another
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/insertAfter
   * @param node Node to be inserted
   * @param ref A child node to be referenced
   */
  insertAfter(node: Node, ref: Node) {
    Node.validParent(this);
    const refIndex = this.children.indexOf(ref);
    this.insertAt(node, refIndex + 1);
    return node;
  }

  /**
   * Replace a child with another node, assuming current node is a parent
   * @param newChild 
   * @param oldChild 
   * @returns The replaced child
   */
  replaceChild(newChild: Node, oldChild: Node) {
    Node.validParent(this);
    if (newChild.contains(this)) {
      throw new TypeError('the new child contains the parent');
    }
    if (oldChild.parent !== this) {
      throw new TypeError('the old child is not a child of this node');
    }
    this.insertBefore(newChild, oldChild);
    this.removeChild(oldChild);
    return oldChild;
  }

  /**
   * Replace current child node with another node, assuming current node is child
   * @param node Node to be replaced with
   */
  replaceWith(node: Node) {
    Node.validChild(this);
    if (!this.parent) {
      throw new Error('can not replace isolated node');
    }
    this.parent.replaceChild(node, this);
    return node;
  }

  /**
   * Set single attribute value
   * @param {string} key Attribute key
   * @param {any} value Attribute value
   */
  setAttribute(key: string, value: any) {
    _.set(this.attributes, key, value);
  }

  /**
   * Set multiple attributes
   * @param data Key-value pair
   */
  setAttributes(data: KeyValueMap) {
    _.merge(this.attributes, data);
  }

  /**
   * Get attribute value
   * @param key 
   */
  getAttribute(key: string) {
    return _.get(this.attributes, key);
  }

  /**
   * Check if a specified attribute key exists
   * @param key 
   */
  hasAttribute(key: string) {
    return _.has(this.attributes, key)
  }

  /**
   * Remove an attribute
   * @param {string} key 
   */
  removeAttribute(key: string) {
    _.unset(this.attributes, key);
  }

  /**
   * Remove all attributes
   */
  clearAttributes() {
    this.attributes = {};
  }

  /**
   * Set single metadata value
   * @param key Metadata key
   * @param value Metadata value
   */
  setMetadata(key: string, value: any) {
    if (_.isObject(key)) {
      _.merge(this.metadata, key);
    } else {
      _.set(this.metadata, key, value);
    }
  }

  /**
   * Get metadata value
   * @param key 
   */
  getMetadata(key: string) {
    return _.get(this.metadata, key);
  }

  /**
   * Remove a metadata
   * @param key 
   */
  removeMetadata(key: string) {
    _.unset(this.metadata, key);
  }

  /**
   * Remove all metadata
   */
  clearMetadata() {
    this.metadata = {};
  }

  /**
   * Check if a specified metadata key exists
   * @param key 
   */
  hasMetadata(key: string) {
    return _.has(this.metadata, key)
  }

  /**
   * Add label to node
   * @param label 
   */
  addLabel(label: string) {
    if (!_.isString(label)) {
      throw new TypeError('label must be string');
    }
    if (!this.labels.includes(label)) {
      this.labels.push(label);
    }
  }

  /**
   * Check if the node has specified label
   * @param label 
   */
  hasLabel(label: string) {
    return this.labels.includes(label);
  }

  /**
   * Remove label
   * @param label 
   */
  removeLabel(label: string) {
    _.pull(this.labels, label);
  }

  /**
   * Remove all labels
   */
  clearLabels() {
    this.labels = [];
  }

  /**
   * Rebuild text and source position, in case modification has been applied to node
   */
  normalize() {
    const source = this.toSource();
    if (this.isRoot) {
      this._source = source;
    }
    this.toString();
  }

  /**
   * Find matched descendants recursively
   * @param selector Node selector object
   * @param [one] Find the first matched node or a list of node
   */
  findBy(selector: NodeSelector = {}, one = false): Node | Node[] | undefined {
    const { type, name, text, source, label } = selector;
    const finder = one ? findOne : find;
    return finder(this, (node: Node) => {
      let match = true;
      if (type) {
        match = match && type === node.type;
      }
      if (name) {
        match = match && name === node.name;
      }
      if (text && node.type === NodeType.TEXT && node.content) {
        if (_.isRegExp(text)) {
          match = match && !!text.match(node.content);
        } else if (_.isString(text)) {
          match = match && node.content.includes(text);
        } else {
          throw new TypeError('text filter should be RegExp or string');
        }
      }
      if (source && node._source) {
        if (_.isRegExp(source)) {
          match = match && !!source.match(node._source);
        } else if (_.isString(source)) {
          match = match && node._source.includes(source);
        } else {
          throw new TypeError('source filter should be RegExp or string');
        }
      }
      if (label) {
        if (_.isArray(label)) {
          match = match && (_.intersection(this.labels, label).length > 0); 
        } else {
          match = match && this.labels.includes(label);
        }
      }
      return match;
    });;
  }

  /**
   * Find nodes by selector recursively and return the first one
   * @param selector 
   */
  findOneBy(selector: NodeSelector = {}) {
    return this.findBy(selector, true);
  }

  /**
   * Find matched text node by text source range
   * @param start 
   * @param end 
   */
  findTextByRange(start: number, end: number): Node | undefined {
    if (this.textStart === undefined || this.textEnd === undefined) {
      return undefined;
    }
    if (this.textStart <= start && this.textEnd >= end) {
      if (this.type === NodeType.TEXT) {
        return this;
      } else if (this.hasChild()) {
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          const match = child.findTextByRange(start, end);
          if (match) {
            return match;
          }
        };
      }
    }
    return undefined;
  }

  /**
   * Find matched children recursively by callback
   * @param callback
   */
  find(callback: FinderCallback) {
    return find(this, callback);
  }

  /**
   * Find matched children recursively and return the first one
   * @param callback
   */
  findOne(callback: FinderCallback) {
    return findOne(this, callback);
  }

  /**
   * Find all nodes by selector, compared by is()
   * @param selector 
   */
  querySelectorAll(selector: string) {
    return find(this, selector);
  }
  
  /**
   * Find nodes by selector and return the first one, compared by is()
   * @param selector 
   */
  querySelector(selector: string) {
    return findOne(this, selector);
  }

  /**
   * Process text node in current node and parse entities
   */
  createEntities(items: EntityItem[]) {
    if (this.type !== NodeType.TEXT) {
      console.warn('extractEntity() should exec only on text node');
    }
    if (!this.content || _.isEmpty(items)) {
      return;
    }
    const text = this.content;
    items = _.sortBy(items, ['start']);
    const fragment = Node.createFragment();
    let lastPos = 0;
    items.forEach(item => {
      if (item.start >= item.end || item.start < lastPos) {
        return;
      }
      if (item.start > lastPos) {
        fragment.appendText(text.substring(lastPos, item.start));
      }
      const entityNode = fragment.createChild(NodeType.ENTITY, item.type, {
        attributes: item.data,
      });
      entityNode.appendText(text.substring(item.start, item.end));
      lastPos = item.end;
    });
    if (lastPos < text.length) {
      fragment.appendText(text.substr(lastPos));
    }
    this.replaceWith(fragment);
  }

  /**
   * Create entity nodes based on text source position
   * @param {Array.<{start:number,end:number,type:string,data:any}>} entities 
   */
  createEntitiesFromText(entities: EntityItem[]) {
    this.toString();
    const cache: Map<Node, EntityItem[]> = new Map();
    _.each(entities, (item: EntityItem) => {
      const textNode = this.findTextByRange(item.start, item.end);
      if (textNode === undefined) {
        return;
      }
      if (cache.has(textNode)) {
        (<EntityItem[]> cache.get(textNode)).push(item);
      } else {
        cache.set(textNode, [item]);
      }
    });
    cache.forEach((items, textNode) => {
      textNode.createEntities(items.map(item => ({
        ...item,
        start: item.start - (textNode.textStart || 0),
        end: item.end - (textNode.textStart || 0),
      })));
    });
  }

  /**
   * Extract entities from text node
   */
  async extractEntities(extractor: Extractor) {
    const nodeList = this.find((node: Node) => {
      return node.type === NodeType.TEXT && !!node.parent && node.parent.type !== NodeType.ENTITY && !!node.content;
    });
    const textList = nodeList.map(node => node.content);
    let result: EntityItem[][];
    if (_.isFunction(extractor)) {
      result = textList.map(text => extractor(<string> text));
    } else if (_.isFunction((<ExtractorInstance> extractor).extract)) {
      result = await (<ExtractorInstance> extractor).extract(<string[]>textList);
    } else {
      throw new TypeError('invalid extractor');
    }
    nodeList.forEach((node, i) => {
      const items = result[i];
      if (!_.isArray(items)) {
        throw new Error('invalid extraction result');
      }
      node.createEntities(items);
    });
  }

  /**
   * Build plain text of the node (stripping tags & entities)
   * @param [options]
   */
  toString(options?: StringifyOptions) {
    return stringify(this, options);
  }

  /**
   * Build source code of the node
   * @param [options]
   */
  toSource(options: StringifyOptions = {}) {
    return stringify(this, { ...options, toSource: true });
  }

  /**
   * Convert node to JSON serializable object
   * @param options 
   */
  toJSON(options: JsonOptions = {}): JsonNode {
    const {
      position = false,
      textPosition = false,
    } = options;
    return <any> _.omitBy({
      type: this.type,
      name: this.name,
      content: this.content,
      attributes: toJsonMap(this.attributes),
      metadata: toJsonMap(this.metadata),
      labels: this.labels.length ? this.labels : undefined,
      position: position ? {
        start: this.start,
        end: this.end,
      } : undefined,
      textPosition: textPosition ? {
        start: this.textStart,
        end: this.textEnd,
      } : undefined,
      children: _.isEmpty(this.children) ? undefined : this.children.map(child => child.toJSON(options)),
    }, _.isUndefined);
  }

}

export default Node;
