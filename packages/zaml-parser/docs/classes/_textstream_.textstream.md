[@zaml/parser](../README.md) › ["TextStream"](../modules/_textstream_.md) › [TextStream](_textstream_.textstream.md)

# Class: TextStream

Stream like text string

**`typicalname`** stream

## Hierarchy

* **TextStream**

## Index

### Constructors

* [constructor](_textstream_.textstream.md#constructor)

### Properties

* [cursorStack](_textstream_.textstream.md#cursorstack)
* [lastMatch](_textstream_.textstream.md#lastmatch)
* [lineOffsetIndexes](_textstream_.textstream.md#lineoffsetindexes)
* [lines](_textstream_.textstream.md#lines)
* [markers](_textstream_.textstream.md#markers)
* [pos](_textstream_.textstream.md#pos)
* [tabSize](_textstream_.textstream.md#tabsize)
* [text](_textstream_.textstream.md#text)

### Methods

* [backUp](_textstream_.textstream.md#backup)
* [debugCursor](_textstream_.textstream.md#debugcursor)
* [debugLine](_textstream_.textstream.md#debugline)
* [debugState](_textstream_.textstream.md#debugstate)
* [eat](_textstream_.textstream.md#eat)
* [eatSpaces](_textstream_.textstream.md#eatspaces)
* [eatUntil](_textstream_.textstream.md#eatuntil)
* [eatWhile](_textstream_.textstream.md#eatwhile)
* [eof](_textstream_.textstream.md#eof)
* [eol](_textstream_.textstream.md#eol)
* [findLine](_textstream_.textstream.md#findline)
* [getMarkerData](_textstream_.textstream.md#getmarkerdata)
* [getPosition](_textstream_.textstream.md#getposition)
* [init](_textstream_.textstream.md#init)
* [match](_textstream_.textstream.md#match)
* [next](_textstream_.textstream.md#next)
* [peek](_textstream_.textstream.md#peek)
* [popCursor](_textstream_.textstream.md#popcursor)
* [popMarker](_textstream_.textstream.md#popmarker)
* [pushCursor](_textstream_.textstream.md#pushcursor)
* [pushMarker](_textstream_.textstream.md#pushmarker)
* [read](_textstream_.textstream.md#read)
* [readLine](_textstream_.textstream.md#readline)
* [readOver](_textstream_.textstream.md#readover)
* [readTo](_textstream_.textstream.md#readto)
* [resetMarker](_textstream_.textstream.md#resetmarker)
* [search](_textstream_.textstream.md#search)
* [setMarkerData](_textstream_.textstream.md#setmarkerdata)
* [skipOver](_textstream_.textstream.md#skipover)
* [skipTo](_textstream_.textstream.md#skipto)
* [skipToEnd](_textstream_.textstream.md#skiptoend)
* [sol](_textstream_.textstream.md#sol)

## Constructors

###  constructor

\+ **new TextStream**(`text`: string, `tabSize`: number): *[TextStream](_textstream_.textstream.md)*

*Defined in [src/TextStream.ts:92](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L92)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`tabSize` | number | 2 |

**Returns:** *[TextStream](_textstream_.textstream.md)*

## Properties

###  cursorStack

• **cursorStack**: *number[]*

*Defined in [src/TextStream.ts:89](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L89)*

Cursor stack positions

___

###  lastMatch

• **lastMatch**: *string* = ""

*Defined in [src/TextStream.ts:92](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L92)*

Last matched string of methods like eat() match()

___

###  lineOffsetIndexes

• **lineOffsetIndexes**: *number[]* = []

*Defined in [src/TextStream.ts:83](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L83)*

Start position of each line

___

###  lines

• **lines**: *[TextLine](_textline_.textline.md)[]*

*Defined in [src/TextStream.ts:80](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L80)*

Text lines

___

###  markers

• **markers**: *[Marker](../interfaces/_textstream_.marker.md)[]*

*Defined in [src/TextStream.ts:86](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L86)*

Markers

___

###  pos

• **pos**: *number*

*Defined in [src/TextStream.ts:71](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L71)*

Current cursor position

___

###  tabSize

• **tabSize**: *number*

*Defined in [src/TextStream.ts:77](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L77)*

Tab size

___

###  text

• **text**: *string*

*Defined in [src/TextStream.ts:74](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L74)*

Original text

## Methods

###  backUp

▸ **backUp**(`n`: number): *void*

*Defined in [src/TextStream.ts:482](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L482)*

Move cursor back

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`n` | number | 1 | Steps  |

**Returns:** *void*

___

###  debugCursor

▸ **debugCursor**(`text`: string, `col`: number, `numWidth`: number): *void*

*Defined in [src/TextStream.ts:623](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L623)*

Debug cursor column position

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | Text of the line |
`col` | number | Cursor position |
`numWidth` | number | fixed line number width  |

**Returns:** *void*

___

###  debugLine

▸ **debugLine**(`line`: [TextLine](_textline_.textline.md), `numWidth`: number, `col`: number): *void*

*Defined in [src/TextStream.ts:606](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L606)*

Debug a single line

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`line` | [TextLine](_textline_.textline.md) | - |
`numWidth` | number | - |
`col` | number |   |

**Returns:** *void*

___

###  debugState

▸ **debugState**(`range`: number): *void*

*Defined in [src/TextStream.ts:632](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L632)*

Debug current position state, with previous and following lines set by range

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`range` | number | 0 |   |

**Returns:** *void*

___

###  eat

▸ **eat**(`pattern`: [TextPattern](../modules/_textstream_.md#textpattern)): *string*

*Defined in [src/TextStream.ts:247](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L247)*

Consumes one char if the next char fitting the pattern

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | [TextPattern](../modules/_textstream_.md#textpattern) |

**Returns:** *string*

The char been eaten

___

###  eatSpaces

▸ **eatSpaces**(): *boolean*

*Defined in [src/TextStream.ts:311](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L311)*

Consumes spaces

**Returns:** *boolean*

If any space has been consumed

___

###  eatUntil

▸ **eatUntil**(`pattern`: [TextPattern](../modules/_textstream_.md#textpattern)): *string*

*Defined in [src/TextStream.ts:291](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L291)*

Consumes chars until the first char not fitting the pattern

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pattern` | [TextPattern](../modules/_textstream_.md#textpattern) | char or pattern |

**Returns:** *string*

eaten characters

___

###  eatWhile

▸ **eatWhile**(`pattern`: [TextPattern](../modules/_textstream_.md#textpattern)): *string*

*Defined in [src/TextStream.ts:273](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L273)*

Consumes chars while fitting the pattern

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | [TextPattern](../modules/_textstream_.md#textpattern) |

**Returns:** *string*

Eaten characters

___

###  eof

▸ **eof**(`pos?`: undefined | number): *boolean*

*Defined in [src/TextStream.ts:216](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L216)*

Check if cursor is at the end of whole text

**Parameters:**

Name | Type |
------ | ------ |
`pos?` | undefined &#124; number |

**Returns:** *boolean*

___

###  eol

▸ **eol**(`trimSpaces`: boolean): *boolean*

*Defined in [src/TextStream.ts:200](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L200)*

Check if cursor is at the end of a line

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`trimSpaces` | boolean | false |

**Returns:** *boolean*

___

###  findLine

▸ **findLine**(`text`: string): *undefined | [TextLine](_textline_.textline.md)‹›*

*Defined in [src/TextStream.ts:573](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L573)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *undefined | [TextLine](_textline_.textline.md)‹›*

___

###  getMarkerData

▸ **getMarkerData**(): *[MarkerData](../modules/_textstream_.md#markerdata)*

*Defined in [src/TextStream.ts:536](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L536)*

Get data of current markder

**Returns:** *[MarkerData](../modules/_textstream_.md#markerdata)*

___

###  getPosition

▸ **getPosition**(`pos?`: undefined | number): *[SourcePosition](../interfaces/_textstream_.sourceposition.md)*

*Defined in [src/TextStream.ts:161](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L161)*

Get line and column position of the cursor

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pos?` | undefined &#124; number | Cursor position of the text  |

**Returns:** *[SourcePosition](../interfaces/_textstream_.sourceposition.md)*

___

###  init

▸ **init**(): *void*

*Defined in [src/TextStream.ts:130](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L130)*

Prepare line indexes

**Returns:** *void*

___

###  match

▸ **match**(`pattern`: [TextPattern](../modules/_textstream_.md#textpattern), `options`: [MatchOptions](../interfaces/_textstream_.matchoptions.md)): *string*

*Defined in [src/TextStream.ts:491](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L491)*

Check if rest text begins with pattern

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`pattern` | [TextPattern](../modules/_textstream_.md#textpattern) | - |
`options` | [MatchOptions](../interfaces/_textstream_.matchoptions.md) | {} |

**Returns:** *string*

___

###  next

▸ **next**(): *string*

*Defined in [src/TextStream.ts:235](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L235)*

Get one next char, and move cursor forward (if available)

**Returns:** *string*

The next char

___

###  peek

▸ **peek**(): *string*

*Defined in [src/TextStream.ts:227](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L227)*

Get one next char, but keep the cursor position (if available)

**Returns:** *string*

The next char

___

###  popCursor

▸ **popCursor**(): *number*

*Defined in [src/TextStream.ts:592](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L592)*

Pop last from cursor stack and set it to current cursor

**Returns:** *number*

___

###  popMarker

▸ **popMarker**(`_data`: [MarkerData](../modules/_textstream_.md#markerdata), `end`: number): *[MarkerInfo](../interfaces/_textstream_.markerinfo.md) | undefined*

*Defined in [src/TextStream.ts:548](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L548)*

Return a combined structure of text and it's position according to the previously set start
marker

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_data` | [MarkerData](../modules/_textstream_.md#markerdata) | {} |
`end` | number | - |

**Returns:** *[MarkerInfo](../interfaces/_textstream_.markerinfo.md) | undefined*

___

###  pushCursor

▸ **pushCursor**(`pos`: number): *void*

*Defined in [src/TextStream.ts:581](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L581)*

Push current cursor to cursor stack, if new position provided, set current cursor to it

**Parameters:**

Name | Type |
------ | ------ |
`pos` | number |

**Returns:** *void*

___

###  pushMarker

▸ **pushMarker**(`data`: [MarkerData](../modules/_textstream_.md#markerdata), `start`: number): *void*

*Defined in [src/TextStream.ts:516](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L516)*

Add a marker to stack

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [MarkerData](../modules/_textstream_.md#markerdata) | - |
`start` | number |   |

**Returns:** *void*

___

###  read

▸ **read**(`n`: number): *string*

*Defined in [src/TextStream.ts:361](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L361)*

Read n chars after current cursor

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | number | 1 |

**Returns:** *string*

___

###  readLine

▸ **readLine**(): *string*

*Defined in [src/TextStream.ts:435](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L435)*

Read one line

**Returns:** *string*

Text containing one line (not including line break)

___

###  readOver

▸ **readOver**(`pattern`: [TextPattern](../modules/_textstream_.md#textpattern), `options`: [ReadOptions](../interfaces/_textstream_.readoptions.md)): *string*

*Defined in [src/TextStream.ts:427](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L427)*

Read to pattern (contains the matched text)

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`pattern` | [TextPattern](../modules/_textstream_.md#textpattern) | - | Text to find or pattern |
`options` | [ReadOptions](../interfaces/_textstream_.readoptions.md) | {} | Match options |

**Returns:** *string*

Sub-text after current cursor and until the end of matched text

___

###  readTo

▸ **readTo**(`pattern`: [TextPattern](../modules/_textstream_.md#textpattern), `options`: [ReadOptions](../interfaces/_textstream_.readoptions.md)): *string*

*Defined in [src/TextStream.ts:379](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L379)*

Read to text or pattern

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`pattern` | [TextPattern](../modules/_textstream_.md#textpattern) | - |
`options` | [ReadOptions](../interfaces/_textstream_.readoptions.md) | {} |

**Returns:** *string*

Sub-text after current cursor and before (or contains) matched text

___

###  resetMarker

▸ **resetMarker**(): *void*

*Defined in [src/TextStream.ts:507](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L507)*

Reset the marker stack

**Returns:** *void*

___

###  search

▸ **search**(`pattern`: [TextPattern](../modules/_textstream_.md#textpattern), `options`: [SearchOptions](../interfaces/_textstream_.searchoptions.md)): *object*

*Defined in [src/TextStream.ts:324](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L324)*

Find position of matched text to the pattern

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`pattern` | [TextPattern](../modules/_textstream_.md#textpattern) | - | - |
`options` | [SearchOptions](../interfaces/_textstream_.searchoptions.md) | {} |   |

**Returns:** *object*

* **index**: *number*

* **length**: *number*

* **matched**: *string*

___

###  setMarkerData

▸ **setMarkerData**(`data`: [MarkerData](../modules/_textstream_.md#markerdata)): *void*

*Defined in [src/TextStream.ts:527](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L527)*

Set data for current marker

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [MarkerData](../modules/_textstream_.md#markerdata) |   |

**Returns:** *void*

___

###  skipOver

▸ **skipOver**(`pattern`: [TextPattern](../modules/_textstream_.md#textpattern), `options?`: [ReadOptions](../interfaces/_textstream_.readoptions.md)): *boolean*

*Defined in [src/TextStream.ts:472](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L472)*

Skip to the end of matched text

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pattern` | [TextPattern](../modules/_textstream_.md#textpattern) |   |
`options?` | [ReadOptions](../interfaces/_textstream_.readoptions.md) | - |

**Returns:** *boolean*

___

###  skipTo

▸ **skipTo**(`pattern`: [TextPattern](../modules/_textstream_.md#textpattern), `options?`: [ReadOptions](../interfaces/_textstream_.readoptions.md)): *boolean*

*Defined in [src/TextStream.ts:462](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L462)*

Skip to the beginning of matched text

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pattern` | [TextPattern](../modules/_textstream_.md#textpattern) | - |
`options?` | [ReadOptions](../interfaces/_textstream_.readoptions.md) |   |

**Returns:** *boolean*

___

###  skipToEnd

▸ **skipToEnd**(): *void*

*Defined in [src/TextStream.ts:453](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L453)*

Move cursor to end of text

**Returns:** *void*

___

###  sol

▸ **sol**(`trimSpaces`: boolean): *boolean*

*Defined in [src/TextStream.ts:184](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L184)*

Check if cursor is at the start of a line

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`trimSpaces` | boolean | false |

**Returns:** *boolean*
