import * as _ from 'lodash';

import {
  DEFAULT_INDENT_SPACES,
  T_METADATA_MARKER,
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
 * @param value 
 */
export function formatValue(value: any) {
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
 * @param value 
 */
export function parseValue(value: any) {
  if (P_DATE_FORMAT.test(value)) {
    return new Date(value);
  }
  return value;
}

/**
 * Generate indent spaces
 * @param space 
 * @param indent 
 */
export function spacer(space: number, indent: number) {
  if (indent <= 0) return '';
  return _.repeat(T_SPACE, space * indent);
}

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
export function stringify(node: Node, options?: StringifyOptions | number, indent = -1, pos = 0) {
  let text = '';
  if (_.isNumber(options)) {
    options = <StringifyOptions> {
      space: options,
    };
  }
  options = <StringifyOptions> _.defaults(options, {
    space: DEFAULT_INDENT_SPACES,
    simple: false,
    toSource: false,
  });
  const simpleTag = options.simple && node.isSimpleTag &&
    (node.labels.length > 0 || Object.keys(node.attributes).length > 0);
  const unwrapped = simpleTag && node.isBlockTag && node.children.length === 1;
  if (options.toSource) {
    node.start = pos;
  } else {
    node.textStart = pos;
  }
  if (node.isText) {
    text += node.content;
  } else {
    if (options.toSource && !_.isEmpty(node.metadata)) {
      text += T_METADATA_MARKER + T_LINE_BREAK;
      _.each(node.metadata, (value, key) => {
        text += `${key}: `;
        if (value instanceof Node) {
          text += stringify(value, options, 0, pos + text.length);
        } else {
          text += formatValue(value);
        }
        text += T_LINE_BREAK;
      });
      text += T_METADATA_MARKER + T_LINE_BREAK;
    }
    if (node.isEntity) {
      const child = _.first(node.children);
      if (!child) {
        throw new Error('missing text node of entity');
      }
      if (options.toSource) {
        text += T_ENTITY_START;
      }
      text += stringify(child, options, indent, pos + text.length);
      if (options.toSource) {
        text += T_ENTITY_END;
      }
    }
    if (options.toSource && (node.isTag || node.isEntity)) {
      if (node.isBlock) {
        text += spacer(<number> options.space, indent);
      }
      if (!unwrapped) {
        text += T_TAG_START;
      }
      if (!simpleTag) {
        text += node.name;
      }
      let listCount = 0;
      _.keys(node.attributes).forEach((key, i) => {
        const value = node.attributes[key];
        listCount++;
        if (!simpleTag || listCount > 1) {
          text += T_SPACE;
        }
        if (_.isBoolean(value) && value) {
          text += key;
        } else if (value instanceof Node) {
          text += stringify(node, options, 0, pos + text.length);
        } else {
          text += `${key}=${formatValue(value)}`;
        }
      });
      _.each(node.labels, (label, i) => {
        listCount++;
        if (!simpleTag || listCount > 1) {
          text += T_SPACE;
        }
        text += `#${label}`;
      });
      if (!unwrapped) {
        text += simpleTag ? T_SPACE : T_TAG_END;
      }
      if (node.isBlock) {
        text += T_LINE_BREAK;
      }
    }
    if (options.toSource && node.isParagraph) {
      text += spacer(<number> options.space, indent);
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
      if (node.isParagraph && !node.isLastChild) {
        text += T_LINE_BREAK;
      }
    }
    if (options.toSource && node.isWrappingTag) {
      if (node.isBlockTag) {
        text += spacer(<number> options.space, indent);
      }
      if (simpleTag) {
        if (!unwrapped) {
          text += T_TAG_END;
        }
      } else {
        text += T_TAG_START + T_TAG_CLOSING + node.name + T_TAG_END;
      }
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
  return text.replace(/\n\s*\n\s*\n/g, '\n\n');
}
