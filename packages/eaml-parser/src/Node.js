import _ from 'lodash';

/**
 * @typedef {string} NodeType
 */

/**
 * Node types
 * @readonly
 * @enum {NodeType}
 */
export const NODE_TYPES = {
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

export default class Node {

  static create(...params) {
    return new Node(...params);
  }

  /**
   * @constructor
   * @param {NodeType} type 
   * @param {string} [name]
   * @param {object} [options]
   */
  constructor(type, name = null, options = {}) {
    this.type = type;
    let {
      source = '',
      start = -1,
      end = -1,
      attributes = {},
      parent = null,
    } = options;
    this.start = start;
    this.end = end;
    this.parent = parent;
    if (type === NODE_TYPES.ROOT) {
      if (!_.isString(source) || source === '') {
        throw new Error('source string must be passed to ROOT node');
      }
      this.start = 0;
      this.end = source.length;
      this._source = source;
    }
    if (BLOCK_NODE_TYPES.includes(type) || type === NODE_TYPES.TAG || type === NODE_TYPES.ENTITY) {
      this.name = name;
      this.children = [];
      this.attributes = attributes;
    } else if (type === NODE_TYPES.TEXT) {
      this.content = name || '';
    }
  }

  get isBlock() {
    const { type, name } = this;
    return BLOCK_NODE_TYPES.includes(name)
      || (type === NODE_TYPES.TAG && BLOCK_TAGS.includes(name));
  }
  
  get root() {
    let node = this;
    while (node.parent) {
      node = node.parent;
    }
    if (node === this) {
      return null;
    }
    return node;
  }

  get source() {
    if (this.type === NODE_TYPES.ROOT) {
      return this._source;
    }
    const rootNode = this.root;
    if (!rootNode) {
      throw new Error('ROOT node not found');
    }
    return rootNode.source.substring(this.start, this.end);
  }

  get isFirstChild() {
    const { parent } = this;
    if (!parent) {
      return false;
    }
    return _.first(parent.children) === this;
  }

  get isLastChild() {
    const { parent } = this;
    if (!parent) {
      return false;
    }
    return _.last(parent.children) === this;
  }

  createChild(...params) {
    const node = new Node(...params);
    this.appendChild(node);
    return node;
  }

  appendChild(node) {
    node.parent = this;
    this.children.push(node);
  }

  appendText(text, options) {
    this.createChild(NODE_TYPES.TEXT, text, options);
  }

  removeChild(...nodes) {
    this.children = _.without(this.children, ...nodes);
    _.each(nodes, node => {
      node.parent = null;
    });
  }

  setAttribute(key, value) {
    if (!this.attributes) {
      this.attributes = {};
    }
    this.attributes[key] = value;
  }

  setAttributes(data) {
    this.attributes = _.extend({}, this.attributes, data);
  }

  updatePosition(data = {}) {
    const { start, end } = data;
    this.start = start;
    this.end = end;
  }

  toJSON() {
    return _.omitBy({
      type: this.type,
      name: this.name,
      content: this.content,
      attributes: this.attributes,
      // source: this.type !== NODE_TYPES.TEXT ? this.source : undefined,
      position: {
        start: this.start,
        end: this.end,
      },
      children: this.children && this.children.map(child => child.toJSON()),
    }, _.isUndefined);
  }

}
