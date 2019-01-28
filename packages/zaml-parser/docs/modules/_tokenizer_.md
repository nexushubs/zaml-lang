[@zaml/parser](../README.md) > ["Tokenizer"](../modules/_tokenizer_.md)

# External module: "Tokenizer"

## Index

### Enumerations

* [State](../enums/_tokenizer_.state.md)

### Classes

* [Tokenizer](../classes/_tokenizer_.tokenizer.md)

### Interfaces

* [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)

### Variables

* [stateNames](_tokenizer_.md#statenames)

### Functions

* [countLineBreaks](_tokenizer_.md#countlinebreaks)
* [getStateName](_tokenizer_.md#getstatename)

---

## Variables

<a id="statenames"></a>

### `<Const>` stateNames

**● stateNames**: *`string`[]* =  [
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

*Defined in [Tokenizer.ts:72](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Tokenizer.ts#L72)*

___

## Functions

<a id="countlinebreaks"></a>

### `<Const>` countLineBreaks

▸ **countLineBreaks**(text: *`string`*): `number`

*Defined in [Tokenizer.ts:98](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Tokenizer.ts#L98)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `number`

___
<a id="getstatename"></a>

### `<Const>` getStateName

▸ **getStateName**(state: *[State](../enums/_tokenizer_.state.md)*): `string`

*Defined in [Tokenizer.ts:94](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Tokenizer.ts#L94)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| state | [State](../enums/_tokenizer_.state.md) |

**Returns:** `string`

___

