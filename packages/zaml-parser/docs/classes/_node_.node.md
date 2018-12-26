[@zaml/parser](../README.md) > ["Node"](../modules/_node_.md) > [Node](../classes/_node_.node.md)

# Class: Node

AST node class
*__class__*: 

## Hierarchy

**Node**

## Index

### Constructors

* [constructor](_node_.node.md#constructor)

### Properties

* [_source](_node_.node.md#_source)
* [attributes](_node_.node.md#attributes)
* [children](_node_.node.md#children)
* [content](_node_.node.md#content)
* [end](_node_.node.md#end)
* [id](_node_.node.md#id)
* [labels](_node_.node.md#labels)
* [metadata](_node_.node.md#metadata)
* [name](_node_.node.md#name)
* [parent](_node_.node.md#parent)
* [start](_node_.node.md#start)
* [states](_node_.node.md#states)
* [text](_node_.node.md#text)
* [textEnd](_node_.node.md#textend)
* [textStart](_node_.node.md#textstart)
* [type](_node_.node.md#type)
* [Types](_node_.node.md#types)

### Accessors

* [childIndex](_node_.node.md#childindex)
* [childNodes](_node_.node.md#childnodes)
* [descriptor](_node_.node.md#descriptor)
* [firstChild](_node_.node.md#firstchild)
* [innerText](_node_.node.md#innertext)
* [isBlock](_node_.node.md#isblock)
* [isBlockTag](_node_.node.md#isblocktag)
* [isEntity](_node_.node.md#isentity)
* [isFirstChild](_node_.node.md#isfirstchild)
* [isInlineBlock](_node_.node.md#isinlineblock)
* [isLastChild](_node_.node.md#islastchild)
* [isOnlyChild](_node_.node.md#isonlychild)
* [isPlainText](_node_.node.md#isplaintext)
* [isRoot](_node_.node.md#isroot)
* [isSimpleTag](_node_.node.md#issimpletag)
* [isTag](_node_.node.md#istag)
* [isText](_node_.node.md#istext)
* [isWrappingTag](_node_.node.md#iswrappingtag)
* [lastChild](_node_.node.md#lastchild)
* [nextSibling](_node_.node.md#nextsibling)
* [parentNode](_node_.node.md#parentnode)
* [path](_node_.node.md#path)
* [previousSibling](_node_.node.md#previoussibling)
* [siblings](_node_.node.md#siblings)
* [source](_node_.node.md#source)

### Methods

* [addLabel](_node_.node.md#addlabel)
* [appendChild](_node_.node.md#appendchild)
* [appendText](_node_.node.md#appendtext)
* [clearAttributes](_node_.node.md#clearattributes)
* [clearLabels](_node_.node.md#clearlabels)
* [clearMetadata](_node_.node.md#clearmetadata)
* [contains](_node_.node.md#contains)
* [createChild](_node_.node.md#createchild)
* [createEntities](_node_.node.md#createentities)
* [createEntitiesFromText](_node_.node.md#createentitiesfromtext)
* [extractEntities](_node_.node.md#extractentities)
* [extractNodes](_node_.node.md#extractnodes)
* [find](_node_.node.md#find)
* [findBy](_node_.node.md#findby)
* [findOne](_node_.node.md#findone)
* [findOneBy](_node_.node.md#findoneby)
* [findTextByRange](_node_.node.md#findtextbyrange)
* [flatten](_node_.node.md#flatten)
* [getAttribute](_node_.node.md#getattribute)
* [getMetadata](_node_.node.md#getmetadata)
* [getNodeById](_node_.node.md#getnodebyid)
* [getRootNode](_node_.node.md#getrootnode)
* [hasAttribute](_node_.node.md#hasattribute)
* [hasChild](_node_.node.md#haschild)
* [hasLabel](_node_.node.md#haslabel)
* [hasMetadata](_node_.node.md#hasmetadata)
* [insertAfter](_node_.node.md#insertafter)
* [insertAt](_node_.node.md#insertat)
* [insertBefore](_node_.node.md#insertbefore)
* [is](_node_.node.md#is)
* [isOnlyDescendantOf](_node_.node.md#isonlydescendantof)
* [isRightAlignedDescendantOf](_node_.node.md#isrightaligneddescendantof)
* [isSidedDescendantOf](_node_.node.md#issideddescendantof)
* [mergeText](_node_.node.md#mergetext)
* [normalize](_node_.node.md#normalize)
* [prependChild](_node_.node.md#prependchild)
* [prependText](_node_.node.md#prependtext)
* [querySelector](_node_.node.md#queryselector)
* [querySelectorAll](_node_.node.md#queryselectorall)
* [removeAttribute](_node_.node.md#removeattribute)
* [removeChild](_node_.node.md#removechild)
* [removeChildAt](_node_.node.md#removechildat)
* [removeEntity](_node_.node.md#removeentity)
* [removeLabel](_node_.node.md#removelabel)
* [removeMetadata](_node_.node.md#removemetadata)
* [replaceChild](_node_.node.md#replacechild)
* [replaceWith](_node_.node.md#replacewith)
* [setAttribute](_node_.node.md#setattribute)
* [setAttributes](_node_.node.md#setattributes)
* [setMetadata](_node_.node.md#setmetadata)
* [toJSON](_node_.node.md#tojson)
* [toSource](_node_.node.md#tosource)
* [toString](_node_.node.md#tostring)
* [create](_node_.node.md#create)
* [createBlock](_node_.node.md#createblock)
* [createBlockByRange](_node_.node.md#createblockbyrange)
* [createFragment](_node_.node.md#createfragment)
* [createInlineBlock](_node_.node.md#createinlineblock)
* [createText](_node_.node.md#createtext)
* [findCommonAncestor](_node_.node.md#findcommonancestor)
* [fromJSON](_node_.node.md#fromjson)
* [fromSource](_node_.node.md#fromsource)
* [validChild](_node_.node.md#validchild)
* [validNode](_node_.node.md#validnode)
* [validParent](_node_.node.md#validparent)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Node**(type: *[NodeType](../enums/_node_.nodetype.md)*, name?: * `undefined` &#124; `string`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:423](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L423)*

*__constructor__*: 

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| type | [NodeType](../enums/_node_.nodetype.md) | - |  \- |
| `Optional` name |  `undefined` &#124; `string`| - |
| `Default value` props | [NodeProps](../interfaces/_node_.nodeprops.md) |  {} |

**Returns:** [Node](_node_.node.md)

___

## Properties

<a id="_source"></a>

### `<Private>``<Optional>` _source

**● _source**: * `undefined` &#124; `string`
*

*Defined in [Node.ts:408](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L408)*

___
<a id="attributes"></a>

###  attributes

**● attributes**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:417](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L417)*

___
<a id="children"></a>

###  children

**● children**: *[Node](_node_.node.md)[]*

*Defined in [Node.ts:423](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L423)*

___
<a id="content"></a>

### `<Optional>` content

**● content**: * `undefined` &#124; `string`
*

*Defined in [Node.ts:421](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L421)*

___
<a id="end"></a>

###  end

**● end**: *`number`* =  -1

*Defined in [Node.ts:413](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L413)*

___
<a id="id"></a>

###  id

**● id**: *`string`* = ""

*Defined in [Node.ts:409](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L409)*

___
<a id="labels"></a>

###  labels

**● labels**: *`string`[]*

*Defined in [Node.ts:419](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L419)*

___
<a id="metadata"></a>

###  metadata

**● metadata**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:418](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L418)*

___
<a id="name"></a>

### `<Optional>` name

**● name**: * `undefined` &#124; `string`
*

*Defined in [Node.ts:411](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L411)*

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](_node_.node.md)*

*Defined in [Node.ts:420](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L420)*

___
<a id="start"></a>

###  start

**● start**: *`number`* =  -1

*Defined in [Node.ts:412](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L412)*

___
<a id="states"></a>

###  states

**● states**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:416](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L416)*

___
<a id="text"></a>

### `<Optional>` text

**● text**: * `undefined` &#124; `string`
* = ""

*Defined in [Node.ts:422](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L422)*

___
<a id="textend"></a>

###  textEnd

**● textEnd**: *`number`* =  -1

*Defined in [Node.ts:415](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L415)*

___
<a id="textstart"></a>

###  textStart

**● textStart**: *`number`* =  -1

*Defined in [Node.ts:414](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L414)*

___
<a id="type"></a>

###  type

**● type**: *[NodeType](../enums/_node_.nodetype.md)*

*Defined in [Node.ts:410](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L410)*

___
<a id="types"></a>

### `<Static>` Types

**● Types**: *[NodeType](../enums/_node_.nodetype.md)* =  NodeType

*Defined in [Node.ts:211](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L211)*

___

## Accessors

<a id="childindex"></a>

###  childIndex

getchildIndex(): `number`

*Defined in [Node.ts:731](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L731)*

Get index of parent children

**Returns:** `number`

___
<a id="childnodes"></a>

###  childNodes

getchildNodes(): [Node](_node_.node.md)[]

*Defined in [Node.ts:663](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L663)*

Get child nodes, alias for node.children

**Returns:** [Node](_node_.node.md)[]

___
<a id="descriptor"></a>

###  descriptor

getdescriptor(): `string`

*Defined in [Node.ts:569](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L569)*

Get a short descriptor to identify node's type and basic information

**Returns:** `string`

___
<a id="firstchild"></a>

###  firstChild

getfirstChild():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:824](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L824)*

Get the first child of current node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="innertext"></a>

###  innerText

getinnerText():  `undefined` &#124; `string`

*Defined in [Node.ts:684](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L684)*

Get node inner text

**Returns:**  `undefined` &#124; `string`

___
<a id="isblock"></a>

###  isBlock

getisBlock(): `boolean`

*Defined in [Node.ts:641](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L641)*

Property indicates if the node is a block (wrapping other nodes)

**Returns:** `boolean`

___
<a id="isblocktag"></a>

###  isBlockTag

getisBlockTag(): `boolean`

*Defined in [Node.ts:627](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L627)*

Check if the node is block tag

**Returns:** `boolean`

___
<a id="isentity"></a>

###  isEntity

getisEntity(): `boolean`

*Defined in [Node.ts:599](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L599)*

Check if the node is entity

**Returns:** `boolean`

___
<a id="isfirstchild"></a>

###  isFirstChild

getisFirstChild(): `boolean`

*Defined in [Node.ts:698](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L698)*

Check if the node is the first child of its parent

**Returns:** `boolean`

___
<a id="isinlineblock"></a>

###  isInlineBlock

getisInlineBlock(): `boolean`

*Defined in [Node.ts:649](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L649)*

If node is inline block

**Returns:** `boolean`

___
<a id="islastchild"></a>

###  isLastChild

getisLastChild(): `boolean`

*Defined in [Node.ts:709](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L709)*

Check if the node is the last child of its parent

**Returns:** `boolean`

___
<a id="isonlychild"></a>

###  isOnlyChild

getisOnlyChild(): `boolean`

*Defined in [Node.ts:847](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L847)*

Check if this node is the only child of its parent

**Returns:** `boolean`

___
<a id="isplaintext"></a>

###  isPlainText

getisPlainText(): `boolean`

*Defined in [Node.ts:613](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L613)*

Check if the node is text and not wrapping by entity

**Returns:** `boolean`

___
<a id="isroot"></a>

###  isRoot

getisRoot(): `boolean`

*Defined in [Node.ts:585](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L585)*

Check if the node is root

**Returns:** `boolean`

___
<a id="issimpletag"></a>

###  isSimpleTag

getisSimpleTag(): `boolean`

*Defined in [Node.ts:634](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L634)*

Check if the node is simple block or inline block

**Returns:** `boolean`

___
<a id="istag"></a>

###  isTag

getisTag(): `boolean`

*Defined in [Node.ts:592](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L592)*

Check if the node is tag

**Returns:** `boolean`

___
<a id="istext"></a>

###  isText

getisText(): `boolean`

*Defined in [Node.ts:606](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L606)*

Check if the node is text

**Returns:** `boolean`

___
<a id="iswrappingtag"></a>

###  isWrappingTag

getisWrappingTag(): `boolean`

*Defined in [Node.ts:620](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L620)*

Check if the node is wrapping tag

**Returns:** `boolean`

___
<a id="lastchild"></a>

###  lastChild

getlastChild():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:832](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L832)*

Get the last child of current node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="nextsibling"></a>

###  nextSibling

getnextSibling():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:739](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L739)*

Next sibling node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="parentnode"></a>

###  parentNode

getparentNode():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:656](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L656)*

Get parent node, alias for node.parent

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="path"></a>

###  path

getpath(): [Node](_node_.node.md)[]

*Defined in [Node.ts:811](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L811)*

Get a list of ancestors

**Returns:** [Node](_node_.node.md)[]

___
<a id="previoussibling"></a>

###  previousSibling

getpreviousSibling():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:748](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L748)*

Previous sibling node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="siblings"></a>

###  siblings

getsiblings(): [Node](_node_.node.md)[]

*Defined in [Node.ts:720](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L720)*

Siblings from same parent

**Returns:** [Node](_node_.node.md)[]

___
<a id="source"></a>

###  source

getsource(): `string`

*Defined in [Node.ts:670](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L670)*

Get source code of the node

**Returns:** `string`

___

## Methods

<a id="addlabel"></a>

###  addLabel

▸ **addLabel**(label: *`string`*): `void`

*Defined in [Node.ts:1168](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1168)*

Add label to node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| label | `string` |   |

**Returns:** `void`

___
<a id="appendchild"></a>

###  appendChild

▸ **appendChild**(node: *[Node](_node_.node.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:932](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L932)*

Append a node to children list

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |   |

**Returns:** [Node](_node_.node.md)

___
<a id="appendtext"></a>

###  appendText

▸ **appendText**(text: *`string`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*):  `undefined` &#124; `this`

*Defined in [Node.ts:941](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L941)*

Append text node child

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  \- |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:**  `undefined` &#124; `this`

___
<a id="clearattributes"></a>

###  clearAttributes

▸ **clearAttributes**(): `void`

*Defined in [Node.ts:1116](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1116)*

Remove all attributes

**Returns:** `void`

___
<a id="clearlabels"></a>

###  clearLabels

▸ **clearLabels**(): `void`

*Defined in [Node.ts:1196](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1196)*

Remove all labels

**Returns:** `void`

___
<a id="clearmetadata"></a>

###  clearMetadata

▸ **clearMetadata**(): `void`

*Defined in [Node.ts:1152](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1152)*

Remove all metadata

**Returns:** `void`

___
<a id="contains"></a>

###  contains

▸ **contains**(node: *[Node](_node_.node.md)*): `boolean`

*Defined in [Node.ts:794](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L794)*

whether a node is a descendant of a given node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |   |

**Returns:** `boolean`

___
<a id="createchild"></a>

###  createChild

▸ **createChild**(type: *[NodeType](../enums/_node_.nodetype.md)*, name?: * `undefined` &#124; `string`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:914](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L914)*

Create a child node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [NodeType](../enums/_node_.nodetype.md) |  \- |
| `Optional` name |  `undefined` &#124; `string`|
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createentities"></a>

###  createEntities

▸ **createEntities**(items: *[EntityItem](../interfaces/_node_.entityitem.md)[]*): [Node](_node_.node.md)[]

*Defined in [Node.ts:1387](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1387)*

Process text node in current node and parse entities

**Parameters:**

| Name | Type |
| ------ | ------ |
| items | [EntityItem](../interfaces/_node_.entityitem.md)[] |

**Returns:** [Node](_node_.node.md)[]

___
<a id="createentitiesfromtext"></a>

###  createEntitiesFromText

▸ **createEntitiesFromText**(entities: *[EntityItem](../interfaces/_node_.entityitem.md)[]*): `void`

*Defined in [Node.ts:1424](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1424)*

Create entity nodes based on text source position

**Parameters:**

| Name | Type |
| ------ | ------ |
| entities | [EntityItem](../interfaces/_node_.entityitem.md)[] |

**Returns:** `void`

___
<a id="extractentities"></a>

###  extractEntities

▸ **extractEntities**(extractor: *[Extractor](../modules/_node_.md#extractor)*): `Promise`<`void`>

*Defined in [Node.ts:1450](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1450)*

Extract entities from text node

**Parameters:**

| Name | Type |
| ------ | ------ |
| extractor | [Extractor](../modules/_node_.md#extractor) |

**Returns:** `Promise`<`void`>

___
<a id="extractnodes"></a>

###  extractNodes

▸ **extractNodes**(startIndex: *`number`*, endIndex: *`number`*): [Node](_node_.node.md)

*Defined in [Node.ts:1354](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1354)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| startIndex | `number` |
| endIndex | `number` |

**Returns:** [Node](_node_.node.md)

___
<a id="find"></a>

###  find

▸ **find**(callback: *[FinderCallback](../modules/_node_.md#findercallback)*): [Node](_node_.node.md)[]

*Defined in [Node.ts:1301](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1301)*

Find matched children recursively by callback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callback | [FinderCallback](../modules/_node_.md#findercallback) |   |

**Returns:** [Node](_node_.node.md)[]

___
<a id="findby"></a>

###  findBy

▸ **findBy**(selector?: *[NodeSelector](../interfaces/_node_.nodeselector.md)*, one?: *`boolean`*):  [Node](_node_.node.md) &#124; [Node](_node_.node.md)[] &#124; `undefined`

*Defined in [Node.ts:1224](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1224)*

Find matched descendants recursively

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` selector | [NodeSelector](../interfaces/_node_.nodeselector.md) |  {} |  Node selector object |
| `Default value` one | `boolean` | false |

**Returns:**  [Node](_node_.node.md) &#124; [Node](_node_.node.md)[] &#124; `undefined`

___
<a id="findone"></a>

###  findOne

▸ **findOne**(callback: *[FinderCallback](../modules/_node_.md#findercallback)*):  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:1309](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1309)*

Find matched children recursively and return the first one

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callback | [FinderCallback](../modules/_node_.md#findercallback) |   |

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="findoneby"></a>

###  findOneBy

▸ **findOneBy**(selector?: *[NodeSelector](../interfaces/_node_.nodeselector.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:1268](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1268)*

Find nodes by selector recursively and return the first one

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` selector | [NodeSelector](../interfaces/_node_.nodeselector.md) |  {} |   |

**Returns:** [Node](_node_.node.md)

___
<a id="findtextbyrange"></a>

###  findTextByRange

▸ **findTextByRange**(start: *`number`*, end: *`number`*):  [Node](_node_.node.md) &#124; `undefined`

*Defined in [Node.ts:1277](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1277)*

Find matched text node by text source range

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  \- |
| end | `number` |   |

**Returns:**  [Node](_node_.node.md) &#124; `undefined`

___
<a id="flatten"></a>

###  flatten

▸ **flatten**():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:1372](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1372)*

Remove a element and move its children to its parent

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="getattribute"></a>

###  getAttribute

▸ **getAttribute**(key: *`string`*): `any`

*Defined in [Node.ts:1093](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1093)*

Get attribute value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |   |

**Returns:** `any`

___
<a id="getmetadata"></a>

###  getMetadata

▸ **getMetadata**(key: *`string`*): `any`

*Defined in [Node.ts:1137](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1137)*

Get metadata value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |   |

**Returns:** `any`

___
<a id="getnodebyid"></a>

###  getNodeById

▸ **getNodeById**(id: *`string`*):  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:1215](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1215)*

Get node by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |   |

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="getrootnode"></a>

###  getRootNode

▸ **getRootNode**():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:757](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L757)*

Property indicates if the root is root (which has no children)

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="hasattribute"></a>

###  hasAttribute

▸ **hasAttribute**(key: *`string`*): `boolean`

*Defined in [Node.ts:1101](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1101)*

Check if a specified attribute key exists

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |   |

**Returns:** `boolean`

___
<a id="haschild"></a>

###  hasChild

▸ **hasChild**(): `boolean`

*Defined in [Node.ts:840](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L840)*

Check if this node has any children

**Returns:** `boolean`

___
<a id="haslabel"></a>

###  hasLabel

▸ **hasLabel**(label: *`string`*): `boolean`

*Defined in [Node.ts:1181](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1181)*

Check if the node has specified label

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| label | `string` |   |

**Returns:** `boolean`

___
<a id="hasmetadata"></a>

###  hasMetadata

▸ **hasMetadata**(key: *`string`*): `boolean`

*Defined in [Node.ts:1160](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1160)*

Check if a specified metadata key exists

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |   |

**Returns:** `boolean`

___
<a id="insertafter"></a>

###  insertAfter

▸ **insertAfter**(node: *[Node](_node_.node.md)*, ref: *[Node](_node_.node.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:1033](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1033)*

Insert a node after another
*__see__*: [https://developer.mozilla.org/en-US/docs/Web/API/Node/insertAfter](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertAfter)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |  Node to be inserted |
| ref | [Node](_node_.node.md) |  A child node to be referenced |

**Returns:** [Node](_node_.node.md)

___
<a id="insertat"></a>

###  insertAt

▸ **insertAt**(node: *[Node](_node_.node.md)*, index: *`number`*): [Node](_node_.node.md)

*Defined in [Node.ts:997](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L997)*

Insert a node at specified position

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |  \- |
| index | `number` |   |

**Returns:** [Node](_node_.node.md)

___
<a id="insertbefore"></a>

###  insertBefore

▸ **insertBefore**(node: *[Node](_node_.node.md)*, ref: *[Node](_node_.node.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:1020](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1020)*

Insert a node before another
*__see__*: [https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |  Node to be inserted |
| ref | [Node](_node_.node.md) |  A child node to be referenced |

**Returns:** [Node](_node_.node.md)

___
<a id="is"></a>

###  is

▸ **is**(expression: *`string`*): `boolean`

*Defined in [Node.ts:775](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L775)*

Check node match the expression
*__example__*: `BLOCK`: tag `@LOC`: entity

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expression | `string` |   |

**Returns:** `boolean`

___
<a id="isonlydescendantof"></a>

###  isOnlyDescendantOf

▸ **isOnlyDescendantOf**(ancestor: *[Node](_node_.node.md)*): `boolean`

*Defined in [Node.ts:858](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L858)*

Check if the node is only descendant of another node;

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ancestor | [Node](_node_.node.md) |   |

**Returns:** `boolean`

___
<a id="isrightaligneddescendantof"></a>

###  isRightAlignedDescendantOf

▸ **isRightAlignedDescendantOf**(ancestor: *[Node](_node_.node.md)*): `boolean`

*Defined in [Node.ts:894](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L894)*

Check if the node is only descendant of another node;

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ancestor | [Node](_node_.node.md) |   |

**Returns:** `boolean`

___
<a id="issideddescendantof"></a>

###  isSidedDescendantOf

▸ **isSidedDescendantOf**(ancestor: *[Node](_node_.node.md)*, side: * "start" &#124; "end"*): `boolean`

*Defined in [Node.ts:876](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L876)*

Check if the node is only descendant of another node;

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ancestor | [Node](_node_.node.md) |   |
| side |  "start" &#124; "end"|

**Returns:** `boolean`

___
<a id="mergetext"></a>

###  mergeText

▸ **mergeText**(): `void`

*Defined in [Node.ts:1332](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1332)*

Merge neighbor text nodes

**Returns:** `void`

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(): `void`

*Defined in [Node.ts:1203](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1203)*

Rebuild text and source position, in case modification has been applied to node

**Returns:** `void`

___
<a id="prependchild"></a>

###  prependChild

▸ **prependChild**(node: *[Node](_node_.node.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:924](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L924)*

Insert a node at the beginning of the children

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |   |

**Returns:** [Node](_node_.node.md)

___
<a id="prependtext"></a>

###  prependText

▸ **prependText**(text: *`string`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*):  `undefined` &#124; `this`

*Defined in [Node.ts:961](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L961)*

Add text node child at the beginning

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  \- |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:**  `undefined` &#124; `this`

___
<a id="queryselector"></a>

###  querySelector

▸ **querySelector**(selector: *`string`*):  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:1325](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1325)*

Find nodes by selector and return the first one, compared by is()

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| selector | `string` |   |

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="queryselectorall"></a>

###  querySelectorAll

▸ **querySelectorAll**(selector: *`string`*): [Node](_node_.node.md)[]

*Defined in [Node.ts:1317](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1317)*

Find all nodes by selector, compared by is()

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| selector | `string` |   |

**Returns:** [Node](_node_.node.md)[]

___
<a id="removeattribute"></a>

###  removeAttribute

▸ **removeAttribute**(key: *`string`*): `void`

*Defined in [Node.ts:1109](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1109)*

Remove an attribute

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |   |

**Returns:** `void`

___
<a id="removechild"></a>

###  removeChild

▸ **removeChild**(child: *[Node](_node_.node.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:975](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L975)*

Remove one child

**Parameters:**

| Name | Type |
| ------ | ------ |
| child | [Node](_node_.node.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="removechildat"></a>

###  removeChildAt

▸ **removeChildAt**(index: *`number`*): [Node](_node_.node.md)

*Defined in [Node.ts:985](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L985)*

Remove one child by index

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| index | `number` |   |

**Returns:** [Node](_node_.node.md)

___
<a id="removeentity"></a>

###  removeEntity

▸ **removeEntity**(): [Node](_node_.node.md)

*Defined in [Node.ts:1475](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1475)*

Remove wrapping entity and put text back

**Returns:** [Node](_node_.node.md)

___
<a id="removelabel"></a>

###  removeLabel

▸ **removeLabel**(label: *`string`*): `void`

*Defined in [Node.ts:1189](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1189)*

Remove label

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| label | `string` |   |

**Returns:** `void`

___
<a id="removemetadata"></a>

###  removeMetadata

▸ **removeMetadata**(key: *`string`*): `void`

*Defined in [Node.ts:1145](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1145)*

Remove a metadata

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |   |

**Returns:** `void`

___
<a id="replacechild"></a>

###  replaceChild

▸ **replaceChild**(newChild: *[Node](_node_.node.md)*, oldChild: *[Node](_node_.node.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:1046](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1046)*

Replace a child with another node, assuming current node is a parent

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| newChild | [Node](_node_.node.md) |  \- |
| oldChild | [Node](_node_.node.md) |  \- |

**Returns:** [Node](_node_.node.md)
The replaced child

___
<a id="replacewith"></a>

###  replaceWith

▸ **replaceWith**(node: *[Node](_node_.node.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:1063](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1063)*

Replace current child node with another node, assuming current node is child

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |  Node to be replaced with |

**Returns:** [Node](_node_.node.md)

___
<a id="setattribute"></a>

###  setAttribute

▸ **setAttribute**(key: *`string`*, value: *`any`*): `void`

*Defined in [Node.ts:1077](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1077)*

Set single attribute value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  Attribute key |
| value | `any` |  Attribute value |

**Returns:** `void`

___
<a id="setattributes"></a>

###  setAttributes

▸ **setAttributes**(data: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*): `void`

*Defined in [Node.ts:1085](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1085)*

Set multiple attributes

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | [KeyValueMap](../modules/_node_.md#keyvaluemap) |  Key-value pair |

**Returns:** `void`

___
<a id="setmetadata"></a>

###  setMetadata

▸ **setMetadata**(key: *`string`*, value: *`any`*): `void`

*Defined in [Node.ts:1125](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1125)*

Set single metadata value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  Metadata key |
| value | `any` |  Metadata value |

**Returns:** `void`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(options?: *[JsonOptions](../interfaces/_node_.jsonoptions.md)*): [JsonNode](../interfaces/_node_.jsonnode.md)

*Defined in [Node.ts:1522](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1522)*

Convert node to JSON serializable object

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` options | [JsonOptions](../interfaces/_node_.jsonoptions.md) |  {} |   |

**Returns:** [JsonNode](../interfaces/_node_.jsonnode.md)

___
<a id="tosource"></a>

###  toSource

▸ **toSource**(options?: *[StringifyOptions](../interfaces/_util_.stringifyoptions.md)*): `string`

*Defined in [Node.ts:1514](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1514)*

Build source code of the node

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` options | [StringifyOptions](../interfaces/_util_.stringifyoptions.md) |  {} |

**Returns:** `string`

___
<a id="tostring"></a>

###  toString

▸ **toString**(options?: *[StringifyOptions](../interfaces/_util_.stringifyoptions.md)*): `string`

*Defined in [Node.ts:1506](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L1506)*

Build plain text of the node (stripping tags & entities)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [StringifyOptions](../interfaces/_util_.stringifyoptions.md) |

**Returns:** `string`

___
<a id="create"></a>

### `<Static>` create

▸ **create**(type: *[NodeType](../enums/_node_.nodetype.md)*, name?: * `undefined` &#124; `string`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:219](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L219)*

Create node, shortcut for constructor

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [NodeType](../enums/_node_.nodetype.md) |  \- |
| `Optional` name |  `undefined` &#124; `string`|
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createblock"></a>

### `<Static>` createBlock

▸ **createBlock**(props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:235](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L235)*

Create block tag

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createblockbyrange"></a>

### `<Static>` createBlockByRange

▸ **createBlockByRange**(range: *[NodeRange](../interfaces/_node_.noderange.md)*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*):  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:327](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L327)*

Create a block and move nodes or text within the range into it

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| range | [NodeRange](../interfaces/_node_.noderange.md) |  \- |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |   |

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="createfragment"></a>

### `<Static>` createFragment

▸ **createFragment**(): [Node](_node_.node.md)

*Defined in [Node.ts:268](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L268)*

Creating fragment node

**Returns:** [Node](_node_.node.md)

___
<a id="createinlineblock"></a>

### `<Static>` createInlineBlock

▸ **createInlineBlock**(props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:243](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L243)*

Create inline block tag

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createtext"></a>

### `<Static>` createText

▸ **createText**(content: *`string`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:227](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L227)*

Create text tag

**Parameters:**

| Name | Type |
| ------ | ------ |
| content | `string` |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="findcommonancestor"></a>

### `<Static>` findCommonAncestor

▸ **findCommonAncestor**(n1: *[Node](_node_.node.md)*, n2: *[Node](_node_.node.md)*):  `object` &#124; `undefined`

*Defined in [Node.ts:302](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L302)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n1 | [Node](_node_.node.md) |
| n2 | [Node](_node_.node.md) |

**Returns:**  `object` &#124; `undefined`

___
<a id="fromjson"></a>

### `<Static>` fromJSON

▸ **fromJSON**(json: *[JsonNode](../interfaces/_node_.jsonnode.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:260](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L260)*

Create node from json serializable data

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| json | [JsonNode](../interfaces/_node_.jsonnode.md) |  \- |

**Returns:** [Node](_node_.node.md)

___
<a id="fromsource"></a>

### `<Static>` fromSource

▸ **fromSource**(source: *`string`*): [Node](_node_.node.md)

*Defined in [Node.ts:251](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L251)*

Create node instance from ZAML source

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| source | `string` |   |

**Returns:** [Node](_node_.node.md)

___
<a id="validchild"></a>

### `<Static>` validChild

▸ **validChild**(node: *`any`*): `void`

*Defined in [Node.ts:296](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L296)*

Check if a node could be parent

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | `any` |   |

**Returns:** `void`

___
<a id="validnode"></a>

### `<Static>` validNode

▸ **validNode**(node: *`any`*): `void`

*Defined in [Node.ts:276](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L276)*

Check if a node is valid

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | `any` |   |

**Returns:** `void`

___
<a id="validparent"></a>

### `<Static>` validParent

▸ **validParent**(node: *`any`*): `void`

*Defined in [Node.ts:286](https://github.com/nexushubs/zaml-lang/blob/91fabd9/packages/zaml-parser/src/Node.ts#L286)*

Check if a node could be parent

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | `any` |   |

**Returns:** `void`

___

