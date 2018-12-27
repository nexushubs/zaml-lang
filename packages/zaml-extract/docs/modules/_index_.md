[@zaml/extract](../README.md) > ["index"](../modules/_index_.md)

# External module: "index"

## Index

### Object literals

* [extract](_index_.md#extract)

---

## Object literals

<a id="extract"></a>

### `<Const>` extract

**extract**: *`object`*

*Defined in [index.ts:4](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-extract/src/index.ts#L4)*

<a id="extract.extractor"></a>

####  Extractor

**● Extractor**: *[Extractor](../classes/_extractor_.extractor.md)*

*Defined in [index.ts:23](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-extract/src/index.ts#L23)*

___
<a id="extract.create"></a>

####  create

▸ **create**(options: *[ExtractorConstructorOptions](_types_.md#extractorconstructoroptions)*): [Extractor](../classes/_extractor_.extractor.md)

*Defined in [index.ts:19](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-extract/src/index.ts#L19)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [ExtractorConstructorOptions](_types_.md#extractorconstructoroptions) |   |

**Returns:** [Extractor](../classes/_extractor_.extractor.md)

___
<a id="extract.extract-1"></a>

####  extract

▸ **extract**(text: * `string` &#124; `string`[]*, options: *[ExtractorConstructorOptions](_types_.md#extractorconstructoroptions)*): `Promise`< [EntityInfo](../interfaces/_types_.entityinfo.md)[] &#124; [EntityInfo](../interfaces/_types_.entityinfo.md)[][]>

*Defined in [index.ts:10](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-extract/src/index.ts#L10)*

Extract entities from a text

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text |  `string` &#124; `string`[]|  Source string |
| options | [ExtractorConstructorOptions](_types_.md#extractorconstructoroptions) |

**Returns:** `Promise`< [EntityInfo](../interfaces/_types_.entityinfo.md)[] &#124; [EntityInfo](../interfaces/_types_.entityinfo.md)[][]>

___

___

