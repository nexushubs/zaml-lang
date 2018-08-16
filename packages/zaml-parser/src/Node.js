import _ from 'lodash';
import { stringify } from './util';

/**
 * @typedef {string} NodeType
 */

/**
 * @enum {NodeType}
 */
const NODE_TYPES = {
  FRAGMENT: 'fragment',
  ROOT: 'root',
  PARAGRAPH: 'paragraph',
  TAG: 'tag',
  ENTITY: 'entity',
  TEXT: 'text',
}

const BLOCK_NODE_TYPES = [
  NODE_TYPES.ROOT,
  NODE_TYPES.PARAGRAPH,
];

const BLOCK_TAGS = [
  'BLOCK',
  'QUOTE',
];

export {
  NODE_TYPES,
  BLOCK_NODE_TYPES,
  BLOCK_TAGS,
}

/**
 * Recursive node finder
 * @param {Node} node 
 * @param {function(Node):boolean} tester 
 * @param {Node[]} [result=[]] Node list
 * @returns {Node[]}
 */
function recursiveFinder(node, tester, result = []) {
  if (tester(node)) {
    result.push(node);
  }
  if (!_.isEmpty(node.children)) {
    node.children.forEach(childNode => {
      recursiveFinder(childNode, tester, result);
    });
  }
  return result;
}

export { recursiveFinder };

/**
 * AST node class
 * @class
 */
class Node {

  static TYPES = NODE_TYPES;

  /**
   * @param {NodeType} type 
   * @param {string} [name]
   * @param {object} [options]
   */
  static create(type, name, options) {
    return new Node(type, name, options);
  }

  static createFragment() {
    return Node.create(NODE_TYPES.FRAGMENT);
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
      attributes = {},
      parent = null,
    } = options;

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
     * @description Start cursor position to root source
     */
    this.start = start;

    /**
     * @type {number}
     * @description End cursor position to root source
     */
    this.end = end;

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
    this.children = undefined;

    /**
     * @type {{Object.<string,any>}}
     * @description Attributes, for root, tag, entity node
     */
    this.attributes = undefined;

    if (type === NODE_TYPES.ROOT) {
      if (!_.isString(source) || source === '') {
        throw new Error('source string must be passed to ROOT node');
      }
      this.start = 0;
      this.end = source.length;
      this._source = source;
    }
    if (BLOCK_NODE_TYPES.includes(type) || [NODE_TYPES.ENTITY, NODE_TYPES.TAG, NODE_TYPES.FRAGMENT].includes(type)) {
      if (type !== NODE_TYPES.PARAGRAPH) {
        this.name = name;
        this.attributes = attributes;
      }
      this.children = [];
    } else if (type === NODE_TYPES.TEXT) {
      this.content = name || '';
    }
  }

  /**
   * Property indicates if the node is a block (wrapping other nodes)
   * @returns {boolean}
   */
  get isBlock() {
    const { type, name } = this;
    return BLOCK_NODE_TYPES.includes(type)
      || (type === NODE_TYPES.TAG && BLOCK_TAGS.includes(name));
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
    return this.type === NODE_TYPES.ROOT;
  }

  /**
   * Get source code of the node
   * @returns {string}
   */
  get source() {
    if (this.type === NODE_TYPES.ROOT) {
      return this._source;
    }
    const rootNode = this.getRootNode();
    if (!rootNode) {
      throw new Error('ROOT node not found');
    }
    return rootNode.source.substring(this.start, this.end);
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
   * @param {NodeType} type 
   * @param {string} [name]
   * @param {object} [options]
   */
  createChild(type, name, options) {
    const node = new Node(type, name, options);
    this.appendChild(node);
    return node;
  }

  /**
   * whether a node is a descendant of a given node
   * @param {Node} node 
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
   * Append a node to children list
   * @param {Node} node 
   */
  appendChild(node) {
    return this.insertAt(node, Infinity);
  }

  /**
   * 
   * @param {string} text 
   * @param {} options 
   */
  appendText(text, options) {
    this.createChild(NODE_TYPES.TEXT, text, options);
  }

  /**
   * Remove 1 or more children
   * @param {Node} node
   */
  removeChild(node) {
    _.pull(this.children, node);
    node.parent = null;
  }

  /**
   * Insert a node at specified position
   * @param {Node} node 
   * @param {number} index 
   * @returns {Node}
   */
  insertAt(node, index) {
    if (node.type === NODE_TYPES.FRAGMENT) {
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
    if (!this.attributes) {
      this.attributes = {};
    }
    this.attributes[key] = value;
  }

  /**
   * Set multiple attributes
   * @param {Object.<string,any>} data Key - value pair
   */
  setAttributes(data) {
    /**
     * @type {Object.<string,any>}
     */
    this.attributes = {...this.attributes, ...data};
  }

  /**
   * Remove an attribute
   * @param {string} key 
   */
  removeAttribute(key) {
    delete this.attributes[key];
  }

  /**
   * Find matched children recursively
   * @param {object} selector 
   * @param {NodeType} [selector.type] Node type
   * @param {string} [selector.name] Node name
   * @param {RegExp|string} [selector.text] Including text or pattern
   * @param {RegExp|string} [selector.source] Pattern to match source
   */
  findBy(selector = {}) {
    const { type, name, text, source } = selector;
    return recursiveFinder(this, node => {
      let match = true;
      if (type) {
        match = match && type === node.type;
      }
      if (name) {
        match = match && name === node.name;
      }
      if (text && node.type === NODE_TYPES.TEXT) {
        match = match && (_.isRegExp(text) ? text.match(node.content) : node.content.includes(text));
      }
      if (source) {
        match = match && (_.isRegExp(source) ? source.match(node.source) : node.source.includes(source));
      }
    });;
  }

  /**
   * Find matched children recursively by callback
   * @param {NodeTester} callback
   */
  find(callback) {
    return recursiveFinder(this, callback);
  }

  /**
   * Process text node in current node and parse entities
   * @param {Array.<{start:number,end:number,name:string,attributes:any}>} items 
   */
  createEntities(items) {
    if (!this.type === NODE_TYPES.TEXT) {
      console.warn('extractEntity() should exec only on text node');
    }
    if (_.isEmpty(items)) {
      return;
    }
    const fragment = Node.createFragment();
    const text = this.content;
    let lastPos = 0;
    items.forEach(item => {
      if (item.start > lastPos) {
        fragment.appendText(text.substring(lastPos, item.start));
      }
      const entityNode = fragment.createChild(NODE_TYPES.ENTITY, item.type, {
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
   * Extract entities from text node
   * @param {function|{extract:function}} extractor 
   */
  async extractEntities(extractor) {
    const nodeList = this.find(node => {
      return node.type === NODE_TYPES.TEXT && node.parent && node.parent.type !== NODE_TYPES.ENTITY;
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
   * Build source code of the node
   */
  toString() {
    return stringify(this);
  }

  /**
   * Convert node to JSON serializable object
   * @param {object} options 
   */
  toJSON(options = {}) {
    const { position = false } = options; 
    return _.omitBy({
      type: this.type,
      name: this.name,
      content: this.content,
      attributes: this.attributes,
      position: position ? {
        start: this.start,
        end: this.end,
      } : undefined,
      children: this.children && this.children.map(child => child.toJSON(options)),
    }, _.isUndefined);
  }

}

export default Node;
