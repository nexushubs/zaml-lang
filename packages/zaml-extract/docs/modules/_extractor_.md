[@zaml/extract - v0.7.1](../README.md) › ["Extractor"](_extractor_.md)

# External module: "Extractor"

## Index

### Classes

* [Extractor](../classes/_extractor_.extractor.md)

### Functions

* [isExtractorClass](_extractor_.md#const-isextractorclass)
* [isOverlapping](_extractor_.md#const-isoverlapping)

## Functions

### `Const` isExtractorClass

▸ **isExtractorClass**(`target`: any): *boolean*

*Defined in [Extractor.ts:18](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/Extractor.ts#L18)*

Check if a extractor is a class

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | any |   |

**Returns:** *boolean*

___

### `Const` isOverlapping

▸ **isOverlapping**(`items`: [EntityInfo](../interfaces/_types_.entityinfo.md)[], `target`: [EntityInfo](../interfaces/_types_.entityinfo.md)): *boolean*

*Defined in [Extractor.ts:27](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/Extractor.ts#L27)*

Is entity ranges overlapped with existing items

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`items` | [EntityInfo](../interfaces/_types_.entityinfo.md)[] | - |
`target` | [EntityInfo](../interfaces/_types_.entityinfo.md) |   |

**Returns:** *boolean*
