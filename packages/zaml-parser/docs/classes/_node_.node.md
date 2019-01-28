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
* [closingDescriptor](_node_.node.md#closingdescriptor)
* [commonDescriptor](_node_.node.md#commondescriptor)
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
* [isParagraph](_node_.node.md#isparagraph)
* [isPlainText](_node_.node.md#isplaintext)
* [isRoot](_node_.node.md#isroot)
* [isSimpleTag](_node_.node.md#issimpletag)
* [isTag](_node_.node.md#istag)
* [isText](_node_.node.md#istext)
* [isWrappingTag](_node_.node.md#iswrappingtag)
* [lastChild](_node_.node.md#lastchild)
* [nextSibling](_node_.node.md#nextsibling)
* [openDescriptorEnd](_node_.node.md#opendescriptorend)
* [openDescriptorStart](_node_.node.md#opendescriptorstart)
* [parentNode](_node_.node.md#parentnode)
* [path](_node_.node.md#path)
* [previousSibling](_node_.node.md#previoussibling)
* [rootSelector](_node_.node.md#rootselector)
* [selector](_node_.node.md#selector)
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
* [splitText](_node_.node.md#splittext)
* [toJSON](_node_.node.md#tojson)
* [toSource](_node_.node.md#tosource)
* [toString](_node_.node.md#tostring)
* [create](_node_.node.md#create)
* [createBlock](_node_.node.md#createblock)
* [createBlockByRange](_node_.node.md#createblockbyrange)
* [createFragment](_node_.node.md#createfragment)
* [createInlineBlock](_node_.node.md#createinlineblock)
* [createParagraph](_node_.node.md#createparagraph)
* [createRoot](_node_.node.md#createroot)
* [createTag](_node_.node.md#createtag)
* [createText](_node_.node.md#createtext)
* [findCommonAncestor](_node_.node.md#findcommonancestor)
* [fromJSON](_node_.node.md#fromjson)
* [fromSource](_node_.node.md#fromsource)
* [validChild](_node_.node.md#validchild)
* [validNode](_node_.node.md#validnode)
* [validParent](_node_.node.md#validparent)
* [validTreeRule](_node_.node.md#validtreerule)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Node**(type: *[NodeType](../enums/_node_.nodetype.md)*, name?: * `undefined` &#124; `string`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:497](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L497)*

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

*Defined in [Node.ts:482](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L482)*

___
<a id="attributes"></a>

###  attributes

**● attributes**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:491](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L491)*

___
<a id="children"></a>

###  children

**● children**: *[Node](_node_.node.md)[]*

*Defined in [Node.ts:497](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L497)*

___
<a id="content"></a>

### `<Optional>` content

**● content**: * `undefined` &#124; `string`
*

*Defined in [Node.ts:495](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L495)*

___
<a id="end"></a>

###  end

**● end**: *`number`* =  -1

*Defined in [Node.ts:487](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L487)*

___
<a id="id"></a>

###  id

**● id**: *`string`* = ""

*Defined in [Node.ts:483](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L483)*

___
<a id="labels"></a>

###  labels

**● labels**: *`string`[]*

*Defined in [Node.ts:493](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L493)*

___
<a id="metadata"></a>

###  metadata

**● metadata**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:492](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L492)*

___
<a id="name"></a>

### `<Optional>` name

**● name**: * `undefined` &#124; `string`
*

*Defined in [Node.ts:485](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L485)*

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](_node_.node.md)*

*Defined in [Node.ts:494](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L494)*

___
<a id="start"></a>

###  start

**● start**: *`number`* =  -1

*Defined in [Node.ts:486](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L486)*

___
<a id="states"></a>

###  states

**● states**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [Node.ts:490](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L490)*

___
<a id="text"></a>

### `<Optional>` text

**● text**: * `undefined` &#124; `string`
* = ""

*Defined in [Node.ts:496](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L496)*

___
<a id="textend"></a>

###  textEnd

**● textEnd**: *`number`* =  -1

*Defined in [Node.ts:489](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L489)*

___
<a id="textstart"></a>

###  textStart

**● textStart**: *`number`* =  -1

*Defined in [Node.ts:488](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L488)*

___
<a id="type"></a>

###  type

**● type**: *[NodeType](../enums/_node_.nodetype.md)*

*Defined in [Node.ts:484](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L484)*

___
<a id="types"></a>

### `<Static>` Types

**● Types**: *[NodeType](../enums/_node_.nodetype.md)* =  NodeType

*Defined in [Node.ts:241](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L241)*

___

## Accessors

<a id="childindex"></a>

###  childIndex

getchildIndex(): `number`

*Defined in [Node.ts:806](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L806)*

Get index of parent children

**Returns:** `number`

___
<a id="childnodes"></a>

###  childNodes

getchildNodes(): [Node](_node_.node.md)[]

*Defined in [Node.ts:738](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L738)*

Get child nodes, alias for node.children

**Returns:** [Node](_node_.node.md)[]

___
<a id="closingdescriptor"></a>

###  closingDescriptor

getclosingDescriptor(): `string`

*Defined in [Node.ts:621](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L621)*

**Returns:** `string`

___
<a id="commondescriptor"></a>

###  commonDescriptor

getcommonDescriptor(): [Descriptor](../enums/_node_.descriptor.md)

*Defined in [Node.ts:577](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L577)*

Get descriptor ignoring name difference

**Returns:** [Descriptor](../enums/_node_.descriptor.md)

___
<a id="descriptor"></a>

###  descriptor

getdescriptor(): `string`

*Defined in [Node.ts:566](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L566)*

Get a short descriptor to identify node's type and basic information

**Returns:** `string`

___
<a id="firstchild"></a>

###  firstChild

getfirstChild():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:904](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L904)*

Get the first child of current node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="innertext"></a>

###  innerText

getinnerText():  `undefined` &#124; `string`

*Defined in [Node.ts:759](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L759)*

Get node inner text

**Returns:**  `undefined` &#124; `string`

___
<a id="isblock"></a>

###  isBlock

getisBlock(): `boolean`

*Defined in [Node.ts:716](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L716)*

Property indicates if the node is a block (wrapping other nodes)

**Returns:** `boolean`

___
<a id="isblocktag"></a>

###  isBlockTag

getisBlockTag(): `boolean`

*Defined in [Node.ts:702](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L702)*

Check if the node is block tag

**Returns:** `boolean`

___
<a id="isentity"></a>

###  isEntity

getisEntity(): `boolean`

*Defined in [Node.ts:674](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L674)*

Check if the node is entity

**Returns:** `boolean`

___
<a id="isfirstchild"></a>

###  isFirstChild

getisFirstChild(): `boolean`

*Defined in [Node.ts:773](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L773)*

Check if the node is the first child of its parent

**Returns:** `boolean`

___
<a id="isinlineblock"></a>

###  isInlineBlock

getisInlineBlock(): `boolean`

*Defined in [Node.ts:724](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L724)*

If node is inline block

**Returns:** `boolean`

___
<a id="islastchild"></a>

###  isLastChild

getisLastChild(): `boolean`

*Defined in [Node.ts:784](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L784)*

Check if the node is the last child of its parent

**Returns:** `boolean`

___
<a id="isonlychild"></a>

###  isOnlyChild

getisOnlyChild(): `boolean`

*Defined in [Node.ts:927](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L927)*

Check if this node is the only child of its parent

**Returns:** `boolean`

___
<a id="isparagraph"></a>

###  isParagraph

getisParagraph(): `boolean`

*Defined in [Node.ts:660](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L660)*

Check if the node is paragraph

**Returns:** `boolean`

___
<a id="isplaintext"></a>

###  isPlainText

getisPlainText(): `boolean`

*Defined in [Node.ts:688](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L688)*

Check if the node is text and not wrapping by entity

**Returns:** `boolean`

___
<a id="isroot"></a>

###  isRoot

getisRoot(): `boolean`

*Defined in [Node.ts:653](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L653)*

Check if the node is root

**Returns:** `boolean`

___
<a id="issimpletag"></a>

###  isSimpleTag

getisSimpleTag(): `boolean`

*Defined in [Node.ts:709](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L709)*

Check if the node is simple block or inline block

**Returns:** `boolean`

___
<a id="istag"></a>

###  isTag

getisTag(): `boolean`

*Defined in [Node.ts:667](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L667)*

Check if the node is tag

**Returns:** `boolean`

___
<a id="istext"></a>

###  isText

getisText(): `boolean`

*Defined in [Node.ts:681](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L681)*

Check if the node is text

**Returns:** `boolean`

___
<a id="iswrappingtag"></a>

###  isWrappingTag

getisWrappingTag(): `boolean`

*Defined in [Node.ts:695](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L695)*

Check if the node is wrapping tag

**Returns:** `boolean`

___
<a id="lastchild"></a>

###  lastChild

getlastChild():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:912](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L912)*

Get the last child of current node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="nextsibling"></a>

###  nextSibling

getnextSibling():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:814](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L814)*

Next sibling node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="opendescriptorend"></a>

###  openDescriptorEnd

getopenDescriptorEnd():  "]" &#124; "}" &#124; `&quot;&quot;` &#124; "&gt;"

*Defined in [Node.ts:608](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L608)*

**Returns:**  "]" &#124; "}" &#124; `&quot;&quot;` &#124; "&gt;"

___
<a id="opendescriptorstart"></a>

###  openDescriptorStart

getopenDescriptorStart(): `string`

*Defined in [Node.ts:595](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L595)*

**Returns:** `string`

___
<a id="parentnode"></a>

###  parentNode

getparentNode():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:731](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L731)*

Get parent node, alias for node.parent

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="path"></a>

###  path

getpath(): [Node](_node_.node.md)[]

*Defined in [Node.ts:891](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L891)*

Get a list of ancestors

**Returns:** [Node](_node_.node.md)[]

___
<a id="previoussibling"></a>

###  previousSibling

getpreviousSibling():  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:823](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L823)*

Previous sibling node

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="rootselector"></a>

###  rootSelector

getrootSelector(): `string`

*Defined in [Node.ts:642](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L642)*

**Returns:** `string`

___
<a id="selector"></a>

###  selector

getselector(): `string`

*Defined in [Node.ts:634](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L634)*

**Returns:** `string`

___
<a id="siblings"></a>

###  siblings

getsiblings(): [Node](_node_.node.md)[]

*Defined in [Node.ts:795](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L795)*

Siblings from same parent

**Returns:** [Node](_node_.node.md)[]

___
<a id="source"></a>

###  source

getsource(): `string`

*Defined in [Node.ts:745](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L745)*

Get source code of the node

**Returns:** `string`

___

## Methods

<a id="addlabel"></a>

###  addLabel

▸ **addLabel**(label: *`string`*): `void`

*Defined in [Node.ts:1232](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1232)*

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

*Defined in [Node.ts:994](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L994)*

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

*Defined in [Node.ts:1003](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1003)*

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

*Defined in [Node.ts:1178](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1178)*

Remove all attributes

**Returns:** `void`

___
<a id="clearlabels"></a>

###  clearLabels

▸ **clearLabels**(): `void`

*Defined in [Node.ts:1260](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1260)*

Remove all labels

**Returns:** `void`

___
<a id="clearmetadata"></a>

###  clearMetadata

▸ **clearMetadata**(): `void`

*Defined in [Node.ts:1216](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1216)*

Remove all metadata

**Returns:** `void`

___
<a id="contains"></a>

###  contains

▸ **contains**(node: *[Node](_node_.node.md)*): `boolean`

*Defined in [Node.ts:874](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L874)*

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

*Defined in [Node.ts:976](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L976)*

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

*Defined in [Node.ts:1499](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1499)*

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

*Defined in [Node.ts:1536](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1536)*

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

*Defined in [Node.ts:1562](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1562)*

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

*Defined in [Node.ts:1466](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1466)*

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

*Defined in [Node.ts:1365](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1365)*

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

*Defined in [Node.ts:1288](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1288)*

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

*Defined in [Node.ts:1373](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1373)*

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

*Defined in [Node.ts:1332](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1332)*

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

*Defined in [Node.ts:1341](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1341)*

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

*Defined in [Node.ts:1484](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1484)*

Remove a element and move its children to its parent

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="getattribute"></a>

###  getAttribute

▸ **getAttribute**(key: *`string`*): `any`

*Defined in [Node.ts:1155](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1155)*

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

*Defined in [Node.ts:1201](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1201)*

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

*Defined in [Node.ts:1279](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1279)*

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

*Defined in [Node.ts:832](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L832)*

Property indicates if the root is root (which has no children)

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="hasattribute"></a>

###  hasAttribute

▸ **hasAttribute**(key: *`string`*): `boolean`

*Defined in [Node.ts:1163](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1163)*

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

*Defined in [Node.ts:920](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L920)*

Check if this node has any children

**Returns:** `boolean`

___
<a id="haslabel"></a>

###  hasLabel

▸ **hasLabel**(label: *`string`*): `boolean`

*Defined in [Node.ts:1245](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1245)*

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

*Defined in [Node.ts:1224](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1224)*

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

*Defined in [Node.ts:1095](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1095)*

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

*Defined in [Node.ts:1059](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1059)*

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

*Defined in [Node.ts:1082](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1082)*

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

*Defined in [Node.ts:853](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L853)*

Check node match the expression
*__example__*: : Root node : Paragraph node {BLOCK}: BLOCK tag {INLINE}: INLINE tag \[PER\]: entity

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expression | `string` |   |

**Returns:** `boolean`

___
<a id="isonlydescendantof"></a>

###  isOnlyDescendantOf

▸ **isOnlyDescendantOf**(ancestor: *[Node](_node_.node.md)*): `boolean`

*Defined in [Node.ts:938](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L938)*

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

*Defined in [Node.ts:956](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L956)*

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

*Defined in [Node.ts:1444](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1444)*

Merge neighbor text nodes

**Returns:** `void`

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(): `void`

*Defined in [Node.ts:1267](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1267)*

Rebuild text and source position, in case modification has been applied to node

**Returns:** `void`

___
<a id="prependchild"></a>

###  prependChild

▸ **prependChild**(node: *[Node](_node_.node.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:986](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L986)*

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

*Defined in [Node.ts:1023](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1023)*

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

▸ **querySelector**(selector: *`string`*):  [Node](_node_.node.md) &#124; `undefined`

*Defined in [Node.ts:1389](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1389)*

Find nodes by selector and return the first one, compared by is()

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| selector | `string` |   |

**Returns:**  [Node](_node_.node.md) &#124; `undefined`

___
<a id="queryselectorall"></a>

###  querySelectorAll

▸ **querySelectorAll**(selector: *`string`*): [Node](_node_.node.md)[]

*Defined in [Node.ts:1381](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1381)*

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

*Defined in [Node.ts:1171](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1171)*

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

*Defined in [Node.ts:1037](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1037)*

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

*Defined in [Node.ts:1047](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1047)*

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

*Defined in [Node.ts:1587](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1587)*

Remove wrapping entity and put text back

**Returns:** [Node](_node_.node.md)

___
<a id="removelabel"></a>

###  removeLabel

▸ **removeLabel**(label: *`string`*): `void`

*Defined in [Node.ts:1253](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1253)*

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

*Defined in [Node.ts:1209](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1209)*

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

*Defined in [Node.ts:1108](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1108)*

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

*Defined in [Node.ts:1125](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1125)*

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

*Defined in [Node.ts:1139](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1139)*

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

*Defined in [Node.ts:1147](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1147)*

Set multiple attributes

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | [KeyValueMap](../modules/_node_.md#keyvaluemap) |  Key-value pair |

**Returns:** `void`

___
<a id="setmetadata"></a>

###  setMetadata

▸ **setMetadata**(key: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*): `void`

▸ **setMetadata**(key: *`string`*, value: *`any`*): `void`

*Defined in [Node.ts:1187](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1187)*

Set single metadata value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | [KeyValueMap](../modules/_node_.md#keyvaluemap) |  Key or key-value pair |

**Returns:** `void`

*Defined in [Node.ts:1188](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1188)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `any` |

**Returns:** `void`

___
<a id="splittext"></a>

###  splitText

▸ **splitText**(separator: * `RegExp` &#124; `string`*, tagName?: *`string`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): `void`

*Defined in [Node.ts:1401](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1401)*

Split node text into tag wrapped sections, e.g. splitting sentences
*__example__*: node.splitText('!?.');

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| separator |  `RegExp` &#124; `string`| - |  RegExp or character list in string, to split |
| `Default value` tagName | `string` | &quot;INLINE&quot; |  Custom tag name, like \`'SENTENCE'\` |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) | - |

**Returns:** `void`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(options?: *[JsonOptions](../interfaces/_node_.jsonoptions.md)*): [JsonNode](../interfaces/_node_.jsonnode.md)

*Defined in [Node.ts:1634](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1634)*

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

*Defined in [Node.ts:1626](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1626)*

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

*Defined in [Node.ts:1618](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L1618)*

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

*Defined in [Node.ts:249](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L249)*

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

*Defined in [Node.ts:290](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L290)*

Create block tag

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createblockbyrange"></a>

### `<Static>` createBlockByRange

▸ **createBlockByRange**(range: *[NodeRange](../interfaces/_node_.noderange.md)*, tagName?: *`string`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*):  `undefined` &#124; [Node](_node_.node.md)

*Defined in [Node.ts:401](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L401)*

Find the common ancestor of the range, and creates a wrapping block (or tag) with the nodes within the range in it.

If the range is within a block (BLOCK tag or paragraph), a inline tag is created, otherwise a BLOCK tag is created.

If a BLOCK tag is used, `startOffset` and `endOffset` will be ignored, to avoid block overlap.

If either `startNode` or `endNode` is not direct child of common ancestor nor the node is not sided aligned with the direct child of the ancestor, text offset will be ignored to avoid split of tags or entity.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| range | [NodeRange](../interfaces/_node_.noderange.md) | - |  A range object which contains start and end node, alone with their text offset |
| `Default value` tagName | `string` | &quot;INLINE&quot; |  If inline tag is needed, specify the tag name instead of default \`'INLINE'\` |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) | - |  Custom tag props |

**Returns:**  `undefined` &#124; [Node](_node_.node.md)

___
<a id="createfragment"></a>

### `<Static>` createFragment

▸ **createFragment**(): [Node](_node_.node.md)

*Defined in [Node.ts:321](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L321)*

Creating fragment node

**Returns:** [Node](_node_.node.md)

___
<a id="createinlineblock"></a>

### `<Static>` createInlineBlock

▸ **createInlineBlock**(props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:298](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L298)*

Create inline block tag

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createparagraph"></a>

### `<Static>` createParagraph

▸ **createParagraph**(props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:257](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L257)*

Create paragraph node

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createroot"></a>

### `<Static>` createRoot

▸ **createRoot**(props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:265](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L265)*

Create root node

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createtag"></a>

### `<Static>` createTag

▸ **createTag**(tagName: *`string`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:282](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L282)*

Create a common tag

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| tagName | `string` |  Tag name, e.g. \`'BLOCK'\`, \`'INLINE'\`, \`'SENTENCE'\` |
| `Optional` props | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** [Node](_node_.node.md)

___
<a id="createtext"></a>

### `<Static>` createText

▸ **createText**(content: *`string`*, props?: *[NodeProps](../interfaces/_node_.nodeprops.md)*): [Node](_node_.node.md)

*Defined in [Node.ts:273](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L273)*

Create text node

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

*Defined in [Node.ts:364](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L364)*

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

*Defined in [Node.ts:314](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L314)*

Create node from json serializable data

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| json | [JsonNode](../interfaces/_node_.jsonnode.md) |   |

**Returns:** [Node](_node_.node.md)

___
<a id="fromsource"></a>

### `<Static>` fromSource

▸ **fromSource**(source: *`string`*): [Node](_node_.node.md)

*Defined in [Node.ts:306](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L306)*

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

*Defined in [Node.ts:349](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L349)*

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

*Defined in [Node.ts:329](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L329)*

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

*Defined in [Node.ts:339](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L339)*

Check if a node could be parent

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| node | `any` |   |

**Returns:** `void`

___
<a id="validtreerule"></a>

### `<Static>` validTreeRule

▸ **validTreeRule**(parent: *[Node](_node_.node.md)*, child: *[Node](_node_.node.md)*): `void`

*Defined in [Node.ts:355](https://github.com/nexushubs/zaml-lang/blob/18f20d4/packages/zaml-parser/src/Node.ts#L355)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| parent | [Node](_node_.node.md) |
| child | [Node](_node_.node.md) |

**Returns:** `void`

___

