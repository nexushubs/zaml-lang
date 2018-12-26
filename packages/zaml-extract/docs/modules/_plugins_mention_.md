[@zaml/extract](../README.md) > ["plugins/mention"](../modules/_plugins_mention_.md)

# External module: "plugins/mention"

## Index

### Interfaces

* [ExtractMentionOptions](../interfaces/_plugins_mention_.extractmentionoptions.md)

### Variables

* [MENTION_CHARS](_plugins_mention_.md#mention_chars)
* [P_MENTION](_plugins_mention_.md#p_mention)
* [STOP_CHARS](_plugins_mention_.md#stop_chars)

### Functions

* [extractMention](_plugins_mention_.md#extractmention)

---

## Variables

<a id="mention_chars"></a>

### `<Const>` MENTION_CHARS

**● MENTION_CHARS**: *"@＠"* = "@＠"

*Defined in [plugins/mention.ts:5](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-extract/src/plugins/mention.ts#L5)*

___
<a id="p_mention"></a>

### `<Const>` P_MENTION

**● P_MENTION**: *`RegExp`* =  new RegExp(`[${_.escapeRegExp(MENTION_CHARS)}]([^${_.escapeRegExp(STOP_CHARS)}]+)`, 'g')

*Defined in [plugins/mention.ts:6](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-extract/src/plugins/mention.ts#L6)*

___
<a id="stop_chars"></a>

### `<Const>` STOP_CHARS

**● STOP_CHARS**: *"~&#x60;!#$%^&amp;*()-&#x3D;_+[]\{}|;&#x27;:&quot;,./&lt;&gt;?。？！，、；：“”‘（）《》〈〉【】『』「」﹃﹄〔〕…—～﹏￥"* = "
 ~`!#$%^&*()-=_+[]\{}|;':",./<>?。？！，、；：“”‘（）《》〈〉【】『』「」﹃﹄〔〕…—～﹏￥"

*Defined in [plugins/mention.ts:4](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-extract/src/plugins/mention.ts#L4)*

___

## Functions

<a id="extractmention"></a>

###  extractMention

▸ **extractMention**(text: *`string`*, options?: *[ExtractMentionOptions](../interfaces/_plugins_mention_.extractmentionoptions.md)*): [EntityInfo](../interfaces/_types_.entityinfo.md)[]

*Defined in [plugins/mention.ts:18](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-extract/src/plugins/mention.ts#L18)*

Parse mentioned usernames from text

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| text | `string` | - |  text to be parsed |
| `Default value` options | [ExtractMentionOptions](../interfaces/_plugins_mention_.extractmentionoptions.md) |  {} |

**Returns:** [EntityInfo](../interfaces/_types_.entityinfo.md)[]

___

