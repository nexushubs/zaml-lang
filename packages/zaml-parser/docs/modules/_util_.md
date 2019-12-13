[@zaml/parser](../README.md) › ["util"](_util_.md)

# External module: "util"

## Index

### Interfaces

* [StringifyOptions](../interfaces/_util_.stringifyoptions.md)

### Variables

* [P_DATE_FORMAT](_util_.md#const-p_date_format)
* [chalk](_util_.md#const-chalk)
* [colorful](_util_.md#const-colorful)
* [isAnsiSupported](_util_.md#const-isansisupported)
* [isChrome](_util_.md#const-ischrome)
* [isNode](_util_.md#const-isnode)

### Functions

* [formatValue](_util_.md#formatvalue)
* [parseNumber](_util_.md#parsenumber)
* [parseValue](_util_.md#parsevalue)
* [spacer](_util_.md#spacer)
* [stringify](_util_.md#stringify)

### Object literals

* [chalkStyles](_util_.md#const-chalkstyles)

## Variables

### `Const` P_DATE_FORMAT

• **P_DATE_FORMAT**: *RegExp‹›* =  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z$/

*Defined in [src/util.ts:21](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L21)*

___

### `Const` chalk

• **chalk**: *object* =  _.mapValues(chalkStyles, ([start, end]) => colorful(start, end))

*Defined in [src/util.ts:335](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L335)*

#### Type declaration:

___

### `Const` colorful

• **colorful**: *(Anonymous function)* =  isAnsiSupported ?
  (start: number, end: number) => (text: string) => `\x1b[${start}m${text}\x1b[${end}m`
  :
  (start: number, end: number) => (text: string) => text

*Defined in [src/util.ts:277](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L277)*

___

### `Const` isAnsiSupported

• **isAnsiSupported**: *boolean* =  isNode || isChrome

*Defined in [src/util.ts:274](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L274)*

___

### `Const` isChrome

• **isChrome**: *boolean* =  !isNode && /Chrome/.test(window.navigator.userAgent)

*Defined in [src/util.ts:272](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L272)*

___

### `Const` isNode

• **isNode**: *boolean* =  (typeof process !== 'undefined') &&
  (typeof process.release !== 'undefined') &&
  (process.release.name === 'node')

*Defined in [src/util.ts:268](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L268)*

## Functions

###  formatValue

▸ **formatValue**(`value`: any, `asString`: boolean): *any*

*Defined in [src/util.ts:27](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L27)*

Stringify attribute value

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | any | - |   |
`asString` | boolean | false | - |

**Returns:** *any*

___

###  parseNumber

▸ **parseNumber**(`value`: string, `bigIntAsString`: boolean): *string | number*

*Defined in [src/util.ts:74](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L74)*

Parse number

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | string | - |   |
`bigIntAsString` | boolean | false | - |

**Returns:** *string | number*

___

###  parseValue

▸ **parseValue**(`value`: any): *any*

*Defined in [src/util.ts:63](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L63)*

Parse attribute value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *any*

___

###  spacer

▸ **spacer**(`space`: number, `indent`: number): *string*

*Defined in [src/util.ts:102](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L102)*

Generate indent spaces

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`space` | number | - |
`indent` | number |   |

**Returns:** *string*

___

###  stringify

▸ **stringify**(`node`: [Node](../classes/_node_.node.md), `options?`: [StringifyOptions](../interfaces/_util_.stringifyoptions.md), `indent`: number, `pos`: number): *string*

*Defined in [src/util.ts:125](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L125)*

Stringify node

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`node` | [Node](../classes/_node_.node.md) | - |
`options?` | [StringifyOptions](../interfaces/_util_.stringifyoptions.md) | - |
`indent` | number |  -1 |
`pos` | number | 0 |

**Returns:** *string*

## Object literals

### `Const` chalkStyles

### ▪ **chalkStyles**: *object*

*Defined in [src/util.ts:282](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L282)*

###  bgBlack

• **bgBlack**: *number[]* =  [40, 49]

*Defined in [src/util.ts:314](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L314)*

###  bgBlackBright

• **bgBlackBright**: *number[]* =  [100, 49]

*Defined in [src/util.ts:323](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L323)*

###  bgBlue

• **bgBlue**: *number[]* =  [44, 49]

*Defined in [src/util.ts:318](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L318)*

###  bgBlueBright

• **bgBlueBright**: *number[]* =  [104, 49]

*Defined in [src/util.ts:329](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L329)*

###  bgCyan

• **bgCyan**: *number[]* =  [46, 49]

*Defined in [src/util.ts:320](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L320)*

###  bgCyanBright

• **bgCyanBright**: *number[]* =  [106, 49]

*Defined in [src/util.ts:331](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L331)*

###  bgGray

• **bgGray**: *number[]* =  [90, 39]

*Defined in [src/util.ts:325](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L325)*

###  bgGreen

• **bgGreen**: *number[]* =  [42, 49]

*Defined in [src/util.ts:316](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L316)*

###  bgGreenBright

• **bgGreenBright**: *number[]* =  [102, 49]

*Defined in [src/util.ts:327](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L327)*

###  bgGrey

• **bgGrey**: *number[]* =  [90, 39]

*Defined in [src/util.ts:324](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L324)*

###  bgMagenta

• **bgMagenta**: *number[]* =  [45, 49]

*Defined in [src/util.ts:319](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L319)*

###  bgMagentaBright

• **bgMagentaBright**: *number[]* =  [105, 49]

*Defined in [src/util.ts:330](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L330)*

###  bgRed

• **bgRed**: *number[]* =  [41, 49]

*Defined in [src/util.ts:315](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L315)*

###  bgRedBright

• **bgRedBright**: *number[]* =  [101, 49]

*Defined in [src/util.ts:326](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L326)*

###  bgWhite

• **bgWhite**: *number[]* =  [47, 49]

*Defined in [src/util.ts:321](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L321)*

###  bgWhiteBright

• **bgWhiteBright**: *number[]* =  [107, 49]

*Defined in [src/util.ts:332](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L332)*

###  bgYellow

• **bgYellow**: *number[]* =  [43, 49]

*Defined in [src/util.ts:317](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L317)*

###  bgYellowBright

• **bgYellowBright**: *number[]* =  [103, 49]

*Defined in [src/util.ts:328](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L328)*

###  black

• **black**: *number[]* =  [30, 39]

*Defined in [src/util.ts:294](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L294)*

###  blackBright

• **blackBright**: *number[]* =  [90, 39]

*Defined in [src/util.ts:303](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L303)*

###  blue

• **blue**: *number[]* =  [34, 39]

*Defined in [src/util.ts:298](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L298)*

###  blueBright

• **blueBright**: *number[]* =  [94, 39]

*Defined in [src/util.ts:309](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L309)*

###  bold

• **bold**: *number[]* =  [1, 22]

*Defined in [src/util.ts:286](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L286)*

###  cyan

• **cyan**: *number[]* =  [36, 39]

*Defined in [src/util.ts:300](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L300)*

###  cyanBright

• **cyanBright**: *number[]* =  [96, 39]

*Defined in [src/util.ts:311](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L311)*

###  dim

• **dim**: *number[]* =  [2, 22]

*Defined in [src/util.ts:287](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L287)*

###  gray

• **gray**: *number[]* =  [90, 39]

*Defined in [src/util.ts:305](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L305)*

###  green

• **green**: *number[]* =  [32, 39]

*Defined in [src/util.ts:296](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L296)*

###  greenBright

• **greenBright**: *number[]* =  [92, 39]

*Defined in [src/util.ts:307](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L307)*

###  grey

• **grey**: *number[]* =  [90, 39]

*Defined in [src/util.ts:304](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L304)*

###  hidden

• **hidden**: *number[]* =  [8, 28]

*Defined in [src/util.ts:291](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L291)*

###  inverse

• **inverse**: *number[]* =  [7, 27]

*Defined in [src/util.ts:290](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L290)*

###  italic

• **italic**: *number[]* =  [3, 23]

*Defined in [src/util.ts:288](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L288)*

###  magenta

• **magenta**: *number[]* =  [35, 39]

*Defined in [src/util.ts:299](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L299)*

###  magentaBright

• **magentaBright**: *number[]* =  [95, 39]

*Defined in [src/util.ts:310](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L310)*

###  red

• **red**: *number[]* =  [31, 39]

*Defined in [src/util.ts:295](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L295)*

###  redBright

• **redBright**: *number[]* =  [91, 39]

*Defined in [src/util.ts:306](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L306)*

###  reset

• **reset**: *number[]* =  [0, 0]

*Defined in [src/util.ts:284](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L284)*

###  strikethrough

• **strikethrough**: *number[]* =  [9, 29]

*Defined in [src/util.ts:292](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L292)*

###  underline

• **underline**: *number[]* =  [4, 24]

*Defined in [src/util.ts:289](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L289)*

###  white

• **white**: *number[]* =  [37, 39]

*Defined in [src/util.ts:301](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L301)*

###  whiteBright

• **whiteBright**: *number[]* =  [97, 39]

*Defined in [src/util.ts:312](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L312)*

###  yellow

• **yellow**: *number[]* =  [33, 39]

*Defined in [src/util.ts:297](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L297)*

###  yellowBright

• **yellowBright**: *number[]* =  [93, 39]

*Defined in [src/util.ts:308](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/util.ts#L308)*
