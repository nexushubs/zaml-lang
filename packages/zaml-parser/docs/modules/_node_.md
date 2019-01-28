[@zaml/parser](../README.md) > ["Node"](../modules/_node_.md)

# External module: "Node"

## Index

### Enumerations

* [Descriptor](../enums/_node_.descriptor.md)
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
* [P_ENTITY_EXPRESSION](_node_.md#p_entity_expression)
* [P_LABEL_EXPRESSION](_node_.md#p_label_expression)
* [P_NODE_EXPRESSION](_node_.md#p_node_expression)
* [P_TAG_EXPRESSION](_node_.md#p_tag_expression)
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

### Object literals

* [TreeRules](_node_.md#treerules)

---

## Type aliases

<a id="extractor"></a>

###  Extractor

**Ƭ Extractor**: * [ExtractorFunction](_node_.md#extractorfunction) &#124; [ExtractorInstance](../interfaces/_node_.extractorinstance.md)
*

*Defined in [Node.ts:73](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L73)*

___
<a id="extractorfunction"></a>

###  ExtractorFunction

**Ƭ ExtractorFunction**: *`function`*

*Defined in [Node.ts:67](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L67)*

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

*Defined in [Node.ts:75](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L75)*

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

*Defined in [Node.ts:77](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L77)*

___
<a id="keyvaluemap"></a>

###  KeyValueMap

**Ƭ KeyValueMap**: *`object`*

*Defined in [Node.ts:173](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L173)*

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

*Defined in [Node.ts:25](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L25)*

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

*Defined in [Node.ts:30](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L30)*

___
<a id="nodetypes"></a>

### `<Const>` NodeTypes

**● NodeTypes**: *`string`[]* =  _.values(NodeType)

*Defined in [Node.ts:18](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L18)*

___
<a id="p_entity_expression"></a>

### `<Const>` P_ENTITY_EXPRESSION

**● P_ENTITY_EXPRESSION**: *`RegExp`* =  /^\[([A-Z]+)\]$/

*Defined in [Node.ts:22](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L22)*

___
<a id="p_label_expression"></a>

### `<Const>` P_LABEL_EXPRESSION

**● P_LABEL_EXPRESSION**: *`RegExp`* =  new RegExp(`^${P_LABEL_START}(${P_VAR_NAME})$`)

*Defined in [Node.ts:23](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L23)*

___
<a id="p_node_expression"></a>

### `<Const>` P_NODE_EXPRESSION

**● P_NODE_EXPRESSION**: *`RegExp`* =  /^<([A-Z]+)>$/

*Defined in [Node.ts:20](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L20)*

___
<a id="p_tag_expression"></a>

### `<Const>` P_TAG_EXPRESSION

**● P_TAG_EXPRESSION**: *`RegExp`* =  /^{([A-Z]+)}$/

*Defined in [Node.ts:21](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L21)*

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

*Defined in [Node.ts:38](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L38)*

___
<a id="nanoid"></a>

### `<Const>` nanoid

**● nanoid**: *`any`* =  require('nanoid')

*Defined in [Node.ts:6](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L6)*

___

## Functions

<a id="defaultfindercallback"></a>

### `<Const>` defaultFinderCallback

▸ **defaultFinderCallback**(node: *[Node](../classes/_node_.node.md)*): `true`

*Defined in [Node.ts:79](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](../classes/_node_.node.md) |

**Returns:** `true`

___
<a id="find"></a>

###  find

▸ **find**(node: *[Node](../classes/_node_.node.md)*, pattern?: *[FinderPattern](_node_.md#finderpattern)*, result?: *[Node](../classes/_node_.node.md)[]*): [Node](../classes/_node_.node.md)[]

*Defined in [Node.ts:97](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L97)*

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

*Defined in [Node.ts:114](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L114)*

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

*Defined in [Node.ts:129](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L129)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | [JsonNode](../interfaces/_node_.jsonnode.md) |

**Returns:** [Node](../classes/_node_.node.md)

___
<a id="parsejsonmap"></a>

###  parseJsonMap

▸ **parseJsonMap**(json?: *[KeyValueMap](_node_.md#keyvaluemap)*):  [KeyValueMap](_node_.md#keyvaluemap) &#124; `undefined`

*Defined in [Node.ts:161](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L161)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` json | [KeyValueMap](_node_.md#keyvaluemap) |

**Returns:**  [KeyValueMap](_node_.md#keyvaluemap) &#124; `undefined`

___
<a id="testnode"></a>

###  testNode

▸ **testNode**(pattern: *[FinderPattern](_node_.md#finderpattern)*, node: *[Node](../classes/_node_.node.md)*): `boolean`

*Defined in [Node.ts:81](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L81)*

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

*Defined in [Node.ts:149](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L149)*

Map metadata & attributes to JSON

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` map | [KeyValueMap](_node_.md#keyvaluemap) |   |

**Returns:**  [KeyValueMap](_node_.md#keyvaluemap) &#124; `undefined`

___

## Object literals

<a id="treerules"></a>

### `<Const>` TreeRules

**TreeRules**: *`object`*

*Defined in [Node.ts:57](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L57)*

<a id="treerules.__computed"></a>

####  __computed

**● __computed**: *[ANY](../enums/_node_.descriptor.md#any)[]* =  [Descriptor.ANY]

*Defined in [Node.ts:58](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L58)*
*Defined in [Node.ts:59](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L59)*
*Defined in [Node.ts:60](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L60)*
*Defined in [Node.ts:61](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L61)*
*Defined in [Node.ts:62](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L62)*
*Defined in [Node.ts:63](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L63)*
*Defined in [Node.ts:64](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L64)*

___

___

