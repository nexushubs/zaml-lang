[@zaml/extract](../README.md) > ["plugins/rest"](../modules/_plugins_rest_.md) > [RestExtractor](../classes/_plugins_rest_.restextractor.md)

# Class: RestExtractor

## Hierarchy

 [ExtractorBase](_plugins_base_.extractorbase.md)

**↳ RestExtractor**

## Implements

* [ExtractorInterface](../interfaces/_types_.extractorinterface.md)

## Index

### Constructors

* [constructor](_plugins_rest_.restextractor.md#constructor)

### Properties

* [options](_plugins_rest_.restextractor.md#options)

### Methods

* [extract](_plugins_rest_.restextractor.md#extract)
* [extractArray](_plugins_rest_.restextractor.md#extractarray)
* [request](_plugins_rest_.restextractor.md#request)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RestExtractor**(options?: *[RestExtractorOptions](../interfaces/_plugins_rest_.restextractoroptions.md)*): [RestExtractor](_plugins_rest_.restextractor.md)

*Overrides [ExtractorBase](_plugins_base_.extractorbase.md).[constructor](_plugins_base_.extractorbase.md#constructor)*

*Defined in [plugins/rest.ts:26](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-extract/src/plugins/rest.ts#L26)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` options | [RestExtractorOptions](../interfaces/_plugins_rest_.restextractoroptions.md) |  {} |

**Returns:** [RestExtractor](_plugins_rest_.restextractor.md)

___

## Properties

<a id="options"></a>

###  options

**● options**: *`any`*

*Inherited from [ExtractorBase](_plugins_base_.extractorbase.md).[options](_plugins_base_.extractorbase.md#options)*

*Defined in [plugins/base.ts:7](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-extract/src/plugins/base.ts#L7)*

___

## Methods

<a id="extract"></a>

###  extract

▸ **extract**(text: *`string`*): `Promise`<[EntityInfo](../interfaces/_types_.entityinfo.md)[]>

*Defined in [plugins/rest.ts:54](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-extract/src/plugins/rest.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `Promise`<[EntityInfo](../interfaces/_types_.entityinfo.md)[]>

___
<a id="extractarray"></a>

###  extractArray

▸ **extractArray**(list: *`string`[]*): `Promise`<[EntityInfo](../interfaces/_types_.entityinfo.md)[][]>

*Defined in [plugins/rest.ts:63](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-extract/src/plugins/rest.ts#L63)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `string`[] |

**Returns:** `Promise`<[EntityInfo](../interfaces/_types_.entityinfo.md)[][]>

___
<a id="request"></a>

###  request

▸ **request**(list: * `string` &#124; `string`[]*): `Promise`<[PredictionResult](../modules/_plugins_rest_.md#predictionresult)>

*Defined in [plugins/rest.ts:35](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-extract/src/plugins/rest.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| list |  `string` &#124; `string`[]|

**Returns:** `Promise`<[PredictionResult](../modules/_plugins_rest_.md#predictionresult)>

___

