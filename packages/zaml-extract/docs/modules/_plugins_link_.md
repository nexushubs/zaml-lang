[@zaml/extract](../README.md) › ["plugins/link"](_plugins_link_.md)

# External module: "plugins/link"

## Index

### Variables

* [P_EMAIL](_plugins_link_.md#const-p_email)
* [linkify](_plugins_link_.md#const-linkify)

### Functions

* [extractLink](_plugins_link_.md#extractlink)

## Variables

### `Const` P_EMAIL

• **P_EMAIL**: *RegExp‹›* =  /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

*Defined in [plugins/link.ts:5](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-extract/src/plugins/link.ts#L5)*

___

### `Const` linkify

• **linkify**: *LinkifyIt* =  linkifyIt()

*Defined in [plugins/link.ts:4](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-extract/src/plugins/link.ts#L4)*

## Functions

###  extractLink

▸ **extractLink**(`text`: string): *[EntityInfo](../interfaces/_types_.entityinfo.md)[]*

*Defined in [plugins/link.ts:7](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-extract/src/plugins/link.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *[EntityInfo](../interfaces/_types_.entityinfo.md)[]*
