[@zaml/parser](../README.md) › ["Node"](../modules/_node_.md) › [Node](_node_.node.md)

# Class: Node

AST node class

## Hierarchy

* **Node**

## Index

### Constructors

* [constructor](_node_.node.md#constructor)

### Properties

* [_source](_node_.node.md#private-optional-_source)
* [attributes](_node_.node.md#attributes)
* [children](_node_.node.md#children)
* [content](_node_.node.md#optional-content)
* [end](_node_.node.md#end)
* [id](_node_.node.md#id)
* [labels](_node_.node.md#labels)
* [metadata](_node_.node.md#metadata)
* [name](_node_.node.md#optional-name)
* [parent](_node_.node.md#optional-parent)
* [start](_node_.node.md#start)
* [states](_node_.node.md#states)
* [text](_node_.node.md#optional-text)
* [textEnd](_node_.node.md#textend)
* [textStart](_node_.node.md#textstart)
* [type](_node_.node.md#type)
* [Types](_node_.node.md#static-types)

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
* [remove](_node_.node.md#remove)
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
* [create](_node_.node.md#static-create)
* [createBlock](_node_.node.md#static-createblock)
* [createBlockByRange](_node_.node.md#static-createblockbyrange)
* [createFragment](_node_.node.md#static-createfragment)
* [createInlineBlock](_node_.node.md#static-createinlineblock)
* [createParagraph](_node_.node.md#static-createparagraph)
* [createRoot](_node_.node.md#static-createroot)
* [createTag](_node_.node.md#static-createtag)
* [createText](_node_.node.md#static-createtext)
* [findCommonAncestor](_node_.node.md#static-findcommonancestor)
* [fromJSON](_node_.node.md#static-fromjson)
* [fromSource](_node_.node.md#static-fromsource)
* [validChild](_node_.node.md#static-validchild)
* [validNode](_node_.node.md#static-validnode)
* [validParent](_node_.node.md#static-validparent)
* [validTreeRule](_node_.node.md#static-validtreerule)

## Constructors

###  constructor

\+ **new Node**(`type`: [NodeType](../enums/_node_.nodetype.md), `name?`: undefined | string, `props`: [NodeProps](../interfaces/_node_.nodeprops.md)): *[Node](_node_.node.md)*

*Defined in [src/Node.ts:505](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L505)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`type` | [NodeType](../enums/_node_.nodetype.md) | - |
`name?` | undefined &#124; string | - |
`props` | [NodeProps](../interfaces/_node_.nodeprops.md) | {} |

**Returns:** *[Node](_node_.node.md)*

## Properties

### `Private` `Optional` _source

• **_source**? : *undefined | string*

*Defined in [src/Node.ts:490](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L490)*

___

###  attributes

• **attributes**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [src/Node.ts:499](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L499)*

___

###  children

• **children**: *[Node](_node_.node.md)[]*

*Defined in [src/Node.ts:505](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L505)*

___

### `Optional` content

• **content**? : *undefined | string*

*Defined in [src/Node.ts:503](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L503)*

___

###  end

• **end**: *number* = -1

*Defined in [src/Node.ts:495](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L495)*

___

###  id

• **id**: *string* = ""

*Defined in [src/Node.ts:491](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L491)*

___

###  labels

• **labels**: *string[]*

*Defined in [src/Node.ts:501](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L501)*

___

###  metadata

• **metadata**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [src/Node.ts:500](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L500)*

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [src/Node.ts:493](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L493)*

___

### `Optional` parent

• **parent**? : *[Node](_node_.node.md)*

*Defined in [src/Node.ts:502](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L502)*

___

###  start

• **start**: *number* = -1

*Defined in [src/Node.ts:494](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L494)*

___

###  states

• **states**: *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [src/Node.ts:498](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L498)*

___

### `Optional` text

• **text**? : *undefined | string* = ""

*Defined in [src/Node.ts:504](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L504)*

___

###  textEnd

• **textEnd**: *number* = -1

*Defined in [src/Node.ts:497](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L497)*

___

###  textStart

• **textStart**: *number* = -1

*Defined in [src/Node.ts:496](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L496)*

___

###  type

• **type**: *[NodeType](../enums/_node_.nodetype.md)*

*Defined in [src/Node.ts:492](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L492)*

___

### `Static` Types

▪ **Types**: *[NodeType](../enums/_node_.nodetype.md)* = NodeType

*Defined in [src/Node.ts:249](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L249)*

## Accessors

###  childIndex

• **get childIndex**(): *number*

*Defined in [src/Node.ts:814](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L814)*

Get index of parent children

**Returns:** *number*

___

###  childNodes

• **get childNodes**(): *[Node](_node_.node.md)‹›[]*

*Defined in [src/Node.ts:746](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L746)*

Get child nodes, alias for node.children

**Returns:** *[Node](_node_.node.md)‹›[]*

___

###  closingDescriptor

• **get closingDescriptor**(): *string*

*Defined in [src/Node.ts:629](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L629)*

**Returns:** *string*

___

###  commonDescriptor

• **get commonDescriptor**(): *[Descriptor](../enums/_node_.descriptor.md)*

*Defined in [src/Node.ts:585](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L585)*

Get descriptor ignoring name difference

**Returns:** *[Descriptor](../enums/_node_.descriptor.md)*

___

###  descriptor

• **get descriptor**(): *string*

*Defined in [src/Node.ts:574](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L574)*

Get a short descriptor to identify node's type and basic information

**Returns:** *string*

___

###  firstChild

• **get firstChild**(): *undefined | [Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:912](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L912)*

Get the first child of current node

**Returns:** *undefined | [Node](_node_.node.md)‹›*

___

###  innerText

• **get innerText**(): *undefined | string*

*Defined in [src/Node.ts:767](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L767)*

Get node inner text

**Returns:** *undefined | string*

___

###  isBlock

• **get isBlock**(): *boolean*

*Defined in [src/Node.ts:724](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L724)*

Property indicates if the node is a block (wrapping other nodes)

**Returns:** *boolean*

___

###  isBlockTag

• **get isBlockTag**(): *boolean*

*Defined in [src/Node.ts:710](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L710)*

Check if the node is block tag

**Returns:** *boolean*

___

###  isEntity

• **get isEntity**(): *boolean*

*Defined in [src/Node.ts:682](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L682)*

Check if the node is entity

**Returns:** *boolean*

___

###  isFirstChild

• **get isFirstChild**(): *boolean*

*Defined in [src/Node.ts:781](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L781)*

Check if the node is the first child of its parent

**Returns:** *boolean*

___

###  isInlineBlock

• **get isInlineBlock**(): *boolean*

*Defined in [src/Node.ts:732](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L732)*

If node is inline block

**Returns:** *boolean*

___

###  isLastChild

• **get isLastChild**(): *boolean*

*Defined in [src/Node.ts:792](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L792)*

Check if the node is the last child of its parent

**Returns:** *boolean*

___

###  isOnlyChild

• **get isOnlyChild**(): *boolean*

*Defined in [src/Node.ts:935](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L935)*

Check if this node is the only child of its parent

**Returns:** *boolean*

___

###  isParagraph

• **get isParagraph**(): *boolean*

*Defined in [src/Node.ts:668](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L668)*

Check if the node is paragraph

**Returns:** *boolean*

___

###  isPlainText

• **get isPlainText**(): *boolean*

*Defined in [src/Node.ts:696](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L696)*

Check if the node is text and not wrapping by entity

**Returns:** *boolean*

___

###  isRoot

• **get isRoot**(): *boolean*

*Defined in [src/Node.ts:661](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L661)*

Check if the node is root

**Returns:** *boolean*

___

###  isSimpleTag

• **get isSimpleTag**(): *boolean*

*Defined in [src/Node.ts:717](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L717)*

Check if the node is simple block or inline block

**Returns:** *boolean*

___

###  isTag

• **get isTag**(): *boolean*

*Defined in [src/Node.ts:675](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L675)*

Check if the node is tag

**Returns:** *boolean*

___

###  isText

• **get isText**(): *boolean*

*Defined in [src/Node.ts:689](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L689)*

Check if the node is text

**Returns:** *boolean*

___

###  isWrappingTag

• **get isWrappingTag**(): *boolean*

*Defined in [src/Node.ts:703](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L703)*

Check if the node is wrapping tag

**Returns:** *boolean*

___

###  lastChild

• **get lastChild**(): *undefined | [Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:920](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L920)*

Get the last child of current node

**Returns:** *undefined | [Node](_node_.node.md)‹›*

___

###  nextSibling

• **get nextSibling**(): *undefined | [Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:822](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L822)*

Next sibling node

**Returns:** *undefined | [Node](_node_.node.md)‹›*

___

###  openDescriptorEnd

• **get openDescriptorEnd**(): *"]" | "}" | "" | ">"*

*Defined in [src/Node.ts:616](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L616)*

**Returns:** *"]" | "}" | "" | ">"*

___

###  openDescriptorStart

• **get openDescriptorStart**(): *string*

*Defined in [src/Node.ts:603](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L603)*

**Returns:** *string*

___

###  parentNode

• **get parentNode**(): *undefined | [Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:739](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L739)*

Get parent node, alias for node.parent

**Returns:** *undefined | [Node](_node_.node.md)‹›*

___

###  path

• **get path**(): *[Node](_node_.node.md)‹›[]*

*Defined in [src/Node.ts:899](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L899)*

Get a list of ancestors

**Returns:** *[Node](_node_.node.md)‹›[]*

___

###  previousSibling

• **get previousSibling**(): *undefined | [Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:831](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L831)*

Previous sibling node

**Returns:** *undefined | [Node](_node_.node.md)‹›*

___

###  rootSelector

• **get rootSelector**(): *string*

*Defined in [src/Node.ts:650](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L650)*

**Returns:** *string*

___

###  selector

• **get selector**(): *string*

*Defined in [src/Node.ts:642](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L642)*

**Returns:** *string*

___

###  siblings

• **get siblings**(): *[Node](_node_.node.md)‹›[]*

*Defined in [src/Node.ts:803](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L803)*

Siblings from same parent

**Returns:** *[Node](_node_.node.md)‹›[]*

___

###  source

• **get source**(): *string*

*Defined in [src/Node.ts:753](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L753)*

Get source code of the node

**Returns:** *string*

## Methods

###  addLabel

▸ **addLabel**(`label`: string): *void*

*Defined in [src/Node.ts:1249](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1249)*

Add label to node

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`label` | string |   |

**Returns:** *void*

___

###  appendChild

▸ **appendChild**(`node`: [Node](_node_.node.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1002](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1002)*

Append a node to children list

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](_node_.node.md) |   |

**Returns:** *[Node](_node_.node.md)‹›*

___

###  appendText

▸ **appendText**(`text`: string, `props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *undefined | this*

*Defined in [src/Node.ts:1011](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1011)*

Append text node child

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** *undefined | this*

___

###  clearAttributes

▸ **clearAttributes**(): *void*

*Defined in [src/Node.ts:1195](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1195)*

Remove all attributes

**Returns:** *void*

___

###  clearLabels

▸ **clearLabels**(): *void*

*Defined in [src/Node.ts:1277](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1277)*

Remove all labels

**Returns:** *void*

___

###  clearMetadata

▸ **clearMetadata**(): *void*

*Defined in [src/Node.ts:1233](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1233)*

Remove all metadata

**Returns:** *void*

___

###  contains

▸ **contains**(`node`: [Node](_node_.node.md)): *boolean*

*Defined in [src/Node.ts:882](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L882)*

whether a node is a descendant of a given node

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](_node_.node.md) |   |

**Returns:** *boolean*

___

###  createChild

▸ **createChild**(`type`: [NodeType](../enums/_node_.nodetype.md), `name?`: undefined | string, `props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:984](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L984)*

Create a child node

**Parameters:**

Name | Type |
------ | ------ |
`type` | [NodeType](../enums/_node_.nodetype.md) |
`name?` | undefined &#124; string |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** *[Node](_node_.node.md)‹›*

___

###  createEntities

▸ **createEntities**(`items`: [EntityInfo](../interfaces/_node_.entityinfo.md)[]): *[Node](_node_.node.md)‹›[]*

*Defined in [src/Node.ts:1506](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1506)*

Process text node in current node and parse entities

**Parameters:**

Name | Type |
------ | ------ |
`items` | [EntityInfo](../interfaces/_node_.entityinfo.md)[] |

**Returns:** *[Node](_node_.node.md)‹›[]*

___

###  createEntitiesFromText

▸ **createEntitiesFromText**(`entities`: [EntityInfo](../interfaces/_node_.entityinfo.md)[]): *void*

*Defined in [src/Node.ts:1543](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1543)*

Create entity nodes based on text source position

**Parameters:**

Name | Type |
------ | ------ |
`entities` | [EntityInfo](../interfaces/_node_.entityinfo.md)[] |

**Returns:** *void*

___

###  extractEntities

▸ **extractEntities**(`extractor`: [SingleExtractor](../modules/_node_.md#singleextractor)): *Promise‹void›*

*Defined in [src/Node.ts:1569](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1569)*

Extract entities from text node

**Parameters:**

Name | Type |
------ | ------ |
`extractor` | [SingleExtractor](../modules/_node_.md#singleextractor) |

**Returns:** *Promise‹void›*

▸ **extractEntities**(`extractor`: [ExtractorInterface](../interfaces/_node_.extractorinterface.md)): *Promise‹void›*

*Defined in [src/Node.ts:1570](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1570)*

**Parameters:**

Name | Type |
------ | ------ |
`extractor` | [ExtractorInterface](../interfaces/_node_.extractorinterface.md) |

**Returns:** *Promise‹void›*

___

###  extractNodes

▸ **extractNodes**(`startIndex`: number, `endIndex`: number): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1473](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1473)*

**Parameters:**

Name | Type |
------ | ------ |
`startIndex` | number |
`endIndex` | number |

**Returns:** *[Node](_node_.node.md)‹›*

___

###  find

▸ **find**(`callback`: [FinderCallback](../modules/_node_.md#findercallback)): *[Node](_node_.node.md)‹›[]*

*Defined in [src/Node.ts:1382](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1382)*

Find matched children recursively by callback

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | [FinderCallback](../modules/_node_.md#findercallback) |   |

**Returns:** *[Node](_node_.node.md)‹›[]*

___

###  findBy

▸ **findBy**(`selector`: [NodeSelector](../interfaces/_node_.nodeselector.md), `one`: boolean): *[Node](_node_.node.md) | [Node](_node_.node.md)[] | undefined*

*Defined in [src/Node.ts:1305](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1305)*

Find matched descendants recursively

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`selector` | [NodeSelector](../interfaces/_node_.nodeselector.md) | {} | Node selector object |
`one` | boolean | false | - |

**Returns:** *[Node](_node_.node.md) | [Node](_node_.node.md)[] | undefined*

___

###  findOne

▸ **findOne**(`callback`: [FinderCallback](../modules/_node_.md#findercallback)): *undefined | [Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1390](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1390)*

Find matched children recursively and return the first one

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | [FinderCallback](../modules/_node_.md#findercallback) |   |

**Returns:** *undefined | [Node](_node_.node.md)‹›*

___

###  findOneBy

▸ **findOneBy**(`selector`: [NodeSelector](../interfaces/_node_.nodeselector.md)): *[Node](_node_.node.md)*

*Defined in [src/Node.ts:1349](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1349)*

Find nodes by selector recursively and return the first one

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`selector` | [NodeSelector](../interfaces/_node_.nodeselector.md) | {} |   |

**Returns:** *[Node](_node_.node.md)*

___

###  findTextByRange

▸ **findTextByRange**(`start`: number, `end`: number): *[Node](_node_.node.md) | undefined*

*Defined in [src/Node.ts:1358](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1358)*

Find matched text node by text source range

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | - |
`end` | number |   |

**Returns:** *[Node](_node_.node.md) | undefined*

___

###  flatten

▸ **flatten**(): *undefined | [Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1491](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1491)*

Remove a element and move its children to its parent

**Returns:** *undefined | [Node](_node_.node.md)‹›*

___

###  getAttribute

▸ **getAttribute**(`key`: string): *any*

*Defined in [src/Node.ts:1172](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1172)*

Get attribute value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string |   |

**Returns:** *any*

___

###  getMetadata

▸ **getMetadata**(`key`: string): *any*

*Defined in [src/Node.ts:1218](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1218)*

Get metadata value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string |   |

**Returns:** *any*

___

###  getNodeById

▸ **getNodeById**(`id`: string): *undefined | [Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1296](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1296)*

Get node by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string |   |

**Returns:** *undefined | [Node](_node_.node.md)‹›*

___

###  getRootNode

▸ **getRootNode**(): *undefined | [Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:840](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L840)*

Property indicates if the root is root (which has no children)

**Returns:** *undefined | [Node](_node_.node.md)‹›*

___

###  hasAttribute

▸ **hasAttribute**(`key`: string): *boolean*

*Defined in [src/Node.ts:1180](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1180)*

Check if a specified attribute key exists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string |   |

**Returns:** *boolean*

___

###  hasChild

▸ **hasChild**(): *boolean*

*Defined in [src/Node.ts:928](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L928)*

Check if this node has any children

**Returns:** *boolean*

___

###  hasLabel

▸ **hasLabel**(`label`: string): *boolean*

*Defined in [src/Node.ts:1262](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1262)*

Check if the node has specified label

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`label` | string |   |

**Returns:** *boolean*

___

###  hasMetadata

▸ **hasMetadata**(`key`: string): *boolean*

*Defined in [src/Node.ts:1241](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1241)*

Check if a specified metadata key exists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string |   |

**Returns:** *boolean*

___

###  insertAfter

▸ **insertAfter**(`node`: [Node](_node_.node.md), `ref`: [Node](_node_.node.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1112](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1112)*

Insert a node after another

**`see`** https://developer.mozilla.org/en-US/docs/Web/API/Node/insertAfter

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](_node_.node.md) | Node to be inserted |
`ref` | [Node](_node_.node.md) | A child node to be referenced  |

**Returns:** *[Node](_node_.node.md)‹›*

___

###  insertAt

▸ **insertAt**(`node`: [Node](_node_.node.md), `index`: number): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1076](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1076)*

Insert a node at specified position

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](_node_.node.md) | - |
`index` | number |   |

**Returns:** *[Node](_node_.node.md)‹›*

___

###  insertBefore

▸ **insertBefore**(`node`: [Node](_node_.node.md), `ref`: [Node](_node_.node.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1099](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1099)*

Insert a node before another

**`see`** https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](_node_.node.md) | Node to be inserted |
`ref` | [Node](_node_.node.md) | A child node to be referenced  |

**Returns:** *[Node](_node_.node.md)‹›*

___

###  is

▸ **is**(`expression`: string): *boolean*

*Defined in [src/Node.ts:861](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L861)*

Check node match the expression

**`example`** 
<root>: Root node
<paragraph>: Paragraph node
{BLOCK}: BLOCK tag
{INLINE}: INLINE tag
[PER]: entity

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`expression` | string |   |

**Returns:** *boolean*

___

###  isOnlyDescendantOf

▸ **isOnlyDescendantOf**(`ancestor`: [Node](_node_.node.md)): *boolean*

*Defined in [src/Node.ts:946](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L946)*

Check if the node is only descendant of another node;

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ancestor` | [Node](_node_.node.md) |   |

**Returns:** *boolean*

___

###  isSidedDescendantOf

▸ **isSidedDescendantOf**(`ancestor`: [Node](_node_.node.md), `side`: "start" | "end"): *boolean*

*Defined in [src/Node.ts:964](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L964)*

Check if the node is only descendant of another node;

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ancestor` | [Node](_node_.node.md) |   |
`side` | "start" &#124; "end" | - |

**Returns:** *boolean*

___

###  mergeText

▸ **mergeText**(): *void*

*Defined in [src/Node.ts:1451](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1451)*

Merge neighbor text nodes

**Returns:** *void*

___

###  normalize

▸ **normalize**(): *void*

*Defined in [src/Node.ts:1284](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1284)*

Rebuild text and source position, in case modification has been applied to node

**Returns:** *void*

___

###  prependChild

▸ **prependChild**(`node`: [Node](_node_.node.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:994](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L994)*

Insert a node at the beginning of the children

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](_node_.node.md) |   |

**Returns:** *[Node](_node_.node.md)‹›*

___

###  prependText

▸ **prependText**(`text`: string, `props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *undefined | this*

*Defined in [src/Node.ts:1031](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1031)*

Add text node child at the beginning

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** *undefined | this*

___

###  querySelector

▸ **querySelector**(`selector`: string): *[Node](_node_.node.md) | undefined*

*Defined in [src/Node.ts:1406](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1406)*

Find nodes by selector and return the first one, compared by is()

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`selector` | string |   |

**Returns:** *[Node](_node_.node.md) | undefined*

___

###  querySelectorAll

▸ **querySelectorAll**(`selector`: string): *[Node](_node_.node.md)[]*

*Defined in [src/Node.ts:1398](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1398)*

Find all nodes by selector, compared by is()

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`selector` | string |   |

**Returns:** *[Node](_node_.node.md)[]*

___

###  remove

▸ **remove**(): *void*

*Defined in [src/Node.ts:1044](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1044)*

Remove node from tree

**Returns:** *void*

___

###  removeAttribute

▸ **removeAttribute**(`key`: string): *void*

*Defined in [src/Node.ts:1188](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1188)*

Remove an attribute

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string |   |

**Returns:** *void*

___

###  removeChild

▸ **removeChild**(`child`: [Node](_node_.node.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1054](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1054)*

Remove one child

**Parameters:**

Name | Type |
------ | ------ |
`child` | [Node](_node_.node.md) |

**Returns:** *[Node](_node_.node.md)‹›*

___

###  removeChildAt

▸ **removeChildAt**(`index`: number): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1064](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1064)*

Remove one child by index

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number |   |

**Returns:** *[Node](_node_.node.md)‹›*

___

###  removeEntity

▸ **removeEntity**(): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1598](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1598)*

Remove wrapping entity and put text back

**Returns:** *[Node](_node_.node.md)‹›*

___

###  removeLabel

▸ **removeLabel**(`label`: string): *void*

*Defined in [src/Node.ts:1270](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1270)*

Remove label

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`label` | string |   |

**Returns:** *void*

___

###  removeMetadata

▸ **removeMetadata**(`key`: string): *void*

*Defined in [src/Node.ts:1226](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1226)*

Remove a metadata

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string |   |

**Returns:** *void*

___

###  replaceChild

▸ **replaceChild**(`newChild`: [Node](_node_.node.md), `oldChild`: [Node](_node_.node.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1125](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1125)*

Replace a child with another node, assuming current node is a parent

**Parameters:**

Name | Type |
------ | ------ |
`newChild` | [Node](_node_.node.md) |
`oldChild` | [Node](_node_.node.md) |

**Returns:** *[Node](_node_.node.md)‹›*

The replaced child

___

###  replaceWith

▸ **replaceWith**(`node`: [Node](_node_.node.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:1142](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1142)*

Replace current child node with another node, assuming current node is child

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](_node_.node.md) | Node to be replaced with  |

**Returns:** *[Node](_node_.node.md)‹›*

___

###  setAttribute

▸ **setAttribute**(`key`: string, `value`: any): *void*

*Defined in [src/Node.ts:1156](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1156)*

Set single attribute value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Attribute key |
`value` | any | Attribute value  |

**Returns:** *void*

___

###  setAttributes

▸ **setAttributes**(`data`: [KeyValueMap](../modules/_node_.md#keyvaluemap)): *void*

*Defined in [src/Node.ts:1164](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1164)*

Set multiple attributes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [KeyValueMap](../modules/_node_.md#keyvaluemap) | Key-value pair  |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`key`: [KeyValueMap](../modules/_node_.md#keyvaluemap)): *void*

*Defined in [src/Node.ts:1204](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1204)*

Set single metadata value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | [KeyValueMap](../modules/_node_.md#keyvaluemap) | Key or key-value pair |

**Returns:** *void*

▸ **setMetadata**(`key`: string, `value`: any): *void*

*Defined in [src/Node.ts:1205](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1205)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*

___

###  splitText

▸ **splitText**(`separator`: RegExp | string, `tagName`: string, `props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *void*

*Defined in [src/Node.ts:1418](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1418)*

Split node text into tag wrapped sections, e.g. splitting sentences

**`example`** 
node.splitText('!?.');

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`separator` | RegExp &#124; string | - | RegExp or character list in string, to split |
`tagName` | string | "INLINE" | Custom tag name, like `'SENTENCE'`  |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) | - | - |

**Returns:** *void*

___

###  toJSON

▸ **toJSON**(`options`: [JsonOptions](../interfaces/_node_.jsonoptions.md)): *[JsonNode](../interfaces/_node_.jsonnode.md)*

*Defined in [src/Node.ts:1645](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1645)*

Convert node to JSON serializable object

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [JsonOptions](../interfaces/_node_.jsonoptions.md) | {} |   |

**Returns:** *[JsonNode](../interfaces/_node_.jsonnode.md)*

___

###  toSource

▸ **toSource**(`options`: [StringifyOptions](../interfaces/_util_.stringifyoptions.md)): *string*

*Defined in [src/Node.ts:1637](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1637)*

Build source code of the node

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [StringifyOptions](../interfaces/_util_.stringifyoptions.md) | {} |

**Returns:** *string*

___

###  toString

▸ **toString**(`options?`: [StringifyOptions](../interfaces/_util_.stringifyoptions.md)): *string*

*Defined in [src/Node.ts:1629](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L1629)*

Build plain text of the node (stripping tags & entities)

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [StringifyOptions](../interfaces/_util_.stringifyoptions.md) |

**Returns:** *string*

___

### `Static` create

▸ **create**(`type`: [NodeType](../enums/_node_.nodetype.md), `name?`: undefined | string, `props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:257](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L257)*

Create node, shortcut for constructor

**Parameters:**

Name | Type |
------ | ------ |
`type` | [NodeType](../enums/_node_.nodetype.md) |
`name?` | undefined &#124; string |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** *[Node](_node_.node.md)‹›*

___

### `Static` createBlock

▸ **createBlock**(`props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:298](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L298)*

Create block tag

**Parameters:**

Name | Type |
------ | ------ |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** *[Node](_node_.node.md)‹›*

___

### `Static` createBlockByRange

▸ **createBlockByRange**(`range`: [NodeRange](../interfaces/_node_.noderange.md), `tagName`: string, `props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *undefined | [Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:409](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L409)*

Find the common ancestor of the range, and creates a wrapping block (or tag) with the nodes
within the range in it.

If the range is within a block (BLOCK tag or paragraph), a inline tag is created, otherwise
a BLOCK tag is created.

If a BLOCK tag is used, `startOffset` and `endOffset` will be ignored, to avoid block overlap.

If either `startNode` or `endNode` is not direct child of common ancestor nor the node is not
sided aligned with the direct child of the ancestor, text offset will be ignored to avoid
split of tags or entity.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`range` | [NodeRange](../interfaces/_node_.noderange.md) | - | A range object which contains start and end node, alone with their text offset |
`tagName` | string | "INLINE" | If inline tag is needed, specify the tag name instead of default `'INLINE'`  |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) | - | Custom tag props |

**Returns:** *undefined | [Node](_node_.node.md)‹›*

___

### `Static` createFragment

▸ **createFragment**(): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:329](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L329)*

Creating fragment node

**Returns:** *[Node](_node_.node.md)‹›*

___

### `Static` createInlineBlock

▸ **createInlineBlock**(`props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:306](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L306)*

Create inline block tag

**Parameters:**

Name | Type |
------ | ------ |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** *[Node](_node_.node.md)‹›*

___

### `Static` createParagraph

▸ **createParagraph**(`props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:265](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L265)*

Create paragraph node

**Parameters:**

Name | Type |
------ | ------ |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** *[Node](_node_.node.md)‹›*

___

### `Static` createRoot

▸ **createRoot**(`props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:273](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L273)*

Create root node

**Parameters:**

Name | Type |
------ | ------ |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** *[Node](_node_.node.md)‹›*

___

### `Static` createTag

▸ **createTag**(`tagName`: string, `props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:290](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L290)*

Create a common tag

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tagName` | string | Tag name, e.g. `'BLOCK'`, `'INLINE'`, `'SENTENCE'` |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) | - |

**Returns:** *[Node](_node_.node.md)‹›*

___

### `Static` createText

▸ **createText**(`content`: string, `props?`: [NodeProps](../interfaces/_node_.nodeprops.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:281](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L281)*

Create text node

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |
`props?` | [NodeProps](../interfaces/_node_.nodeprops.md) |

**Returns:** *[Node](_node_.node.md)‹›*

___

### `Static` findCommonAncestor

▸ **findCommonAncestor**(`n1`: [Node](_node_.node.md), `n2`: [Node](_node_.node.md)): *object | undefined*

*Defined in [src/Node.ts:372](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L372)*

**Parameters:**

Name | Type |
------ | ------ |
`n1` | [Node](_node_.node.md) |
`n2` | [Node](_node_.node.md) |

**Returns:** *object | undefined*

___

### `Static` fromJSON

▸ **fromJSON**(`json`: [JsonNode](../interfaces/_node_.jsonnode.md)): *[Node](_node_.node.md)‹›*

*Defined in [src/Node.ts:322](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L322)*

Create node from json serializable data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`json` | [JsonNode](../interfaces/_node_.jsonnode.md) |   |

**Returns:** *[Node](_node_.node.md)‹›*

___

### `Static` fromSource

▸ **fromSource**(`source`: string): *[Node](_node_.node.md)*

*Defined in [src/Node.ts:314](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L314)*

Create node instance from ZAML source

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string |   |

**Returns:** *[Node](_node_.node.md)*

___

### `Static` validChild

▸ **validChild**(`node`: any): *void*

*Defined in [src/Node.ts:357](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L357)*

Check if a node could be parent

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | any |   |

**Returns:** *void*

___

### `Static` validNode

▸ **validNode**(`node`: any): *void*

*Defined in [src/Node.ts:337](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L337)*

Check if a node is valid

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | any |   |

**Returns:** *void*

___

### `Static` validParent

▸ **validParent**(`node`: any): *void*

*Defined in [src/Node.ts:347](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L347)*

Check if a node could be parent

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | any |   |

**Returns:** *void*

___

### `Static` validTreeRule

▸ **validTreeRule**(`parent`: [Node](_node_.node.md), `child`: [Node](_node_.node.md)): *void*

*Defined in [src/Node.ts:363](https://github.com/nexushubs/zaml-lang/blob/226a4c7/packages/zaml-parser/src/Node.ts#L363)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [Node](_node_.node.md) |
`child` | [Node](_node_.node.md) |

**Returns:** *void*
