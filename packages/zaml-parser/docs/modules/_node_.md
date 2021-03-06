[@zaml/parser](../README.md) › ["Node"](_node_.md)

# Module: "Node"

## Index

### Enumerations

* [Descriptor](../enums/_node_.descriptor.md)
* [NodeType](../enums/_node_.nodetype.md)

### Classes

* [Node](../classes/_node_.node.md)

### Interfaces

* [EntityInfo](../interfaces/_node_.entityinfo.md)
* [ExtractorInterface](../interfaces/_node_.extractorinterface.md)
* [JsonNode](../interfaces/_node_.jsonnode.md)
* [JsonOptions](../interfaces/_node_.jsonoptions.md)
* [NodeProps](../interfaces/_node_.nodeprops.md)
* [NodeRange](../interfaces/_node_.noderange.md)
* [NodeSelector](../interfaces/_node_.nodeselector.md)
* [SourceMapRange](../interfaces/_node_.sourcemaprange.md)

### Type aliases

* [ArrayExtractor](_node_.md#arrayextractor)
* [AsyncArrayExtractor](_node_.md#asyncarrayextractor)
* [AsyncSingleExtractor](_node_.md#asyncsingleextractor)
* [ExtractorType](_node_.md#extractortype)
* [FinderCallback](_node_.md#findercallback)
* [FinderPattern](_node_.md#finderpattern)
* [KeyValueMap](_node_.md#keyvaluemap)
* [SingleExtractor](_node_.md#singleextractor)

### Variables

* [BlockNodeTypes](_node_.md#const-blocknodetypes)
* [BlockTags](_node_.md#const-blocktags)
* [NodeTypes](_node_.md#const-nodetypes)
* [P_ENTITY_EXPRESSION](_node_.md#const-p_entity_expression)
* [P_LABEL_EXPRESSION](_node_.md#const-p_label_expression)
* [P_NODE_EXPRESSION](_node_.md#const-p_node_expression)
* [P_TAG_EXPRESSION](_node_.md#const-p_tag_expression)
* [WrappingTags](_node_.md#const-wrappingtags)
* [nanoid](_node_.md#const-nanoid)

### Functions

* [defaultFinderCallback](_node_.md#const-defaultfindercallback)
* [find](_node_.md#find)
* [findOne](_node_.md#findone)
* [parseJson](_node_.md#parsejson)
* [parseJsonMap](_node_.md#parsejsonmap)
* [testNode](_node_.md#testnode)
* [toJsonMap](_node_.md#tojsonmap)

### Object literals

* [TreeRules](_node_.md#const-treerules)

## Type aliases

###  ArrayExtractor

Ƭ **ArrayExtractor**: *function*

*Defined in [src/Node.ts:70](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L70)*

#### Type declaration:

▸ (`textArr`: string[]): *[EntityInfo](../interfaces/_node_.entityinfo.md)[][]*

**Parameters:**

Name | Type |
------ | ------ |
`textArr` | string[] |

___

###  AsyncArrayExtractor

Ƭ **AsyncArrayExtractor**: *function*

*Defined in [src/Node.ts:72](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L72)*

#### Type declaration:

▸ (`textArr`: string[]): *Promise‹[EntityInfo](../interfaces/_node_.entityinfo.md)[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`textArr` | string[] |

___

###  AsyncSingleExtractor

Ƭ **AsyncSingleExtractor**: *function*

*Defined in [src/Node.ts:68](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L68)*

#### Type declaration:

▸ (`text`: string): *Promise‹[EntityInfo](../interfaces/_node_.entityinfo.md)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

___

###  ExtractorType

Ƭ **ExtractorType**: *[SingleExtractor](_node_.md#singleextractor) | [ExtractorInterface](../interfaces/_node_.extractorinterface.md)*

*Defined in [src/Node.ts:79](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L79)*

___

###  FinderCallback

Ƭ **FinderCallback**: *function*

*Defined in [src/Node.ts:81](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L81)*

#### Type declaration:

▸ (`node`: [Node](../classes/_node_.node.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](../classes/_node_.node.md) |

___

###  FinderPattern

Ƭ **FinderPattern**: *[FinderCallback](_node_.md#findercallback) | string*

*Defined in [src/Node.ts:83](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L83)*

___

###  KeyValueMap

Ƭ **KeyValueMap**: *object*

*Defined in [src/Node.ts:179](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L179)*

#### Type declaration:

* \[ **key**: *string*\]: any

___

###  SingleExtractor

Ƭ **SingleExtractor**: *function*

*Defined in [src/Node.ts:66](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L66)*

#### Type declaration:

▸ (`text`: string): *[EntityInfo](../interfaces/_node_.entityinfo.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

## Variables

### `Const` BlockNodeTypes

• **BlockNodeTypes**: *[NodeType](../enums/_node_.nodetype.md)[]* = [
  NodeType.ROOT,
  NodeType.PARAGRAPH,
]

*Defined in [src/Node.ts:24](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L24)*

___

### `Const` BlockTags

• **BlockTags**: *string[]* = [
  'BLOCK',
  'QUOTE',
  'SECTION',
  'HEADER',
  'FOOTER',
]

*Defined in [src/Node.ts:29](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L29)*

___

### `Const` NodeTypes

• **NodeTypes**: *[FRAGMENT](../enums/_node_.nodetype.md#fragment) | [ROOT](../enums/_node_.nodetype.md#root) | [PARAGRAPH](../enums/_node_.nodetype.md#paragraph) | [TAG](../enums/_node_.nodetype.md#tag) | [ENTITY](../enums/_node_.nodetype.md#entity) | [TEXT](../enums/_node_.nodetype.md#text) | [COMMENT](../enums/_node_.nodetype.md#comment)[]* = _.values(NodeType)

*Defined in [src/Node.ts:17](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L17)*

___

### `Const` P_ENTITY_EXPRESSION

• **P_ENTITY_EXPRESSION**: *RegExp‹›* = /^\[([A-Z]+)\]$/

*Defined in [src/Node.ts:21](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L21)*

___

### `Const` P_LABEL_EXPRESSION

• **P_LABEL_EXPRESSION**: *RegExp‹›* = new RegExp(`^${P_LABEL_START}(${P_VAR_NAME})$`)

*Defined in [src/Node.ts:22](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L22)*

___

### `Const` P_NODE_EXPRESSION

• **P_NODE_EXPRESSION**: *RegExp‹›* = /^<([A-Z]+)>$/

*Defined in [src/Node.ts:19](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L19)*

___

### `Const` P_TAG_EXPRESSION

• **P_TAG_EXPRESSION**: *RegExp‹›* = /^{([A-Z]+)}$/

*Defined in [src/Node.ts:20](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L20)*

___

### `Const` WrappingTags

• **WrappingTags**: *string[]* = [
  ...BlockTags,
  'INLINE',
  'SENTENCE',
  'NUM',
  'HEADING',
]

*Defined in [src/Node.ts:37](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L37)*

___

### `Const` nanoid

• **nanoid**: *any* = require('nanoid')

*Defined in [src/Node.ts:5](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L5)*

## Functions

### `Const` defaultFinderCallback

▸ **defaultFinderCallback**(`node`: [Node](../classes/_node_.node.md)): *true*

*Defined in [src/Node.ts:85](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](../classes/_node_.node.md) |

**Returns:** *true*

___

###  find

▸ **find**(`node`: [Node](../classes/_node_.node.md), `pattern`: [FinderPattern](_node_.md#finderpattern), `result`: [Node](../classes/_node_.node.md)[]): *[Node](../classes/_node_.node.md)[]*

*Defined in [src/Node.ts:103](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L103)*

Recursive node finder

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`node` | [Node](../classes/_node_.node.md) | - | Node to find |
`pattern` | [FinderPattern](_node_.md#finderpattern) | defaultFinderCallback | Searching pattern |
`result` | [Node](../classes/_node_.node.md)[] | [] | - |

**Returns:** *[Node](../classes/_node_.node.md)[]*

___

###  findOne

▸ **findOne**(`node`: [Node](../classes/_node_.node.md), `pattern`: [FinderPattern](_node_.md#finderpattern)): *[Node](../classes/_node_.node.md) | undefined*

*Defined in [src/Node.ts:120](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L120)*

Recursive node finder

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`node` | [Node](../classes/_node_.node.md) | - | - |
`pattern` | [FinderPattern](_node_.md#finderpattern) | defaultFinderCallback |   |

**Returns:** *[Node](../classes/_node_.node.md) | undefined*

___

###  parseJson

▸ **parseJson**(`json`: [JsonNode](../interfaces/_node_.jsonnode.md)): *[Node](../classes/_node_.node.md)‹›*

*Defined in [src/Node.ts:135](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`json` | [JsonNode](../interfaces/_node_.jsonnode.md) |

**Returns:** *[Node](../classes/_node_.node.md)‹›*

___

###  parseJsonMap

▸ **parseJsonMap**(`json?`: [KeyValueMap](_node_.md#keyvaluemap)): *[KeyValueMap](_node_.md#keyvaluemap) | undefined*

*Defined in [src/Node.ts:167](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`json?` | [KeyValueMap](_node_.md#keyvaluemap) |

**Returns:** *[KeyValueMap](_node_.md#keyvaluemap) | undefined*

___

###  testNode

▸ **testNode**(`pattern`: [FinderPattern](_node_.md#finderpattern), `node`: [Node](../classes/_node_.node.md)): *boolean*

*Defined in [src/Node.ts:87](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | [FinderPattern](_node_.md#finderpattern) |
`node` | [Node](../classes/_node_.node.md) |

**Returns:** *boolean*

___

###  toJsonMap

▸ **toJsonMap**(`map?`: [KeyValueMap](_node_.md#keyvaluemap), `options`: [JsonOptions](../interfaces/_node_.jsonoptions.md)): *[KeyValueMap](_node_.md#keyvaluemap) | undefined*

*Defined in [src/Node.ts:155](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L155)*

Map metadata & attributes to JSON

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`map?` | [KeyValueMap](_node_.md#keyvaluemap) | - |   |
`options` | [JsonOptions](../interfaces/_node_.jsonoptions.md) | {} | - |

**Returns:** *[KeyValueMap](_node_.md#keyvaluemap) | undefined*

## Object literals

### `Const` TreeRules

### ▪ **TreeRules**: *object*

*Defined in [src/Node.ts:56](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L56)*

###  [Descriptor.BLOCK]

• **[Descriptor.BLOCK]**: *[PARAGRAPH](../enums/_node_.descriptor.md#paragraph) | [BLOCK](../enums/_node_.descriptor.md#block)[]* = [Descriptor.PARAGRAPH, Descriptor.BLOCK]

*Defined in [src/Node.ts:59](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L59)*

###  [Descriptor.ENTITY]

• **[Descriptor.ENTITY]**: *[TEXT](../enums/_node_.descriptor.md#text)[]* = [Descriptor.TEXT]

*Defined in [src/Node.ts:61](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L61)*

###  [Descriptor.FRAGMENT]

• **[Descriptor.FRAGMENT]**: *[ANY](../enums/_node_.descriptor.md#any)[]* = [Descriptor.ANY]

*Defined in [src/Node.ts:63](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L63)*

###  [Descriptor.INLINE]

• **[Descriptor.INLINE]**: *[INLINE](../enums/_node_.descriptor.md#inline) | [ENTITY](../enums/_node_.descriptor.md#entity) | [TEXT](../enums/_node_.descriptor.md#text)[]* = [Descriptor.INLINE, Descriptor.ENTITY, Descriptor.TEXT]

*Defined in [src/Node.ts:60](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L60)*

###  [Descriptor.PARAGRAPH]

• **[Descriptor.PARAGRAPH]**: *[INLINE](../enums/_node_.descriptor.md#inline) | [ENTITY](../enums/_node_.descriptor.md#entity) | [TEXT](../enums/_node_.descriptor.md#text)[]* = [Descriptor.INLINE, Descriptor.ENTITY, Descriptor.TEXT]

*Defined in [src/Node.ts:58](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L58)*

###  [Descriptor.ROOT]

• **[Descriptor.ROOT]**: *[PARAGRAPH](../enums/_node_.descriptor.md#paragraph) | [BLOCK](../enums/_node_.descriptor.md#block)[]* = [Descriptor.PARAGRAPH, Descriptor.BLOCK]

*Defined in [src/Node.ts:57](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L57)*

###  [Descriptor.TEXT]

• **[Descriptor.TEXT]**: *never[]* = []

*Defined in [src/Node.ts:62](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/Node.ts#L62)*
