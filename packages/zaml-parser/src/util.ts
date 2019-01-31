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
  P_PARAGRAPH_BREAK,
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
  } else if (_.isString(value)) {
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
 * Parse number
 * @param value 
 */
export function parseNumber(value: string) {
  let number = parseFloat(value);
  if (/^\d+$/.test(value)
    && (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER)
  ) {
    return value;
  }
  return number;
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
  metadataMarker?: boolean;
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
  const defaultOptions = {
    space: DEFAULT_INDENT_SPACES,
    simple: false,
    toSource: false,
    metadataMarker: true,
  };
  let opt: StringifyOptions;
  if (_.isUndefined(options)) {
    opt = defaultOptions
  } else if (_.isNumber(options)) {
    opt = {
      space: options,
    };
  } else {
    opt = _.defaults(options, defaultOptions);
  }
  let text = '';
  const simpleTag = opt.simple && node.isSimpleTag &&
    (node.labels.length > 0 || Object.keys(node.attributes).length > 0);
  const unwrapped = simpleTag && node.isBlockTag && node.children.length === 1;
  if (opt.toSource) {
    node.start = pos;
  } else {
    node.textStart = pos;
  }
  if (node.isText) {
    if (opt.toSource) {
      text += (node.content || '').replace(/\n/g, `\n${spacer(<number> opt.space, indent - 1)}`);
    } else {
      text += node.content;
    }
  } else {
    if (node.isEntity) {
      const child = _.first(node.children);
      if (!child) {
        throw new Error('missing text node of entity');
      }
      if (opt.toSource) {
        text += T_ENTITY_START;
      }
      text += stringify(child, opt, indent, pos + text.length);
      if (opt.toSource) {
        text += T_ENTITY_END;
      }
    }
    if (opt.toSource && (node.isTag || node.isEntity)) {
      if (node.isBlock) {
        text += spacer(<number> opt.space, indent);
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
        if (!simpleTag && _.isBoolean(value) && value) {
          text += key;
        } else if (value instanceof Node) {
          text += stringify(node, opt, 0, pos + text.length);
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
    if (opt.toSource && node.isParagraph) {
      text += spacer(<number> opt.space, indent);
    }
    if (opt.toSource && !_.isEmpty(node.metadata)) {
      if (opt.metadataMarker) {
        text += spacer(<number> opt.space, indent + 1) + T_METADATA_MARKER + T_LINE_BREAK;
      }
      _.each(node.metadata, (value, key) => {
        text += spacer(<number> opt.space, indent + 1);
        text += `${key}: `;
        if (value instanceof Node) {
          text += stringify(value, opt, 0, pos + text.length);
        } else {
          text += formatValue(value);
        }
        text += T_LINE_BREAK;
      });
      text += spacer(<number> opt.space, indent + 1);
      if (opt.metadataMarker) {
        text += T_METADATA_MARKER;
      }
      text += T_LINE_BREAK;
    }
    if (node.isBlock || node.isWrappingTag && !_.isEmpty(node.children)) {
      node.children.forEach(child => {
        const subText = stringify(child, opt, indent + 1, pos + text.length);
        text += subText;
      });
    }
    const next = node.nextSibling;
    if (node.isBlock) {
      if (opt.toSource) {
        text = _.trimEnd(text, T_LINE_BREAK);
      }
      text += T_LINE_BREAK;
      if (node.isParagraph && !node.isLastChild) {
        text += T_LINE_BREAK;
      }
    }
    if (opt.toSource && node.isWrappingTag) {
      if (node.isBlockTag) {
        text += spacer(<number> opt.space, indent);
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
  if (opt.toSource) {
    node.end = node.start + text.length;
  } else {
    node.textEnd = node.textStart + text.length;
  }
  return text.replace(/\n\s*\n\s*\n/g, '\n\n');
}

export const isNode = (typeof process !== 'undefined') &&
  (typeof process.release !== 'undefined') &&
  (process.release.name === 'node');

export const isChrome = !isNode && /Chrome/.test(window.navigator.userAgent);

export const isAnsiSupported = isNode || isChrome;
// lite version of https://github.com/chalk/chalk

const colorful = isAnsiSupported ?
  (start: number, end: number) => (text: string) => `\x1b[${start}m${text}\x1b[${end}m`
  :
  (start: number, end: number) => (text: string) => text;

const chalkStyles = {
  // modifier
  reset: [0, 0],
  // 21 isn't widely supported and 22 does the same thing
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  // color
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  // Bright color
  blackBright: [90, 39],
  grey: [90, 39],
  gray: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  // bgColor
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  // Bright color
  bgBlackBright: [100, 49],
  bgGrey: [90, 39],
  bgGray: [90, 39],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
}

export const chalk = _.mapValues(chalkStyles, ([start, end]) => colorful(start, end));
