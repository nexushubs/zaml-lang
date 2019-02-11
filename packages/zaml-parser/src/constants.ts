import * as _ from 'lodash';

export const combinePatterns = (list: (RegExp | string)[]) => {
  return list.map(p => _.isRegExp(p) ? p.source : _.escapeRegExp(p)).join('|');
};

export const DEFAULT_INDENT_SPACES = 2;

export const T_SPACE = ' ';
export const T_TAB = '\t';
export const T_METADATA_MARKER = `---`;
export const T_SINGLE_LINE_COMMENT = '~';
export const P_MULTIPLE_LINE_COMMENT = '~{3,}';
export const T_ENTITY_START = '[';
export const T_ENTITY_END = ']';
export const T_TAG_START = '{';
export const T_TAG_CLOSING = '/';
export const T_TAG_END = '}';
export const T_ASSIGN_XML = '=';
export const T_ASSIGN_YAML = ':：';
export const T_LINE_BREAK = '\n';
export const T_LINE_BREAKS = '\r\n';
export const T_PARAGRAPH_BREAK = '\n\n';
export const T_METADATA_FAVORED_ASSIGN = T_ASSIGN_YAML;
export const T_TAG_ATTRIBUTE_FAVORED_ASSIGN = T_ASSIGN_XML;

export const P_ASSIGN_YAML = /[:：]/;
export const P_LINE_BREAK = /\r?\n/g;
export const P_SPACE_WRAPPED_LINE_BREAK = /\s*\n\s*/g;
export const P_PARAGRAPH_BREAK = new RegExp(`${P_LINE_BREAK.source}\\s*${P_LINE_BREAK.source}`, 'g');
export const P_WHITE_SPACE = /[ \t]/g;
export const P_WHITE_SPACES_EXT = /[\s\r\n]/g;
export const P_LIST_SEPARATOR = /[,，]/g;
export const P_LABEL_START = /[#＃]/g;
export const P_VAR_NAME = /[\p{Script=Hani}A-Za-z][\p{Script=Hani}\w.]*/gu;
export const P_LABEL = new RegExp(`${P_LABEL_START.source}${P_VAR_NAME.source}`, 'g');
export const P_ATTRIBUTE_ASSIGN = new RegExp(`[${[T_ASSIGN_XML, T_ASSIGN_YAML].join('')}]`);
export const P_ATTRIBUTE_NAME = new RegExp(`(?:${P_VAR_NAME.source})(?=${combinePatterns([P_WHITE_SPACE, P_ATTRIBUTE_ASSIGN, T_TAG_END])})`, 'g');
export const P_ATTRIBUTE_NAME_MULTILINE = new RegExp(`(?:${P_VAR_NAME.source})(?=${combinePatterns([P_WHITE_SPACES_EXT, P_ATTRIBUTE_ASSIGN, T_TAG_END])})`, 'g');
export const P_ATTRIBUTE_LIST = new RegExp(`(${P_VAR_NAME.source}${P_ATTRIBUTE_ASSIGN.source}|${P_LABEL})`, 'g');
export const P_ATTRIBUTE_LIST_MULTILINE = new RegExp(`(${P_VAR_NAME.source}${P_ATTRIBUTE_ASSIGN.source}?|${P_LABEL})`, 'g');
export const P_TAG_NAME = P_ATTRIBUTE_NAME;
export const P_TAG_NAME_MULTILINE = P_ATTRIBUTE_NAME_MULTILINE;
export const T_STRING_START = '"';
export const P_DATE_LITERAL = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(\.\d+([+-][0-2]\d:[0-5]\d|Z))?|\d{4}-[01]\d-[0-3]\d/g;
export const P_NUMBER_START = /[\d\.\-]/;
export const P_NUMBER_LITERAL = /\-?(\d*\.\d*|\d+)(e\-?\d+)?/g;
export const P_NUMBER_LITERAL_FULL = new RegExp(`^${P_NUMBER_LITERAL.source}$`);
export const P_NUMBER_VALUE = new RegExp(`${P_NUMBER_LITERAL.source}(?=${combinePatterns([P_WHITE_SPACES_EXT, T_TAG_END])})`, 'g');
export const P_STRING_LITERAL_QUOTED = /"([^"\\]|\\")*"/g;
export const P_STRING_LITERAL_UNQUOTED = /[^\s}"'\\\n]+/g;
export const P_STRING_LITERAL_UNQUOTED_TESTER = new RegExp(`^${P_STRING_LITERAL_UNQUOTED.source}$`);
export const P_BOOLEAN_TRUE = /(TRUE|True|true)/g;
export const P_BOOLEAN_FALSE = /(FALSE|False|false)/g;
export const P_FULL_WIDTH_CHARACTER = /[\p{Script=Hani}！＠＃￥％…＆×－＝—＋（）「」【】《》；：，。、？]/gu;

export const START_MARKERS = [T_TAG_START, T_ENTITY_START, P_LABEL_START];
export const END_MARKERS = [T_TAG_END, T_ENTITY_END];
export const P_MARKER = new RegExp(`(${combinePatterns([P_PARAGRAPH_BREAK, ...START_MARKERS, T_TAG_END, P_MULTIPLE_LINE_COMMENT, T_SINGLE_LINE_COMMENT])})`, 'g');

export const PROCESSING_TIMEOUT = Infinity;
