import _ from 'lodash';
import { stringify, parseValue } from './util';
import { parse } from '.';

/**
 * @enum {NodeType}
 */
const NodeType = {
  FRAGMENT: 'fragment',
  ROOT: 'root',
  PARAGRAPH: 'paragraph',
  TAG: 'tag',
  ENTITY: 'entity',
  TEXT: 'text',
  COMMENT: 'comment',
}

const NodeTypes = _.values(NodeType);

const BlockNodeTypes = [
  NodeType.ROOT,
  NodeType.PARAGRAPH,
];

const BlockTags = [
  'BLOCK',
  'QUOTE',
  'SECTION',
  'HEADER',
  'FOOTER',
];

const WrappingTags = [
  ...BlockTags,
  'INLINE',
];

export {
  NodeType,
  BlockNodeTypes,
  BlockTags,
}

/**
 * Recursive node finder
 * @param {Node} node 
 * @param {function(Node):boolean|string} tester 
 * @param {Node[]} [result=[]] Node list
 * @returns {Node[]}
 */
function find(node, tester = () => true, result = []) {
  if (_.isString(tester) ? node.is(tester) : tester(node)) {
    result.push(node);
  }
  if (!_.isEmpty(node.children)) {
    for (const childNode of node.children) {
      find(childNode, tester, result);
    }
  }
  return result;
}

/**
 * Recursive node finder
 * @param {Node} node 
 * @param {function(Node):boolean|string} tester 
 * @returns {Node}
 */
function findOne(node, tester = () => true) {
  if (tester(node)) {
    return node;
  }
  if (!_.isEmpty(node.children)) {
    for (const childNode of node.children) {
      const result = findOne(childNode, tester);
      if (result) {
        return result;
      }
    };
  }
  return null;
}

