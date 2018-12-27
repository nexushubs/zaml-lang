[@zaml/parser](../README.md) > ["Node"](../modules/_node_.md)

# External module: "Node"

## Index

### Enumerations

* [NodeType](../enums/_node_.nodetype.md)

### Classes

* [Node](../classes/_node_.node.md)

### Interfaces

* [EntityItem](../interfaces/_node_.entityitem.md)
* [ExtractorInstance](../interfaces/_node_.extractorinstance.md)
* [JsonNode](../interfaces/_node_.jsonnode.md)
* [JsonOptions](../interfaces/_node_.jsonoptions.md)
* [NodeProps](../interfaces/_node_.nodeprops.md)
* [NodeRange](../interfaces/_node_.noderange.md)
* [NodeSelector](../interfaces/_node_.nodeselector.md)
* [SourceMapRange](../interfaces/_node_.sourcemaprange.md)

### Type aliases

* [Extractor](_node_.md#extractor)
* [ExtractorFunction](_node_.md#extractorfunction)
* [FinderCallback](_node_.md#findercallback)
* [FinderPattern](_node_.md#finderpattern)
* [KeyValueMap](_node_.md#keyvaluemap)

### Variables

* [BlockNodeTypes](_node_.md#blocknodetypes)
* [BlockTags](_node_.md#blocktags)
* [NodeTypes](_node_.md#nodetypes)
* [WrappingTags](_node_.md#wrappingtags)
* [nanoid](_node_.md#nanoid)

### Functions

* [defaultFinderCallback](_node_.md#defaultfindercallback)
* [find](_node_.md#find)
* [findOne](_node_.md#findone)
* [parseJson](_node_.md#parsejson)
* [parseJsonMap](_node_.md#parsejsonmap)
* [testNode](_node_.md#testnode)
* [toJsonMap](_node_.md#tojsonmap)

---

## Type aliases

<a id="extractor"></a>

###  Extractor

**Ƭ Extractor**: * [ExtractorFunction](_node_.md#extractorfunction) &#124; [ExtractorInstance](../interfaces/_node_.extractorinstance.md)
*

*Defined in [Node.ts:46](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L46)*

___
<a id="extractorfunction"></a>

###  ExtractorFunction

**Ƭ ExtractorFunction**: *`function`*

*Defined in [Node.ts:40](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L40)*

#### Type declaration
▸(text: *`string`*): [EntityItem](../interfaces/_node_.entityitem.md)[]

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** [EntityItem](../interfaces/_node_.entityitem.md)[]

___
<a id="findercallback"></a>

###  FinderCallback

**Ƭ FinderCallback**: *`function`*

*Defined in [Node.ts:48](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L48)*

#### Type declaration
▸(node: *[Node](../classes/_node_.node.md)*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](../classes/_node_.node.md) |

**Returns:** `boolean`

___
<a id="finderpattern"></a>

###  FinderPattern

**Ƭ FinderPattern**: * [FinderCallback](_node_.md#findercallback) &#124; `string`
*

*Defined in [Node.ts:50](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L50)*

___
<a id="keyvaluemap"></a>

###  KeyValueMap

**Ƭ KeyValueMap**: *`object`*

*Defined in [Node.ts:146](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L146)*

#### Type declaration

[key: `string`]: `any`

___

## Variables

<a id="blocknodetypes"></a>

### `<Const>` BlockNodeTypes

**● BlockNodeTypes**: *[NodeType](../enums/_node_.nodetype.md)[]* =  [
  NodeType.ROOT,
  NodeType.PARAGRAPH,
]

*Defined in [Node.ts:19](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L19)*

___
<a id="blocktags"></a>

### `<Const>` BlockTags

**● BlockTags**: *`string`[]* =  [
  'BLOCK',
  'QUOTE',
  'SECTION',
  'HEADER',
  'FOOTER',
]

*Defined in [Node.ts:24](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L24)*

___
<a id="nodetypes"></a>

### `<Const>` NodeTypes

**● NodeTypes**: *`string`[]* =  _.values(NodeType)

*Defined in [Node.ts:17](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L17)*

___
<a id="wrappingtags"></a>

### `<Const>` WrappingTags

**● WrappingTags**: *`string`[]* =  [
  ...BlockTags,
  'INLINE',
  'SENTENCE',
  'NUM',
  'HEADING',
]

*Defined in [Node.ts:32](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L32)*

___
<a id="nanoid"></a>

### `<Const>` nanoid

**● nanoid**: *`any`* =  require('nanoid')

*Defined in [Node.ts:5](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L5)*

___

## Functions

<a id="defaultfindercallback"></a>

### `<Const>` defaultFinderCallback

▸ **defaultFinderCallback**(node: *[Node](../classes/_node_.node.md)*): `true`

*Defined in [Node.ts:52](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](../classes/_node_.node.md) |

**Returns:** `true`

___
<a id="find"></a>

###  find

▸ **find**(node: *[Node](../classes/_node_.node.md)*, pattern?: *[FinderPattern](_node_.md#finderpattern)*, result?: *[Node](../classes/_node_.node.md)[]*): [Node](../classes/_node_.node.md)[]

*Defined in [Node.ts:70](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L70)*

Recursive node finder

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| node | [Node](../classes/_node_.node.md) | - |  Node to find |
| `Default value` pattern | [FinderPattern](_node_.md#finderpattern) |  defaultFinderCallback |  Searching pattern |
| `Default value` result | [Node](../classes/_node_.node.md)[] |  [] |

**Returns:** [Node](../classes/_node_.node.md)[]

___
<a id="findone"></a>

###  findOne

▸ **findOne**(node: *[Node](../classes/_node_.node.md)*, pattern?: *[FinderPattern](_node_.md#finderpattern)*):  [Node](../classes/_node_.node.md) &#124; `undefined`

*Defined in [Node.ts:87](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L87)*

Recursive node finder

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| node | [Node](../classes/_node_.node.md) | - |  \- |
| `Default value` pattern | [FinderPattern](_node_.md#finderpattern) |  defaultFinderCallback |   |

**Returns:**  [Node](../classes/_node_.node.md) &#124; `undefined`

___
<a id="parsejson"></a>

###  parseJson

▸ **parseJson**(json: *[JsonNode](../interfaces/_node_.jsonnode.md)*): [Node](../classes/_node_.node.md)

*Defined in [Node.ts:102](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L102)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | [JsonNode](../interfaces/_node_.jsonnode.md) |

**Returns:** [Node](../classes/_node_.node.md)

___
<a id="parsejsonmap"></a>

###  parseJsonMap

▸ **parseJsonMap**(json?: *[KeyValueMap](_node_.md#keyvaluemap)*):  [KeyValueMap](_node_.md#keyvaluemap) &#124; `undefined`

*Defined in [Node.ts:134](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L134)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` json | [KeyValueMap](_node_.md#keyvaluemap) |

**Returns:**  [KeyValueMap](_node_.md#keyvaluemap) &#124; `undefined`

___
<a id="testnode"></a>

###  testNode

▸ **testNode**(pattern: *[FinderPattern](_node_.md#finderpattern)*, node: *[Node](../classes/_node_.node.md)*): `boolean`

*Defined in [Node.ts:54](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pattern | [FinderPattern](_node_.md#finderpattern) |
| node | [Node](../classes/_node_.node.md) |

**Returns:** `boolean`

___
<a id="tojsonmap"></a>

###  toJsonMap

▸ **toJsonMap**(map?: *[KeyValueMap](_node_.md#keyvaluemap)*):  [KeyValueMap](_node_.md#keyvaluemap) &#124; `undefined`

*Defined in [Node.ts:122](https://github.com/nexushubs/zaml-lang/blob/a042eb7/packages/zaml-parser/src/Node.ts#L122)*

Map metadata & attributes to JSON

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` map | [KeyValueMap](_node_.md#keyvaluemap) |   |

**Returns:**  [KeyValueMap](_node_.md#keyvaluemap) &#124; `undefined`

___

