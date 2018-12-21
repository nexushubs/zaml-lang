[@zaml/parser](../README.md) > ["TextStream"](../modules/_textstream_.md) > [TextStream](../classes/_textstream_.textstream.md)

# Class: TextStream

Stream like text string
*__typicalname__*: stream

## Hierarchy

**TextStream**

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

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TextStream**(text: *`string`*, tabSize?: *`number`*): [TextStream](_textstream_.textstream.md)

*Defined in [TextStream.ts:85](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L85)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| text | `string` | - |
| `Default value` tabSize | `number` | 2 |

**Returns:** [TextStream](_textstream_.textstream.md)

___

## Properties

<a id="cursorstack"></a>

###  cursorStack

**● cursorStack**: *`number`[]*

*Defined in [TextStream.ts:82](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L82)*

Cursor stack positions

___
<a id="lastmatch"></a>

###  lastMatch

**● lastMatch**: *`string`* = ""

*Defined in [TextStream.ts:85](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L85)*

Last matched string of methods like eat() match()

___
<a id="lineoffsetindexes"></a>

###  lineOffsetIndexes

**● lineOffsetIndexes**: *`number`[]* =  []

*Defined in [TextStream.ts:76](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L76)*

Start position of each line

___
<a id="lines"></a>

###  lines

**● lines**: *[TextLine](_textline_.textline.md)[]*

*Defined in [TextStream.ts:73](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L73)*

Text lines

___
<a id="markers"></a>

###  markers

**● markers**: *[Marker](../interfaces/_textstream_.marker.md)[]*

*Defined in [TextStream.ts:79](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L79)*

Markers

___
<a id="pos"></a>

###  pos

**● pos**: *`number`*

*Defined in [TextStream.ts:64](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L64)*

Current cursor position

___
<a id="tabsize"></a>

###  tabSize

**● tabSize**: *`number`*

*Defined in [TextStream.ts:70](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L70)*

Tab size

___
<a id="text"></a>

###  text

**● text**: *`string`*

*Defined in [TextStream.ts:67](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L67)*

Original text

___

## Methods

<a id="backup"></a>

###  backUp

▸ **backUp**(n?: *`number`*): `void`

*Defined in [TextStream.ts:475](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L475)*

Move cursor back

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` n | `number` | 1 |  Steps |

**Returns:** `void`

___
<a id="debugcursor"></a>

###  debugCursor

▸ **debugCursor**(text: *`string`*, col: *`number`*, numWidth: *`number`*): `void`

*Defined in [TextStream.ts:616](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L616)*

Debug cursor column position

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  Text of the line |
| col | `number` |  Cursor position |
| numWidth | `number` |  fixed line number width |

**Returns:** `void`

___
<a id="debugline"></a>

###  debugLine

▸ **debugLine**(line: *[TextLine](_textline_.textline.md)*, numWidth: *`number`*, col: *`number`*): `void`

*Defined in [TextStream.ts:599](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L599)*

Debug a single line

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| line | [TextLine](_textline_.textline.md) |  \- |
| numWidth | `number` |  \- |
| col | `number` |   |

**Returns:** `void`

___
<a id="debugstate"></a>

###  debugState

▸ **debugState**(range?: *`number`*): `void`

*Defined in [TextStream.ts:625](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L625)*

Debug current position state, with previous and following lines set by range

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` range | `number` | 0 |   |

**Returns:** `void`

___
<a id="eat"></a>

###  eat

