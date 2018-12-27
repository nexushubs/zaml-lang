import * as _ from 'lodash';
import { stringify, parseValue, StringifyOptions } from './util';
import { parse, TextStream } from '.';

const nanoid = require('nanoid');

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
  'SENTENCE',
  'NUM',
  'HEADING',
];

export type ExtractorFunction = (text: string) => EntityItem[];

export interface ExtractorInstance {
  extract: (text: string[]) => EntityItem[][];
}

export type Extractor = ExtractorFunction | ExtractorInstance;

export type FinderCallback = (node: Node) => boolean;

export type FinderPattern = FinderCallback | string;

const defaultFinderCallback: FinderCallback = (node: Node) => true;

export function testNode(pattern: FinderPattern, node: Node): boolean {
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
export function find(node: Node, pattern: FinderPattern = defaultFinderCallback, result: Node[] = []): Node[] {
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
export function findOne(node: Node, pattern: FinderPattern = defaultFinderCallback): Node | undefined {
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

export function parseJson(json: JsonNode) {
  const node = Node.create(json.type, json.name, {
    id: json.id,
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
export function toJsonMap(map?: KeyValueMap): KeyValueMap | undefined{
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

export function parseJsonMap(json?: KeyValueMap): KeyValueMap | undefined {
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

export type KeyValueMap = {[key: string]: any};

export interface NodeProps {
  id?: string;
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
  internalId?: boolean;
}

export interface SourceMapRange {
  start: string;
  end: string;
}

export interface JsonNode {
  id?: string;
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
  startNode: Node,
  startOffset: number,
  endNode: Node,
  endOffset: number,
}

/**
 * AST node class
 * @class
 */
class Node {

  static Types = NodeType;

  /**
   * Create node, shortcut for constructor 
   * @param type 
   * @param [name]
   * @param [props]
   */
  static create(type: NodeType, name?: string, props?: NodeProps) {
    return new Node(type, name, props);
  }

  /**
   * Create paragraph node
   * @param [props]
   */
  static createParagraph(props?: NodeProps) {
    return new Node(NodeType.PARAGRAPH, undefined, props);
  }

  /**
   * Create root node
   * @param [props]
   */
  static createRoot(props?: NodeProps) {
    return new Node(NodeType.ROOT, undefined, props);
  }

  /**
   * Create text node
   * @param [props]
   */
  static createText(content: string, props?: NodeProps) {
    return new Node(NodeType.TEXT, undefined, { ...props, content });
  }
  
  /**
   * Create a common tag
   * @param tagName Tag name, e.g. `'BLOCK'`, `'INLINE'`, `'SENTENCE'`
   * @param [props]
   */
  static createTag(tagName: string, props?: NodeProps) {
    return new Node(NodeType.TAG, tagName, props);
  }
  
  /**
   * Create block tag
   * @param [props]
   */
  static createBlock(props?: NodeProps) {
    return new Node(NodeType.TAG, 'BLOCK', props);
  }

  /**
   * Create inline block tag
   * @param [props]
   */
  static createInlineBlock(props?: NodeProps) {
    return new Node(NodeType.TAG, 'INLINE', props);
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
   * @param json 
   */
  static fromJSON(json: JsonNode) {
    return parseJson(json)
  }

  /**
   * Creating fragment node
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

  static findCommonAncestor(n1: Node, n2: Node): { ancestor?: Node, paths: [Node[], Node[]]} | undefined {
    const path1 = n1.path;
    const path2 = n2.path;
    let ancestor: Node | undefined;
    while (path1.length > 0 && path2.length > 0) {
      if (_.first(path1) !== _.first(path2)) {
        break;
      }
      ancestor = path1.shift();
      path2.shift();
    }
    if (!ancestor) {
      return undefined;
    }
    return {
      ancestor,
      paths: [path1, path2],
    };
  }

  /**
   * Find the common ancestor of the range, and creates a wrapping block (or tag) with the nodes
   * within the range in it.
   * 
   * If the range is within a block (BLOCK tag or paragraph), a inline tag is created, otherwise
   * a BLOCK tag is created.
   * 
   * If a BLOCK tag is used, `startOffset` and `endOffset` will be ignored, to avoid block overlap.
   * 
   * If either `startNode` or `endNode` is not direct child of common ancestor nor the node is not
   * sided aligned with the direct child of the ancestor, text offset will be ignored to avoid
   * split of tags or entity.
   * 
   * @param range A range object which contains start and end node, alone with their text offset
   * @param props Custom tag props
   * @param tagName If inline tag is needed, specify the tag name instead of default `'INLINE'`
   */
  static createBlockByRange(range: NodeRange, tagName: string = 'INLINE', props?: NodeProps) {
    const { startNode, startOffset, endNode, endOffset } = range;
    if (!_.isNumber(startOffset) || !_.isNumber(endOffset)) {
      throw new TypeError('range offset must be number');
    }
    if (!startNode.isText || !endNode.isText) {
      throw new TypeError('range node must be text');
    }
    if (!startNode.content || !endNode.content) {
      throw new Error('invalid text node');
    }
    if (startNode === endNode) {
      if (startOffset < 0 || startOffset > startNode.content.length ||
        endOffset < 0 || endOffset > startNode.content.length) {
        throw new RangeError('sub text out of range');
      }
      if (!startNode.parent) {
        throw new Error('can not create block on isolated text node');
      }
      const { parent } = startNode;
      const fragment = Node.createFragment();
      const block = Node.createTag(tagName, {
        ...props,
        text: startNode.content.substring(startOffset, endOffset),
      });
      if (startOffset > 0) {
        fragment.appendText(startNode.content.substring(0, startOffset));
      }
      fragment.appendChild(block)
      if (endOffset < startNode.content.length) {
        fragment.appendText(startNode.content.substring(endOffset));
      }
      parent.insertBefore(fragment, startNode);
      parent.removeChild(startNode);
      return block;
    } else {
      const result = Node.findCommonAncestor(startNode, endNode);
      if (!result || !result.ancestor) return undefined;
      const { ancestor, paths } = result;
      let baseStartNode = paths[0][0];
      let baseEndNode = paths[1][0];
      const _startIndex = ancestor.children.indexOf(baseStartNode);
      const _endIndex = ancestor.children.indexOf(baseEndNode);
      const [startIndex, endIndex] = [_startIndex, _endIndex].sort();
      if (_startIndex !== startIndex) {
        [baseStartNode, baseEndNode] = [baseEndNode, baseStartNode];
      }
      const fragment = ancestor.extractNodes(startIndex, endIndex + 1);
      const isStartSided = startNode.isSidedDescendantOf(baseStartNode, 'start') && startOffset === 0;
      const isEndSided = endNode.isSidedDescendantOf(baseEndNode, 'end') && endOffset === endNode.content.length;
      const foundBlock = ancestor.findOne(n => n.isBlock);
      const hasBlock = foundBlock && foundBlock !== ancestor;
      if (!hasBlock && (
        (paths[0].length === 1 || isStartSided) ||
        (paths[1].length === 1 || isEndSided)
      )) {
        const inserting = Node.createFragment();
        const startText = startNode.content;
        if (startOffset > 0) {
          baseStartNode.content = startText.substring(startOffset);
          inserting.appendText(startText.substring(0, startOffset));
        }
        const block = Node.createTag(tagName, props);
        block.appendChild(fragment);
        inserting.appendChild(block);
        const endText = endNode.content;
        if (endOffset < endNode.content.length) {
          baseEndNode.content = endText.substring(0, endOffset);
          inserting.appendText(endText.substring(endOffset));
        }
        ancestor.insertAt(inserting, startIndex);
        return block;
      } else {
        const block = Node.createBlock(props);
        ancestor.insertAt(block, startIndex);
        block.appendChild(fragment);
        return block;
      }
    }
  }

  private _source?: string;
  public id: string = '';
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
   * @param [props]
   */
  constructor(type: NodeType, name?: string, props: NodeProps = {}) {
    let {
      id,
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
    } = props;

    if (type && !NodeTypes.includes(type)) {
      throw new TypeError(`invalid node type ${type}`);
    }

    this.id = id || nanoid();
    this.states = states || {};
    this.type = type;
    this.name = undefined;
    this.start = start;
    this.end = end;
    this.textStart = -1;
    this.textEnd = -1;
    this.parent = parent;
    this._source = undefined;
    this.content = undefined;
    this.children = [];
    this.labels = [];
    this.attributes = {};
    this.metadata = {};
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
   * Get a short descriptor to identify node's type and basic information
   */
  get descriptor() {
    if (this.isEntity || this.isTag || this.isText) {
      return `${this.openDescriptorStart}${this.openDescriptorEnd}`;
    } else {
      return this.type;
    }
  }

  get openDescriptorStart() {
    switch (this.type) {
      case NodeType.ENTITY:
        return `[${this.name}`;
      case NodeType.TAG:
        return `{${this.name}`;
      case NodeType.TEXT:
        return '(text';
      default:
        return `<${this.type}`;
    }
  }

  get openDescriptorEnd() {
    switch (this.type) {
      case NodeType.ENTITY:
        return `]`;
      case NodeType.TAG:
        return `}`;
      case NodeType.TEXT:
        return '';
      default:
        return '>';
    }
  }

  get closingDescriptor() {
    switch (this.type) {
      case NodeType.ENTITY:
        return `[/${this.name}]`;
      case NodeType.TAG:
        return `{${this.name}}`;
      case NodeType.TEXT:
        return ')';
      default:
        return `</${this.type}>`;
    }
  }

  get selector() {
    let selector = this.descriptor;
    if (this.parent) {
      selector = `${this.descriptor}[${this.childIndex}]`;
    }
    return selector;
  }

  get rootSelector() {
    if (!this.parent) {
      return this.selector;
    }
    const selectors = this.path.map(node => node.selector);
    return selectors.join(' > ');
  }

  /**
   * Check if the node is root
   */
  get isRoot(): boolean {
    return this.type === NodeType.ROOT;
  }

  /**
   * Check if the node is paragraph
   */
  get isParagraph() : boolean {
    return this.type === NodeType.PARAGRAPH;
  }

  /**
   * Check if the node is tag
   */
  get isTag() {
    return this.type === NodeType.TAG;
  }

  /**
   * Check if the node is entity
   */
  get isEntity() {
    return this.type === NodeType.ENTITY;
  }

  /**
   * Check if the node is text
   */
  get isText() {
    return this.type === NodeType.TEXT;
  }

  /**
   * Check if the node is text and not wrapping by entity
   */
  get isPlainText() {
    return this.type === NodeType.TEXT && (!this.parent || this.parent.type !== NodeType.ENTITY);
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
   */
  get siblings() {
    const { parent } = this;
    if (!parent) {
      return [this];
    }
    return parent.children;
  }

  /**
   * Get index of parent children
   */
  get childIndex() {
    const { siblings } = this;
    return siblings.indexOf(this);
  }

  /**
   * Next sibling node
   */
  get nextSibling() {
    if (!this.parent) return undefined;
    const { childIndex, siblings } = this;
    return siblings[childIndex + 1] || undefined;
  }

  /**
   * Previous sibling node
   */
  get previousSibling() {
    if (!this.parent) return undefined;
    const { childIndex, siblings } = this;
    return siblings[childIndex - 1] || undefined;
  }

  /**
   * Property indicates if the root is root (which has no children)
   */
  getRootNode() {
    let node: Node = this;
    while (node.parent) {
      node = node.parent;
    }
    if (node === this) {
      return undefined;
    }
    return node;
  }

  /**
   * Check node match the expression
   * @example
   * `BLOCK`: tag
   * `@LOC`: entity
   * @param expression 
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
   * Get a list of ancestors
   */
  get path() {
    const list: Node[] = [];
    let node: Node | undefined = this;
    while (node) {
      list.unshift(node);
      node = node.parent;
    }
    return list;
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
    return this.children.length > 0;
  }

  /**
   * Check if this node is the only child of its parent
   */
  get isOnlyChild(): boolean {
    if (!this.parent) {
      return false;
    }
    return this.parent.children.length === 1;
  }

  /**
   * Check if the node is only descendant of another node;
   * @param ancestor 
   */
  isOnlyDescendantOf(ancestor: Node): boolean {
    let node: Node = ancestor;
    while (node) {
      if (node.children.length !== 1) {
        return false;
      }
      node = node.children[0];
      if (node === this) {
        return true;
      }
    }
    return false;
  }

  /**
   * Check if the node is only descendant of another node;
   * @param ancestor 
   */
  isSidedDescendantOf(ancestor: Node, side: 'start' | 'end'): boolean {
    let node: Node | undefined = ancestor;
    while (node) {
      if (node.children.length === 0) {
        return false;
      }
      node = side === 'start' ? node.firstChild : node.lastChild;
      if (node === this) {
        return true;
      }
    }
    return false;
  }

  /**
   * Create a child node
   * @param type 
   * @param [name]
   * @param [props]
   */
  createChild(type: NodeType, name?: string, props?: NodeProps) {
    const node = new Node(type, name, props);
    this.appendChild(node);
    return node;
  }

  /**
   * Insert a node at the beginning of the children
   * @param node 
   */
  prependChild(node: Node) {
    return this.insertAt(node, 0);
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
   * @param [props] 
   */
  appendText(text: string, props?: NodeProps) {
    if (this.type === NodeType.TEXT) {
      this.content = this.content || '';
      this.content += text;
      return this;
    } else {
      if (this.lastChild && this.lastChild.isText) {
        this.lastChild.content += text;
      } else {
        const child = Node.create(NodeType.TEXT, undefined, { ...props, content: text });
        this.appendChild(child);
      }
    }
  }

  /**
   * Add text node child at the beginning
   * @param text 
   * @param [props] 
   */
  prependText(text: string, props?: NodeProps) {
    if (this.type === NodeType.TEXT) {
      this.content = `${text}${this.content || ''}`;
      return this;
    } else {
      const child = Node.create(NodeType.TEXT, undefined, { ...props, content: text });
      this.prependChild(child);
    }
  }

  /**
   * Remove one child
   * @param node
   */
  removeChild(child: Node) {
    _.pull(this.children, child);
    child.parent = undefined;
    return child;
  }

  /**
   * Remove one child by index
   * @param index
   */
  removeChildAt(index: number) {
    const child = this.children[index];
    _.pullAt(this.children, index);
    child.parent = undefined;
    return child;
  }

  /**
   * Insert a node at specified position
   * @param node 
   * @param index 
   */
  insertAt(node: Node, index: number) {
    if (node.type === NodeType.FRAGMENT) {
      this.children.splice(index, 0, ...node.children);
      node.children.forEach(child => {
        child.parent = this;
      });
      node.children = [];
    } else {
      this.children.splice(index, 0, node);
      if (node.parent) {
        node.parent.removeChild(node);
      }
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
   * Get node by id
   * @param id 
   */
  getNodeById(id: string) {
    return findOne(this, node => node.id === id);
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
  findOneBy(selector: NodeSelector = {}): Node {
    return <Node> this.findBy(selector, true);
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
  querySelectorAll(selector: string): Node[] {
    return find(this, selector);
  }
  
  /**
   * Find nodes by selector and return the first one, compared by is()
   * @param selector 
   */
  querySelector(selector: string): Node | undefined {
    return findOne(this, selector);
  }

  /**
   * Split node text into tag wrapped sections, e.g. splitting sentences
   * 
   * @example 
   * node.splitText('!?.');
   * @param separator RegExp or character list in string, to split
   * @param tagName Custom tag name, like `'SENTENCE'`
   */
  splitText(separator: RegExp | string, tagName = 'INLINE', props?: NodeProps) {
    const pattern = separator instanceof RegExp ? separator : new RegExp(`[${_.escapeRegExp(separator)}]`, 'g');
    console.log(pattern);
    const list = this.find(node => node.isParagraph || node.isInlineBlock);
    list.forEach(node => {
      if (node.firstChild && node.firstChild.isOnlyChild && node.firstChild.isText) {
        if (node.isParagraph) {
          const block = Node.createTag(tagName, props);
          block.appendChild(node.firstChild);
          node.appendChild(block);
          return;
        } else if (node.name === tagName) {
          return;
        }
      }
      const text = node.toString();
      let pos = 0;
      let lastPos = 0;
      pattern.lastIndex = 0;
      while (pattern.exec(text)) {
        // recreate text offset for each node
        node.toString();
        pos = pattern.lastIndex;
        const textNodes = node.children.filter(n => n.isText);
        const startNode = textNodes.find(tn => tn.textStart <= lastPos && tn.textEnd > lastPos);
        const endNode = textNodes.find(tn => tn.textStart < pos && tn.textEnd >= pos);
        if (!startNode || !endNode) {
          break;
        }
        const range = {
          startNode,
          startOffset: lastPos - startNode.textStart,
          endNode,
          endOffset: pos - endNode.textStart,
        }
        Node.createBlockByRange(range, tagName, props);
        lastPos = pos;
      }
    });
  }

  /**
   * Merge neighbor text nodes
   */
  mergeText() {
    let stack: Node[] = [];
    const childLength = this.children.length;
    this.children.forEach((child, i) => {
      if (child.isText) {
        stack.push(child);
      }
      if (!child.isText || i === childLength - 1) {
        if (stack.length > 1) {
          const merged = stack.map(child => child.content).join('');
          const textNode = Node.createText(merged);
          this.insertBefore(textNode, stack[0]);
          let n: Node | undefined;
          while (n = stack.shift()) {
            this.removeChild(n);
          }
        }
        stack = [];
      }
    });
  }

  extractNodes(startIndex: number, endIndex: number) {
    const fragment = Node.createFragment();
    if (
      startIndex < 0 || startIndex >= this.children.length ||
      endIndex < 0 || endIndex > this.children.length
    ) {
      throw new RangeError('invalid range of children');
    }
    const nodes = this.children.slice(startIndex, endIndex);
    nodes.forEach(child => {
      fragment.appendChild(child);
    })
    return fragment;
  }

  /**
   * Remove a element and move its children to its parent
   */
  flatten() {
    if (!this.parent) {
      return;
    }
    const { parent } = this;
    const fragment = this.extractNodes(0, this.children.length);
    parent.insertBefore(fragment, this);
    parent.removeChild(this);
    parent.mergeText();
    return parent;
  }

  /**
   * Process text node in current node and parse entities
   */
  createEntities(items: EntityItem[]) {
    const entityNodes: Node[] = [];
    if (this.type !== NodeType.TEXT) {
      console.warn('extractEntity() should exec only on text node');
    }
    if (!this.content || _.isEmpty(items)) {
      return entityNodes;
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
      entityNodes.push(entityNode);
      lastPos = item.end;
    });
    if (lastPos < text.length) {
      fragment.appendText(text.substr(lastPos));
    }
    this.replaceWith(fragment);
    return entityNodes;
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
   * Remove wrapping entity and put text back
   */
  removeEntity() {
    if (this.type !== NodeType.ENTITY || !this.firstChild || this.firstChild.type !== NodeType.TEXT) {
      throw new Error('invalid entity');
    };
    if (!this.parent) {
      throw new Error('can not remove isolated entity');
    }
    let text = this.firstChild.content || '';
    let textNode: Node | undefined;
    const { parent, previousSibling, nextSibling } = this;
    if (previousSibling && previousSibling.isText) {
      textNode = previousSibling;
    }
    if (textNode) {
      textNode.appendText(text);
    } else {
      textNode = Node.create(NodeType.TEXT, undefined, { content: text });
      parent.insertBefore(textNode, this);
    }
    if (nextSibling && nextSibling.isText) {
      textNode.appendText(nextSibling.content || '');
      parent.removeChild(nextSibling);
    }
    parent.removeChild(this);
    return textNode;
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
      internalId = false,
    } = options;
    return <any> _.omitBy({
      id: internalId ? this.id : undefined,
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
