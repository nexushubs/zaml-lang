[@zaml/extract](../README.md) > ["types"](../modules/_types_.md)

# External module: "types"

## Index

### Interfaces

* [EntityInfo](../interfaces/_types_.entityinfo.md)
* [ExtractorInterface](../interfaces/_types_.extractorinterface.md)

### Type aliases

* [ArrayExtractor](_types_.md#arrayextractor)
* [ExtendedExtractorOptions](_types_.md#extendedextractoroptions)
* [ExtractorConstructorOptions](_types_.md#extractorconstructoroptions)
* [ExtractorOptions](_types_.md#extractoroptions)
* [ExtractorType](_types_.md#extractortype)
* [SingleExtractor](_types_.md#singleextractor)

---

## Type aliases

<a id="arrayextractor"></a>

###  ArrayExtractor

**Ƭ ArrayExtractor**: *`function`*

*Defined in [types.ts:11](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-extract/src/types.ts#L11)*

#### Type declaration
▸(textArr: *`string`[]*):  [EntityInfo](../interfaces/_types_.entityinfo.md)[][] &#124; `Promise`<[EntityInfo](../interfaces/_types_.entityinfo.md)[][]>

**Parameters:**

| Name | Type |
| ------ | ------ |
| textArr | `string`[] |

**Returns:**  [EntityInfo](../interfaces/_types_.entityinfo.md)[][] &#124; `Promise`<[EntityInfo](../interfaces/_types_.entityinfo.md)[][]>

___
<a id="extendedextractoroptions"></a>

###  ExtendedExtractorOptions

**Ƭ ExtendedExtractorOptions**: *`object`*

*Defined in [types.ts:20](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-extract/src/types.ts#L20)*

#### Type declaration

 name: `string`

 options: `any`

___
<a id="extractorconstructoroptions"></a>

###  ExtractorConstructorOptions

**Ƭ ExtractorConstructorOptions**: *`object`*

*Defined in [types.ts:24](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-extract/src/types.ts#L24)*

#### Type declaration

`Optional`  plugins: [ExtractorOptions](_types_.md#extractoroptions)[]

___
<a id="extractoroptions"></a>

###  ExtractorOptions

**Ƭ ExtractorOptions**: * `string` &#124; [ExtendedExtractorOptions](_types_.md#extendedextractoroptions) &#124; [ExtractorType](_types_.md#extractortype)
*

*Defined in [types.ts:22](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-extract/src/types.ts#L22)*

___
<a id="extractortype"></a>

###  ExtractorType

**Ƭ ExtractorType**: * [SingleExtractor](_types_.md#singleextractor) &#124; [ExtractorInterface](../interfaces/_types_.extractorinterface.md)
*

*Defined in [types.ts:18](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-extract/src/types.ts#L18)*

___
<a id="singleextractor"></a>

###  SingleExtractor

**Ƭ SingleExtractor**: *`function`*

*Defined in [types.ts:9](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-extract/src/types.ts#L9)*

#### Type declaration
▸(text: *`string`*):  [EntityInfo](../interfaces/_types_.entityinfo.md)[] &#124; `Promise`<[EntityInfo](../interfaces/_types_.entityinfo.md)[]>

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:**  [EntityInfo](../interfaces/_types_.entityinfo.md)[] &#124; `Promise`<[EntityInfo](../interfaces/_types_.entityinfo.md)[]>

___

