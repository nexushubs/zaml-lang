import _ from 'lodash';

import {
  DEFAULT_INDENT_SPACES,
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

import Node, { NodeType } from './Node';

const P_DATE_FORMAT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z$/;

/**
 * Stringify attribute value
 * @param {any} value 
 */
export function formatValue(value) {
  if (_.isDate(value)) {
    return value.toISOString().replace(/T00:00:00\.000Z$/, '');
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
 * Parse attribute value
 * @param {any} value 
 */
export function parseValue(value) {
  if (P_DATE_FORMAT.test(value)) {
    return new Date(value);
  }
  return value;
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
 * @param {object} options
 * @param {number} [options.space] 
 * @param {number} [indent] Initial indent, increases 1 each block
 */
export function stringify(node, options, indent = -1, pos = 0) {
  let text = '';
  if (_.isString(options)) {
    options = {
      space: options,
    };
  }
  options = _.defaults(options, {
    space: DEFAULT_INDENT_SPACES,
    toSource: false,
  });
  if (options.toSource) {
    node.start = pos;
  } else {
    node.textStart = pos;
  }
  if (node.type === NodeType.TEXT) {
    text += node.content;
  } else {
    if (options.toSource && node.isRoot && !_.isEmpty(node.attributes)) {
      text += T_FRONT_MATTER + T_LINE_BREAK;
      _.each(node.attributes, (value, key) => {
        text += `${key}: ${formatValue(value)}` + T_LINE_BREAK;
      });
      text += T_FRONT_MATTER + T_LINE_BREAK;
    }
    if (node.type === NodeType.ENTITY) {
      const child = _.first(node.children);
      if (options.toSource) {
        text += T_ENTITY_START;
      }
      text += stringify(child, options, indent, pos + text.length);
      if (options.toSource) {
        text += T_ENTITY_END;
      }
    }
    if (options.toSource && (node.type === NodeType.TAG || node.type === NodeType.ENTITY)) {
      if (node.isBlock) {
        text += spacer(options.space, indent);
      }
      text += T_TAG_START + node.name;
      _.each(node.attributes, (value, key) => {
        if (_.isBoolean(value) && value) {
          text += ` ${key}`;
        } else {
          text += ` ${key}=${formatValue(value)}`;
        }
      });
      _.each(node.labels, label => {
        text += ` #${label}`;
      });
      text += T_TAG_END;
      if (node.isBlock) {
        text += T_LINE_BREAK;
      }
    }
    if (options.toSource && node.type === NodeType.PARAGRAPH) {
      text += spacer(options.space, indent);
    }
    if (node.isBlock || node.isWrappingTag && !_.isEmpty(node.children)) {
      node.children.forEach(child => {
        const subText = stringify(child, options, indent + 1, pos + text.length);
        text += subText;
      });
    }
    const next = node.nextSibling;
    if (node.isBlock) {
      if (options.toSource) {
        text = _.trimEnd(text, T_LINE_BREAK);
      }
      text += T_LINE_BREAK;
      if (node.type === NodeType.PARAGRAPH && !node.isLastChild) {
        text += T_LINE_BREAK;
      }
    }
    if (options.toSource && node.isWrappingTag) {
      if (node.isBlockTag) {
        text += spacer(options.space, indent);
      }
      text += T_TAG_START + T_TAG_CLOSING + node.name + T_TAG_END;
      if (node.isBlockTag) {
        text += T_LINE_BREAK;
        if (next && next.isBlock) {
          text += T_LINE_BREAK;
        }
      }
    }
  }
  if (options.toSource) {
    node.end = node.start + text.length;
  } else {
    node.textEnd = node.textStart + text.length;
  }
  return text;
}
