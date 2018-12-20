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
* [createFragment](_node_.node.md#createfragment)
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

*Defined in [Node.ts:285](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L285)*

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

*Defined in [Node.ts:270](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L270)*

___
<a id="attributes"></a>

###  attributes

**● attributes**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:279](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L279)*

___
<a id="children"></a>

###  children

**● children**: *[Node](_node_.node.md)[]*

*Defined in [Node.ts:285](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L285)*

___
<a id="content"></a>

### `<Optional>` content

**● content**: * `undefined` &#124; `string`
*

*Defined in [Node.ts:283](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L283)*

___
<a id="end"></a>

###  end

**● end**: *`number`* =  -1

*Defined in [Node.ts:275](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L275)*

___
<a id="id"></a>

###  id

**● id**: *`string`* = ""

*Defined in [Node.ts:271](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L271)*

___
<a id="labels"></a>

###  labels

**● labels**: *`string`[]*

*Defined in [Node.ts:281](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L281)*

___
<a id="metadata"></a>

###  metadata

**● metadata**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:280](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L280)*

___
<a id="name"></a>

### `<Optional>` name

**● name**: * `undefined` &#124; `string`
*

*Defined in [Node.ts:273](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L273)*

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](_node_.node.md)*

*Defined in [Node.ts:282](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L282)*

___
<a id="start"></a>

###  start

**● start**: *`number`* =  -1

*Defined in [Node.ts:274](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L274)*

___
<a id="states"></a>

###  states

**● states**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:278](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L278)*

___
<a id="text"></a>

### `<Optional>` text

**● text**: * `undefined` &#124; `string`
* = ""

*Defined in [Node.ts:284](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L284)*

___
<a id="textend"></a>

###  textEnd

**● textEnd**: *`number`* =  -1

*Defined in [Node.ts:277](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L277)*

___
<a id="textstart"></a>

###  textStart

**● textStart**: *`number`* =  -1

*Defined in [Node.ts:276](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L276)*

___
<a id="type"></a>

###  type

**● type**: *[NodeType](../enums/_node_.nodetype.md)*

*Defined in [Node.ts:272](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L272)*

___
<a id="types"></a>

### `<Static>` Types

**● Types**: *[NodeType](../enums/_node_.nodetype.md)* =  NodeType

*Defined in [Node.ts:204](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L204)*

___

## Accessors

<a id="childindex"></a>

###  childIndex

getchildIndex(): `number`

*Defined in [Node.ts:556](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L556)*

Get index of parent children

**Returns:** `number`

___
<a id="childnodes"></a>

###  childNodes

getchildNodes(): [Node](_node_.node.md)[]

*Defined in [Node.ts:481](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L481)*

Get child nodes, alias for node.children

**Returns:** [Node](_node_.node.md)[]

___
<a id="firstchild"></a>

###  firstChild

getfirstChild():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:649](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L649)*

Get the first child of current node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="innertext"></a>

###  innerText

getinnerText():  `undefined` &#124; `string`

*Defined in [Node.ts:509](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L509)*

Get node inner text

**Returns:**  `undefined` &#124; `string`

___
<a id="isblock"></a>

###  isBlock

getisBlock(): `boolean`

*Defined in [Node.ts:459](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L459)*

Property indicates if the node is a block (wrapping other nodes)

**Returns:** `boolean`

___
<a id="isblocktag"></a>

###  isBlockTag

getisBlockTag(): `boolean`

*Defined in [Node.ts:445](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L445)*

Check if the node is block tag

**Returns:** `boolean`

___
<a id="isfirstchild"></a>

###  isFirstChild

getisFirstChild(): `boolean`

*Defined in [Node.ts:523](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L523)*

Check if the node is the first child of its parent

**Returns:** `boolean`

___
<a id="isinlineblock"></a>

###  isInlineBlock

getisInlineBlock(): `boolean`

*Defined in [Node.ts:467](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L467)*

If node is inline block

**Returns:** `boolean`

___
<a id="islastchild"></a>

###  isLastChild

getisLastChild(): `boolean`

*Defined in [Node.ts:534](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L534)*

Check if the node is the last child of its parent

**Returns:** `boolean`

___
<a id="isroot"></a>

###  isRoot

getisRoot(): `boolean`

*Defined in [Node.ts:488](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L488)*

If the node is root

**Returns:** `boolean`

___
<a id="issimpletag"></a>

###  isSimpleTag

getisSimpleTag(): `boolean`

*Defined in [Node.ts:452](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L452)*

Check if the node is simple block or inline block

**Returns:** `boolean`

___
<a id="istag"></a>

###  isTag

getisTag(): `boolean`

*Defined in [Node.ts:431](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L431)*

Check if the node is tag

**Returns:** `boolean`

___
<a id="iswrappingtag"></a>

###  isWrappingTag

getisWrappingTag(): `boolean`

*Defined in [Node.ts:438](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L438)*

Check if the node is wrapping tag

**Returns:** `boolean`

___
<a id="lastchild"></a>

###  lastChild

getlastChild():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:657](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L657)*

Get the last child of current node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="nextsibling"></a>

###  nextSibling

getnextSibling():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:564](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L564)*

Next sibling node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="parentnode"></a>

###  parentNode

getparentNode():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:474](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L474)*

Get parent node, alias for node.parent

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="path"></a>

###  path

getpath(): [Node](_node_.node.md)[]

*Defined in [Node.ts:636](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L636)*

Get a list of ancestors

**Returns:** [Node](_node_.node.md)[]

___
<a id="previoussibling"></a>

###  previousSibling

getpreviousSibling():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:573](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L573)*

Previous sibling node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="siblings"></a>

###  siblings

getsiblings(): [Node](_node_.node.md)[]

*Defined in [Node.ts:545](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L545)*

