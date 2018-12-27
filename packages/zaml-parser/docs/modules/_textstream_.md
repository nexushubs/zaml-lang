[@zaml/parser](../README.md) > ["TextStream"](../modules/_textstream_.md)

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

* [LINE_BREAKS](_textstream_.md#line_breaks)
* [NOT_FOUND](_textstream_.md#not_found)

---

## Type aliases

<a id="markerdata"></a>

###  MarkerData

**Ƭ MarkerData**: *`object`*

*Defined in [TextStream.ts:47](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-parser/src/TextStream.ts#L47)*

#### Type declaration

[key: `string`]: `any`

___
<a id="textpattern"></a>

###  TextPattern

**Ƭ TextPattern**: * `string` &#124; `RegExp` &#124; [TextTester](_textstream_.md#texttester)
*

*Defined in [TextStream.ts:13](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-parser/src/TextStream.ts#L13)*

___
<a id="texttester"></a>

###  TextTester

**Ƭ TextTester**: *`function`*

*Defined in [TextStream.ts:12](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-parser/src/TextStream.ts#L12)*

#### Type declaration
▸(text: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `boolean`

___

## Variables

<a id="line_breaks"></a>

### `<Const>` LINE_BREAKS

**● LINE_BREAKS**: *`RegExp`* =  /\r?\n/g

*Defined in [TextStream.ts:10](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-parser/src/TextStream.ts#L10)*

___
<a id="not_found"></a>

### `<Const>` NOT_FOUND

**● NOT_FOUND**: *`-1`* =  -1

*Defined in [TextStream.ts:9](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-parser/src/TextStream.ts#L9)*

___

