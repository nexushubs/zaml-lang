export declare const combinePatterns: (list: (string | RegExp)[]) => string;
export declare const DEFAULT_INDENT_SPACES = 2;
export declare const T_SPACE = " ";
export declare const T_TAB = "\t";
export declare const T_METADATA_MARKER = "---";
export declare const T_SINGLE_LINE_COMMENT = "~";
export declare const P_MULTIPLE_LINE_COMMENT = "~{3,}";
export declare const T_ENTITY_START = "[";
export declare const T_ENTITY_END = "]";
export declare const T_TAG_START = "{";
export declare const T_TAG_CLOSING = "/";
export declare const T_TAG_END = "}";
export declare const T_ASSIGN_XML = "=";
export declare const T_ASSIGN_YAML = ":\uFF1A";
export declare const T_LINE_BREAK = "\n";
export declare const T_LINE_BREAKS = "\r\n";
export declare const T_PARAGRAPH_BREAK = "\n\n";
export declare const T_METADATA_FAVORED_ASSIGN = ":\uFF1A";
export declare const T_TAG_ATTRIBUTE_FAVORED_ASSIGN = "=";
export declare const P_ASSIGN_YAML: RegExp;
export declare const P_LINE_BREAK: RegExp;
export declare const P_SPACE_WRAPPED_LINE_BREAK: RegExp;
export declare const P_PARAGRAPH_BREAK: RegExp;
export declare const P_WHITE_SPACE: RegExp;
export declare const P_WHITE_SPACES_EXT: RegExp;
export declare const P_LIST_SEPARATOR: RegExp;
export declare const P_LABEL_START: RegExp;
export declare const P_VAR_NAME: RegExp;
export declare const P_LABEL: RegExp;
export declare const P_ATTRIBUTE_ASSIGN: RegExp;
export declare const P_ATTRIBUTE_NAME: RegExp;
export declare const P_ATTRIBUTE_NAME_MULTILINE: RegExp;
export declare const P_ATTRIBUTE_LIST: RegExp;
export declare const P_ATTRIBUTE_LIST_MULTILINE: RegExp;
export declare const P_TAG_NAME: RegExp;
export declare const P_TAG_NAME_MULTILINE: RegExp;
export declare const T_STRING_START = "\"";
export declare const P_DATE_LITERAL: RegExp;
export declare const P_NUMBER_START: RegExp;
export declare const P_NUMBER_LITERAL: RegExp;
export declare const P_NUMBER_VALUE: RegExp;
export declare const P_STRING_LITERAL_QUOTED: RegExp;
export declare const P_STRING_LITERAL_UNQUOTED: RegExp;
export declare const P_STRING_LITERAL_UNQUOTED_TESTER: RegExp;
export declare const P_BOOLEAN_TRUE: RegExp;
export declare const P_BOOLEAN_FALSE: RegExp;
export declare const P_FULL_WIDTH_CHARACTER: RegExp;
export declare const START_MARKERS: (string | RegExp)[];
export declare const END_MARKERS: string[];
export declare const P_MARKER: RegExp;
export declare const PROCESSING_TIMEOUT: number;
