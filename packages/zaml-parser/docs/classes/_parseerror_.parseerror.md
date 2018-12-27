[@zaml/parser](../README.md) > ["ParseError"](../modules/_parseerror_.md) > [ParseError](../classes/_parseerror_.parseerror.md)

# Class: ParseError

## Hierarchy

 `Error`

**↳ ParseError**

## Index

### Constructors

* [constructor](_parseerror_.parseerror.md#constructor)

### Properties

* [from](_parseerror_.parseerror.md#from)
* [message](_parseerror_.parseerror.md#message)
* [name](_parseerror_.parseerror.md#name)
* [stack](_parseerror_.parseerror.md#stack)
* [text](_parseerror_.parseerror.md#text)
* [to](_parseerror_.parseerror.md#to)
* [Error](_parseerror_.parseerror.md#error)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ParseError**(message: *`string`*, text: *`string`*, from: *[SourcePosition](../interfaces/_textstream_.sourceposition.md)*, to: *[SourcePosition](../interfaces/_textstream_.sourceposition.md)*): [ParseError](_parseerror_.parseerror.md)

*Defined in [ParseError.ts:8](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-parser/src/ParseError.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `string` |
| text | `string` |
| from | [SourcePosition](../interfaces/_textstream_.sourceposition.md) |
| to | [SourcePosition](../interfaces/_textstream_.sourceposition.md) |

**Returns:** [ParseError](_parseerror_.parseerror.md)

___

## Properties

<a id="from"></a>

###  from

**● from**: *[SourcePosition](../interfaces/_textstream_.sourceposition.md)*

*Defined in [ParseError.ts:7](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-parser/src/ParseError.ts#L7)*

___
<a id="message"></a>

###  message

**● message**: *`string`*

*Overrides Error.message*

*Defined in [ParseError.ts:5](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-parser/src/ParseError.ts#L5)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from Error.name*

*Defined in /Users/alvin/Projects/nexushubs/zaml-lang/packages/zaml-parser/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:903*

___
<a id="stack"></a>

### `<Optional>` stack

**● stack**: * `undefined` &#124; `string`
*

*Inherited from Error.stack*

*Overrides Error.stack*

*Defined in /Users/alvin/Projects/nexushubs/zaml-lang/packages/zaml-parser/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:905*

___
<a id="text"></a>

###  text

**● text**: *`string`*

*Defined in [ParseError.ts:6](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-parser/src/ParseError.ts#L6)*

___
<a id="to"></a>

###  to

**● to**: *[SourcePosition](../interfaces/_textstream_.sourceposition.md)*

*Defined in [ParseError.ts:8](https://github.com/nexushubs/zaml-lang/blob/dba599e/packages/zaml-parser/src/ParseError.ts#L8)*

___
<a id="error"></a>

### `<Static>` Error

**● Error**: *`ErrorConstructor`*

*Defined in /Users/alvin/Projects/nexushubs/zaml-lang/packages/zaml-parser/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:914*

___

