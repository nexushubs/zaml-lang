[@zaml/parser](../README.md) > ["util"](../modules/_util_.md)

# External module: "util"

## Index

### Interfaces

* [StringifyOptions](../interfaces/_util_.stringifyoptions.md)

### Variables

* [P_DATE_FORMAT](_util_.md#p_date_format)

### Functions

* [formatValue](_util_.md#formatvalue)
* [parseValue](_util_.md#parsevalue)
* [spacer](_util_.md#spacer)
* [stringify](_util_.md#stringify)

---

## Variables

<a id="p_date_format"></a>

### `<Const>` P_DATE_FORMAT

**● P_DATE_FORMAT**: *`RegExp`* =  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z$/

*Defined in [util.ts:19](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/util.ts#L19)*

___

## Functions

<a id="formatvalue"></a>

###  formatValue

▸ **formatValue**(value: *`any`*): `any`

*Defined in [util.ts:25](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/util.ts#L25)*

Stringify attribute value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `any` |   |

**Returns:** `any`

___
<a id="parsevalue"></a>

###  parseValue

▸ **parseValue**(value: *`any`*): `any`

*Defined in [util.ts:43](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/util.ts#L43)*

Parse attribute value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `any` |   |

**Returns:** `any`

___
<a id="spacer"></a>

###  spacer

▸ **spacer**(space: *`number`*, indent: *`number`*): `string`

*Defined in [util.ts:55](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/util.ts#L55)*

Generate indent spaces

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| space | `number` |  \- |
| indent | `number` |   |

**Returns:** `string`

___
<a id="stringify"></a>

###  stringify

▸ **stringify**(node: *[Node](../classes/_node_.node.md)*, options?: * [StringifyOptions](../interfaces/_util_.stringifyoptions.md) &#124; `number`*, indent?: *`number`*, pos?: *`number`*): `string`

*Defined in [util.ts:76](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/util.ts#L76)*

Stringify node

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| node | [Node](../classes/_node_.node.md) | - |  \- |
| `Optional` options |  [StringifyOptions](../interfaces/_util_.stringifyoptions.md) &#124; `number`| - |
| `Default value` indent | `number` |  -1 |
| `Default value` pos | `number` | 0 |

**Returns:** `string`

___

