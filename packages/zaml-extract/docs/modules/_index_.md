[@zaml/extract - v0.7.0](../README.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Functions

* [extract](_index_.md#extract)

### Object literals

* [extractObject](_index_.md#const-extractobject)

## Functions

###  extract

▸ **extract**(`text`: string, `options`: [ExtractorConstructorOptions](_types_.md#extractorconstructoroptions)): *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[]›*

*Defined in [index.ts:5](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-extract/src/index.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`options` | [ExtractorConstructorOptions](_types_.md#extractorconstructoroptions) |

**Returns:** *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[]›*

▸ **extract**(`list`: string[], `options`: [ExtractorConstructorOptions](_types_.md#extractorconstructoroptions)): *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[][]›*

*Defined in [index.ts:6](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-extract/src/index.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`list` | string[] |
`options` | [ExtractorConstructorOptions](_types_.md#extractorconstructoroptions) |

**Returns:** *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[][]›*

## Object literals

### `Const` extractObject

### ▪ **extractObject**: *object*

*Defined in [index.ts:16](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-extract/src/index.ts#L16)*

###  Extractor

• **Extractor**: *[Extractor](../classes/_extractor_.extractor.md)*

*Defined in [index.ts:31](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-extract/src/index.ts#L31)*

###  extract

• **extract**: *[extract](_index_.md#extract)*

*Defined in [index.ts:22](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-extract/src/index.ts#L22)*

Extract entities from a text

**`param`** Source string

###  create

▸ **create**(`options`: [ExtractorConstructorOptions](_types_.md#extractorconstructoroptions)): *[Extractor](../classes/_extractor_.extractor.md)‹›*

*Defined in [index.ts:27](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-extract/src/index.ts#L27)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [ExtractorConstructorOptions](_types_.md#extractorconstructoroptions) |   |

**Returns:** *[Extractor](../classes/_extractor_.extractor.md)‹›*
