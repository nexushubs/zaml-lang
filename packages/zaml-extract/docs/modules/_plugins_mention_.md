[@zaml/extract - v0.7.0](../README.md) › ["plugins/mention"](_plugins_mention_.md)

# External module: "plugins/mention"

## Index

### Interfaces

* [ExtractMentionOptions](../interfaces/_plugins_mention_.extractmentionoptions.md)

### Variables

* [MENTION_CHARS](_plugins_mention_.md#const-mention_chars)
* [P_MENTION](_plugins_mention_.md#const-p_mention)
* [STOP_CHARS](_plugins_mention_.md#const-stop_chars)

### Functions

* [extractMention](_plugins_mention_.md#extractmention)

## Variables

### `Const` MENTION_CHARS

• **MENTION_CHARS**: *"@＠"* = "@＠"

*Defined in [plugins/mention.ts:5](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-extract/src/plugins/mention.ts#L5)*

___

### `Const` P_MENTION

• **P_MENTION**: *RegExp‹›* =  new RegExp(`[${_.escapeRegExp(MENTION_CHARS)}]([^${_.escapeRegExp(STOP_CHARS)}]+)`, 'g')

*Defined in [plugins/mention.ts:6](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-extract/src/plugins/mention.ts#L6)*

___

### `Const` STOP_CHARS

• **STOP_CHARS**: *"
 ~`!#$%^&*()-=_+[]\{}|;':",./<>?。？！，、；：“”‘（）《》〈〉【】『』「」﹃﹄〔〕…—～﹏￥"* = "
 ~`!#$%^&*()-=_+[]\{}|;':",./<>?。？！，、；：“”‘（）《》〈〉【】『』「」﹃﹄〔〕…—～﹏￥"

*Defined in [plugins/mention.ts:4](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-extract/src/plugins/mention.ts#L4)*

## Functions

###  extractMention

▸ **extractMention**(`text`: string, `options`: [ExtractMentionOptions](../interfaces/_plugins_mention_.extractmentionoptions.md)): *[EntityInfo](../interfaces/_types_.entityinfo.md)[]*

*Defined in [plugins/mention.ts:18](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-extract/src/plugins/mention.ts#L18)*

Parse mentioned usernames from text

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`text` | string | - | text to be parsed |
`options` | [ExtractMentionOptions](../interfaces/_plugins_mention_.extractmentionoptions.md) |  {} | - |

**Returns:** *[EntityInfo](../interfaces/_types_.entityinfo.md)[]*
