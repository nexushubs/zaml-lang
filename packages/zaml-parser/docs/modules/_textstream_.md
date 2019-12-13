[@zaml/parser](../README.md) › ["TextStream"](_textstream_.md)

# External module: "TextStream"

## Index

### Classes

* [TextStream](../classes/_textstream_.textstream.md)

### Interfaces

* [Marker](../interfaces/_textstream_.marker.md)
* [MarkerInfo](../interfaces/_textstream_.markerinfo.md)
* [MatchOptions](../interfaces/_textstream_.matchoptions.md)
* [ReadOptions](../interfaces/_textstream_.readoptions.md)
* [SearchOptions](../interfaces/_textstream_.searchoptions.md)
* [SourcePosition](../interfaces/_textstream_.sourceposition.md)

### Type aliases

* [MarkerData](_textstream_.md#markerdata)
* [TextPattern](_textstream_.md#textpattern)
* [TextTester](_textstream_.md#texttester)

### Variables

* [LINE_BREAKS](_textstream_.md#const-line_breaks)
* [NOT_FOUND](_textstream_.md#const-not_found)

## Type aliases

###  MarkerData

Ƭ **MarkerData**: *object*

*Defined in [src/TextStream.ts:47](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/TextStream.ts#L47)*

#### Type declaration:

* \[ **key**: *string*\]: any

___

###  TextPattern

Ƭ **TextPattern**: *string | RegExp | [TextTester](_textstream_.md#texttester)*

*Defined in [src/TextStream.ts:13](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/TextStream.ts#L13)*

___

###  TextTester

Ƭ **TextTester**: *function*

*Defined in [src/TextStream.ts:12](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/TextStream.ts#L12)*

#### Type declaration:

▸ (`text`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

## Variables

### `Const` LINE_BREAKS

• **LINE_BREAKS**: *RegExp‹›* =  /\r?\n/g

*Defined in [src/TextStream.ts:10](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/TextStream.ts#L10)*

___

### `Const` NOT_FOUND

• **NOT_FOUND**: *-1* =  -1

*Defined in [src/TextStream.ts:9](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/TextStream.ts#L9)*