Siblings from same parent

**Returns:** [Node](_node_.node.md)[]

___
<a id="source"></a>

###  source

getsource(): `string`

*Defined in [Node.ts:495](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L495)*

Get source code of the node

**Returns:** `string`

___

## Methods

<a id="addlabel"></a>

###  addLabel

▸ **addLabel**(label: *`string`*): `void`

*Defined in [Node.ts:879](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L879)*

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

*Defined in [Node.ts:685](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L685)*

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

*Defined in [Node.ts:694](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L694)*

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

*Defined in [Node.ts:827](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L827)*

Remove all attributes

**Returns:** `void`

___
<a id="clearlabels"></a>

###  clearLabels

▸ **clearLabels**(): `void`

*Defined in [Node.ts:907](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L907)*

Remove all labels

**Returns:** `void`

___
<a id="clearmetadata"></a>

###  clearMetadata

▸ **clearMetadata**(): `void`

*Defined in [Node.ts:863](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L863)*

Remove all metadata

**Returns:** `void`

___
<a id="contains"></a>

###  contains

▸ **contains**(node: *[Node](_node_.node.md)*): `boolean`

*Defined in [Node.ts:619](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L619)*

whether a node is a descendant of a given node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |   |

**Returns:** `boolean`

___
<a id="createchild"></a>

###  createChild

▸ **createChild**(type: *[NodeType](../enums/_node_.nodetype.md)*, name?: * `undefined` &#124; `string`*, options?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:675](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L675)*

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

▸ **createEntities**(items: *[EntityItem](../interfaces/_node_.entityitem.md)[]*): `void`

*Defined in [Node.ts:1035](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L1035)*

Process text node in current node and parse entities

**Parameters:**

| Name | Type |
| ------ | ------ |
| items | [EntityItem](../interfaces/_node_.entityitem.md)[] |

**Returns:** `void`

___
<a id="createentitiesfromtext"></a>

###  createEntitiesFromText

▸ **createEntitiesFromText**(entities: *[EntityItem](../interfaces/_node_.entityitem.md)[]*): `void`

*Defined in [Node.ts:1069](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L1069)*

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

*Defined in [Node.ts:1095](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L1095)*

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

*Defined in [Node.ts:1004](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L1004)*

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

*Defined in [Node.ts:927](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L927)*

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

*Defined in [Node.ts:1012](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L1012)*

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

*Defined in [Node.ts:971](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L971)*

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

*Defined in [Node.ts:980](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L980)*

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

*Defined in [Node.ts:804](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L804)*

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

*Defined in [Node.ts:848](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L848)*

Get metadata value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |   |

**Returns:** `any`

___
<a id="getrootnode"></a>

###  getRootNode

▸ **getRootNode**():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:582](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L582)*

Property indicates if the root is root (which has no children)

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="hasattribute"></a>

###  hasAttribute

▸ **hasAttribute**(key: *`string`*): `boolean`

*Defined in [Node.ts:812](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L812)*

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

*Defined in [Node.ts:665](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L665)*

Check if this node has any children

**Returns:** `boolean`

___
<a id="haslabel"></a>

###  hasLabel

▸ **hasLabel**(label: *`string`*): `boolean`

*Defined in [Node.ts:892](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L892)*

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

*Defined in [Node.ts:871](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L871)*

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

*Defined in [Node.ts:744](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L744)*

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

*Defined in [Node.ts:713](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L713)*

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

*Defined in [Node.ts:731](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L731)*

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

*Defined in [Node.ts:600](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L600)*

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

*Defined in [Node.ts:914](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L914)*

Rebuild text and source position, in case modification has been applied to node

**Returns:** `void`

___
<a id="queryselector"></a>

###  querySelector

▸ **querySelector**(selector: *`string`*):  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:1028](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L1028)*

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

*Defined in [Node.ts:1020](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L1020)*

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

*Defined in [Node.ts:820](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L820)*

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

*Defined in [Node.ts:702](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L702)*

Remove 1 or more children

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | [Node](_node_.node.md) |   |

**Returns:** [Node](_node_.node.md)

___
<a id="removelabel"></a>

###  removeLabel

▸ **removeLabel**(label: *`string`*): `void`

*Defined in [Node.ts:900](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L900)*

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

*Defined in [Node.ts:856](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L856)*

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

*Defined in [Node.ts:757](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L757)*

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

*Defined in [Node.ts:774](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L774)*

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

*Defined in [Node.ts:788](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L788)*

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

*Defined in [Node.ts:796](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L796)*

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

*Defined in [Node.ts:836](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L836)*

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

*Defined in [Node.ts:1137](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L1137)*

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

*Defined in [Node.ts:1129](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L1129)*

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

*Defined in [Node.ts:1121](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L1121)*

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

*Defined in [Node.ts:211](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L211)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [NodeType](../enums/_node_.nodetype.md) |  \- |
| `Optional` name |  `undefined` &#124; `string`|
| `Optional` options | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createfragment"></a>

### `<Static>` createFragment

▸ **createFragment**(): [Node](_node_.node.md)

*Defined in [Node.ts:236](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L236)*

Creating fragment node

**Returns:** [Node](_node_.node.md)

___
<a id="fromjson"></a>

### `<Static>` fromJSON

▸ **fromJSON**(json: *[JsonNode](../interfaces/_node_.jsonnode.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:228](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L228)*

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

*Defined in [Node.ts:219](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L219)*

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

*Defined in [Node.ts:264](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L264)*

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

*Defined in [Node.ts:244](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L244)*

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

*Defined in [Node.ts:254](https://github.com/nexushubs/zaml-lang/blob/5afa52e/packages/zaml-parser/src/Node.ts#L254)*

Check if a node could be parent

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | `any` |   |

**Returns:** `void`

___