▸ **eat**(pattern: *[TextPattern](../modules/_textstream_.md#textpattern)*): `string`

*Defined in [TextStream.ts:240](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L240)*

Consumes one char if the next char fitting the pattern

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pattern | [TextPattern](../modules/_textstream_.md#textpattern) |  \- |

**Returns:** `string`
The char been eaten

___
<a id="eatspaces"></a>

###  eatSpaces

▸ **eatSpaces**(): `boolean`

*Defined in [TextStream.ts:304](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L304)*

Consumes spaces

**Returns:** `boolean`
If any space has been consumed

___
<a id="eatuntil"></a>

###  eatUntil

▸ **eatUntil**(pattern: *[TextPattern](../modules/_textstream_.md#textpattern)*): `string`

*Defined in [TextStream.ts:284](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L284)*

Consumes chars until the first char not fitting the pattern

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pattern | [TextPattern](../modules/_textstream_.md#textpattern) |  char or pattern |

**Returns:** `string`
eaten characters

___
<a id="eatwhile"></a>

###  eatWhile

▸ **eatWhile**(pattern: *[TextPattern](../modules/_textstream_.md#textpattern)*): `string`

*Defined in [TextStream.ts:266](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L266)*

Consumes chars while fitting the pattern

**Parameters:**

| Name | Type |
| ------ | ------ |
| pattern | [TextPattern](../modules/_textstream_.md#textpattern) |

**Returns:** `string`
Eaten characters

___
<a id="eof"></a>

###  eof

▸ **eof**(pos?: * `undefined` &#124; `number`*): `boolean`

*Defined in [TextStream.ts:209](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L209)*

Check if cursor is at the end of whole text

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` pos |  `undefined` &#124; `number`|

**Returns:** `boolean`

___
<a id="eol"></a>

###  eol

▸ **eol**(trimSpaces?: *`boolean`*): `boolean`

*Defined in [TextStream.ts:193](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L193)*

Check if cursor is at the end of a line

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` trimSpaces | `boolean` | false |

**Returns:** `boolean`

___
<a id="findline"></a>

###  findLine

▸ **findLine**(text: *`string`*):  `undefined` &#124; [TextLine](_textline_.textline.md)

*Defined in [TextStream.ts:566](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L566)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:**  `undefined` &#124; [TextLine](_textline_.textline.md)

___
<a id="getmarkerdata"></a>

###  getMarkerData

▸ **getMarkerData**(): [MarkerData](../modules/_textstream_.md#markerdata)

*Defined in [TextStream.ts:529](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L529)*

Get data of current markder

**Returns:** [MarkerData](../modules/_textstream_.md#markerdata)

___
<a id="getposition"></a>

###  getPosition

▸ **getPosition**(pos?: * `undefined` &#124; `number`*): `object`

*Defined in [TextStream.ts:154](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L154)*

Get line and column position of the cursor

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` pos |  `undefined` &#124; `number`|  Cursor position of the text |

**Returns:** `object`

___
<a id="init"></a>

###  init

▸ **init**(): `void`

*Defined in [TextStream.ts:123](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L123)*

Prepare line indexes

**Returns:** `void`

___
<a id="match"></a>

###  match

▸ **match**(pattern: *[TextPattern](../modules/_textstream_.md#textpattern)*, options?: *[MatchOptions](../interfaces/_textstream_.matchoptions.md)*): `string`

*Defined in [TextStream.ts:484](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L484)*

Check if rest text begins with pattern

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| pattern | [TextPattern](../modules/_textstream_.md#textpattern) | - |  \- |
| `Default value` options | [MatchOptions](../interfaces/_textstream_.matchoptions.md) |  {} |

**Returns:** `string`

___
<a id="next"></a>

###  next

▸ **next**(): `string`

*Defined in [TextStream.ts:228](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L228)*

Get one next char, and move cursor forward (if available)

**Returns:** `string`
The next char

___
<a id="peek"></a>

###  peek

▸ **peek**(): `string`

*Defined in [TextStream.ts:220](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L220)*

Get one next char, but keep the cursor position (if available)

**Returns:** `string`
The next char

___
<a id="popcursor"></a>

###  popCursor

▸ **popCursor**(): `number`

*Defined in [TextStream.ts:585](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L585)*

Pop last from cursor stack and set it to current cursor

**Returns:** `number`

___
<a id="popmarker"></a>

###  popMarker

▸ **popMarker**(_data?: *[MarkerData](../modules/_textstream_.md#markerdata)*, end: *`number`*):  [MarkerInfo](../interfaces/_textstream_.markerinfo.md) &#124; `undefined`

*Defined in [TextStream.ts:541](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L541)*

Return a combined structure of text and it's position according to the previously set start marker

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` _data | [MarkerData](../modules/_textstream_.md#markerdata) |  {} |
| end | `number` | - |

**Returns:**  [MarkerInfo](../interfaces/_textstream_.markerinfo.md) &#124; `undefined`

___
<a id="pushcursor"></a>

###  pushCursor

▸ **pushCursor**(pos: *`number`*): `void`

*Defined in [TextStream.ts:574](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L574)*

Push current cursor to cursor stack, if new position provided, set current cursor to it

**Parameters:**

| Name | Type |
| ------ | ------ |
| pos | `number` |

**Returns:** `void`

___
<a id="pushmarker"></a>

###  pushMarker

▸ **pushMarker**(data: *[MarkerData](../modules/_textstream_.md#markerdata)*, start: *`number`*): `void`

*Defined in [TextStream.ts:509](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L509)*

Add a marker to stack

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | [MarkerData](../modules/_textstream_.md#markerdata) |  \- |
| start | `number` |   |

**Returns:** `void`

___
<a id="read"></a>

###  read

▸ **read**(n?: *`number`*): `string`

*Defined in [TextStream.ts:354](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L354)*

Read n chars after current cursor

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` n | `number` | 1 |

**Returns:** `string`

___
<a id="readline"></a>

###  readLine

▸ **readLine**(): `string`

*Defined in [TextStream.ts:428](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L428)*

Read one line

**Returns:** `string`
Text containing one line (not including line break)

___
<a id="readover"></a>

###  readOver

▸ **readOver**(pattern: *[TextPattern](../modules/_textstream_.md#textpattern)*, options?: *[ReadOptions](../interfaces/_textstream_.readoptions.md)*): `string`

*Defined in [TextStream.ts:420](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L420)*

Read to pattern (contains the matched text)

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| pattern | [TextPattern](../modules/_textstream_.md#textpattern) | - |  Text to find or pattern |
| `Default value` options | [ReadOptions](../interfaces/_textstream_.readoptions.md) |  {} |  Match options |

**Returns:** `string`
Sub-text after current cursor and until the end of matched text

___
<a id="readto"></a>

###  readTo

▸ **readTo**(pattern: *[TextPattern](../modules/_textstream_.md#textpattern)*, options?: *[ReadOptions](../interfaces/_textstream_.readoptions.md)*): `string`

*Defined in [TextStream.ts:372](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L372)*

Read to text or pattern

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| pattern | [TextPattern](../modules/_textstream_.md#textpattern) | - |  \- |
| `Default value` options | [ReadOptions](../interfaces/_textstream_.readoptions.md) |  {} |

**Returns:** `string`
Sub-text after current cursor and before (or contains) matched text

___
<a id="resetmarker"></a>

###  resetMarker

▸ **resetMarker**(): `void`

*Defined in [TextStream.ts:500](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L500)*

Reset the marker stack

**Returns:** `void`

___
<a id="search"></a>

###  search

▸ **search**(pattern: *[TextPattern](../modules/_textstream_.md#textpattern)*, options?: *[SearchOptions](../interfaces/_textstream_.searchoptions.md)*): `object`

*Defined in [TextStream.ts:317](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L317)*

Find position of matched text to the pattern

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| pattern | [TextPattern](../modules/_textstream_.md#textpattern) | - |  \- |
| `Default value` options | [SearchOptions](../interfaces/_textstream_.searchoptions.md) |  {} |   |

**Returns:** `object`

___
<a id="setmarkerdata"></a>

###  setMarkerData

▸ **setMarkerData**(data: *[MarkerData](../modules/_textstream_.md#markerdata)*): `void`

*Defined in [TextStream.ts:520](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L520)*

Set data for current marker

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | [MarkerData](../modules/_textstream_.md#markerdata) |   |

**Returns:** `void`

___
<a id="skipover"></a>

###  skipOver

▸ **skipOver**(pattern: *[TextPattern](../modules/_textstream_.md#textpattern)*, options?: *[ReadOptions](../interfaces/_textstream_.readoptions.md)*): `boolean`

*Defined in [TextStream.ts:465](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L465)*

Skip to the end of matched text

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pattern | [TextPattern](../modules/_textstream_.md#textpattern) |   |
| `Optional` options | [ReadOptions](../interfaces/_textstream_.readoptions.md) |

**Returns:** `boolean`

___
<a id="skipto"></a>

###  skipTo

▸ **skipTo**(pattern: *[TextPattern](../modules/_textstream_.md#textpattern)*, options?: *[ReadOptions](../interfaces/_textstream_.readoptions.md)*): `boolean`

*Defined in [TextStream.ts:455](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L455)*

Skip to the beginning of matched text

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pattern | [TextPattern](../modules/_textstream_.md#textpattern) |  \- |
| `Optional` options | [ReadOptions](../interfaces/_textstream_.readoptions.md) |   |

**Returns:** `boolean`

___
<a id="skiptoend"></a>

###  skipToEnd

▸ **skipToEnd**(): `void`

*Defined in [TextStream.ts:446](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L446)*

Move cursor to end of text

**Returns:** `void`

___
<a id="sol"></a>

###  sol

▸ **sol**(trimSpaces?: *`boolean`*): `boolean`

*Defined in [TextStream.ts:177](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/TextStream.ts#L177)*

Check if cursor is at the start of a line

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` trimSpaces | `boolean` | false |

**Returns:** `boolean`

___

