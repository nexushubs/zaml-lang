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

**● stateNames**: *`string`[]* =  _.keys(State)

*Defined in [Tokenizer.ts:70](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Tokenizer.ts#L70)*

___

## Functions

<a id="countlinebreaks"></a>

### `<Const>` countLineBreaks

▸ **countLineBreaks**(text: *`string`*): `number`

*Defined in [Tokenizer.ts:76](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Tokenizer.ts#L76)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `number`

___
<a id="getstatename"></a>

### `<Const>` getStateName

▸ **getStateName**(state: *[State](../enums/_tokenizer_.state.md)*): `string`

*Defined in [Tokenizer.ts:72](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Tokenizer.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| state | [State](../enums/_tokenizer_.state.md) |

**Returns:** `string`

___

