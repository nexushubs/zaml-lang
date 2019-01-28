[@zaml/extract](../README.md) > ["Extractor"](../modules/_extractor_.md) > [Extractor](../classes/_extractor_.extractor.md)

# Class: Extractor

Extractor class

## Hierarchy

**Extractor**

## Index

### Constructors

* [constructor](_extractor_.extractor.md#constructor)

### Properties

* [plugins](_extractor_.extractor.md#plugins)

### Methods

* [addPlugin](_extractor_.extractor.md#addplugin)
* [execSingleExtractor](_extractor_.extractor.md#execsingleextractor)
* [extract](_extractor_.extractor.md#extract)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Extractor**(options?: *[ExtractorConstructorOptions](../modules/_types_.md#extractorconstructoroptions)*): [Extractor](_extractor_.extractor.md)

*Defined in [Extractor.ts:36](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-extract/src/Extractor.ts#L36)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` options | [ExtractorConstructorOptions](../modules/_types_.md#extractorconstructoroptions) |  {} |

**Returns:** [Extractor](_extractor_.extractor.md)

___

## Properties

<a id="plugins"></a>

###  plugins

**● plugins**: *[ExtractorType](../modules/_types_.md#extractortype)[]*

*Defined in [Extractor.ts:36](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-extract/src/Extractor.ts#L36)*

___

## Methods

<a id="addplugin"></a>

###  addPlugin

▸ **addPlugin**(options: *[ExtractorOptions](../modules/_types_.md#extractoroptions)*): `void`

*Defined in [Extractor.ts:50](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-extract/src/Extractor.ts#L50)*

Add plugin

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [ExtractorOptions](../modules/_types_.md#extractoroptions) |   |

**Returns:** `void`

___
<a id="execsingleextractor"></a>

###  execSingleExtractor

▸ **execSingleExtractor**(text: * `string` &#124; `string`[]*, extractor: *[ExtractorType](../modules/_types_.md#extractortype)*): `Promise`<`any`>

*Defined in [Extractor.ts:84](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-extract/src/Extractor.ts#L84)*

Execute single plugin to the text (array)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text |  `string` &#124; `string`[]|  \- |
| extractor | [ExtractorType](../modules/_types_.md#extractortype) |   |

**Returns:** `Promise`<`any`>

___
<a id="extract"></a>

###  extract

▸ **extract**(text: * `string` &#124; `string`[]*): `Promise`< [EntityInfo](../interfaces/_types_.entityinfo.md)[] &#124; [EntityInfo](../interfaces/_types_.entityinfo.md)[][]>

*Defined in [Extractor.ts:111](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-extract/src/Extractor.ts#L111)*

Extract all entities from text by plugins

**Parameters:**

| Name | Type |
| ------ | ------ |
| text |  `string` &#124; `string`[]|

**Returns:** `Promise`< [EntityInfo](../interfaces/_types_.entityinfo.md)[] &#124; [EntityInfo](../interfaces/_types_.entityinfo.md)[][]>

___

