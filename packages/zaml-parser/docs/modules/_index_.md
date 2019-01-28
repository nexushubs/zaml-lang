[@zaml/parser](../README.md) > ["index"](../modules/_index_.md)

# External module: "index"

## Index

### Functions

* [parse](_index_.md#parse)
* [tokenize](_index_.md#tokenize)

---

## Functions

<a id="parse"></a>

###  parse

▸ **parse**(text: *`string`*, options?: *[ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)*): [Node](../classes/_node_.node.md)

*Defined in [index.ts:15](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/index.ts#L15)*

Parse ZAML source into node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  ZAML source string |
| `Optional` options | [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md) |

**Returns:** [Node](../classes/_node_.node.md)

___
<a id="tokenize"></a>

###  tokenize

▸ **tokenize**(text: *`string`*, options: *[ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)*): [Node](../classes/_node_.node.md)

*Defined in [index.ts:25](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/index.ts#L25)*

Parse ZAML source into node
*__deprecated__*: Please use zaml.parse() instead

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  Source string |
| options | [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md) |

**Returns:** [Node](../classes/_node_.node.md)

___

