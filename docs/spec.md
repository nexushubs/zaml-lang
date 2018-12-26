# ZAML Language Specification

ZAML - Zebra (Hybrid) AI Markup Language

Inspired by [YAML](http://yaml.org/spec/1.2/spec.html), [Markdown](https://www.markdownguide.org/cheat-sheet), [AIML](https://en.wikipedia.org/wiki/AIML) and PHP template syntax [Smarty](https://www.smarty.net/), ZAML is a human readable marked up language which could be easily transformed into computer data structure.

## 1. Application Scenario

ZAML could be used in:

* AI training sample
  * [Named-entity recognition (NER)](https://en.wikipedia.org/wiki/Named-entity_recognition).
  * Chatting bot definition, like AIML.
  * Marking tags during information extraction to build knowledge graph.
* Results of AI parsed text.
* Source code of rich text editor with AI assisted.
* Any other field needs labeling text related to AI

## 2. Design Principle

* ZAML should directly based on plain text of natural language, that is to say, a plain text without any additional marker or sign is valid ZAML.
* ZAML could contains some of Markdown markers for formatting, as long as there are no conflicts with ZAML.
* ZAML could contains one or more section for defining structured data, e.g. key => value pair, enumeration, reference map, attachment list.
* ZAML should be human readable, additional markers should not deeply affect reading.
* ZAML contains text markers, a marker is consists of it's text, and additional properties. A marker could be:
  * Article, section scope properties.
  * Naming entities.
  * Article citation from knowledge database with original reference.
  * User uploaded document attachment as reference.
* ZAML should be easily converted to:
  * Plain text of natural language.
  * JSON serializable data structure, used for later processing by computer program.
* ZAML should be extensible for holding more type of information in the future.
* ZAML syntax should be as simple, as short, as clear as it could be.
* If characters used by markers appears in natural language, it should be escaped.

## 3. Language

Sections, Marker types are capital letters, attributes using lower cased letters.

### 3.1 Basic Data Types

Basic data types are used in attributes of sections and markers.

| Type           | Sample                                 | Description                                                                                    |
| -------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `string`       | `"example\n string"`, `Hello`          | Quotes could be omitted if the string does not need to be escaped                              |
| `number`       | `128`, `1e10`, `-6`                    | Expressed in literal form                                                                      |
| `int`          | `128`, `-6`                            | Integer number type                                                                            |
| `float`        | `1e10`, `3.1415926`                    | Float number type                                                                              |
| `boolean`      | `1`, `0`, `True`, `On`, `False`, `Off` | Expressed in literal form, if used in attribute value, could be omitted if the value is `True` |
| `date`, `time` | `2018-07-04`, `2018-07-04T10:01:24Z`   | Date time expressed in JSON date format                                                        |
| `enum`         | `enum<number>`                         | Enumeration of listed values                                                                   |

### 3.2 Common Expression

Expression is a syntax used to demonstrate ZAML language format

| Expression         | Define                         | Description                                         |
| ------------------ | ------------------------------ | --------------------------------------------------- |
| `<space>`          |                                | A single white space                                |
| `<attribute>`      | `<key>` `=` `<value>`          | `value` should be encoded in URI component format   |
| `<attribute-list>` | ( `<attribute>` `<space>` ){n} | The comma after the last attribute could be omitted |

### 3.3 Metadata

Metadata is used for defining value for the whole ZAML document, also for `BLOCK` tag, similar to [YAML front matter](https://jekyllrb.com/docs/frontmatter/).

Examples:

```
---
dateCreated: 2018-07-24
author: Peter
---
```

Metadata is parsed into `node.metadata` of the AST node.

### 3.4 Sections

Section is one of the type: plain natural language part, defining markup etc., except for natural language, other sections is start with: `{` `<TYPE>` (`<attribute-list`)? `}`, and end with `{/<TYPE>}`.

Section content may not be inserted into the text when displayed to the user, and could be used by reference.

Section name is case-insensitive, so `{block}...{/block}` is valid

#### 3.4.1 {BLOCK} Section

`BLOCK` section is used for defining a block of ZAML source, which could be inserted into other part of doc by reference.

Block could be nested, the wrapped content of a block is also valid ZAML.

Syntax:

`{BLOCK` `<attribute-list>` `}` `<content>` `{/BLOCK}`

| Attribute   | Type           | Value                                                                  | Description                        |
| ----------- | -------------- | ---------------------------------------------------------------------- | ---------------------------------- |
| `name`      | `string`       |                                                                        | A name that could be referenced    |
| `label`     | `string[]`     | list of label `string`(s) separate by `<space>`, Could be none or many | Label of the text                  |
| `show`      | `boolean`      | default `true`                                                         | Whether the block itself is showed |
| `intention` | `enum<string>` | `"statement"`, `"request"`, `"response"`                               | A name that could be referenced    |

Examples:

```
{BLOCK intention=statement}
  Jack says he would come here tomorrow:
  {QUOTE from=@jack}
    I'll be here tomorrow!
  {/QUOTE}
{/BLOCK}
```

Simple format:

```
{intention=statement
  Jack says he would come here tomorrow:
  {QUOTE
    I'll be here tomorrow!
  }
}
```

Custom block start and block end signature can be passed to language parser or renderer

Recommended signatures:

| Style  | Start                                        | End               | Description   |
| ------ | -------------------------------------------- | ----------------- | ------------- |
| Smarty | `{ <block-name> <space> <attribute-list> }`  | `{/<block-name>}` | Default style |
| AIML   | `{ <block-name> <space> <attribute-list>`    | `}`               | Simple format |
| Texy!  | `/--- <block-name> <space> <attribute-list>` | `\---`            |               |

#### 3.4.2 {QUOTE} Quotation Text

A special kind of block used for presenting quoted words from another people

```
{QUOTE from=@jack ref=12}
  // ...
{/QUOTE}
```

| Attribute | Value | Description                                                  |
| --------- | ----- | ------------------------------------------------------------ |
| `from`    |       | Original user who wrote or spoke the word, could be a marker |
| `ref`     |       | The URI or database id stores the original word              |

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

Pattern: `[` `<text>` `]` ( `{` `<type>` ? (`<space>` `<attribute-list>`) ? `}` ) ?

Naming entities could be simple `(Some name)` or followed by naming type definition:

| Type         | Format                                                                                | Description                                                    |
| ------------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `PER`, `P`   | `{PER name:string lastName:string firstName:string}`                                  | A natural person                                               |
| `USR`, `U`   | `{USR id:string}`                                                                     | A user in the system                                           |
| `ORG`, `O`   | `{ORG fullName:string}`                                                               | Company or other organization                                  |
| `LOC`, `L`   | `{LOC name:string longitude:float latitude:float}`                                    | Location, district, area                                       |
| `LINK`       | `{LINK url:string}`                                                                   | The text is a time                                             |
| `DATE`       | `{DATE value:date relative:boolean}`                                                  | The text is a time                                             |
| `PHONE`      | `{PHONE value:string type:enum<string>}`                                              | Phone number, type could be `mobile`, `home`, `work` or `none` |
| `ADDRESS`    | `{ADDRESS url:string}`                                                                | Url                                                            |
| `EAN_CODE`   | `{EAN_CODE value:string isbnType:string value:string groupName:string valid:boolean}` | EAN13, ISBN 10, ISBN 13                                        |
| `ID_CARD.CN` | `{ID_CARD.CN value:string district:string birthDate:date valid:boolean}`              | Chinese ID card number                                         |
| `PLATE.CN`   | `{PLATE.CN value:string type:enum<string> district:string valid:boolean}`             | Chinese vehicle registration plate                             |
| `FDA_NO.CN`  | `{FDA_NO.CN value:string}`                                                            | CFDA licensed number                                           |
| `VERDICT.CN` | `{LAW.JUDGE.CN value:string title:string}`                                            | Chinese court judgement verdict                                |

Examples:

```
[王律师]
[石小猛]{P} // default for PER
[Micheal Jackson]{PER}
[王律师]{USR}
[万科]{ORG}
[小米]{ORG fullName=小米科技}  // Attribute
[北京]{LOC}
[北京市东城区]{LOC}
[香坊万达电影院]{LOC}           // Exact position
[华山南路144号]{LOC}           // Exact position
[31.008001N,103.607728E]{LOC} // Geo position of coordinates
```

Named reference:

```
---
甲方: [武汉人工不智能技有限公司]{ORG}
---

[甲方]   # None typed entity should be passed as named reference whenever possible
&[甲方]
```

#### 3.6.2 Common Knowledge Base Citation

Pattern: `[` `<text>` `]` `{#<type>` ( `<attribute-list>` ) ? `}`

| Type               | Format                                    | Description                                                 |
| ------------------ | ----------------------------------------- | ----------------------------------------------------------- |
| `LAW`              | `{#LAW fullName:string}`                  | A currently used law name                                   |
| `ART`, `LAW.ART`   | `{#ART law:string name:string artNo:int}` | A article (named part) of a law, law name could be included |
| `CASE`, `LAW.CASE` | `{#CASE title:string}`                    | A public case                                               |

Examples:

```
[刑法]{#LAW}
[《民事诉讼法》第一百二十八条]{#LAW.ART}
[劳动法第27条]{#LAW.ART law=中华人民共和劳动法 artNo=27 name=第二十七条}  // parsed result
[刑法]{&LAW}中[第三条]{#ART}，[第五条]{#ART}  // Law articles should inherit most recent law name
[上海徐汇区新起点进修学校诉杨江名誉权纠纷案]{#CASE}
```

#### 3.6.3 User Document Attachment Reference

Pattern: `$[` `<text>` `]` `{DOC` ( `<attribute-list>` ) ? `}`

> `$` is used as prefix because it is visually like paper clip 📎.

| Attribute | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| `type`    | Document type, could be `DOC`, `IMAGE`, `TEXT`, `PRESENTATION`, `SPREADSHEET`, etc. |
| `url`     | Relative path or absolute url of the document                                       |
| `id`      | A identifier of the document in database or other storage                           |
| `version` | Document version in string or number                                                |

A custom schema could be used in the `url` attribute.

Examples:

```
$[The first Contract]{DOC type=image url="my-schema://BEHlIwbhJf"}
$[合同文档.docx]{DOC url="doc-schema://BEHlIwbhJf" version=2.0}
```

## 4. Parsing and Constructing

### 4.1 Parsing Example

#### 4.1.1 ZAML Source

```
There is something I should tell you.
{BLOCK intention=statement}
  Jack says he would come here tomorrow:
  {QUOTE from=Jack}
    “[I]{PER name=Jack}'ll be [here]{LOC} [tomorrow]{DATE value=2018-07-25}.”
  {/QUOTE}
{/BLOCK}
So we can meet together, here is the link [http://example.com/meeting/Qb238aSm]{LINK url=http://example.com/meeting/Qb238aSm}
```

#### 4.1.2 Plain Text

```
There is something I should tell you.
Jack says he would come here tomorrow:
“I'll be here tomorrow.”
So we can meet together, here is the link http://example.com/meeting/Qb238aSm
```

#### 4.1.3 Parsed AST

Checkout:

[parsed-ast.json](../packages/zaml-parser/test/fixtures/parsed-ast.json)
