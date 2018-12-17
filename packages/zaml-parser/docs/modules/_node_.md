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

*Defined in [Node.ts:43](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L43)*

___
<a id="extractorfunction"></a>

###  ExtractorFunction

**Ƭ ExtractorFunction**: *`function`*

*Defined in [Node.ts:37](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L37)*

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

*Defined in [Node.ts:45](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L45)*

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

*Defined in [Node.ts:47](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L47)*

___
<a id="keyvaluemap"></a>

###  KeyValueMap

**Ƭ KeyValueMap**: *`object`*

*Defined in [Node.ts:144](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L144)*

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

*Defined in [Node.ts:17](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L17)*

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

*Defined in [Node.ts:22](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L22)*

___
<a id="nodetypes"></a>

### `<Const>` NodeTypes

**● NodeTypes**: *`string`[]* =  _.values(NodeType)

*Defined in [Node.ts:15](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L15)*

___
<a id="wrappingtags"></a>

### `<Const>` WrappingTags

**● WrappingTags**: *`string`[]* =  [
  ...BlockTags,
  'INLINE',
  'NUM',
  'HEADING',
]

*Defined in [Node.ts:30](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L30)*

___

## Functions

<a id="defaultfindercallback"></a>

### `<Const>` defaultFinderCallback

▸ **defaultFinderCallback**(node: *[Node](../classes/_node_.node.md)*): `true`

*Defined in [Node.ts:49](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](../classes/_node_.node.md) |

**Returns:** `true`

___
<a id="find"></a>

###  find

▸ **find**(node: *[Node](../classes/_node_.node.md)*, pattern?: *[FinderPattern](_node_.md#finderpattern)*, result?: *[Node](../classes/_node_.node.md)[]*): [Node](../classes/_node_.node.md)[]

*Defined in [Node.ts:67](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L67)*

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

*Defined in [Node.ts:84](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L84)*

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

*Defined in [Node.ts:99](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L99)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | [JsonNode](../interfaces/_node_.jsonnode.md) |

**Returns:** [Node](../classes/_node_.node.md)

___
<a id="parsejsonmap"></a>

###  parseJsonMap

▸ **parseJsonMap**(json?: *[KeyValueMap](_node_.md#keyvaluemap)*):  [KeyValueMap](_node_.md#keyvaluemap) &#124; `undefined`

*Defined in [Node.ts:130](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L130)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` json | [KeyValueMap](_node_.md#keyvaluemap) |

**Returns:**  [KeyValueMap](_node_.md#keyvaluemap) &#124; `undefined`

___
<a id="testnode"></a>

###  testNode

▸ **testNode**(pattern: *[FinderPattern](_node_.md#finderpattern)*, node: *[Node](../classes/_node_.node.md)*): `boolean`

*Defined in [Node.ts:51](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L51)*

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

*Defined in [Node.ts:118](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/Node.ts#L118)*

Map metadata & attributes to JSON

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` map | [KeyValueMap](_node_.md#keyvaluemap) |   |

**Returns:**  [KeyValueMap](_node_.md#keyvaluemap) &#124; `undefined`

___

