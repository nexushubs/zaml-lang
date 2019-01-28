[@zaml/parser](../README.md) > ["util"](../modules/_util_.md)

# External module: "util"

## Index

### Interfaces

* [StringifyOptions](../interfaces/_util_.stringifyoptions.md)

### Variables

* [P_DATE_FORMAT](_util_.md#p_date_format)
* [chalk](_util_.md#chalk)
* [colorful](_util_.md#colorful)
* [isAnsiSupported](_util_.md#isansisupported)
* [isChrome](_util_.md#ischrome)
* [isNode](_util_.md#isnode)

### Functions

* [formatValue](_util_.md#formatvalue)
* [parseNumber](_util_.md#parsenumber)
* [parseValue](_util_.md#parsevalue)
* [spacer](_util_.md#spacer)
* [stringify](_util_.md#stringify)

### Object literals

* [chalkStyles](_util_.md#chalkstyles)

---

## Variables

<a id="p_date_format"></a>

### `<Const>` P_DATE_FORMAT

**● P_DATE_FORMAT**: *`RegExp`* =  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z$/

*Defined in [util.ts:20](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L20)*

___
<a id="chalk"></a>

### `<Const>` chalk

**● chalk**: *`Dictionary`<`(Anonymous function)`>* =  _.mapValues(chalkStyles, ([start, end]) => colorful(start, end))

*Defined in [util.ts:306](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L306)*

___
<a id="colorful"></a>

### `<Const>` colorful

**● colorful**: *`(Anonymous function)`* =  isAnsiSupported ?
  (start: number, end: number) => (text: string) => `\x1b[${start}m${text}\x1b[${end}m`
  :
  (start: number, end: number) => (text: string) => text

*Defined in [util.ts:248](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L248)*

___
<a id="isansisupported"></a>

### `<Const>` isAnsiSupported

**● isAnsiSupported**: *`boolean`* =  isNode || isChrome

*Defined in [util.ts:245](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L245)*

___
<a id="ischrome"></a>

### `<Const>` isChrome

**● isChrome**: *`boolean`* =  !isNode && /Chrome/.test(window.navigator.userAgent)

*Defined in [util.ts:243](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L243)*

___
<a id="isnode"></a>

### `<Const>` isNode

**● isNode**: *`boolean`* =  (typeof process !== 'undefined') &&
  (typeof process.release !== 'undefined') &&
  (process.release.name === 'node')

*Defined in [util.ts:239](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L239)*

___

## Functions

<a id="formatvalue"></a>

###  formatValue

▸ **formatValue**(value: *`any`*):  `null` &#124; `string`

*Defined in [util.ts:26](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L26)*

Stringify attribute value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `any` |   |

**Returns:**  `null` &#124; `string`

___
<a id="parsenumber"></a>

###  parseNumber

▸ **parseNumber**(value: *`string`*):  `string` &#124; `number`

*Defined in [util.ts:55](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L55)*

Parse number

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `string` |   |

**Returns:**  `string` &#124; `number`

___
<a id="parsevalue"></a>

###  parseValue

▸ **parseValue**(value: *`any`*): `any`

*Defined in [util.ts:44](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L44)*

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

*Defined in [util.ts:70](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L70)*

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

*Defined in [util.ts:92](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L92)*

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

## Object literals

<a id="chalkstyles"></a>

### `<Const>` chalkStyles

**chalkStyles**: *`object`*

*Defined in [util.ts:253](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L253)*

<a id="chalkstyles.bgblack"></a>

####  bgBlack

**● bgBlack**: *`number`[]* =  [40, 49]

*Defined in [util.ts:285](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L285)*

___
<a id="chalkstyles.bgblackbright"></a>

####  bgBlackBright

**● bgBlackBright**: *`number`[]* =  [100, 49]

*Defined in [util.ts:294](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L294)*

___
<a id="chalkstyles.bgblue"></a>

####  bgBlue

**● bgBlue**: *`number`[]* =  [44, 49]

*Defined in [util.ts:289](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L289)*

___
<a id="chalkstyles.bgbluebright"></a>

####  bgBlueBright

**● bgBlueBright**: *`number`[]* =  [104, 49]

*Defined in [util.ts:300](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L300)*

___
<a id="chalkstyles.bgcyan"></a>

####  bgCyan

**● bgCyan**: *`number`[]* =  [46, 49]

*Defined in [util.ts:291](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L291)*

___
<a id="chalkstyles.bgcyanbright"></a>

####  bgCyanBright

**● bgCyanBright**: *`number`[]* =  [106, 49]

*Defined in [util.ts:302](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L302)*

___
<a id="chalkstyles.bggray"></a>

####  bgGray

**● bgGray**: *`number`[]* =  [90, 39]

*Defined in [util.ts:296](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L296)*

___
<a id="chalkstyles.bggreen"></a>

####  bgGreen

**● bgGreen**: *`number`[]* =  [42, 49]

*Defined in [util.ts:287](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L287)*

___
<a id="chalkstyles.bggreenbright"></a>

####  bgGreenBright

**● bgGreenBright**: *`number`[]* =  [102, 49]

*Defined in [util.ts:298](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L298)*

___
<a id="chalkstyles.bggrey"></a>

####  bgGrey

**● bgGrey**: *`number`[]* =  [90, 39]

*Defined in [util.ts:295](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L295)*

___
<a id="chalkstyles.bgmagenta"></a>

####  bgMagenta

**● bgMagenta**: *`number`[]* =  [45, 49]

*Defined in [util.ts:290](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L290)*

___
<a id="chalkstyles.bgmagentabright"></a>

####  bgMagentaBright

**● bgMagentaBright**: *`number`[]* =  [105, 49]

*Defined in [util.ts:301](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L301)*

___
<a id="chalkstyles.bgred"></a>

####  bgRed

**● bgRed**: *`number`[]* =  [41, 49]

*Defined in [util.ts:286](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L286)*

___
<a id="chalkstyles.bgredbright"></a>

####  bgRedBright

**● bgRedBright**: *`number`[]* =  [101, 49]

*Defined in [util.ts:297](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L297)*

___
<a id="chalkstyles.bgwhite"></a>

####  bgWhite

**● bgWhite**: *`number`[]* =  [47, 49]

*Defined in [util.ts:292](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L292)*

___
<a id="chalkstyles.bgwhitebright"></a>

####  bgWhiteBright

**● bgWhiteBright**: *`number`[]* =  [107, 49]

*Defined in [util.ts:303](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L303)*

___
<a id="chalkstyles.bgyellow"></a>

####  bgYellow

**● bgYellow**: *`number`[]* =  [43, 49]

*Defined in [util.ts:288](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L288)*

___
<a id="chalkstyles.bgyellowbright"></a>

####  bgYellowBright

**● bgYellowBright**: *`number`[]* =  [103, 49]

*Defined in [util.ts:299](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L299)*

___
<a id="chalkstyles.black"></a>

####  black

**● black**: *`number`[]* =  [30, 39]

*Defined in [util.ts:265](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L265)*

___
<a id="chalkstyles.blackbright"></a>

####  blackBright

**● blackBright**: *`number`[]* =  [90, 39]

*Defined in [util.ts:274](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L274)*

___
<a id="chalkstyles.blue"></a>

####  blue

**● blue**: *`number`[]* =  [34, 39]

*Defined in [util.ts:269](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L269)*

___
<a id="chalkstyles.bluebright"></a>

####  blueBright

**● blueBright**: *`number`[]* =  [94, 39]

*Defined in [util.ts:280](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L280)*

___
<a id="chalkstyles.bold"></a>

####  bold

**● bold**: *`number`[]* =  [1, 22]

*Defined in [util.ts:257](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L257)*

___
<a id="chalkstyles.cyan"></a>

####  cyan

**● cyan**: *`number`[]* =  [36, 39]

*Defined in [util.ts:271](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L271)*

___
<a id="chalkstyles.cyanbright"></a>

####  cyanBright

**● cyanBright**: *`number`[]* =  [96, 39]

*Defined in [util.ts:282](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L282)*

___
<a id="chalkstyles.dim"></a>

####  dim

**● dim**: *`number`[]* =  [2, 22]

*Defined in [util.ts:258](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L258)*

___
<a id="chalkstyles.gray"></a>

####  gray

**● gray**: *`number`[]* =  [90, 39]

*Defined in [util.ts:276](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L276)*

___
<a id="chalkstyles.green"></a>

####  green

**● green**: *`number`[]* =  [32, 39]

*Defined in [util.ts:267](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L267)*

___
<a id="chalkstyles.greenbright"></a>

####  greenBright

**● greenBright**: *`number`[]* =  [92, 39]

*Defined in [util.ts:278](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L278)*

___
<a id="chalkstyles.grey"></a>

####  grey

**● grey**: *`number`[]* =  [90, 39]

*Defined in [util.ts:275](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L275)*

___
<a id="chalkstyles.hidden"></a>

####  hidden

**● hidden**: *`number`[]* =  [8, 28]

*Defined in [util.ts:262](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L262)*

___
<a id="chalkstyles.inverse"></a>

####  inverse

**● inverse**: *`number`[]* =  [7, 27]

*Defined in [util.ts:261](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L261)*

___
<a id="chalkstyles.italic"></a>

####  italic

**● italic**: *`number`[]* =  [3, 23]

*Defined in [util.ts:259](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L259)*

___
<a id="chalkstyles.magenta"></a>

####  magenta

**● magenta**: *`number`[]* =  [35, 39]

*Defined in [util.ts:270](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L270)*

___
<a id="chalkstyles.magentabright"></a>

####  magentaBright

**● magentaBright**: *`number`[]* =  [95, 39]

*Defined in [util.ts:281](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L281)*

___
<a id="chalkstyles.red"></a>

####  red

**● red**: *`number`[]* =  [31, 39]

*Defined in [util.ts:266](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L266)*

___
<a id="chalkstyles.redbright"></a>

####  redBright

**● redBright**: *`number`[]* =  [91, 39]

*Defined in [util.ts:277](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L277)*

___
<a id="chalkstyles.reset"></a>

####  reset

**● reset**: *`number`[]* =  [0, 0]

*Defined in [util.ts:255](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L255)*

___
<a id="chalkstyles.strikethrough"></a>

####  strikethrough

**● strikethrough**: *`number`[]* =  [9, 29]

*Defined in [util.ts:263](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L263)*

___
<a id="chalkstyles.underline"></a>

####  underline

**● underline**: *`number`[]* =  [4, 24]

*Defined in [util.ts:260](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L260)*

___
<a id="chalkstyles.white"></a>

####  white

**● white**: *`number`[]* =  [37, 39]

*Defined in [util.ts:272](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L272)*

___
<a id="chalkstyles.whitebright"></a>

####  whiteBright

**● whiteBright**: *`number`[]* =  [97, 39]

*Defined in [util.ts:283](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L283)*

___
<a id="chalkstyles.yellow"></a>

####  yellow

**● yellow**: *`number`[]* =  [33, 39]

*Defined in [util.ts:268](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L268)*

___
<a id="chalkstyles.yellowbright"></a>

####  yellowBright

**● yellowBright**: *`number`[]* =  [93, 39]

*Defined in [util.ts:279](https://github.com/nexushubs/zaml-lang/blob/9076d84/packages/zaml-parser/src/util.ts#L279)*

___

___

