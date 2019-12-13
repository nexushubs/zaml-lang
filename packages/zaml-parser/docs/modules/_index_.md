[@zaml/parser](../README.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Functions

* [parse](_index_.md#parse)
* [tokenize](_index_.md#tokenize)

## Functions

###  parse

▸ **parse**(`text`: string, `options?`: [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)): *[Node](../classes/_node_.node.md)‹›*

*Defined in [src/index.ts:14](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/index.ts#L14)*

Parse ZAML source into node

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | ZAML source string  |
`options?` | [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md) | - |

**Returns:** *[Node](../classes/_node_.node.md)‹›*

___

###  tokenize

▸ **tokenize**(`text`: string, `options`: [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)): *[Node](../classes/_node_.node.md)‹›*

*Defined in [src/index.ts:24](https://github.com/nexushubs/zaml-lang/blob/ee5fea7/packages/zaml-parser/src/index.ts#L24)*

Parse ZAML source into node

**`deprecated`** Please use zaml.parse() instead

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | Source string  |
`options` | [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md) | - |

**Returns:** *[Node](../classes/_node_.node.md)‹›*
