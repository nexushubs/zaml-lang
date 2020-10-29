[@zaml/extract - v0.7.1](../README.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Interfaces

* [EntityInfo](../interfaces/_types_.entityinfo.md)
* [ExtractorInterface](../interfaces/_types_.extractorinterface.md)

### Type aliases

* [ArrayExtractor](_types_.md#arrayextractor)
* [AsyncArrayExtractor](_types_.md#asyncarrayextractor)
* [AsyncSingleExtractor](_types_.md#asyncsingleextractor)
* [ExtendedExtractorOptions](_types_.md#extendedextractoroptions)
* [ExtractorConstructorOptions](_types_.md#extractorconstructoroptions)
* [ExtractorOptions](_types_.md#extractoroptions)
* [ExtractorType](_types_.md#extractortype)
* [SingleExtractor](_types_.md#singleextractor)

## Type aliases

###  ArrayExtractor

Ƭ **ArrayExtractor**: *function*

*Defined in [types.ts:13](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/types.ts#L13)*

#### Type declaration:

▸ (`textArr`: string[]): *[EntityInfo](../interfaces/_types_.entityinfo.md)[][]*

**Parameters:**

Name | Type |
------ | ------ |
`textArr` | string[] |

___

###  AsyncArrayExtractor

Ƭ **AsyncArrayExtractor**: *function*

*Defined in [types.ts:15](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/types.ts#L15)*

#### Type declaration:

▸ (`textArr`: string[]): *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`textArr` | string[] |

___

###  AsyncSingleExtractor

Ƭ **AsyncSingleExtractor**: *function*

*Defined in [types.ts:11](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/types.ts#L11)*

#### Type declaration:

▸ (`text`: string): *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

___

###  ExtendedExtractorOptions

Ƭ **ExtendedExtractorOptions**: *object*

*Defined in [types.ts:24](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/types.ts#L24)*

#### Type declaration:

* **name**: *string*

* **options**: *any*

___

###  ExtractorConstructorOptions

Ƭ **ExtractorConstructorOptions**: *object*

*Defined in [types.ts:28](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/types.ts#L28)*

#### Type declaration:

* **plugins**? : *[ExtractorOptions](_types_.md#extractoroptions)[]*

___

###  ExtractorOptions

Ƭ **ExtractorOptions**: *string | [ExtendedExtractorOptions](_types_.md#extendedextractoroptions) | [ExtractorType](_types_.md#extractortype)*

*Defined in [types.ts:26](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/types.ts#L26)*

___

###  ExtractorType

Ƭ **ExtractorType**: *[SingleExtractor](_types_.md#singleextractor) | [ExtractorInterface](../interfaces/_types_.extractorinterface.md)*

*Defined in [types.ts:22](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/types.ts#L22)*

___

###  SingleExtractor

Ƭ **SingleExtractor**: *function*

*Defined in [types.ts:9](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/types.ts#L9)*

#### Type declaration:

▸ (`text`: string): *[EntityInfo](../interfaces/_types_.entityinfo.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
