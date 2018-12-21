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
* [isFirstChild](_node_.node.md#isfirstchild)
* [isInlineBlock](_node_.node.md#isinlineblock)
* [isLastChild](_node_.node.md#islastchild)
* [isRoot](_node_.node.md#isroot)
* [isSimpleTag](_node_.node.md#issimpletag)
* [isTag](_node_.node.md#istag)
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
* [createBlockByTextRange](_node_.node.md#createblockbytextrange)
* [createChild](_node_.node.md#createchild)
* [createEntities](_node_.node.md#createentities)
* [createEntitiesFromText](_node_.node.md#createentitiesfromtext)
* [extractEntities](_node_.node.md#extractentities)
* [find](_node_.node.md#find)
* [findBy](_node_.node.md#findby)
* [findOne](_node_.node.md#findone)
* [findOneBy](_node_.node.md#findoneby)
* [findTextByRange](_node_.node.md#findtextbyrange)
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
* [normalize](_node_.node.md#normalize)
* [querySelector](_node_.node.md#queryselector)
* [querySelectorAll](_node_.node.md#queryselectorall)
* [removeAttribute](_node_.node.md#removeattribute)
* [removeChild](_node_.node.md#removechild)
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
* [createBlockByRange](_node_.node.md#createblockbyrange)
* [createFragment](_node_.node.md#createfragment)
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

⊕ **new Node**(type: *[NodeType](../enums/_node_.nodetype.md)*, name?: * `undefined` &#124; `string`*, options?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:340](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L340)*

*__constructor__*: 

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| type | [NodeType](../enums/_node_.nodetype.md) | - |  \- |
| `Optional` name |  `undefined` &#124; `string`| - |
| `Default value` options | [NodeProps](../interfaces/_node_.nodeprops.md) |  {} |

**Returns:** [Node](_node_.node.md)

___

## Properties

<a id="_source"></a>

### `<Private>``<Optional>` _source

**● _source**: * `undefined` &#124; `string`
*

*Defined in [Node.ts:325](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L325)*

___
<a id="attributes"></a>

###  attributes

**● attributes**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:334](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L334)*

___
<a id="children"></a>

###  children

**● children**: *[Node](_node_.node.md)[]*

*Defined in [Node.ts:340](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L340)*

___
<a id="content"></a>

### `<Optional>` content

**● content**: * `undefined` &#124; `string`
*

*Defined in [Node.ts:338](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L338)*

___
<a id="end"></a>

###  end

**● end**: *`number`* =  -1

*Defined in [Node.ts:330](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L330)*

___
<a id="id"></a>

###  id

**● id**: *`string`* = ""

*Defined in [Node.ts:326](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L326)*

___
<a id="labels"></a>

###  labels

**● labels**: *`string`[]*

*Defined in [Node.ts:336](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L336)*

___
<a id="metadata"></a>

###  metadata

**● metadata**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:335](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L335)*

___
<a id="name"></a>

### `<Optional>` name

**● name**: * `undefined` &#124; `string`
*

*Defined in [Node.ts:328](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L328)*

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](_node_.node.md)*

*Defined in [Node.ts:337](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L337)*

___
<a id="start"></a>

###  start

**● start**: *`number`* =  -1

*Defined in [Node.ts:329](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L329)*

___
<a id="states"></a>

###  states

**● states**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:333](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L333)*

___
<a id="text"></a>

### `<Optional>` text

**● text**: * `undefined` &#124; `string`
* = ""

*Defined in [Node.ts:339](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L339)*

___
<a id="textend"></a>

###  textEnd

**● textEnd**: *`number`* =  -1

*Defined in [Node.ts:332](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L332)*

___
<a id="textstart"></a>

###  textStart

**● textStart**: *`number`* =  -1

*Defined in [Node.ts:331](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L331)*

___
<a id="type"></a>

###  type

**● type**: *[NodeType](../enums/_node_.nodetype.md)*

*Defined in [Node.ts:327](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L327)*

___
<a id="types"></a>

### `<Static>` Types

**● Types**: *[NodeType](../enums/_node_.nodetype.md)* =  NodeType

*Defined in [Node.ts:211](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L211)*

___

## Accessors

<a id="childindex"></a>

###  childIndex

getchildIndex(): `number`

*Defined in [Node.ts:627](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L627)*

Get index of parent children

**Returns:** `number`

___
<a id="childnodes"></a>

###  childNodes

getchildNodes(): [Node](_node_.node.md)[]

*Defined in [Node.ts:552](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L552)*

Get child nodes, alias for node.children

**Returns:** [Node](_node_.node.md)[]

___
<a id="descriptor"></a>

###  descriptor

getdescriptor(): `string`

*Defined in [Node.ts:486](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L486)*

Get a short descriptor to identify node's type and basic information

**Returns:** `string`

___
<a id="firstchild"></a>

###  firstChild

getfirstChild():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:720](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L720)*

Get the first child of current node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="innertext"></a>

###  innerText

getinnerText():  `undefined` &#124; `string`

*Defined in [Node.ts:580](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L580)*

Get node inner text

**Returns:**  `undefined` &#124; `string`

___
<a id="isblock"></a>

###  isBlock

getisBlock(): `boolean`

*Defined in [Node.ts:530](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L530)*

Property indicates if the node is a block (wrapping other nodes)

**Returns:** `boolean`

___
<a id="isblocktag"></a>

###  isBlockTag

getisBlockTag(): `boolean`

*Defined in [Node.ts:516](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L516)*

Check if the node is block tag

**Returns:** `boolean`

___
<a id="isfirstchild"></a>

###  isFirstChild

getisFirstChild(): `boolean`

*Defined in [Node.ts:594](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L594)*

Check if the node is the first child of its parent

**Returns:** `boolean`

___
<a id="isinlineblock"></a>

###  isInlineBlock

getisInlineBlock(): `boolean`

*Defined in [Node.ts:538](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L538)*

If node is inline block

**Returns:** `boolean`

___
<a id="islastchild"></a>

###  isLastChild

getisLastChild(): `boolean`

*Defined in [Node.ts:605](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L605)*

Check if the node is the last child of its parent

**Returns:** `boolean`

___
<a id="isroot"></a>

###  isRoot

getisRoot(): `boolean`

*Defined in [Node.ts:559](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L559)*

If the node is root

**Returns:** `boolean`

___
<a id="issimpletag"></a>

###  isSimpleTag

getisSimpleTag(): `boolean`

*Defined in [Node.ts:523](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L523)*

Check if the node is simple block or inline block

**Returns:** `boolean`

___
<a id="istag"></a>

###  isTag

getisTag(): `boolean`

*Defined in [Node.ts:502](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L502)*

Check if the node is tag

**Returns:** `boolean`

___
<a id="iswrappingtag"></a>

###  isWrappingTag

getisWrappingTag(): `boolean`

*Defined in [Node.ts:509](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L509)*

Check if the node is wrapping tag

**Returns:** `boolean`

___
<a id="lastchild"></a>

###  lastChild

getlastChild():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:728](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L728)*

Get the last child of current node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="nextsibling"></a>

###  nextSibling

getnextSibling():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:635](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L635)*

Next sibling node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="parentnode"></a>

###  parentNode

getparentNode():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:545](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L545)*

Get parent node, alias for node.parent

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="path"></a>

###  path

getpath(): [Node](_node_.node.md)[]

*Defined in [Node.ts:707](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L707)*

Get a list of ancestors

**Returns:** [Node](_node_.node.md)[]

___
<a id="previoussibling"></a>

###  previousSibling

getpreviousSibling():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:644](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L644)*

Previous sibling node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="siblings"></a>

###  siblings

getsiblings(): [Node](_node_.node.md)[]

*Defined in [Node.ts:616](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L616)*

Siblings from same parent

**Returns:** [Node](_node_.node.md)[]

___
<a id="source"></a>

###  source

getsource(): `string`

*Defined in [Node.ts:566](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L566)*

Get source code of the node

**Returns:** `string`

___

## Methods

<a id="addlabel"></a>

###  addLabel

▸ **addLabel**(label: *`string`*): `void`

*Defined in [Node.ts:961](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L961)*

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

*Defined in [Node.ts:756](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L756)*

Append a node to children list

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |   |

**Returns:** [Node](_node_.node.md)

___
<a id="appendtext"></a>

###  appendText

▸ **appendText**(text: *`string`*, options?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:765](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L765)*

Append text node child

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  \- |
| `Optional` options | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="clearattributes"></a>

###  clearAttributes

▸ **clearAttributes**(): `void`

*Defined in [Node.ts:909](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L909)*

Remove all attributes

**Returns:** `void`

___
<a id="clearlabels"></a>

###  clearLabels

▸ **clearLabels**(): `void`

*Defined in [Node.ts:989](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L989)*

Remove all labels

**Returns:** `void`

___
<a id="clearmetadata"></a>

###  clearMetadata

▸ **clearMetadata**(): `void`

*Defined in [Node.ts:945](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L945)*

Remove all metadata

**Returns:** `void`

___
<a id="contains"></a>

###  contains

▸ **contains**(node: *[Node](_node_.node.md)*): `boolean`

*Defined in [Node.ts:690](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L690)*

whether a node is a descendant of a given node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |   |

**Returns:** `boolean`

___
<a id="createblockbytextrange"></a>

###  createBlockByTextRange

▸ **createBlockByTextRange**(start: *`number`*, end: *`number`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:1122](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1122)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| start | `number` |
| end | `number` |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createchild"></a>

###  createChild

▸ **createChild**(type: *[NodeType](../enums/_node_.nodetype.md)*, name?: * `undefined` &#124; `string`*, options?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:746](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L746)*

Create a child node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [NodeType](../enums/_node_.nodetype.md) |  \- |
| `Optional` name |  `undefined` &#124; `string`|
| `Optional` options | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createentities"></a>

###  createEntities

▸ **createEntities**(items: *[EntityItem](../interfaces/_node_.entityitem.md)[]*): [Node](_node_.node.md)[]

*Defined in [Node.ts:1153](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1153)*

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

*Defined in [Node.ts:1190](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1190)*

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

*Defined in [Node.ts:1216](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1216)*

Extract entities from text node

**Parameters:**

| Name | Type |
| ------ | ------ |
| extractor | [Extractor](../modules/_node_.md#extractor) |

**Returns:** `Promise`<`void`>

___
<a id="find"></a>

###  find

▸ **find**(callback: *[FinderCallback](../modules/_node_.md#findercallback)*): [Node](_node_.node.md)[]

*Defined in [Node.ts:1094](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1094)*

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

*Defined in [Node.ts:1017](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1017)*

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

*Defined in [Node.ts:1102](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1102)*

Find matched children recursively and return the first one

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callback | [FinderCallback](../modules/_node_.md#findercallback) |   |

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="findoneby"></a>

###  findOneBy

▸ **findOneBy**(selector?: *[NodeSelector](../interfaces/_node_.nodeselector.md)*):  `undefined` &#124; [Node](_node_.node.md) &#124; [Node](_node_.node.md)[]

*Defined in [Node.ts:1061](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1061)*

Find nodes by selector recursively and return the first one

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` selector | [NodeSelector](../interfaces/_node_.nodeselector.md) |  {} |   |

**Returns:**  `undefined` &#124; [Node](_node_.node.md) &#124; [Node](_node_.node.md)[]

___
<a id="findtextbyrange"></a>

###  findTextByRange

▸ **findTextByRange**(start: *`number`*, end: *`number`*):  [Node](_node_.node.md) &#124; `undefined`

*Defined in [Node.ts:1070](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1070)*

Find matched text node by text source range

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  \- |
| end | `number` |   |

**Returns:**  [Node](_node_.node.md) &#124; `undefined`

___
<a id="getattribute"></a>

###  getAttribute

▸ **getAttribute**(key: *`string`*): `any`

*Defined in [Node.ts:886](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L886)*

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

*Defined in [Node.ts:930](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L930)*

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

*Defined in [Node.ts:1008](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1008)*

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

*Defined in [Node.ts:653](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L653)*

Property indicates if the root is root (which has no children)

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="hasattribute"></a>

###  hasAttribute

▸ **hasAttribute**(key: *`string`*): `boolean`

*Defined in [Node.ts:894](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L894)*

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

*Defined in [Node.ts:736](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L736)*

Check if this node has any children

**Returns:** `boolean`

___
<a id="haslabel"></a>

###  hasLabel

▸ **hasLabel**(label: *`string`*): `boolean`

*Defined in [Node.ts:974](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L974)*

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

*Defined in [Node.ts:953](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L953)*

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

*Defined in [Node.ts:826](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L826)*

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

*Defined in [Node.ts:790](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L790)*

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

*Defined in [Node.ts:813](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L813)*

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

*Defined in [Node.ts:671](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L671)*

Check node match the expression
*__example__*: `BLOCK`: tag `@LOC`: entity

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expression | `string` |   |

**Returns:** `boolean`

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(): `void`

*Defined in [Node.ts:996](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L996)*

Rebuild text and source position, in case modification has been applied to node

**Returns:** `void`

___
<a id="queryselector"></a>

###  querySelector

▸ **querySelector**(selector: *`string`*):  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:1118](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1118)*

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

*Defined in [Node.ts:1110](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1110)*

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

*Defined in [Node.ts:902](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L902)*

Remove an attribute

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |   |

**Returns:** `void`

___
<a id="removechild"></a>

###  removeChild

▸ **removeChild**(node: *[Node](_node_.node.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:779](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L779)*

Remove 1 or more children

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |   |

**Returns:** [Node](_node_.node.md)

___
<a id="removeentity"></a>

###  removeEntity

▸ **removeEntity**(): [Node](_node_.node.md)

*Defined in [Node.ts:1241](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1241)*

Remove wrapping entity and put text back

**Returns:** [Node](_node_.node.md)

___
<a id="removelabel"></a>

###  removeLabel

▸ **removeLabel**(label: *`string`*): `void`

*Defined in [Node.ts:982](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L982)*

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

*Defined in [Node.ts:938](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L938)*

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

*Defined in [Node.ts:839](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L839)*

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

*Defined in [Node.ts:856](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L856)*

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

*Defined in [Node.ts:870](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L870)*

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

*Defined in [Node.ts:878](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L878)*

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

*Defined in [Node.ts:918](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L918)*

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

*Defined in [Node.ts:1283](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1283)*

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

*Defined in [Node.ts:1275](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1275)*

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

*Defined in [Node.ts:1267](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L1267)*

Build plain text of the node (stripping tags & entities)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [StringifyOptions](../interfaces/_util_.stringifyoptions.md) |

**Returns:** `string`

___
<a id="create"></a>

### `<Static>` create

▸ **create**(type: *[NodeType](../enums/_node_.nodetype.md)*, name?: * `undefined` &#124; `string`*, options?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:218](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L218)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [NodeType](../enums/_node_.nodetype.md) |  \- |
| `Optional` name |  `undefined` &#124; `string`|
| `Optional` options | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createblockbyrange"></a>

### `<Static>` createBlockByRange

▸ **createBlockByRange**(range: *[NodeRange](../interfaces/_node_.noderange.md)*, props: *[NodeProps](../interfaces/_node_.nodeprops.md)*):  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:298](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L298)*

Create a block and move nodes or text within the range into it

**Parameters:**

| Name | Type |
| ------ | ------ |
| range | [NodeRange](../interfaces/_node_.noderange.md) |
| props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="createfragment"></a>

### `<Static>` createFragment

▸ **createFragment**(): [Node](_node_.node.md)

*Defined in [Node.ts:243](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L243)*

Creating fragment node

**Returns:** [Node](_node_.node.md)

___
<a id="findcommonancestor"></a>

### `<Static>` findCommonAncestor

▸ **findCommonAncestor**(n1: *[Node](_node_.node.md)*, n2: *[Node](_node_.node.md)*):  [Node](_node_.node.md) &#124; `undefined`

*Defined in [Node.ts:277](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L277)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n1 | [Node](_node_.node.md) |
| n2 | [Node](_node_.node.md) |

**Returns:**  [Node](_node_.node.md) &#124; `undefined`

___
<a id="fromjson"></a>

### `<Static>` fromJSON

▸ **fromJSON**(json: *[JsonNode](../interfaces/_node_.jsonnode.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:235](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L235)*

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

*Defined in [Node.ts:226](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L226)*

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

*Defined in [Node.ts:271](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L271)*

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

*Defined in [Node.ts:251](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L251)*

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

*Defined in [Node.ts:261](https://github.com/nexushubs/zaml-lang/blob/820ece7/packages/zaml-parser/src/Node.ts#L261)*

Check if a node could be parent

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | `any` |   |

**Returns:** `void`

___

