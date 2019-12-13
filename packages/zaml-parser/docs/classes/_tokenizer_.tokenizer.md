[@zaml/parser](../README.md) › ["Tokenizer"](../modules/_tokenizer_.md) › [Tokenizer](_tokenizer_.tokenizer.md)

# Class: Tokenizer

Tokenizer class

**`class`** 

## Hierarchy

* **Tokenizer**

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
* [from](_tokenizer_.tokenizer.md#static-from)

## Constructors

###  constructor

\+ **new Tokenizer**(`text`: string, `options?`: [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)): *[Tokenizer](_tokenizer_.tokenizer.md)*

*Defined in [src/Tokenizer.ts:126](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/Tokenizer.ts#L126)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | - |
`options?` | [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md) | Constructor options  |

**Returns:** *[Tokenizer](_tokenizer_.tokenizer.md)*

## Properties

###  options

• **options**: *[ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)*

*Defined in [src/Tokenizer.ts:125](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/Tokenizer.ts#L125)*

___

###  parsed

• **parsed**: *boolean*

*Defined in [src/Tokenizer.ts:126](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/Tokenizer.ts#L126)*

___

###  stream

• **stream**: *[TextStream](_textstream_.textstream.md)*

*Defined in [src/Tokenizer.ts:124](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/Tokenizer.ts#L124)*

___

###  text

• **text**: *string*

*Defined in [src/Tokenizer.ts:123](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/Tokenizer.ts#L123)*

## Methods

###  debug

▸ **debug**(...`params`: any[]): *void*

*Defined in [src/Tokenizer.ts:153](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/Tokenizer.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | any[] |

**Returns:** *void*

___

###  process

▸ **process**(): *[Node](_node_.node.md)*

*Defined in [src/Tokenizer.ts:163](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/Tokenizer.ts#L163)*

Process a text and parse to AST

**Returns:** *[Node](_node_.node.md)*

Root node of parsed AST

___

### `Static` from

▸ **from**(`text`: string, `options`: [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)): *[Tokenizer](_tokenizer_.tokenizer.md)‹›*

*Defined in [src/Tokenizer.ts:119](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/Tokenizer.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`options` | [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md) |

**Returns:** *[Tokenizer](_tokenizer_.tokenizer.md)‹›*
