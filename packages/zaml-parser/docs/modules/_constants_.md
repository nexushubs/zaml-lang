[@zaml/parser](../README.md) > ["constants"](../modules/_constants_.md)

# External module: "constants"

## Index

### Variables

* [DEFAULT_INDENT_SPACES](_constants_.md#default_indent_spaces)
* [END_MARKERS](_constants_.md#end_markers)
* [PROCESSING_TIMEOUT](_constants_.md#processing_timeout)
* [P_ASSIGN_YAML](_constants_.md#p_assign_yaml)
* [P_ATTRIBUTE_ASSIGN](_constants_.md#p_attribute_assign)
* [P_ATTRIBUTE_LIST](_constants_.md#p_attribute_list)
* [P_ATTRIBUTE_NAME](_constants_.md#p_attribute_name)
* [P_BOOLEAN_FALSE](_constants_.md#p_boolean_false)
* [P_BOOLEAN_TRUE](_constants_.md#p_boolean_true)
* [P_DATE_LITERAL](_constants_.md#p_date_literal)
* [P_FULL_WIDTH_CHARACTER](_constants_.md#p_full_width_character)
* [P_LABEL_NAME](_constants_.md#p_label_name)
* [P_LABEL_START](_constants_.md#p_label_start)
* [P_LINE_BREAK](_constants_.md#p_line_break)
* [P_LIST_SEPARATOR](_constants_.md#p_list_separator)
* [P_MARKER](_constants_.md#p_marker)
* [P_MULTIPLE_LINE_COMMENT](_constants_.md#p_multiple_line_comment)
* [P_NUMBER_LITERAL](_constants_.md#p_number_literal)
* [P_NUMBER_START](_constants_.md#p_number_start)
* [P_PARAGRAPH_BREAK](_constants_.md#p_paragraph_break)
* [P_SPACE_WRAPPED_LINE_BREAK](_constants_.md#p_space_wrapped_line_break)
* [P_STRING_LITERAL_QUOTED](_constants_.md#p_string_literal_quoted)
* [P_STRING_LITERAL_UNQUOTED](_constants_.md#p_string_literal_unquoted)
* [P_STRING_LITERAL_UNQUOTED_TESTER](_constants_.md#p_string_literal_unquoted_tester)
* [P_TAG_NAME](_constants_.md#p_tag_name)
* [P_WHITE_SPACE](_constants_.md#p_white_space)
* [P_WHITE_SPACES_EXT](_constants_.md#p_white_spaces_ext)
* [START_MARKERS](_constants_.md#start_markers)
* [T_ASSIGN_XML](_constants_.md#t_assign_xml)
* [T_ASSIGN_YAML](_constants_.md#t_assign_yaml)
* [T_ENTITY_END](_constants_.md#t_entity_end)
* [T_ENTITY_START](_constants_.md#t_entity_start)
* [T_LINE_BREAK](_constants_.md#t_line_break)
* [T_LINE_BREAKS](_constants_.md#t_line_breaks)
* [T_METADATA_FAVORED_ASSIGN](_constants_.md#t_metadata_favored_assign)
* [T_METADATA_MARKER](_constants_.md#t_metadata_marker)
* [T_PARAGRAPH_BREAK](_constants_.md#t_paragraph_break)
* [T_SINGLE_LINE_COMMENT](_constants_.md#t_single_line_comment)
* [T_SPACE](_constants_.md#t_space)
* [T_STRING_START](_constants_.md#t_string_start)
* [T_TAB](_constants_.md#t_tab)
* [T_TAG_ATTRIBUTE_FAVORED_ASSIGN](_constants_.md#t_tag_attribute_favored_assign)
* [T_TAG_CLOSING](_constants_.md#t_tag_closing)
* [T_TAG_END](_constants_.md#t_tag_end)
* [T_TAG_START](_constants_.md#t_tag_start)

### Functions

* [combinePatterns](_constants_.md#combinepatterns)
* [createPattern](_constants_.md#createpattern)

---

## Variables

<a id="default_indent_spaces"></a>

### `<Const>` DEFAULT_INDENT_SPACES

**● DEFAULT_INDENT_SPACES**: *`2`* = 2

*Defined in [constants.ts:9](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L9)*

___
<a id="end_markers"></a>

### `<Const>` END_MARKERS

**● END_MARKERS**: *`string`[]* =  [T_TAG_END, T_ENTITY_END]

*Defined in [constants.ts:54](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L54)*

___
<a id="processing_timeout"></a>

### `<Const>` PROCESSING_TIMEOUT

**● PROCESSING_TIMEOUT**: *`number`* =  Infinity

*Defined in [constants.ts:57](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L57)*

___
<a id="p_assign_yaml"></a>

### `<Const>` P_ASSIGN_YAML

**● P_ASSIGN_YAML**: *`RegExp`* =  /[:：]/

*Defined in [constants.ts:29](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L29)*

___
<a id="p_attribute_assign"></a>

### `<Const>` P_ATTRIBUTE_ASSIGN

**● P_ATTRIBUTE_ASSIGN**: *`RegExp`* =  createPattern(`[${[T_ASSIGN_XML, T_ASSIGN_YAML].join('')}]`, '')

*Defined in [constants.ts:38](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L38)*

___
<a id="p_attribute_list"></a>

### `<Const>` P_ATTRIBUTE_LIST

**● P_ATTRIBUTE_LIST**: *`RegExp`* =  createPattern(`(${P_LABEL_NAME.source}${P_ATTRIBUTE_ASSIGN.source}|${P_LABEL_START.source}${P_LABEL_NAME.source})`)

*Defined in [constants.ts:40](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L40)*

___
<a id="p_attribute_name"></a>

### `<Const>` P_ATTRIBUTE_NAME

**● P_ATTRIBUTE_NAME**: *`RegExp`* =  createPattern(`(?:${P_LABEL_NAME.source})(?=${combinePatterns([P_WHITE_SPACE, P_ATTRIBUTE_ASSIGN, T_TAG_END])})`, 'gu')

*Defined in [constants.ts:39](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L39)*

___
<a id="p_boolean_false"></a>

### `<Const>` P_BOOLEAN_FALSE

**● P_BOOLEAN_FALSE**: *`RegExp`* =  /(FALSE|False|false)/g

*Defined in [constants.ts:50](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L50)*

___
<a id="p_boolean_true"></a>

### `<Const>` P_BOOLEAN_TRUE

**● P_BOOLEAN_TRUE**: *`RegExp`* =  /(TRUE|True|true)/g

*Defined in [constants.ts:49](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L49)*

___
<a id="p_date_literal"></a>

### `<Const>` P_DATE_LITERAL

**● P_DATE_LITERAL**: *`RegExp`* =  /\d{4}-[01]\d-[0-3]\d(?:T[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))?/g

*Defined in [constants.ts:43](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L43)*

___
<a id="p_full_width_character"></a>

### `<Const>` P_FULL_WIDTH_CHARACTER

**● P_FULL_WIDTH_CHARACTER**: *`RegExp`* =  /[\p{Script=Hani}！＠＃￥％…＆×－＝—＋（）「」【】《》；：，。、？]/gu

*Defined in [constants.ts:51](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L51)*

___
<a id="p_label_name"></a>

### `<Const>` P_LABEL_NAME

**● P_LABEL_NAME**: *`RegExp`* =  /[\p{Script=Hani}A-Za-z][\p{Script=Hani}\w.]*/gu

*Defined in [constants.ts:37](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L37)*

___
<a id="p_label_start"></a>

### `<Const>` P_LABEL_START

**● P_LABEL_START**: *`RegExp`* =  /[#＃]/g

*Defined in [constants.ts:36](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L36)*

___
<a id="p_line_break"></a>

### `<Const>` P_LINE_BREAK

**● P_LINE_BREAK**: *`RegExp`* =  /\r?\n/g

*Defined in [constants.ts:30](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L30)*

___
<a id="p_list_separator"></a>

### `<Const>` P_LIST_SEPARATOR

**● P_LIST_SEPARATOR**: *`RegExp`* =  /[,，]/g

*Defined in [constants.ts:35](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L35)*

___
<a id="p_marker"></a>

### `<Const>` P_MARKER

**● P_MARKER**: *`RegExp`* =  createPattern(`(${combinePatterns([P_PARAGRAPH_BREAK, ...START_MARKERS, T_TAG_END, P_MULTIPLE_LINE_COMMENT, T_SINGLE_LINE_COMMENT])})`)

*Defined in [constants.ts:55](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L55)*

___
<a id="p_multiple_line_comment"></a>

### `<Const>` P_MULTIPLE_LINE_COMMENT

**● P_MULTIPLE_LINE_COMMENT**: *"~{3,}"* = "~{3,}"

*Defined in [constants.ts:15](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L15)*

___
<a id="p_number_literal"></a>

### `<Const>` P_NUMBER_LITERAL

**● P_NUMBER_LITERAL**: *`RegExp`* =  /(\d+|\d*\.\d+|\d+\.\d*)(e\d+)?/g

*Defined in [constants.ts:45](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L45)*

___
<a id="p_number_start"></a>

### `<Const>` P_NUMBER_START

**● P_NUMBER_START**: *`RegExp`* =  /[\d\.]/

*Defined in [constants.ts:44](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L44)*

___
<a id="p_paragraph_break"></a>

### `<Const>` P_PARAGRAPH_BREAK

**● P_PARAGRAPH_BREAK**: *`RegExp`* =  createPattern(`${P_LINE_BREAK.source}\\s*${P_LINE_BREAK.source}`)

*Defined in [constants.ts:32](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L32)*

___
<a id="p_space_wrapped_line_break"></a>

### `<Const>` P_SPACE_WRAPPED_LINE_BREAK

**● P_SPACE_WRAPPED_LINE_BREAK**: *`RegExp`* =  /\s*\n\s*/g

*Defined in [constants.ts:31](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L31)*

___
<a id="p_string_literal_quoted"></a>

### `<Const>` P_STRING_LITERAL_QUOTED

**● P_STRING_LITERAL_QUOTED**: *`RegExp`* =  /"([^"\\]|\\")*"/g

*Defined in [constants.ts:46](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L46)*

___
<a id="p_string_literal_unquoted"></a>

### `<Const>` P_STRING_LITERAL_UNQUOTED

**● P_STRING_LITERAL_UNQUOTED**: *`RegExp`* =  /[^\s}"'\\\n]+/g

*Defined in [constants.ts:47](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L47)*

___
<a id="p_string_literal_unquoted_tester"></a>

### `<Const>` P_STRING_LITERAL_UNQUOTED_TESTER

**● P_STRING_LITERAL_UNQUOTED_TESTER**: *`RegExp`* =  new RegExp(`^${P_STRING_LITERAL_UNQUOTED.source}$`)

*Defined in [constants.ts:48](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L48)*

___
<a id="p_tag_name"></a>

### `<Const>` P_TAG_NAME

**● P_TAG_NAME**: *`RegExp`* =  P_ATTRIBUTE_NAME

*Defined in [constants.ts:41](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L41)*

___
<a id="p_white_space"></a>

### `<Const>` P_WHITE_SPACE

**● P_WHITE_SPACE**: *`RegExp`* =  /[ \t]/g

*Defined in [constants.ts:33](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L33)*

___
<a id="p_white_spaces_ext"></a>

### `<Const>` P_WHITE_SPACES_EXT

**● P_WHITE_SPACES_EXT**: *`RegExp`* =  /[\s\r\n]/g

*Defined in [constants.ts:34](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L34)*

___
<a id="start_markers"></a>

### `<Const>` START_MARKERS

**● START_MARKERS**: *( `string` &#124; `RegExp`)[]* =  [T_TAG_START, T_ENTITY_START, P_LABEL_START]

*Defined in [constants.ts:53](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L53)*

___
<a id="t_assign_xml"></a>

### `<Const>` T_ASSIGN_XML

**● T_ASSIGN_XML**: *"&#x3D;"* = "="

*Defined in [constants.ts:21](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L21)*

___
<a id="t_assign_yaml"></a>

### `<Const>` T_ASSIGN_YAML

**● T_ASSIGN_YAML**: *":："* = ":："

*Defined in [constants.ts:22](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L22)*

___
<a id="t_entity_end"></a>

### `<Const>` T_ENTITY_END

**● T_ENTITY_END**: *"]"* = "]"

*Defined in [constants.ts:17](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L17)*

___
<a id="t_entity_start"></a>

### `<Const>` T_ENTITY_START

**● T_ENTITY_START**: *"["* = "["

*Defined in [constants.ts:16](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L16)*

___
<a id="t_line_break"></a>

### `<Const>` T_LINE_BREAK

**● T_LINE_BREAK**: *""* = "
"

*Defined in [constants.ts:23](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L23)*

___
<a id="t_line_breaks"></a>

### `<Const>` T_LINE_BREAKS

**● T_LINE_BREAKS**: *""* = "
"

*Defined in [constants.ts:24](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L24)*

___
<a id="t_metadata_favored_assign"></a>

### `<Const>` T_METADATA_FAVORED_ASSIGN

**● T_METADATA_FAVORED_ASSIGN**: *":："* =  T_ASSIGN_YAML

*Defined in [constants.ts:26](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L26)*

___
<a id="t_metadata_marker"></a>

### `<Const>` T_METADATA_MARKER

**● T_METADATA_MARKER**: *"---"* =  `---`

*Defined in [constants.ts:13](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L13)*

___
<a id="t_paragraph_break"></a>

### `<Const>` T_PARAGRAPH_BREAK

**● T_PARAGRAPH_BREAK**: *""* = "

"

*Defined in [constants.ts:25](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L25)*

___
<a id="t_single_line_comment"></a>

### `<Const>` T_SINGLE_LINE_COMMENT

**● T_SINGLE_LINE_COMMENT**: *"~"* = "~"

*Defined in [constants.ts:14](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L14)*

___
<a id="t_space"></a>

### `<Const>` T_SPACE

**● T_SPACE**: *" "* = " "

*Defined in [constants.ts:11](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L11)*

___
<a id="t_string_start"></a>

### `<Const>` T_STRING_START

**● T_STRING_START**: *"&quot;"* = """

*Defined in [constants.ts:42](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L42)*

___
<a id="t_tab"></a>

### `<Const>` T_TAB

**● T_TAB**: *"	"* = "	"

*Defined in [constants.ts:12](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L12)*

___
<a id="t_tag_attribute_favored_assign"></a>

### `<Const>` T_TAG_ATTRIBUTE_FAVORED_ASSIGN

**● T_TAG_ATTRIBUTE_FAVORED_ASSIGN**: *"&#x3D;"* =  T_ASSIGN_XML

*Defined in [constants.ts:27](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L27)*

___
<a id="t_tag_closing"></a>

### `<Const>` T_TAG_CLOSING

**● T_TAG_CLOSING**: *"/"* = "/"

*Defined in [constants.ts:19](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L19)*

___
<a id="t_tag_end"></a>

### `<Const>` T_TAG_END

**● T_TAG_END**: *"}"* = "}"

*Defined in [constants.ts:20](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L20)*

___
<a id="t_tag_start"></a>

### `<Const>` T_TAG_START

**● T_TAG_START**: *"{"* = "{"

*Defined in [constants.ts:18](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L18)*

___

## Functions

<a id="combinepatterns"></a>

### `<Const>` combinePatterns

▸ **combinePatterns**(list: *( `string` &#124; `RegExp`)[]*): `string`

*Defined in [constants.ts:3](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L3)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| list | ( `string` &#124; `RegExp`)[] |

**Returns:** `string`

___
<a id="createpattern"></a>

### `<Const>` createPattern

▸ **createPattern**(source: *`string`*, flags?: *`string`*): `RegExp`

*Defined in [constants.ts:7](https://github.com/nexushubs/zaml-lang/blob/dc16477/packages/zaml-parser/src/constants.ts#L7)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| source | `string` | - |
| `Default value` flags | `string` | &quot;g&quot; |

**Returns:** `RegExp`

___

