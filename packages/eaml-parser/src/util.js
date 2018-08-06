import _ from 'lodash';

import {
  DEFAULT_INDENT,
  T_FRONT_MATTER,
  T_SPACE,
  T_LINE_BREAK,
  T_TAG_START,
  T_TAG_END,
  T_TAG_CLOSING,
  T_ENTITY_START,
  T_ENTITY_END,
  T_PARAGRAPH_BREAK,
  P_STRING_LITERAL_UNQUOTED_TESTER,
} from './constants';

import Node, { NODE_TYPES } from './Node';

/**
 * Stringify node attribute value
 * @param {any} value 
 */
export function formatValue(value) {
  if (_.isDate(value)) {
    return value.toISOString();
  } else if (_.isString) {
    return P_STRING_LITERAL_UNQUOTED_TESTER.test(value) ? value : JSON.stringify(value);
  } else if (_.isBoolean(value)) {
    return JSON.stringify(value);
  } else if (_.isNumber(value) && !_.isNaN(value) && value !== Infinity || value !== -Infinity) {
    return JSON.stringify(value);
  } else {
    return null;
  }
}

/**
 * Generate indent spaces
 * @param {number} space 
 * @param {number} indent 
 */
export function spacer(space, indent) {
  if (indent <= 0) return '';
  return _.repeat(T_SPACE, space * indent);
}

/**
 * Stringify node
 * @param {Node} node 
 * @param {number} [space=2]
 * @param {number} [indent=0]
 */
export function stringify(node, space = DEFAULT_INDENT, indent) {
  let source = '';
  if (_.isUndefined(indent)) {
    indent = -1;
  }
  if (node.type === NODE_TYPES.TEXT) {
    return node.content;
  } else if (node.type === NODE_TYPES.PARAGRAPH) {
    const next = node.nextSibling;
    const endMark = (next && next.type === NODE_TYPES.PARAGRAPH) ? T_PARAGRAPH_BREAK : T_LINE_BREAK;
    const innerText = node.children.map(child => stringify(child)).join('');
    return spacer(space, indent) + _.trim(innerText, '\r\n ') + endMark;
  }
  if (node.isRoot && !_.isEmpty(node.attributes)) {
    source += T_FRONT_MATTER + T_LINE_BREAK;
    _.each(node.attributes, (value, key) => {
      source += `${key}: ${formatValue(value)}` + T_LINE_BREAK;
    });
    source += T_FRONT_MATTER + T_LINE_BREAK;
  }
  if (node.type === NODE_TYPES.ENTITY) {
    const child = _.first(node.children);
    source += T_ENTITY_START + stringify(child, space, indent) + T_ENTITY_END;
  }
  if (node.type === NODE_TYPES.TAG || node.type === NODE_TYPES.ENTITY) {
    if (node.isBlock) {
      source += spacer(space, indent);
    }
    source += T_TAG_START + node.name;
    _.each(node.attributes, (value, key) => {
      if (_.isBoolean(value) && value) {
        source += ` ${value}`;
      } else {
        source += ` ${key}=${formatValue(value)}`;
      }
    });
    source += T_TAG_END + (node.isBlock ? T_LINE_BREAK : '');
  }
  if (node.isBlock) {
    source += node.children.map(child => stringify(child, space, indent + 1)).join('');
    if (!node.isRoot) {
      source += spacer(space, indent) + T_TAG_START + T_TAG_CLOSING + node.name + T_TAG_END + T_LINE_BREAK;
    }
  }
  return source;
}
