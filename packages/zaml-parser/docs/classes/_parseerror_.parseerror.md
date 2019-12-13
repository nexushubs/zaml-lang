[@zaml/parser](../README.md) › ["ParseError"](../modules/_parseerror_.md) › [ParseError](_parseerror_.parseerror.md)

# Class: ParseError

## Hierarchy

* Error

  ↳ **ParseError**

## Index

### Constructors

* [constructor](_parseerror_.parseerror.md#constructor)

### Properties

* [from](_parseerror_.parseerror.md#from)
* [message](_parseerror_.parseerror.md#message)
* [name](_parseerror_.parseerror.md#name)
* [stack](_parseerror_.parseerror.md#optional-stack)
* [text](_parseerror_.parseerror.md#text)
* [to](_parseerror_.parseerror.md#to)
* [Error](_parseerror_.parseerror.md#static-error)

## Constructors

###  constructor

\+ **new ParseError**(`message`: string, `text`: string, `from`: [SourcePosition](../interfaces/_textstream_.sourceposition.md), `to`: [SourcePosition](../interfaces/_textstream_.sourceposition.md)): *[ParseError](_parseerror_.parseerror.md)*

*Defined in [src/ParseError.ts:8](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/ParseError.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`text` | string |
`from` | [SourcePosition](../interfaces/_textstream_.sourceposition.md) |
`to` | [SourcePosition](../interfaces/_textstream_.sourceposition.md) |

**Returns:** *[ParseError](_parseerror_.parseerror.md)*

## Properties

###  from

• **from**: *[SourcePosition](../interfaces/_textstream_.sourceposition.md)*

*Defined in [src/ParseError.ts:7](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/ParseError.ts#L7)*

___

###  message

• **message**: *string*

*Overrides void*

*Defined in [src/ParseError.ts:5](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/ParseError.ts#L5)*

___

###  name

• **name**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from void*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

###  text

• **text**: *string*

*Defined in [src/ParseError.ts:6](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/ParseError.ts#L6)*

___

###  to

• **to**: *[SourcePosition](../interfaces/_textstream_.sourceposition.md)*

*Defined in [src/ParseError.ts:8](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/ParseError.ts#L8)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
