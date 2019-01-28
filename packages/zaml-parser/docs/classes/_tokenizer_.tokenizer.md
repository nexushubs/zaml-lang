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

*Defined in [Tokenizer.ts:121](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Tokenizer.ts#L121)*

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

*Defined in [Tokenizer.ts:120](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Tokenizer.ts#L120)*

___
<a id="parsed"></a>

###  parsed

**● parsed**: *`boolean`*

*Defined in [Tokenizer.ts:121](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Tokenizer.ts#L121)*

___
<a id="stream"></a>

###  stream

**● stream**: *[TextStream](_textstream_.textstream.md)*

*Defined in [Tokenizer.ts:119](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Tokenizer.ts#L119)*

___
<a id="text"></a>

###  text

**● text**: *`string`*

*Defined in [Tokenizer.ts:118](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Tokenizer.ts#L118)*

___

## Methods

<a id="debug"></a>

###  debug

▸ **debug**(...params: *`any`[]*): `void`

*Defined in [Tokenizer.ts:137](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Tokenizer.ts#L137)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` params | `any`[] |

**Returns:** `void`

___
<a id="process"></a>

###  process

▸ **process**(): [Node](_node_.node.md)

*Defined in [Tokenizer.ts:147](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Tokenizer.ts#L147)*

Process a text and parse to AST

**Returns:** [Node](_node_.node.md)
Root node of parsed AST

___
<a id="from"></a>

### `<Static>` from

▸ **from**(text: *`string`*, options: *[ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)*): [Tokenizer](_tokenizer_.tokenizer.md)

*Defined in [Tokenizer.ts:114](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Tokenizer.ts#L114)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| options | [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md) |

**Returns:** [Tokenizer](_tokenizer_.tokenizer.md)

___

