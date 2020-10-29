[@zaml/extract - v0.7.1](../README.md) › ["Extractor"](../modules/_extractor_.md) › [Extractor](_extractor_.extractor.md)

# Class: Extractor

Extractor class

## Hierarchy

* **Extractor**

## Implements

* [ExtractorInterface](../interfaces/_types_.extractorinterface.md)

## Index

### Constructors

* [constructor](_extractor_.extractor.md#constructor)

### Properties

* [plugins](_extractor_.extractor.md#plugins)

### Methods

* [addPlugin](_extractor_.extractor.md#addplugin)
* [execSingleExtractor](_extractor_.extractor.md#execsingleextractor)
* [extract](_extractor_.extractor.md#extract)
* [extractArray](_extractor_.extractor.md#extractarray)

## Constructors

###  constructor

\+ **new Extractor**(`options`: [ExtractorConstructorOptions](../modules/_types_.md#extractorconstructoroptions)): *[Extractor](_extractor_.extractor.md)*

*Defined in [Extractor.ts:37](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/Extractor.ts#L37)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [ExtractorConstructorOptions](../modules/_types_.md#extractorconstructoroptions) |  {} |

**Returns:** *[Extractor](_extractor_.extractor.md)*

## Properties

###  plugins

• **plugins**: *[ExtractorType](../modules/_types_.md#extractortype)[]*

*Defined in [Extractor.ts:37](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/Extractor.ts#L37)*

## Methods

###  addPlugin

▸ **addPlugin**(`options`: [ExtractorOptions](../modules/_types_.md#extractoroptions)): *void*

*Defined in [Extractor.ts:51](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/Extractor.ts#L51)*

Add plugin

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [ExtractorOptions](../modules/_types_.md#extractoroptions) |   |

**Returns:** *void*

___

###  execSingleExtractor

▸ **execSingleExtractor**(`text`: string, `extractor`: [ExtractorType](../modules/_types_.md#extractortype)): *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[]›*

*Defined in [Extractor.ts:85](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/Extractor.ts#L85)*

Execute single plugin to the text (array)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | - |
`extractor` | [ExtractorType](../modules/_types_.md#extractortype) |   |

**Returns:** *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[]›*

▸ **execSingleExtractor**(`list`: string[], `extractor`: [ExtractorType](../modules/_types_.md#extractortype)): *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[][]›*

*Defined in [Extractor.ts:86](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/Extractor.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`list` | string[] |
`extractor` | [ExtractorType](../modules/_types_.md#extractortype) |

**Returns:** *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[][]›*

___

###  extract

▸ **extract**(`text`: string): *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[]›*

*Defined in [Extractor.ts:114](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/Extractor.ts#L114)*

Extract all entities from text by plugins

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[]›*

▸ **extract**(`list`: string[]): *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[][]›*

*Defined in [Extractor.ts:115](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/Extractor.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`list` | string[] |

**Returns:** *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[][]›*

___

###  extractArray

▸ **extractArray**(`list`: string[]): *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[][]›*

*Defined in [Extractor.ts:148](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-extract/src/Extractor.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`list` | string[] |

**Returns:** *Promise‹[EntityInfo](../interfaces/_types_.entityinfo.md)[][]›*
