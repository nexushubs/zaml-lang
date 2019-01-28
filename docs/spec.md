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

Tag, Marker types are capital letters, attributes using lower cased letters.

### 3.1 Literals

Literals are used in attributes of tag and markers.

| Type      | Sample                                            | Description                                                                                    |
| --------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `string`  | `"example\n string"`, `Hello`                     | Quotes could be omitted if the string does not need to be escaped                              |
| `number`  | `128`, `1e10`, `-6`                               | Expressed in literal form                                                                      |
| `boolean` | `TRUE`, `True`, `true`, `FALSE`, `False`, `false` | Expressed in literal form, if used in attribute value, could be omitted if the value is `True` |
| `date`    | `2018-07-04`, `2018-07-04T10:01:24.000Z`          | Date time expressed in JSON date format                                                        |

### 3.2 Common Expression

Expression is a syntax used to demonstrate ZAML language format

| Expression         | Define                                        | Description                                       |
| ------------------ | --------------------------------------------- | ------------------------------------------------- |
| `<space>`          |                                               | One ore more white space, may includes line break |
| `<front-matter>`   | `---`                                         | One ore more white space, may includes line break |
| `<label>`          | `#<label-name>`                               | Label                                             |
| `<attribute>`      | `<key>=<value>`                               | should be encoded in URI component format         |
| `<truthy>`         | `<key>`                                       | Boolean true attribute literal                    |
| `<attribute-list>` | `((<attribute>|<label>|<truthy>)<space>?){n}` | Attribute key-value pair                          |
| `<metadata-list>`  | `((<attribute>|<label>)<space>?){n}`          | Metadata key-value pair                           |

### 3.3 Attributes & Metadata

### 3.3.1 Attributes & Metadata

Attributes are attached with block and inline block.

### 3.3.2 Metadata

Metadata is used for defining value for the whole ZAML document, also for `BLOCK` tag, similar to [YAML front matter](https://jekyllrb.com/docs/frontmatter/).

Metadata is parsed similar as block attributes, but `<truthy>` boolean is not supported.
It is stored in `node.metadata` of the AST node.

Examples:

```yaml
---
dateCreated: 2018-07-24
author: Peter
---
```

### 3.4 Tag

Tag is one of the type: plain natural language part, defining markup etc., except for natural language, other tag is start with: `{` `<TYPE>` (`<attribute-list`)? `}`, and end with `{/<TYPE>}`.

Tag content may not be inserted into the text when displayed to the user, and could be used by reference.

Tag name is case-insensitive, so `{block}...{/block}` is valid

#### 3.4.1 {BLOCK} and {INLINE} Tag

`BLOCK` Tag is used for defining a block of ZAML source, which could be inserted into other part of doc by reference.

Block could be nested, the wrapped content of a block is also valid ZAML.

Syntax:

`{BLOCK` `<attribute-list>` `}` `<content>` `{/BLOCK}`

Examples:

```
{BLOCK intention=statement}
  Jack says {INLINE}he would come here tomorrow{/INLINE}.
  {QUOTE from=@jack}
    I'll be here tomorrow!
  {/QUOTE}
{/BLOCK}
```

Simple format:

```
{intention=statement
  Jack says {he would come here tomorrow}.
  {QUOTE
    I'll be here tomorrow!
  }
}
```

### 3.5 Reference

Pattern: `&[` `<name>` `]`

Reference marker from `DEF` Section

### 3.6 Naming Entity

Marker defines additional info for specified word.

A word marked by marker must be inline.

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

#### 3.7 Attachments

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
