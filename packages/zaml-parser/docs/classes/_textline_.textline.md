[@zaml/parser](../README.md) > ["TextLine"](../modules/_textline_.md) > [TextLine](../classes/_textline_.textline.md)

# Class: TextLine

Class holding text line data

## Hierarchy

**TextLine**

## Index

### Constructors

* [constructor](_textline_.textline.md#constructor)

### Properties

* [lines](_textline_.textline.md#lines)
* [ln](_textline_.textline.md#ln)
* [offset](_textline_.textline.md#offset)
* [text](_textline_.textline.md#text)

### Accessors

* [end](_textline_.textline.md#end)
* [length](_textline_.textline.md#length)
* [start](_textline_.textline.md#start)

### Methods

* [next](_textline_.textline.md#next)
* [prev](_textline_.textline.md#prev)
* [toJSON](_textline_.textline.md#tojson)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TextLine**(lines: *[TextLine](_textline_.textline.md)[]*, text: *`string`*, ln: *`number`*, offset: *`number`*): [TextLine](_textline_.textline.md)

*Defined in [TextLine.ts:16](https://github.com/nexushubs/zaml-lang/blob/1a52cac/packages/zaml-parser/src/TextLine.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| lines | [TextLine](_textline_.textline.md)[] |
| text | `string` |
| ln | `number` |
| offset | `number` |

**Returns:** [TextLine](_textline_.textline.md)

___

## Properties

<a id="lines"></a>

###  lines

**● lines**: *[TextLine](_textline_.textline.md)[]*

*Defined in [TextLine.ts:13](https://github.com/nexushubs/zaml-lang/blob/1a52cac/packages/zaml-parser/src/TextLine.ts#L13)*

___
<a id="ln"></a>

###  ln

**● ln**: *`number`*

*Defined in [TextLine.ts:15](https://github.com/nexushubs/zaml-lang/blob/1a52cac/packages/zaml-parser/src/TextLine.ts#L15)*

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [TextLine.ts:16](https://github.com/nexushubs/zaml-lang/blob/1a52cac/packages/zaml-parser/src/TextLine.ts#L16)*

___
<a id="text"></a>

###  text

**● text**: *`string`*

*Defined in [TextLine.ts:14](https://github.com/nexushubs/zaml-lang/blob/1a52cac/packages/zaml-parser/src/TextLine.ts#L14)*

___

## Accessors

<a id="end"></a>

###  end

getend(): `number`

*Defined in [TextLine.ts:56](https://github.com/nexushubs/zaml-lang/blob/1a52cac/packages/zaml-parser/src/TextLine.ts#L56)*

End position of the line

**Returns:** `number`

___
<a id="length"></a>

###  length

getlength(): `number`

*Defined in [TextLine.ts:42](https://github.com/nexushubs/zaml-lang/blob/1a52cac/packages/zaml-parser/src/TextLine.ts#L42)*

Get text length of the line

**Returns:** `number`

___
<a id="start"></a>

###  start

getstart(): `number`

*Defined in [TextLine.ts:49](https://github.com/nexushubs/zaml-lang/blob/1a52cac/packages/zaml-parser/src/TextLine.ts#L49)*

Start position of the line, alias of `offset`

**Returns:** `number`

___

## Methods

<a id="next"></a>

###  next

▸ **next**(): [TextLine](_textline_.textline.md)

*Defined in [TextLine.ts:35](https://github.com/nexushubs/zaml-lang/blob/1a52cac/packages/zaml-parser/src/TextLine.ts#L35)*

Get the next line

**Returns:** [TextLine](_textline_.textline.md)

___
<a id="prev"></a>

###  prev

▸ **prev**(): [TextLine](_textline_.textline.md)

*Defined in [TextLine.ts:28](https://github.com/nexushubs/zaml-lang/blob/1a52cac/packages/zaml-parser/src/TextLine.ts#L28)*

Get the previous line

**Returns:** [TextLine](_textline_.textline.md)

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): [TextLineData](../interfaces/_textline_.textlinedata.md)

*Defined in [TextLine.ts:63](https://github.com/nexushubs/zaml-lang/blob/1a52cac/packages/zaml-parser/src/TextLine.ts#L63)*

Convert to JSON serializable object

**Returns:** [TextLineData](../interfaces/_textline_.textlinedata.md)

___

