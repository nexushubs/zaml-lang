[@zaml/extract](../README.md) > ["plugins/link"](../modules/_plugins_link_.md)

# External module: "plugins/link"

## Index

### Variables

* [P_EMAIL](_plugins_link_.md#p_email)
* [linkify](_plugins_link_.md#linkify)

### Functions

* [extractLink](_plugins_link_.md#extractlink)

---

## Variables

<a id="p_email"></a>

### `<Const>` P_EMAIL

**● P_EMAIL**: *`RegExp`* =  /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

*Defined in [plugins/link.ts:5](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-extract/src/plugins/link.ts#L5)*

___
<a id="linkify"></a>

### `<Const>` linkify

**● linkify**: *`LinkifyIt`* =  linkifyIt()

*Defined in [plugins/link.ts:4](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-extract/src/plugins/link.ts#L4)*

___

## Functions

<a id="extractlink"></a>

###  extractLink

▸ **extractLink**(text: *`string`*): [EntityInfo](../interfaces/_types_.entityinfo.md)[]

*Defined in [plugins/link.ts:7](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-extract/src/plugins/link.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** [EntityInfo](../interfaces/_types_.entityinfo.md)[]

___

