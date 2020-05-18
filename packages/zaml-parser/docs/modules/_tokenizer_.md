[@zaml/parser](../README.md) › ["Tokenizer"](_tokenizer_.md)

# Module: "Tokenizer"

## Index

### Enumerations

* [State](../enums/_tokenizer_.state.md)

### Classes

* [Tokenizer](../classes/_tokenizer_.tokenizer.md)

### Interfaces

* [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)

### Variables

* [stateNames](_tokenizer_.md#const-statenames)

### Functions

* [countLineBreaks](_tokenizer_.md#const-countlinebreaks)
* [getStateName](_tokenizer_.md#const-getstatename)

## Variables

### `Const` stateNames

• **stateNames**: *string[]* = [
  'METADATA',
  'NORMAL',
  'SINGLE_COMMENT',
  'MULTIPLE_COMMENT',
  'START',
  'TAG_START',
  'TAG_NAME',
  'ATTRIBUTE_LIST',
  'ATTRIBUTE_NAME',
  'ATTRIBUTE_ASSIGN',
  'ATTRIBUTE_VALUE',
  'ATTRIBUTE_FINISH',
  'TAG_END',
  'LABEL_START',
  'ENTITY_START',
  'ENTITY_BODY',
  'ENTITY_END',
  'END',
  'FINISH',
]

*Defined in [src/Tokenizer.ts:74](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Tokenizer.ts#L74)*

## Functions

### `Const` countLineBreaks

▸ **countLineBreaks**(`text`: string): *number*

*Defined in [src/Tokenizer.ts:100](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Tokenizer.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *number*

___

### `Const` getStateName

▸ **getStateName**(`state`: [State](../enums/_tokenizer_.state.md)): *string*

*Defined in [src/Tokenizer.ts:96](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Tokenizer.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [State](../enums/_tokenizer_.state.md) |

**Returns:** *string*
