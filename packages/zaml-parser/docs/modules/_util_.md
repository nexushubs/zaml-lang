[@zaml/parser](../README.md) › ["util"](_util_.md)

# Module: "util"

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
* [parse](_util_.md#parse)
* [parseNumber](_util_.md#parsenumber)
* [parseValue](_util_.md#parsevalue)
* [spacer](_util_.md#spacer)
* [stringify](_util_.md#stringify)
* [tokenize](_util_.md#tokenize)

### Object literals

* [chalkStyles](_util_.md#const-chalkstyles)

## Variables

### `Const` P_DATE_FORMAT

• **P_DATE_FORMAT**: *RegExp‹›* = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z$/

*Defined in [src/util.ts:22](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L22)*

___

### `Const` chalk

• **chalk**: *object* = _.mapValues(chalkStyles, ([start, end]) => colorful(start, end))

*Defined in [src/util.ts:336](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L336)*

#### Type declaration:

___

### `Const` colorful

• **colorful**: *(Anonymous function)* = isAnsiSupported ?
  (start: number, end: number) => (text: string) => `\x1b[${start}m${text}\x1b[${end}m`
  :
  (start: number, end: number) => (text: string) => text

*Defined in [src/util.ts:278](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L278)*

___

### `Const` isAnsiSupported

• **isAnsiSupported**: *boolean* = isNode || isChrome

*Defined in [src/util.ts:275](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L275)*

___

### `Const` isChrome

• **isChrome**: *boolean* = !isNode && /Chrome/.test(window.navigator.userAgent)

*Defined in [src/util.ts:273](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L273)*

___

### `Const` isNode

• **isNode**: *boolean* = (typeof process !== 'undefined') &&
  (typeof process.release !== 'undefined') &&
  (process.release.name === 'node')

*Defined in [src/util.ts:269](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L269)*

## Functions

###  formatValue

▸ **formatValue**(`value`: any, `asString`: boolean): *any*

*Defined in [src/util.ts:28](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L28)*

Stringify attribute value

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | any | - |   |
`asString` | boolean | false | - |

**Returns:** *any*

___

###  parse

▸ **parse**(`text`: string, `options?`: [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)): *[Node](../classes/_node_.node.md)‹›*

*Defined in [src/util.ts:342](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L342)*

Parse ZAML source into node

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | ZAML source string  |
`options?` | [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md) | - |

**Returns:** *[Node](../classes/_node_.node.md)‹›*

___

###  parseNumber

▸ **parseNumber**(`value`: string, `bigIntAsString`: boolean): *string | number*

*Defined in [src/util.ts:75](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L75)*

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

*Defined in [src/util.ts:64](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L64)*

Parse attribute value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *any*

___

###  spacer

▸ **spacer**(`space`: number, `indent`: number): *string*

*Defined in [src/util.ts:103](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L103)*

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

*Defined in [src/util.ts:126](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L126)*

Stringify node

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`node` | [Node](../classes/_node_.node.md) | - |
`options?` | [StringifyOptions](../interfaces/_util_.stringifyoptions.md) | - |
`indent` | number | -1 |
`pos` | number | 0 |

**Returns:** *string*

___

###  tokenize

▸ **tokenize**(`text`: string, `options`: [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md)): *[Node](../classes/_node_.node.md)‹›*

*Defined in [src/util.ts:352](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L352)*

Parse ZAML source into node

**`deprecated`** Please use zaml.parse() instead

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | Source string  |
`options` | [ParsingOptions](../interfaces/_tokenizer_.parsingoptions.md) | - |

**Returns:** *[Node](../classes/_node_.node.md)‹›*

## Object literals

### `Const` chalkStyles

### ▪ **chalkStyles**: *object*

*Defined in [src/util.ts:283](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L283)*

###  bgBlack

• **bgBlack**: *number[]* = [40, 49]

*Defined in [src/util.ts:315](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L315)*

###  bgBlackBright

• **bgBlackBright**: *number[]* = [100, 49]

*Defined in [src/util.ts:324](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L324)*

###  bgBlue

• **bgBlue**: *number[]* = [44, 49]

*Defined in [src/util.ts:319](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L319)*

###  bgBlueBright

• **bgBlueBright**: *number[]* = [104, 49]

*Defined in [src/util.ts:330](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L330)*

###  bgCyan

• **bgCyan**: *number[]* = [46, 49]

*Defined in [src/util.ts:321](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L321)*

###  bgCyanBright

• **bgCyanBright**: *number[]* = [106, 49]

*Defined in [src/util.ts:332](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L332)*

###  bgGray

• **bgGray**: *number[]* = [90, 39]

*Defined in [src/util.ts:326](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L326)*

###  bgGreen

• **bgGreen**: *number[]* = [42, 49]

*Defined in [src/util.ts:317](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L317)*

###  bgGreenBright

• **bgGreenBright**: *number[]* = [102, 49]

*Defined in [src/util.ts:328](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L328)*

###  bgGrey

• **bgGrey**: *number[]* = [90, 39]

*Defined in [src/util.ts:325](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L325)*

###  bgMagenta

• **bgMagenta**: *number[]* = [45, 49]

*Defined in [src/util.ts:320](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L320)*

###  bgMagentaBright

• **bgMagentaBright**: *number[]* = [105, 49]

*Defined in [src/util.ts:331](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L331)*

###  bgRed

• **bgRed**: *number[]* = [41, 49]

*Defined in [src/util.ts:316](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L316)*

###  bgRedBright

• **bgRedBright**: *number[]* = [101, 49]

*Defined in [src/util.ts:327](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L327)*

###  bgWhite

• **bgWhite**: *number[]* = [47, 49]

*Defined in [src/util.ts:322](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L322)*

###  bgWhiteBright

• **bgWhiteBright**: *number[]* = [107, 49]

*Defined in [src/util.ts:333](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L333)*

###  bgYellow

• **bgYellow**: *number[]* = [43, 49]

*Defined in [src/util.ts:318](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L318)*

###  bgYellowBright

• **bgYellowBright**: *number[]* = [103, 49]

*Defined in [src/util.ts:329](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L329)*

###  black

• **black**: *number[]* = [30, 39]

*Defined in [src/util.ts:295](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L295)*

###  blackBright

• **blackBright**: *number[]* = [90, 39]

*Defined in [src/util.ts:304](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L304)*

###  blue

• **blue**: *number[]* = [34, 39]

*Defined in [src/util.ts:299](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L299)*

###  blueBright

• **blueBright**: *number[]* = [94, 39]

*Defined in [src/util.ts:310](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L310)*

###  bold

• **bold**: *number[]* = [1, 22]

*Defined in [src/util.ts:287](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L287)*

###  cyan

• **cyan**: *number[]* = [36, 39]

*Defined in [src/util.ts:301](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L301)*

###  cyanBright

• **cyanBright**: *number[]* = [96, 39]

*Defined in [src/util.ts:312](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L312)*

###  dim

• **dim**: *number[]* = [2, 22]

*Defined in [src/util.ts:288](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L288)*

###  gray

• **gray**: *number[]* = [90, 39]

*Defined in [src/util.ts:306](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L306)*

###  green

• **green**: *number[]* = [32, 39]

*Defined in [src/util.ts:297](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L297)*

###  greenBright

• **greenBright**: *number[]* = [92, 39]

*Defined in [src/util.ts:308](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L308)*

###  grey

• **grey**: *number[]* = [90, 39]

*Defined in [src/util.ts:305](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L305)*

###  hidden

• **hidden**: *number[]* = [8, 28]

*Defined in [src/util.ts:292](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L292)*

###  inverse

• **inverse**: *number[]* = [7, 27]

*Defined in [src/util.ts:291](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L291)*

###  italic

• **italic**: *number[]* = [3, 23]

*Defined in [src/util.ts:289](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L289)*

###  magenta

• **magenta**: *number[]* = [35, 39]

*Defined in [src/util.ts:300](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L300)*

###  magentaBright

• **magentaBright**: *number[]* = [95, 39]

*Defined in [src/util.ts:311](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L311)*

###  red

• **red**: *number[]* = [31, 39]

*Defined in [src/util.ts:296](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L296)*

###  redBright

• **redBright**: *number[]* = [91, 39]

*Defined in [src/util.ts:307](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L307)*

###  reset

• **reset**: *number[]* = [0, 0]

*Defined in [src/util.ts:285](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L285)*

###  strikethrough

• **strikethrough**: *number[]* = [9, 29]

*Defined in [src/util.ts:293](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L293)*

###  underline

• **underline**: *number[]* = [4, 24]

*Defined in [src/util.ts:290](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L290)*

###  white

• **white**: *number[]* = [37, 39]

*Defined in [src/util.ts:302](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L302)*

###  whiteBright

• **whiteBright**: *number[]* = [97, 39]

*Defined in [src/util.ts:313](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L313)*

###  yellow

• **yellow**: *number[]* = [33, 39]

*Defined in [src/util.ts:298](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L298)*

###  yellowBright

• **yellowBright**: *number[]* = [93, 39]

*Defined in [src/util.ts:309](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/util.ts#L309)*
