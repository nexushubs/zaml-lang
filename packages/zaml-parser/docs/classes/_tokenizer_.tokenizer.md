[@zaml/parser](../README.md) > ["Tokenizer"](../modules/_tokenizer_.md) > [Tokenizer](../classes/_tokenizer_.tokenizer.md)

# Class: Tokenizer

Tokenizer class
*__class__*: 

## Hierarchy

**Tokenizer**

## Index

### Constructors

* [constructor](_tokenizer_.tokenizer.md#constructor)

### Properties

* [options](_tokenizer_.tokenizer.md#options)
* [parsed](_tokenizer_.tokenizer.md#parsed)
* [stream](_tokenizer_.tokenizer.md#stream)
* [text](_tokenizer_.tokenizer.md#text)

### Methods

* [debug](_tokenizer_.tokenizer.md#debug)
* [process](_tokenizer_.tokenizer.md#process)
* [from](_tokenizer_.tokenizer.md#from)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Tokenizer**(text: *`string`*, options?: *[ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)*): [Tokenizer](_tokenizer_.tokenizer.md)

*Defined in [Tokenizer.ts:98](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Tokenizer.ts#L98)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  \- |
| `Optional` options | [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md) |  Constructor options |

**Returns:** [Tokenizer](_tokenizer_.tokenizer.md)

___

## Properties

<a id="options"></a>

###  options

**● options**: *[ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)*

*Defined in [Tokenizer.ts:97](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Tokenizer.ts#L97)*

___
<a id="parsed"></a>

###  parsed

**● parsed**: *`boolean`*

*Defined in [Tokenizer.ts:98](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Tokenizer.ts#L98)*

___
<a id="stream"></a>

###  stream

**● stream**: *[TextStream](_textstream_.textstream.md)*

*Defined in [Tokenizer.ts:96](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Tokenizer.ts#L96)*

___
<a id="text"></a>

###  text

**● text**: *`string`*

*Defined in [Tokenizer.ts:95](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Tokenizer.ts#L95)*

___

## Methods

<a id="debug"></a>

###  debug

▸ **debug**(...params: *`any`[]*): `void`

*Defined in [Tokenizer.ts:114](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Tokenizer.ts#L114)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` params | `any`[] |

**Returns:** `void`

___
<a id="process"></a>

###  process

▸ **process**(): [Node](_node_.node.md)

*Defined in [Tokenizer.ts:124](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Tokenizer.ts#L124)*

Process a text and parse to AST

**Returns:** [Node](_node_.node.md)
Root node of parsed AST

___
<a id="from"></a>

### `<Static>` from

▸ **from**(text: *`string`*, options: *[ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)*): [Tokenizer](_tokenizer_.tokenizer.md)

*Defined in [Tokenizer.ts:91](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Tokenizer.ts#L91)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| options | [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md) |

**Returns:** [Tokenizer](_tokenizer_.tokenizer.md)

___

