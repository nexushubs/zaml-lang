# EAML

EAML: Enhanced AI Markup Language

Inspired by [YAML](http://yaml.org/spec/1.2/spec.html), [Markdown](https://www.markdownguide.org/cheat-sheet), [AIML](https://en.wikipedia.org/wiki/AIML) and PHP template syntax [Smarty](https://www.smarty.net/), EAML is a human readable marked up language which could be easily transformed into computer data structure.

EAML could be used in

* AI training sample:
  * Named entity extracting
  * Chatting bot definition
  * Information extraction to build knowledge graph
* Results of AI parsed text
* Source code of rich text editor with AI assisted

## Design Principle

1. EAML should directly based on plain text of natural language, that is to say, a plain text without any additional marker or sign is valid EAML.
2. EAML could contains one or more section for defining structured data, e.g. key => value pair, enumeration, reference map, attachment list.
3. EAML should be human readable, additional markers should not deeply affect reading.
4. EAML contains text markers, a marker is consists of it's text, and additional properties. A marker could be:
   * Article, section scope properties.
   * Naming entities.
   * Article citation from knowledge database with original reference.
   * User uploaded document attachment as reference.
5. EAML should be easily converted to:
   * Plain text of natural language.
   * JSON serializable data structure, used for later processing by computer program.
6. EAML should be extensible for holding more type of information in the future.
7. EAML syntax should be as simple, as short, as clear as it could be.
8. If characters used by markers appears in natural language, it should be escaped.

## Language

Sections, Marker types are capital letters, attributes using lower cased letters.

### Basic Data Types

Basic data types are used in attributes of sections and markers.

| Type | Sample | Description |
| ---- | ------ | ----------- |
| `string` | `"example\n string"`, `Hello` | Quotes could be omitted if the string does not need to be escaped |
| `number` | `128`, `1e10`, `-6` | Expressed in literal form |
| `boolean` | `1`, `0`, `True`, `On`, `False`, `Off` | Expressed in literal form, if used in attribute value, could be omitted if the value is `True` |

### Common Expression

Expression is a syntax used to demonstrate EAML language format

| Expression | Define | Description |
| ---------- | ------ | ----------- |
| `attribute` | `<key>` `=` `<value>` | `value` should be encoded in URI component format |
| `attribute-list` | ( `<attribute>` ,){n} | The comma after the last attribute could be omitted |

### Sections

Section is one of the type: plain natural language part, defining markup etc., except for natural language, other sections is start with: `{` `<TYPE>` (`<attribute-list`)? `}`, and end with `{/<TYPE>}`.

Section content may not be inserted into the text when displayed to the user, and could be used by reference.

#### {DEF} Section

`DEF` section is used for defining markers which could be used lately used by reference

Examples:

```
{DEF}
原告=@ORG(中天信和商贸有限公司)
被告=@ORG(XXX银行)
{/DEF}
```

Inline:

```
{DEF 原告=@ORG(中天信和商贸有限公司)}
```

#### {BLOCK} Section

`BLOCK` section is used for defining a block of EAML source, which could be inserted into other part of doc by reference.

| Attribute | Description |
| ---- | ----------- |
| `name` | A name that could be referenced |
| `hide` | A identifier of the document in database or other storage |
| `type` | Document type, could be `DOC`, `IMAGE`, `TEXT`, `PRESENTATION`, `SPREADSHEET`, etc. |
| `version` | Document version in string or number |

Examples:

```
{BLOCK name=}
```

### Reference

Pattern: `&` `<type>` `(` `<name>` `)`

Reference marker from `DEF` Section

### Markers

Marker defines are similar to regex.

#### Naming Entities

Pattern: ( `@ <type>` ? ) ? `(` `<name>` ( `|` `<attribute-list>` ) ? `)`

Naming entities could be simple `(Some name)` or prefixed by naming type:

| Type | Description |
| ---- | ----------- |
| `REF` | A named reference, must defined earlier |
| `PER` | Person, or user in the system |
| `USR` | User in the system |
| `ORG` | Company or other organization |
| `LOC` | Location, district, area |
| `AREA`, `LOC.AREA` | A named area, geofence |
| `POS`, `LOC.POS` | Named position point, or geographic coordinates |

Examples:

```
(王律师)
@(石小猛)
@PER(Micheal Jackson)
@USR(王律师)
@ORG(万科)
@ORG(小米|fullname=小米科技) // Attribute
@LOC(北京)
@AREA(北京市东城区)
@POS(香坊万达电影院)         // Exact position
@POS(华山南路144号)         // Exact position
@POS(31.008001,103.607728) // Geo position of coordinates
```

Named reference:

```
{DEF}
  甲方=@ORG(武汉人工不智能技有限公司)
{/DEF}

...

(甲方)   # None typed entity should be passed as named reference whenever possible
&(甲方)
```

#### Common Article Citation

Pattern: `#` `<type>` ? `(` `<name>` ( `|` `<attribute-list>` ) ? `)`

| Type | Description |
| ---- | ----------- |
| `LAW` | A currently used law name  |
| `ART`, `LAW.ART` | A article (named part) of a law, law name could be included |
| `CASE`, `LAW.CASE` | A public case |

Examples:

```
#LAW(刑法)
#LAW.ART(《民事诉讼法》第一百二十八条)
#LAW.ART(劳动法第27条)
#LAW(刑法)中#LAW.ART(第三条)，#LAW.ART(第五条)   // Law articles should inherit most recent law name
#CASE(上海徐汇区新起点进修学校诉杨江名誉权纠纷案)
```

#### User Document Attachment Reference

Pattern: `$` `(` `<name>` ( `|` `<attribute-list>` ) ? `)`

> `$` is used as prefix because it is visually like paper clip 📎.

| Attribute | Description |
| ---- | ----------- |
| `url` | Relative path or absolute url of the document |
| `id` | A identifier of the document in database or other storage |
| `type` | Document type, could be `DOC`, `IMAGE`, `TEXT`, `PRESENTATION`, `SPREADSHEET`, etc. |
| `version` | Document version in string or number |

A custom schema could be used in the `url` attribute.

Examples:

```
${The first Contract|type=DOC,url=mydoc://BEHlIwbhJf}
${合同文档.docx|url=doc-schema://BEHlIwbhJf,version=2.0}
```
