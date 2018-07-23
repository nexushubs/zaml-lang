# EAML

EAML: Enhanced AI Markup Language

Inspired by [YAML](http://yaml.org/spec/1.2/spec.html), [Markdown](https://www.markdownguide.org/cheat-sheet), [AIML](https://en.wikipedia.org/wiki/AIML) and PHP template syntax [Smarty](https://www.smarty.net/), EAML is a human readable marked up language which could be easily transformed into computer data structure.

## 1. Application Scenario

EAML could be used in:

* AI training sample
  * [Named-entity recognition (NER)](https://en.wikipedia.org/wiki/Named-entity_recognition).
  * Chatting bot definition, like AIML.
  * Marking tags during information extraction to build knowledge graph.
* Results of AI parsed text.
* Source code of rich text editor with AI assisted.
* Any other field needs labeling text related to AI

## 2. Design Principle

* EAML should directly based on plain text of natural language, that is to say, a plain text without any additional marker or sign is valid EAML.
* EAML could contains some of Markdown markers for formatting, as long as there are no conflicts with EAML.
* EAML could contains one or more section for defining structured data, e.g. key => value pair, enumeration, reference map, attachment list.
* EAML should be human readable, additional markers should not deeply affect reading.
* EAML contains text markers, a marker is consists of it's text, and additional properties. A marker could be:
  * Article, section scope properties.
  * Naming entities.
  * Article citation from knowledge database with original reference.
  * User uploaded document attachment as reference.
* EAML should be easily converted to:
  * Plain text of natural language.
  * JSON serializable data structure, used for later processing by computer program.
* EAML should be extensible for holding more type of information in the future.
* EAML syntax should be as simple, as short, as clear as it could be.
* If characters used by markers appears in natural language, it should be escaped.

## 3. Language

Sections, Marker types are capital letters, attributes using lower cased letters.

### 3.1 Basic Data Types

Basic data types are used in attributes of sections and markers.

| Type | Sample | Description |
| ---- | ------ | ----------- |
| `string` | `"example\n string"`, `Hello` | Quotes could be omitted if the string does not need to be escaped |
| `number` | `128`, `1e10`, `-6` | Expressed in literal form |
| `boolean` | `1`, `0`, `True`, `On`, `False`, `Off` | Expressed in literal form, if used in attribute value, could be omitted if the value is `True` |

### 3.2 Common Expression

Expression is a syntax used to demonstrate EAML language format

| Expression | Define | Description |
| ---------- | ------ | ----------- |
| `<space>` |  | A single white space |
| `<attribute>` | `<key>` `=` `<value>` | `value` should be encoded in URI component format |
| `<attribute-list>` | ( `<attribute>` ){n} | The comma after the last attribute could be omitted |

### 3.3 Front Matter

Front matter is used for defining markers which could be used lately used by reference, similar to [YAML front matter](https://jekyllrb.com/docs/frontmatter/).

Examples:

```
---
原告: [中天信和商贸有限公司]{@ORG}
被告: [XXX银行]{@ORG}
---
```

Inline:

```
{原告: [中天信和商贸有限公司]{@ORG}}
```

### 3.4 Sections

Section is one of the type: plain natural language part, defining markup etc., except for natural language, other sections is start with: `{` `<TYPE>` (`<attribute-list`)? `}`, and end with `{/<TYPE>}`.

Section content may not be inserted into the text when displayed to the user, and could be used by reference.

Section name is case-insensitive, so `{block}...{/block}` is valid

#### 3.4.1 {BLOCK} Section

`BLOCK` section is used for defining a block of EAML source, which could be inserted into other part of doc by reference.

Block could be nested, the wrapped content of a block is also valid EAML.

Syntax:

`{BLOCK` `<attribute-list>` `}` `<content>` `{/BLOCK}`

| Attribute | Value | Description |
| --------- | ------- | ----------- |
| `name` |  | A name that could be referenced |
| `show` | Default `true` | Whether the block itself is showed |
| `intention` | `statement`, `request`, `response` | A name that could be referenced |

Examples:

```
{BLOCK intention=statement}
  Jack says he would come here tomorrow
  {QUOTE from=@jack}
    I'll be here tomorrow!
  {/QUOTE}
{/BLOCK}

// here doc format
<<< intention=statement
>>>
```

#### 3.4.2 {QUOTE} Quotation Text

A special kind of block used for presenting quoted words from another people

```
{QUOTE from=@jack ref=12}
  // ...
{/QUOTE}
```

| Attribute | Value | Description |
| --------- | ------- | ----------- |
| `from` |  | Original user who wrote or spoke the word, could be a marker |
| `ref` |  | The URI or database id stores the original word |

#### 3.4.3 {INSERT} Insert Block

Insert the content of block by its name

Syntax:

`{INSERT` `<attribute-list>` `}`

Examples:

```
{INSERT block=blockname}
```

### 3.5 Reference

Pattern: `&[` `<name>` `]`

Reference marker from `DEF` Section

### 3.6 Markers

Marker defines additional info for specified word.

A word marked by marker must be inline.

#### 3.6.1 Naming Entities

Pattern: `[` `<name>` `]` ( `{` `@ <type>` ? (`<space>` `<attribute-list>`) ? `}` ) ?

Naming entities could be simple `(Some name)` or prefixed by naming type:

| Type | Description |
| ---- | ----------- |
| `PER` | A natural person |
| `USR` | A user in the system |
| `ORG` | Company or other organization |
| `LOC` | Location, district, area |

Examples:

```
[王律师]
[石小猛]{@} // default for PER
[Micheal Jackson]{@PER}
[王律师]{@USR}
[万科]{@ORG}
[小米]{@ORG fullname=小米科技} // Attribute
[北京]{@LOC}
[北京市东城区]{@LOC}
[香坊万达电影院]{@LOC}         // Exact position
[华山南路144号]{@LOC}         // Exact position
[31.008001N,103.607728E]{@POS} // Geo position of coordinates
```

Named reference:

```
---
甲方: [武汉人工不智能技有限公司]{@ORG}
---

[甲方]   # None typed entity should be passed as named reference whenever possible
&[甲方]
```

#### 3.6.2 Common Knowledge Base Citation

Pattern: `#` `<type>` ? `{` `<name>` ( `|` `<attribute-list>` ) ? `}`

| Type | Description |
| ---- | ----------- |
| `LAW` | A currently used law name  |
| `ART`, `LAW.ART` | A article (named part) of a law, law name could be included |
| `CASE`, `LAW.CASE` | A public case |

Examples:

```
[刑法]{#LAW}
[《民事诉讼法》第一百二十八条]{#LAW.ART}
[劳动法第27条]{#LAW.ART law=中华人民共和劳动法 artno=27}  // parsed result
[刑法]{&LAW}中[第三条]{#LAW.ART}，[第五条]{#LAW.ART}  // Law articles should inherit most recent law name
[上海徐汇区新起点进修学校诉杨江名誉权纠纷案]{#CASE}
```

#### 3.6.3 User Document Attachment Reference

Pattern: `[` `<name>` `]` `{DOC` ( `<attribute-list>` ) ? `}`

> `$` is used as prefix because it is visually like paper clip 📎.

| Attribute | Description |
| ---- | ----------- |
| `type` | Document type, could be `DOC`, `IMAGE`, `TEXT`, `PRESENTATION`, `SPREADSHEET`, etc. |
| `url` | Relative path or absolute url of the document |
| `id` | A identifier of the document in database or other storage |
| `version` | Document version in string or number |

A custom schema could be used in the `url` attribute.

Examples:

```
$[The first Contract]{DOC type=image url="my-schema://BEHlIwbhJf"}
$[合同文档.docx]{DOC url="doc-schema://BEHlIwbhJf" version=2.0}
```