function parseJson(json) {
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
 * @param {Object<string,any>} map 
 */
function toJsonMap(map) {
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

function parseJsonMap(json) {
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

/**
 * AST node class
 * @class
 */
class Node {

  static Types = NodeType;

  /**
   * @param {NodeType} type 
   * @param {string} [name]
   * @param {object} [options]
   */
  static create(type, name, options) {
    return new Node(type, name, options);
  }

  /**
   * Create node instance from ZAML source
   * @param {string} source 
   * @returns {Node}
   */
  static fromSource(source) {
    return parse(source);
  }

  /**
   * Create node from json serializable data
   * @param {object} json 
   * @returns {Node}
   */
  static fromJSON(json) {
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
   * @param {any} node 
   */
  static validNode(node) {
    if (!(node instanceof Node)) {
      throw new TypeError('invalid node');
    }
  }

  /**
   * Check if a node could be parent
   * @param {any} node 
   */
  static validParent(node) {
    if (!_.isArray(node.children)) {
      throw new Error('node is not a valid parent');
    }
  }

  /**
   * Check if a node could be parent
   * @param {any} node 
   */
  static validChild(node) {
    if (!node.parent) {
      throw new Error('node is not a valid child');
    }
  }

  /**
   * @constructor
   * @param {NodeType} type 
   * @param {string} [name]
   * @param {object} [options]
   * @param {string} [options.source]
   * @param {number} [options.start]
   * @param {number} [options.end]
   * @param {Object.<string,any>} [options.attributes]
   * @param {Node} [options.parent]
   */
  constructor(type, name = null, options = {}) {
    let {
      source = '',
      start = -1,
      end = -1,
      states,
      attributes = {},
      metadata = {},
      labels = [],
      parent = null,
      content = '',
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
   * @returns {boolean}
   */
  get isWrappingTag() {
    return this.isTag && WrappingTags.includes(this.name);
  }

  /**
   * Check if the node is block tag
   * @returns {boolean}
   */
  get isBlockTag() {
    return this.isTag && BlockTags.includes(this.name);
  }

  /**
   * Property indicates if the node is a block (wrapping other nodes)
   * @returns {boolean}
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
    return this.type === NodeType.TAG && this.name === 'INLINE';
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
   * @returns {boolean}
   */
  get isRoot() {
    return this.type === NodeType.ROOT;
  }

  /**
   * Get source code of the node
   * @returns {string}
   */
  get source() {
    if (this.type === NodeType.ROOT) {
      return this._source;
    }
    const rootNode = this.getRootNode();
    if (!rootNode) {
      throw new Error('ROOT node not found');
    }
    return rootNode.source.substring(this.start, this.end);
  }

  /**
   * Get node inner text
   * @returns {string}
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
   * @returns {boolean}
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
    let node = this;
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
   * `block`: tag
   * `@loc`: entity
   * @param {string} expression 
   * @returns {boolean}
   */
  is(expression) {
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
   * @param {Node} node 
   * @returns {boolean}
   */
  contains(node) {
    Node.validNode(node);
    while (node) {
      if (node === this) {
        return true;
      }
      node = node.parent;
    }
    return false;
  }

  /**
   * Get the first child of current node
   * @returns {Node}
   */
  get firstChild() {
    Node.validParent(this);
    return _.first(this.children);
  }

  /**
   * Get the last child of current node
   * @returns {Node}
   */
  get lastChild() {
    Node.validParent(this);
    return _.last(this.children);
  }

  /**
   * Check if this node has any children
   * @returns {boolean}
   */
  hasChild() {
    return !_.isEmpty(this.children);
  }

  /**
   * @param {NodeType} type 
   * @param {string} [name]
   * @param {object} [options]
   * @returns {Node}
   */
  createChild(type, name, options) {
    const node = new Node(type, name, options);
    this.appendChild(node);
    return node;
  }

  /**
   * Append a node to children list
   * @param {Node} node 
   */
  appendChild(node) {
    return this.insertAt(node, Infinity);
  }

  /**
   * Append text node child
   * @param {string} text 
   * @param {object} options 
   * @returns {Node}
   */
  appendText(text, options) {
    return this.createChild(NodeType.TEXT, null, { ...options, content: text });
  }

  /**
   * Remove 1 or more children
   * @param {Node} node
   * @returns {Node}
   */
  removeChild(node) {
    _.pull(this.children, node);
    node.parent = null;
    return node;
  }

  /**
   * Insert a node at specified position
   * @param {Node} node 
   * @param {number} index 
   * @returns {Node}
   */
  insertAt(node, index) {
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
   * @param {Node} node 
   * @param {Node} ref 
   * @returns {Node}
   */
  insertBefore(node, ref) {
    Node.validParent(this);
    const refIndex = this.children.indexOf(ref);
    this.insertAt(node, refIndex);
    return node;
  }

  /**
   * Insert a node after another
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/insertAfter
   * @param {Node} node 
   * @param {Node} ref 
   * @returns {Node}
   */
  insertAfter(node, ref) {
    Node.validParent(this);
    const refIndex = this.children.indexOf(ref);
    this.insertAt(node, refIndex + 1);
    return node;
  }

  /**
   * Replace a child with another node, assuming current node is a parent
   * @param {Node} newChild 
   * @param {Node} oldChild 
   * @returns {Node} the replaced child
   */
  replaceChild(newChild, oldChild) {
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
   * @param {Node} node 
   * @returns {Node}
   */
  replaceWith(node) {
    Node.validChild(this);
    this.parent.replaceChild(node, this);
    return node;
  }

  /**
   * Set attribute
   * @param {string} key Attribute key
   * @param {any} value Attribute value
   */
  setAttribute(key, value) {
    _.set(this.attributes, key, value);
  }

  /**
   * Set multiple attributes
   * @param {Object.<string,any>} data Key - value pair
   */
  setAttributes(data) {
    _.merge(this.attributes, data);
  }

  /**
   * Get attribute value
   * @param {string} key 
   */
  getAttribute(key) {
    return _.get(this.attributes, key);
  }

  /**
   * Check if a specified attribute key exists
   * @param {string} key 
   * @returns {boolean}
   */
  hasAttribute(key) {
    return _.has(this.attributes, key)
  }

  /**
   * Remove an attribute
   * @param {string} key 
   */
  removeAttribute(key) {
    _.unset(this.attributes, key);
  }

  /**
   * Remove all attributes
   */
  clearAttributes() {
    this.attributes = {};
  }

  /**
   * Set metadata
   * @param {string|object} key Attribute key
   * @param {any} value Attribute value
   */
  setMetadata(key, value) {
    if (_.isObject(key)) {
      _.merge(this.metadata, key);
    } else {
      _.set(this.metadata, key, value);
    }
  }

  /**
   * Get metadata value
   * @param {string} key 
   */
  getMetadata(key) {
    return _.get(this.metadata, key);
  }

  /**
   * Remove a metadata
   * @param {string} key 
   */
  removeMetadata(key) {
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
   * @param {string} key 
   * @returns {boolean}
   */
  hasMetadata(key) {
    return _.has(this.metadata, key)
  }

  /**
   * Add label to node
   * @param {string} label 
   */
  addLabel(label) {
    if (!_.isString(label)) {
      throw new TypeError('label must be string');
    }
    if (!this.labels.includes(label)) {
      this.labels.push(label);
    }
  }

  /**
   * Check if the node has specified label
   * @param {string} label 
   * @returns {boolean}
   */
  hasLabel(label) {
    return this.labels.includes(label);
  }

  /**
   * Remove label
   * @param {string} label 
   */
  removeLabel(label) {
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
   * @param {object} selector 
   * @param {NodeType} [selector.type] Node type
   * @param {string} [selector.name] Node name
   * @param {RegExp|string} [selector.text] Including text or pattern
   * @param {string|string[]} [selector.label] Label names
   * @param {RegExp|string} [selector.source] Pattern to match source
   * @param {boolean} [one]
   * @returns {Node|Node[]}
   */
  findBy(selector = {}, one = false) {
    const { type, name, text, source, label } = selector;
    const finder = one ? findOne : find;
    return finder(this, node => {
      let match = true;
      if (type) {
        match = match && type === node.type;
      }
      if (name) {
        match = match && name === node.name;
      }
      if (text && node.type === NodeType.TEXT) {
        match = match && (_.isRegExp(text) ? text.match(node.content) : node.content.includes(text));
      }
      if (label) {
        if (!_.isArray(label)) {
          label = [label];
        }
        match = match && (_.intersection(this.labels, label).length > 0);
      }
      if (source) {
        match = match && (_.isRegExp(source) ? source.match(node.source) : node.source.includes(source));
      }
      return match;
    });;
  }

  /**
   * Find nodes by selector recursively and return the first one
   * @param {any} selector 
   */
  findOneBy(selector = {}) {
    return this.findBy(selector, true);
  }

  /**
   * Find matched text node by text source range
   * @param {number} start 
   * @param {number} end 
   * @returns {Node}
   */
  findTextByRange(start, end) {
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
    return null;
  }

  /**
   * Find matched children recursively by callback
   * @param {NodeTester} callback
   * @returns {Node[]}
   */
  find(callback) {
    return find(this, callback);
  }

  /**
   * Find matched children recursively and return the first one
   * @param {NodeTester} callback
   * @returns {Node}
   */
  findOne(callback) {
    return findOne(this, callback);
  }

  /**
   * Find all nodes by selector, compared by is()
   * @param {string} selector 
   * @returns {Node}
   */
  querySelectorAll(selector) {
    return find(this, selector);
  }
  
  /**
   * Find nodes by selector and return the first one, compared by is()
   * @param {string} selector 
   * @returns {Node}
   */
  querySelector(selector) {
    return findOne(this, selector);
  }

  /**
   * Process text node in current node and parse entities
   * @param {Array.<{start:number,end:number,type:string,attributes:any}>} items 
   */
  createEntities(items) {
    if (!this.type === NodeType.TEXT) {
      console.warn('extractEntity() should exec only on text node');
    }
    if (_.isEmpty(items)) {
      return;
    }
    items = _.sortBy(items, ['start']);
    const fragment = Node.createFragment();
    const text = this.content;
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
   * @param {Array.<{start:number,end:number,type:string,attributes:any}>} entities 
   */
  createEntitiesFromText(entities) {
    this.toString();
    const cache = new Map();
    _.each(entities, item => {
      const textNode = this.findTextByRange(item.start, item.end);
      if (!textNode) return;
      if (cache.has(textNode)) {
        cache.get(textNode).push(item);
      } else {
        cache.set(textNode, [item]);
      }
    });
    cache.forEach((items, textNode) => {
      textNode.createEntities(items.map(item => ({
        ...item,
        start: item.start - textNode.textStart,
        end: item.end - textNode.textStart,
      })));
    });
  }

  /**
   * Extract entities from text node
   * @param {function|{extract:function}} extractor 
   */
  async extractEntities(extractor) {
    const nodeList = this.find(node => {
      return node.type === NodeType.TEXT && node.parent && node.parent.type !== NodeType.ENTITY;
    });
    const textList = nodeList.map(node => node.content);
    let result;
    if (_.isFunction(extractor)) {
      result = textList.map(text => extractor(text));
    } else if (_.isFunction(extractor.extract)) {
      result = await extractor.extract(textList);
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
   * @returns {string}
   */
  toString() {
    return stringify(this);
  }

  /**
   * Build source code of the node
   * @param {object} options
   * @param {number} [options.space] Source indenting space
   * @returns {string}
   */
  toSource(options = {}) {
    return stringify(this, { ...options, toSource: true });
  }

  /**
   * Convert node to JSON serializable object
   * @param {object} options 
   * @param {boolean} [options.position=false]
   * @param {boolean} [options.textPosition=false]
   * @returns {object}
   */
  toJSON(options = {}) {
    const {
      position = false,
      textPosition = false,
    } = options; 
    return _.omitBy({
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
