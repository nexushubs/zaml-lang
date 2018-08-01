import _ from 'lodash';

export const NODE_TYPES = {
  ROOT: 'root',
  TAG: 'tag',
  ENTITY: 'entity',
  TEXT: 'text',
}

const BLOCK_TAGS = [
  'BLOCK',
  'QUOTE',
];

export default class Node {

  constructor(type, name = '', options = {}) {
    this.type = type;
    let {
      source = '',
      start = -1,
      end = -1,
      attributes = {},
      parent = null,
      root = null,
    } = options;
    if (type === NODE_TYPES.ROOT && (!_.isString(source) || source === '')) {
      throw new Error('source string must be passed to ROOT node');
    }
    if (type === NODE_TYPES.ROOT || type === NODE_TYPES.TAG || type === NODE_TYPES.ENTITY) {
      this.name = name;
      this.children = [];
      this.attributes = attributes;
    } else if (type === NODE_TYPES.TEXT) {
      this.content = name || '';
    }
    this._source = source;
    this.start = start;
    this.end = end;
    this.parent = parent;
  }

  get isBlock() {
    const { type, name } = this;
    return [NODE_TYPES.ROOT, NODE_TYPES.ENTITY].includes(type)
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
    return {
      type: this.type,
      name: this.name,
      content: this.content,
      attributes: this.attributes,
      source: this.type !== NODE_TYPES.TEXT ? this.source : undefined,
      position: {
        start: this.start,
        end: this.end,
      },
      children: this.children,
    }
  }

}
