[@zaml/parser](../README.md) › ["constants"](_constants_.md)

# External module: "constants"

## Index

### Variables

* [DEFAULT_INDENT_SPACES](_constants_.md#const-default_indent_spaces)
* [END_MARKERS](_constants_.md#const-end_markers)
* [PROCESSING_TIMEOUT](_constants_.md#const-processing_timeout)
* [P_ASSIGN_YAML](_constants_.md#const-p_assign_yaml)
* [P_ATTRIBUTE_ASSIGN](_constants_.md#const-p_attribute_assign)
* [P_ATTRIBUTE_LIST](_constants_.md#const-p_attribute_list)
* [P_ATTRIBUTE_LIST_MULTILINE](_constants_.md#const-p_attribute_list_multiline)
* [P_ATTRIBUTE_NAME](_constants_.md#const-p_attribute_name)
* [P_ATTRIBUTE_NAME_MULTILINE](_constants_.md#const-p_attribute_name_multiline)
* [P_BOOLEAN_FALSE](_constants_.md#const-p_boolean_false)
* [P_BOOLEAN_TRUE](_constants_.md#const-p_boolean_true)
* [P_DATE_LITERAL](_constants_.md#const-p_date_literal)
* [P_FULL_WIDTH_CHARACTER](_constants_.md#const-p_full_width_character)
* [P_LABEL](_constants_.md#const-p_label)
* [P_LABEL_START](_constants_.md#const-p_label_start)
* [P_LINE_BREAK](_constants_.md#const-p_line_break)
* [P_LIST_SEPARATOR](_constants_.md#const-p_list_separator)
* [P_MARKER](_constants_.md#const-p_marker)
* [P_MARKER_WITH_COMMENTS](_constants_.md#const-p_marker_with_comments)
* [P_MULTIPLE_LINE_BREAK](_constants_.md#const-p_multiple_line_break)
* [P_NUMBER_LITERAL](_constants_.md#const-p_number_literal)
* [P_NUMBER_LITERAL_FULL](_constants_.md#const-p_number_literal_full)
* [P_NUMBER_START](_constants_.md#const-p_number_start)
* [P_NUMBER_VALUE](_constants_.md#const-p_number_value)
* [P_PARAGRAPH_BREAK](_constants_.md#const-p_paragraph_break)
* [P_SPACE_WRAPPED_LINE_BREAK](_constants_.md#const-p_space_wrapped_line_break)
* [P_STRING_LITERAL_QUOTED](_constants_.md#const-p_string_literal_quoted)
* [P_STRING_LITERAL_UNQUOTED](_constants_.md#const-p_string_literal_unquoted)
* [P_STRING_LITERAL_UNQUOTED_TESTER](_constants_.md#const-p_string_literal_unquoted_tester)
* [P_TAG_NAME](_constants_.md#const-p_tag_name)
* [P_TAG_NAME_MULTILINE](_constants_.md#const-p_tag_name_multiline)
* [P_VAR_NAME](_constants_.md#const-p_var_name)
* [P_WHITE_SPACE](_constants_.md#const-p_white_space)
* [P_WHITE_SPACES_EXT](_constants_.md#const-p_white_spaces_ext)
* [START_MARKERS](_constants_.md#const-start_markers)
* [T_ASSIGN_XML](_constants_.md#const-t_assign_xml)
* [T_ASSIGN_YAML](_constants_.md#const-t_assign_yaml)
* [T_ENTITY_END](_constants_.md#const-t_entity_end)
* [T_ENTITY_START](_constants_.md#const-t_entity_start)
* [T_LINE_BREAK](_constants_.md#const-t_line_break)
* [T_LINE_BREAKS](_constants_.md#const-t_line_breaks)
* [T_METADATA_FAVORED_ASSIGN](_constants_.md#const-t_metadata_favored_assign)
* [T_METADATA_MARKER](_constants_.md#const-t_metadata_marker)
* [T_MULTIPLE_LINE_COMMENT](_constants_.md#const-t_multiple_line_comment)
* [T_PARAGRAPH_BREAK](_constants_.md#const-t_paragraph_break)
* [T_SINGLE_LINE_COMMENT](_constants_.md#const-t_single_line_comment)
* [T_SPACE](_constants_.md#const-t_space)
* [T_STRING_START](_constants_.md#const-t_string_start)
* [T_TAB](_constants_.md#const-t_tab)
* [T_TAG_ATTRIBUTE_FAVORED_ASSIGN](_constants_.md#const-t_tag_attribute_favored_assign)
* [T_TAG_CLOSING](_constants_.md#const-t_tag_closing)
* [T_TAG_END](_constants_.md#const-t_tag_end)
* [T_TAG_START](_constants_.md#const-t_tag_start)

### Functions

* [combinePatterns](_constants_.md#const-combinepatterns)

## Variables

### `Const` DEFAULT_INDENT_SPACES

• **DEFAULT_INDENT_SPACES**: *2* = 2

*Defined in [src/constants.ts:7](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L7)*

___

### `Const` END_MARKERS

• **END_MARKERS**: *string[]* =  [T_TAG_END, T_ENTITY_END]

*Defined in [src/constants.ts:59](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L59)*

___

### `Const` PROCESSING_TIMEOUT

• **PROCESSING_TIMEOUT**: *number* =  Infinity

*Defined in [src/constants.ts:63](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L63)*

___

### `Const` P_ASSIGN_YAML

• **P_ASSIGN_YAML**: *RegExp‹›* =  /[:：]/

*Defined in [src/constants.ts:27](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L27)*

___

### `Const` P_ATTRIBUTE_ASSIGN

• **P_ATTRIBUTE_ASSIGN**: *RegExp‹›* =  new RegExp(`[${[T_ASSIGN_XML, T_ASSIGN_YAML].join('')}]`)

*Defined in [src/constants.ts:38](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L38)*

___

### `Const` P_ATTRIBUTE_LIST

• **P_ATTRIBUTE_LIST**: *RegExp‹›* =  new RegExp(`(${P_VAR_NAME.source}${P_ATTRIBUTE_ASSIGN.source}|${P_LABEL})`, 'g')

*Defined in [src/constants.ts:41](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L41)*

___

### `Const` P_ATTRIBUTE_LIST_MULTILINE

• **P_ATTRIBUTE_LIST_MULTILINE**: *RegExp‹›* =  new RegExp(`(${P_VAR_NAME.source}${P_ATTRIBUTE_ASSIGN.source}?|${P_LABEL})`, 'g')

*Defined in [src/constants.ts:42](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L42)*

___

### `Const` P_ATTRIBUTE_NAME

• **P_ATTRIBUTE_NAME**: *RegExp‹›* =  new RegExp(`(?:${P_VAR_NAME.source})(?=${combinePatterns([P_WHITE_SPACE, P_ATTRIBUTE_ASSIGN, T_TAG_END])})`, 'g')

*Defined in [src/constants.ts:39](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L39)*

___

### `Const` P_ATTRIBUTE_NAME_MULTILINE

• **P_ATTRIBUTE_NAME_MULTILINE**: *RegExp‹›* =  new RegExp(`(?:${P_VAR_NAME.source})(?=${combinePatterns([P_WHITE_SPACES_EXT, P_ATTRIBUTE_ASSIGN, T_TAG_END])})`, 'g')

*Defined in [src/constants.ts:40](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L40)*

___

### `Const` P_BOOLEAN_FALSE

• **P_BOOLEAN_FALSE**: *RegExp‹›* =  /(FALSE|False|false)/g

*Defined in [src/constants.ts:55](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L55)*

___

### `Const` P_BOOLEAN_TRUE

• **P_BOOLEAN_TRUE**: *RegExp‹›* =  /(TRUE|True|true)/g

*Defined in [src/constants.ts:54](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L54)*

___

### `Const` P_DATE_LITERAL

• **P_DATE_LITERAL**: *RegExp‹›* =  /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(\.\d+([+-][0-2]\d:[0-5]\d|Z))?|\d{4}-[01]\d-[0-3]\d/g

*Defined in [src/constants.ts:46](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L46)*

___

### `Const` P_FULL_WIDTH_CHARACTER

• **P_FULL_WIDTH_CHARACTER**: *RegExp‹›* =  /[\p{Script=Hani}！＠＃￥％…＆×－＝—＋（）「」【】《》；：，。、？]/gu

*Defined in [src/constants.ts:56](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L56)*

___

### `Const` P_LABEL

• **P_LABEL**: *RegExp‹›* =  new RegExp(`${P_LABEL_START.source}${P_VAR_NAME.source}`, 'g')

*Defined in [src/constants.ts:37](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L37)*

___

### `Const` P_LABEL_START

• **P_LABEL_START**: *RegExp‹›* =  /[#＃]/g

*Defined in [src/constants.ts:35](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L35)*

___

### `Const` P_LINE_BREAK

• **P_LINE_BREAK**: *RegExp‹›* =  /\r?\n/g

*Defined in [src/constants.ts:28](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L28)*

___

### `Const` P_LIST_SEPARATOR

• **P_LIST_SEPARATOR**: *RegExp‹›* =  /[,，]/g

*Defined in [src/constants.ts:34](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L34)*

___

### `Const` P_MARKER

• **P_MARKER**: *RegExp‹›* =  new RegExp(`(${combinePatterns([P_PARAGRAPH_BREAK, ...START_MARKERS, T_TAG_END])})`, 'g')

*Defined in [src/constants.ts:60](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L60)*

___

### `Const` P_MARKER_WITH_COMMENTS

• **P_MARKER_WITH_COMMENTS**: *RegExp‹›* =  new RegExp(`(${combinePatterns([P_PARAGRAPH_BREAK, ...START_MARKERS, T_TAG_END, T_SINGLE_LINE_COMMENT])})`, 'g')

*Defined in [src/constants.ts:61](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L61)*

___

### `Const` P_MULTIPLE_LINE_BREAK

• **P_MULTIPLE_LINE_BREAK**: *RegExp‹›* =  /(\r?\n)+/g

*Defined in [src/constants.ts:29](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L29)*

___

### `Const` P_NUMBER_LITERAL

• **P_NUMBER_LITERAL**: *RegExp‹›* =  /(?:\-?(\d*\.\d*|\d+)(e\-?\d+)?|0x[0-9a-f]+|0o[0-7]+|0b[01]+)/g

*Defined in [src/constants.ts:48](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L48)*

___

### `Const` P_NUMBER_LITERAL_FULL

• **P_NUMBER_LITERAL_FULL**: *RegExp‹›* =  new RegExp(`^${P_NUMBER_LITERAL.source}$`)

*Defined in [src/constants.ts:49](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L49)*

___

### `Const` P_NUMBER_START

• **P_NUMBER_START**: *RegExp‹›* =  /[\d\.\-]/

*Defined in [src/constants.ts:47](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L47)*

___

### `Const` P_NUMBER_VALUE

• **P_NUMBER_VALUE**: *RegExp‹›* =  new RegExp(`${P_NUMBER_LITERAL.source}(?=${combinePatterns([P_WHITE_SPACES_EXT, T_TAG_END])})`, 'g')

*Defined in [src/constants.ts:50](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L50)*

___

### `Const` P_PARAGRAPH_BREAK

• **P_PARAGRAPH_BREAK**: *RegExp‹›* =  new RegExp(`${P_LINE_BREAK.source}\\s*${P_LINE_BREAK.source}`, 'g')

*Defined in [src/constants.ts:31](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L31)*

___

### `Const` P_SPACE_WRAPPED_LINE_BREAK

• **P_SPACE_WRAPPED_LINE_BREAK**: *RegExp‹›* =  /\s*\n\s*/g

*Defined in [src/constants.ts:30](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L30)*

___

### `Const` P_STRING_LITERAL_QUOTED

• **P_STRING_LITERAL_QUOTED**: *RegExp‹›* =  /"([^"\\]|\\.)*"/g

*Defined in [src/constants.ts:51](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L51)*

___

### `Const` P_STRING_LITERAL_UNQUOTED

• **P_STRING_LITERAL_UNQUOTED**: *RegExp‹›* =  /[^\s}"'\\\n]+/g

*Defined in [src/constants.ts:52](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L52)*

___

### `Const` P_STRING_LITERAL_UNQUOTED_TESTER

• **P_STRING_LITERAL_UNQUOTED_TESTER**: *RegExp‹›* =  new RegExp(`^${P_STRING_LITERAL_UNQUOTED.source}$`)

*Defined in [src/constants.ts:53](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L53)*

___

### `Const` P_TAG_NAME

• **P_TAG_NAME**: *RegExp‹›* =  P_ATTRIBUTE_NAME

*Defined in [src/constants.ts:43](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L43)*

___

### `Const` P_TAG_NAME_MULTILINE

• **P_TAG_NAME_MULTILINE**: *RegExp‹›* =  P_ATTRIBUTE_NAME_MULTILINE

*Defined in [src/constants.ts:44](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L44)*

___

### `Const` P_VAR_NAME

• **P_VAR_NAME**: *RegExp‹›* =  /[\p{Script=Hani}A-Za-z][\p{Script=Hani}\w.]*/gu

*Defined in [src/constants.ts:36](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L36)*

___

### `Const` P_WHITE_SPACE

• **P_WHITE_SPACE**: *RegExp‹›* =  /[ \t]/g

*Defined in [src/constants.ts:32](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L32)*

___

### `Const` P_WHITE_SPACES_EXT

• **P_WHITE_SPACES_EXT**: *RegExp‹›* =  /[\s\r\n]/g

*Defined in [src/constants.ts:33](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L33)*

___

### `Const` START_MARKERS

• **START_MARKERS**: *string | RegExp‹›[]* =  [T_TAG_START, T_ENTITY_START, P_LABEL_START]

*Defined in [src/constants.ts:58](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L58)*

___

### `Const` T_ASSIGN_XML

• **T_ASSIGN_XML**: *"="* = "="

*Defined in [src/constants.ts:19](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L19)*

___

### `Const` T_ASSIGN_YAML

• **T_ASSIGN_YAML**: *":："* = ":："

*Defined in [src/constants.ts:20](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L20)*

___

### `Const` T_ENTITY_END

• **T_ENTITY_END**: *"]"* = "]"

*Defined in [src/constants.ts:15](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L15)*

___

### `Const` T_ENTITY_START

• **T_ENTITY_START**: *"["* = "["

*Defined in [src/constants.ts:14](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L14)*

___

### `Const` T_LINE_BREAK

• **T_LINE_BREAK**: *"
"* = "
"

*Defined in [src/constants.ts:21](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L21)*

___

### `Const` T_LINE_BREAKS

• **T_LINE_BREAKS**: *"
"* = "
"

*Defined in [src/constants.ts:22](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L22)*

___

### `Const` T_METADATA_FAVORED_ASSIGN

• **T_METADATA_FAVORED_ASSIGN**: *":："* =  T_ASSIGN_YAML

*Defined in [src/constants.ts:24](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L24)*

___

### `Const` T_METADATA_MARKER

• **T_METADATA_MARKER**: *"---"* =  `---`

*Defined in [src/constants.ts:11](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L11)*

___

### `Const` T_MULTIPLE_LINE_COMMENT

• **T_MULTIPLE_LINE_COMMENT**: *"~~~"* = "~~~"

*Defined in [src/constants.ts:13](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L13)*

___

### `Const` T_PARAGRAPH_BREAK

• **T_PARAGRAPH_BREAK**: *"

"* = "

"

*Defined in [src/constants.ts:23](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L23)*

___

### `Const` T_SINGLE_LINE_COMMENT

• **T_SINGLE_LINE_COMMENT**: *"~"* = "~"

*Defined in [src/constants.ts:12](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L12)*

___

### `Const` T_SPACE

• **T_SPACE**: *" "* = " "

*Defined in [src/constants.ts:9](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L9)*

___

### `Const` T_STRING_START

• **T_STRING_START**: *"""* = """

*Defined in [src/constants.ts:45](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L45)*

___

### `Const` T_TAB

• **T_TAB**: *"	"* = "	"

*Defined in [src/constants.ts:10](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L10)*

___

### `Const` T_TAG_ATTRIBUTE_FAVORED_ASSIGN

• **T_TAG_ATTRIBUTE_FAVORED_ASSIGN**: *"="* =  T_ASSIGN_XML

*Defined in [src/constants.ts:25](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L25)*

___

### `Const` T_TAG_CLOSING

• **T_TAG_CLOSING**: *"/"* = "/"

*Defined in [src/constants.ts:17](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L17)*

___

### `Const` T_TAG_END

• **T_TAG_END**: *"}"* = "}"

*Defined in [src/constants.ts:18](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L18)*

___

### `Const` T_TAG_START

• **T_TAG_START**: *"{"* = "{"

*Defined in [src/constants.ts:16](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L16)*

## Functions

### `Const` combinePatterns

▸ **combinePatterns**(`list`: string | RegExp‹›[]): *string*

*Defined in [src/constants.ts:3](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/constants.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`list` | string &#124; RegExp‹›[] |

**Returns:** *string*
