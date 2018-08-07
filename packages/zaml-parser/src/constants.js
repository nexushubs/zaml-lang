import _ from 'lodash';

export const combinePatterns = (list) => {
  return list.map(p => _.isRegExp(p) ? p.source : _.escapeRegExp(p)).join('|');
};

export const createPattern = (source, flags = 'g') => new RegExp(source, flags);

export const DEFAULT_INDENT = 2;

export const T_SPACE = ' ';
export const T_TAB = '\t';
export const T_FRONT_MATTER = `---`;
export const T_ENTITY_START = '[';
export const T_ENTITY_END = ']';
export const T_TAG_START = '{';
export const T_TAG_CLOSING = '/';
export const T_TAG_END = '}';
export const T_ASSIGN_XML = '=';
export const T_ASSIGN_YAML = ':';
export const T_LINE_BREAK = '\n';
export const T_PARAGRAPH_BREAK = '\n\n';
export const T_FRONT_MATTER_FAVORED_ASSIGN = T_ASSIGN_YAML;
export const T_TAG_ATTRIBUTE_FAVORED_ASSIGN = T_ASSIGN_XML;

export const P_LINE_BREAK = /\r?\n/g;
export const P_PARAGRAPH_BREAK = createPattern(_.repeat(P_LINE_BREAK.source, 2));
export const P_WHITE_SPACE = /\s/g;
export const P_WHITE_SPACES_EXT = /[\s\r\n]/;
export const P_TAG_ATTRIBUTE_ASSIGN = createPattern(`[${[T_ASSIGN_XML, T_ASSIGN_YAML].join('')}]`, '');
export const P_TAG_NAME = createPattern(`[A-Z]+(?:\.[A-Z]+)*(?=${combinePatterns([P_WHITE_SPACES_EXT, P_TAG_ATTRIBUTE_ASSIGN, T_TAG_END])})`);
export const P_TAG_ATTRIBUTE_NAME = createPattern(`[a-z][a-zA-Z0-9]*(?=${combinePatterns([P_WHITE_SPACE, P_TAG_ATTRIBUTE_ASSIGN])})`);
export const T_STRING_START = '"';
export const P_DATE_LITERAL = /\d{4}-[01]\d-[0-3]\d(?:T[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))?/g;
export const P_NUMBER_START = /[\d\.]/;
export const P_NUMBER_LITERAL = /(\d+|\d*\.\d+|\d+\.\d*)(e\d+)?/g;
export const P_STRING_LITERAL_QUOTED = /"([^"\\]|\\.)*"/g;
export const P_STRING_LITERAL_UNQUOTED = /[^\s}"'\\\n]+/g;
export const P_STRING_LITERAL_UNQUOTED_TESTER = new RegExp(`^${P_STRING_LITERAL_UNQUOTED.source}$`);
export const P_BOOLEAN_TRUE= /(TRUE|True|true)/g;
export const P_BOOLEAN_FALSE= /(FALSE|False|false)/g;

export const START_MARKERS = [T_TAG_START, T_ENTITY_START];
export const END_MARKERS = [T_TAG_END, T_ENTITY_END];
export const P_MARKER = createPattern(`(${combinePatterns([...START_MARKERS, P_PARAGRAPH_BREAK])})`);

export const PROCESSING_TIMEOUT = 1000;
