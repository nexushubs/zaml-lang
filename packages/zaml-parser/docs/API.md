## Modules

<dl>
<dt><a href="#module_zaml-parser">zaml-parser</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#Node">Node</a></dt>
<dd><p>AST node class</p>
</dd>
<dt><a href="#TextLine">TextLine</a></dt>
<dd><p>Class holding text line data</p>
</dd>
<dt><a href="#TextStream">TextStream</a></dt>
<dd><p>Stream like text string</p>
</dd>
<dt><a href="#Tokenizer">Tokenizer</a></dt>
<dd><p>Tokenizer class</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#recursiveFinder">recursiveFinder(node, tester, [result])</a> ⇒ <code><a href="#Node">Array.&lt;Node&gt;</a></code></dt>
<dd><p>Recursive node finder</p>
</dd>
<dt><a href="#formatValue">formatValue(value)</a></dt>
<dd><p>Stringify attribute value</p>
</dd>
<dt><a href="#parseValue">parseValue(value)</a></dt>
<dd><p>Parse attribute value</p>
</dd>
<dt><a href="#spacer">spacer(space, indent)</a></dt>
<dd><p>Generate indent spaces</p>
</dd>
<dt><a href="#stringify">stringify(node, options, [indent])</a></dt>
<dd><p>Stringify node</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#NodeType">NodeType</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TextPattern">TextPattern</a> : <code>string</code> | <code>RegExp</code></dt>
<dd></dd>
<dt><a href="#TokenizingState">TokenizingState</a> : <code>number</code></dt>
<dd></dd>
</dl>

<a name="module_zaml-parser"></a>

## zaml-parser

* [zaml-parser](#module_zaml-parser)
    * ~~[~tokenize](#module_zaml-parser..tokenize)~~
    * [~parse(text)](#module_zaml-parser..parse) ⇒ [<code>Node</code>](#Node)

<a name="module_zaml-parser..tokenize"></a>

### ~~zaml-parser~tokenize~~
***Deprecated***

Parse ZAML source into node

**Kind**: inner constant of [<code>zaml-parser</code>](#module_zaml-parser)  
**Params**

- text <code>string</code> - Source string

<a name="module_zaml-parser..parse"></a>

### zaml-parser~parse(text) ⇒ [<code>Node</code>](#Node)
Parse ZAML source into node

**Kind**: inner method of [<code>zaml-parser</code>](#module_zaml-parser)  
**Params**

- text <code>string</code> - ZAML source string

<a name="Node"></a>

## Node
AST node class

**Kind**: global class  

* [Node](#Node)
    * [new Node(type, [name], [options])](#new_Node_new)
    * _instance_
        * [.type](#Node+type) : [<code>NodeType</code>](#NodeType)
        * [.name](#Node+name) : <code>string</code>
        * [.start](#Node+start) : <code>number</code>
        * [.end](#Node+end) : <code>number</code>
        * [.textStart](#Node+textStart) : <code>number</code>
        * [.textEnd](#Node+textEnd) : <code>number</code>
        * [.content](#Node+content) : <code>string</code>
        * [.children](#Node+children) : [<code>Array.&lt;Node&gt;</code>](#Node)
        * [.attributes](#Node+attributes) : <code>Object.&lt;string, any&gt;</code>
        * [.isBlock](#Node+isBlock) ⇒ <code>boolean</code>
        * [.parentNode](#Node+parentNode)
        * [.childNodes](#Node+childNodes)
        * [.isRoot](#Node+isRoot) ⇒ <code>boolean</code>
        * [.source](#Node+source) ⇒ <code>string</code>
        * [.innerText](#Node+innerText) ⇒ <code>string</code>
        * [.isFirstChild](#Node+isFirstChild) ⇒ <code>boolean</code>
        * [.isLastChild](#Node+isLastChild) ⇒ <code>boolean</code>
        * [.siblings](#Node+siblings) ⇒ [<code>Array.&lt;Node&gt;</code>](#Node)
        * [.childIndex](#Node+childIndex) ⇒ <code>number</code>
        * [.nextSibling](#Node+nextSibling) ⇒ [<code>Node</code>](#Node)
        * [.previousSibling](#Node+previousSibling) ⇒ [<code>Node</code>](#Node)
        * [.getRootNode()](#Node+getRootNode) ⇒ <code>boolean</code>
        * [.is(expression)](#Node+is) ⇒ <code>boolean</code>
        * [.contains(node)](#Node+contains) ⇒ <code>boolean</code>
        * [.hasChild()](#Node+hasChild) ⇒ <code>boolean</code>
        * [.createChild(type, [name], [options])](#Node+createChild) ⇒ [<code>Node</code>](#Node)
        * [.appendChild(node)](#Node+appendChild)
        * [.appendText(text, options)](#Node+appendText) ⇒ [<code>Node</code>](#Node)
        * [.removeChild(node)](#Node+removeChild) ⇒ [<code>Node</code>](#Node)
        * [.insertAt(node, index)](#Node+insertAt) ⇒ [<code>Node</code>](#Node)
        * [.insertBefore(node, ref)](#Node+insertBefore) ⇒ [<code>Node</code>](#Node)
        * [.insertAfter(node, ref)](#Node+insertAfter) ⇒ [<code>Node</code>](#Node)
        * [.replaceChild(newChild, oldChild)](#Node+replaceChild) ⇒ [<code>Node</code>](#Node)
        * [.replaceWith(node)](#Node+replaceWith) ⇒ [<code>Node</code>](#Node)
        * [.setAttribute(key, value)](#Node+setAttribute)
        * [.setAttributes(data)](#Node+setAttributes)
        * [.getAttribute(key)](#Node+getAttribute)
        * [.removeAttribute(key)](#Node+removeAttribute)
        * [.normalize()](#Node+normalize)
        * [.findBy(selector)](#Node+findBy) ⇒ [<code>Array.&lt;Node&gt;</code>](#Node)
        * [.findTextByRange(start, end)](#Node+findTextByRange) ⇒ [<code>Node</code>](#Node)
        * [.find(callback)](#Node+find) ⇒ [<code>Node</code>](#Node)
        * [.createEntities(items)](#Node+createEntities)
        * [.createEntitiesFromText(entities)](#Node+createEntitiesFromText)
        * [.extractEntities(extractor)](#Node+extractEntities)
        * [.toString()](#Node+toString) ⇒ <code>string</code>
        * [.toSource(options)](#Node+toSource) ⇒ <code>string</code>
        * [.toJSON(options)](#Node+toJSON) ⇒ <code>object</code>
    * _static_
        * [.create(type, [name], [options])](#Node.create)
        * [.fromSource(source)](#Node.fromSource) ⇒ [<code>Node</code>](#Node)
        * [.fromJSON(data)](#Node.fromJSON) ⇒ [<code>Node</code>](#Node)
        * [.createFragment()](#Node.createFragment) ⇒ [<code>Node</code>](#Node)
        * [.validNode(node)](#Node.validNode)
        * [.validParent(node)](#Node.validParent)
        * [.validChild(node)](#Node.validChild)

<a name="new_Node_new"></a>

### new Node(type, [name], [options])
**Params**

- type [<code>NodeType</code>](#NodeType)
- [name] <code>string</code> <code> = null</code>
- [options] <code>object</code>
    - [.source] <code>string</code>
    - [.start] <code>number</code>
    - [.end] <code>number</code>
    - [.attributes] <code>Object.&lt;string, any&gt;</code>
    - [.parent] [<code>Node</code>](#Node)

<a name="Node+type"></a>

### node.type : [<code>NodeType</code>](#NodeType)
Node type

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+name"></a>

### node.name : <code>string</code>
Node name, for tag, entity

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+start"></a>

### node.start : <code>number</code>
Start source position to root node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+end"></a>

### node.end : <code>number</code>
End source position to root node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+textStart"></a>

### node.textStart : <code>number</code>
Start text source position to root node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+textEnd"></a>

### node.textEnd : <code>number</code>
End text source position to root node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+content"></a>

### node.content : <code>string</code>
Text content, only for text node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+children"></a>

### node.children : [<code>Array.&lt;Node&gt;</code>](#Node)
Child nodes, only for block node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+attributes"></a>

### node.attributes : <code>Object.&lt;string, any&gt;</code>
Attributes, for root, tag, entity node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+isBlock"></a>

### node.isBlock ⇒ <code>boolean</code>
Property indicates if the node is a block (wrapping other nodes)

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+parentNode"></a>

### node.parentNode
Get parent node, alias for node.parent

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+childNodes"></a>

### node.childNodes
Get child nodes, alias for node.children

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+isRoot"></a>

### node.isRoot ⇒ <code>boolean</code>
If the node is root

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+source"></a>

### node.source ⇒ <code>string</code>
Get source code of the node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+innerText"></a>

### node.innerText ⇒ <code>string</code>
Get node inner text

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+isFirstChild"></a>

### node.isFirstChild ⇒ <code>boolean</code>
Check if the node is the first child of its parent

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+isLastChild"></a>

### node.isLastChild ⇒ <code>boolean</code>
Check if the node is the last child of its parent

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+siblings"></a>

### node.siblings ⇒ [<code>Array.&lt;Node&gt;</code>](#Node)
Siblings from same parent

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+childIndex"></a>

### node.childIndex ⇒ <code>number</code>
Get index of parent children

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+nextSibling"></a>

### node.nextSibling ⇒ [<code>Node</code>](#Node)
Next sibling node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+previousSibling"></a>

### node.previousSibling ⇒ [<code>Node</code>](#Node)
Previous sibling node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+getRootNode"></a>

### node.getRootNode() ⇒ <code>boolean</code>
Property indicates if the root is root (which has no children)

**Kind**: instance method of [<code>Node</code>](#Node)  
<a name="Node+is"></a>

### node.is(expression) ⇒ <code>boolean</code>
Check node match the expression

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- expression <code>string</code>

**Example**  
```js
`block`: tag
`@loc`: entity
```
<a name="Node+contains"></a>

### node.contains(node) ⇒ <code>boolean</code>
whether a node is a descendant of a given node

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- node [<code>Node</code>](#Node)

<a name="Node+hasChild"></a>

### node.hasChild() ⇒ <code>boolean</code>
Check if this node has any children

**Kind**: instance method of [<code>Node</code>](#Node)  
<a name="Node+createChild"></a>

### node.createChild(type, [name], [options]) ⇒ [<code>Node</code>](#Node)
**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- type [<code>NodeType</code>](#NodeType)
- [name] <code>string</code>
- [options] <code>object</code>

<a name="Node+appendChild"></a>

### node.appendChild(node)
Append a node to children list

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- node [<code>Node</code>](#Node)

<a name="Node+appendText"></a>

### node.appendText(text, options) ⇒ [<code>Node</code>](#Node)
Append text node child

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- text <code>string</code>
- options <code>object</code>

<a name="Node+removeChild"></a>

### node.removeChild(node) ⇒ [<code>Node</code>](#Node)
Remove 1 or more children

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- node [<code>Node</code>](#Node)

<a name="Node+insertAt"></a>

### node.insertAt(node, index) ⇒ [<code>Node</code>](#Node)
Insert a node at specified position

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- node [<code>Node</code>](#Node)
- index <code>number</code>

<a name="Node+insertBefore"></a>

### node.insertBefore(node, ref) ⇒ [<code>Node</code>](#Node)
Insert a node before another

**Kind**: instance method of [<code>Node</code>](#Node)  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore  
**Params**

- node [<code>Node</code>](#Node)
- ref [<code>Node</code>](#Node)

<a name="Node+insertAfter"></a>

### node.insertAfter(node, ref) ⇒ [<code>Node</code>](#Node)
Insert a node after another

**Kind**: instance method of [<code>Node</code>](#Node)  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Node/insertAfter  
**Params**

- node [<code>Node</code>](#Node)
- ref [<code>Node</code>](#Node)

<a name="Node+replaceChild"></a>

### node.replaceChild(newChild, oldChild) ⇒ [<code>Node</code>](#Node)
Replace a child with another node, assuming current node is a parent

**Kind**: instance method of [<code>Node</code>](#Node)  
**Returns**: [<code>Node</code>](#Node) - the replaced child  
**Params**

- newChild [<code>Node</code>](#Node)
- oldChild [<code>Node</code>](#Node)

<a name="Node+replaceWith"></a>

### node.replaceWith(node) ⇒ [<code>Node</code>](#Node)
Replace current child node with another node, assuming current node is child

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- node [<code>Node</code>](#Node)

<a name="Node+setAttribute"></a>

### node.setAttribute(key, value)
Set attribute

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- key <code>string</code> - Attribute key
- value <code>any</code> - Attribute value

<a name="Node+setAttributes"></a>

### node.setAttributes(data)
Set multiple attributes

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- data <code>Object.&lt;string, any&gt;</code> - Key - value pair

<a name="Node+getAttribute"></a>

### node.getAttribute(key)
Get attribute value

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- key <code>string</code>

<a name="Node+removeAttribute"></a>

### node.removeAttribute(key)
Remove an attribute

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- key <code>string</code>

<a name="Node+normalize"></a>

### node.normalize()
Rebuild text and source position, in case modification has been applied to node

**Kind**: instance method of [<code>Node</code>](#Node)  
<a name="Node+findBy"></a>

### node.findBy(selector) ⇒ [<code>Array.&lt;Node&gt;</code>](#Node)
Find matched descendants recursively

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- selector <code>object</code>
    - [.type] [<code>NodeType</code>](#NodeType) - Node type
    - [.name] <code>string</code> - Node name
    - [.text] <code>RegExp</code> | <code>string</code> - Including text or pattern
    - [.source] <code>RegExp</code> | <code>string</code> - Pattern to match source

<a name="Node+findTextByRange"></a>

### node.findTextByRange(start, end) ⇒ [<code>Node</code>](#Node)
Find matched text node by text source range

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- start <code>number</code>
- end <code>number</code>

<a name="Node+find"></a>

### node.find(callback) ⇒ [<code>Node</code>](#Node)
Find matched children recursively by callback

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- callback <code>NodeTester</code>

<a name="Node+createEntities"></a>

### node.createEntities(items)
Process text node in current node and parse entities

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- items <code>Array.&lt;{start:number, end:number, type:string, attributes:any}&gt;</code>

<a name="Node+createEntitiesFromText"></a>

### node.createEntitiesFromText(entities)
Create entity nodes based on text source position

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- entities <code>Array.&lt;{start:number, end:number, type:string, attributes:any}&gt;</code>

<a name="Node+extractEntities"></a>

### node.extractEntities(extractor)
Extract entities from text node

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- extractor <code>function</code> | <code>Object</code>

<a name="Node+toString"></a>

### node.toString() ⇒ <code>string</code>
Build plain text of the node (stripping tags & entities)

**Kind**: instance method of [<code>Node</code>](#Node)  
<a name="Node+toSource"></a>

### node.toSource(options) ⇒ <code>string</code>
Build source code of the node

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- options <code>object</code>
    - [.space] <code>number</code> - Source indenting space

<a name="Node+toJSON"></a>

### node.toJSON(options) ⇒ <code>object</code>
Convert node to JSON serializable object

**Kind**: instance method of [<code>Node</code>](#Node)  
**Params**

- options <code>object</code>
    - [.position] <code>boolean</code> <code> = false</code>
    - [.textPosition] <code>boolean</code> <code> = false</code>

<a name="Node.create"></a>

### Node.create(type, [name], [options])
**Kind**: static method of [<code>Node</code>](#Node)  
**Params**

- type [<code>NodeType</code>](#NodeType)
- [name] <code>string</code>
- [options] <code>object</code>

<a name="Node.fromSource"></a>

### Node.fromSource(source) ⇒ [<code>Node</code>](#Node)
Create node instance from ZAML source

**Kind**: static method of [<code>Node</code>](#Node)  
**Params**

- source <code>string</code>

<a name="Node.fromJSON"></a>

### Node.fromJSON(data) ⇒ [<code>Node</code>](#Node)
Create node from json serializable data

**Kind**: static method of [<code>Node</code>](#Node)  
**Params**

- data <code>object</code>

<a name="Node.createFragment"></a>

### Node.createFragment() ⇒ [<code>Node</code>](#Node)
Creating fragment node

**Kind**: static method of [<code>Node</code>](#Node)  
<a name="Node.validNode"></a>

### Node.validNode(node)
Check if a node is valid

**Kind**: static method of [<code>Node</code>](#Node)  
**Params**

- node <code>any</code>

<a name="Node.validParent"></a>

### Node.validParent(node)
Check if a node could be parent

**Kind**: static method of [<code>Node</code>](#Node)  
**Params**

- node <code>any</code>

<a name="Node.validChild"></a>

### Node.validChild(node)
Check if a node could be parent

**Kind**: static method of [<code>Node</code>](#Node)  
**Params**

- node <code>any</code>

<a name="TextLine"></a>

## TextLine
Class holding text line data

**Kind**: global class  

* [TextLine](#TextLine)
    * [new TextLine(lines, text, ln, offset, length)](#new_TextLine_new)
    * [.lines](#TextLine+lines) : [<code>Array.&lt;TextLine&gt;</code>](#TextLine)
    * [.text](#TextLine+text) : <code>string</code>
    * [.ln](#TextLine+ln) : <code>number</code>
    * [.offset](#TextLine+offset) : <code>number</code>
    * [.length](#TextLine+length) ⇒ <code>number</code>
    * [.start](#TextLine+start) ⇒ <code>number</code>
    * [.end](#TextLine+end) ⇒ <code>number</code>
    * [.prev()](#TextLine+prev) ⇒ [<code>TextLine</code>](#TextLine)
    * [.next()](#TextLine+next) ⇒ [<code>TextLine</code>](#TextLine)
    * [.toJSON()](#TextLine+toJSON) ⇒ <code>Object</code>

<a name="new_TextLine_new"></a>

### new TextLine(lines, text, ln, offset, length)
**Params**

- lines [<code>Array.&lt;TextLine&gt;</code>](#TextLine)
- text <code>string</code>
- ln <code>number</code>
- offset <code>number</code>
- length <code>number</code>

<a name="TextLine+lines"></a>

### line.lines : [<code>Array.&lt;TextLine&gt;</code>](#TextLine)
**Kind**: instance property of [<code>TextLine</code>](#TextLine)  
<a name="TextLine+text"></a>

### line.text : <code>string</code>
**Kind**: instance property of [<code>TextLine</code>](#TextLine)  
<a name="TextLine+ln"></a>

### line.ln : <code>number</code>
**Kind**: instance property of [<code>TextLine</code>](#TextLine)  
<a name="TextLine+offset"></a>

### line.offset : <code>number</code>
**Kind**: instance property of [<code>TextLine</code>](#TextLine)  
<a name="TextLine+length"></a>

### line.length ⇒ <code>number</code>
Get text length of the line

**Kind**: instance property of [<code>TextLine</code>](#TextLine)  
<a name="TextLine+start"></a>

### line.start ⇒ <code>number</code>
Start position of the line, alias of `offset`

**Kind**: instance property of [<code>TextLine</code>](#TextLine)  
<a name="TextLine+end"></a>

### line.end ⇒ <code>number</code>
End position of the line

**Kind**: instance property of [<code>TextLine</code>](#TextLine)  
<a name="TextLine+prev"></a>

### line.prev() ⇒ [<code>TextLine</code>](#TextLine)
Get the previous line

**Kind**: instance method of [<code>TextLine</code>](#TextLine)  
<a name="TextLine+next"></a>

### line.next() ⇒ [<code>TextLine</code>](#TextLine)
Get the next line

**Kind**: instance method of [<code>TextLine</code>](#TextLine)  
<a name="TextLine+toJSON"></a>

### line.toJSON() ⇒ <code>Object</code>
Convert to JSON serializable object

**Kind**: instance method of [<code>TextLine</code>](#TextLine)  
<a name="TextStream"></a>

## TextStream
Stream like text string

**Kind**: global class  

* [TextStream](#TextStream)
    * [.pos](#TextStream+pos) : <code>number</code>
    * [.text](#TextStream+text) : <code>string</code>
    * [.tabSize](#TextStream+tabSize) : <code>number</code>
    * [.lines](#TextStream+lines) : [<code>Array.&lt;TextLine&gt;</code>](#TextLine)
    * [.markers](#TextStream+markers) : <code>Object</code>
    * [.cursorStack](#TextStream+cursorStack) : <code>Array.&lt;number&gt;</code>
    * [.init()](#TextStream+init)
    * [.getPosition(pos)](#TextStream+getPosition) ⇒ <code>Object</code>
    * [.sol([trimSpaces])](#TextStream+sol) ⇒ <code>boolean</code>
    * [.eol([trimSpaces])](#TextStream+eol) ⇒ <code>boolean</code>
    * [.eof([pos])](#TextStream+eof) ⇒ <code>boolean</code>
    * [.peek()](#TextStream+peek) ⇒ <code>string</code>
    * [.next()](#TextStream+next) ⇒ <code>string</code>
    * [.eat(pattern)](#TextStream+eat) ⇒ <code>string</code>
    * [.eatWhile(match)](#TextStream+eatWhile) ⇒ <code>boolean</code>
    * [.eatUntil(pattern)](#TextStream+eatUntil) ⇒ <code>boolean</code>
    * [.eatSpace()](#TextStream+eatSpace) ⇒ <code>boolean</code>
    * [.search(pattern, [options])](#TextStream+search)
    * [.read([n])](#TextStream+read)
    * [.readTo(pattern, [options])](#TextStream+readTo) ⇒ <code>string</code>
    * [.readOver(pattern, options)](#TextStream+readOver) ⇒ <code>string</code>
    * [.readLine()](#TextStream+readLine) ⇒ <code>string</code>
    * [.skipToEnd()](#TextStream+skipToEnd)
    * [.skipTo(pattern, options)](#TextStream+skipTo) ⇒ <code>boolean</code>
    * [.skipOver(pattern)](#TextStream+skipOver) ⇒ <code>boolean</code>
    * [.backUp(n)](#TextStream+backUp)
    * [.match(pattern, [options])](#TextStream+match)
    * [.resetMarker()](#TextStream+resetMarker)
    * [.pushMarker(data, [pos])](#TextStream+pushMarker)
    * [.setMarkerData(data)](#TextStream+setMarkerData)
    * [.getMarkerData()](#TextStream+getMarkerData) ⇒ <code>any</code>
    * [.popMarker([data], [end])](#TextStream+popMarker) ⇒ <code>Object</code>
    * [.pushCursor([pos])](#TextStream+pushCursor)
    * [.popCursor()](#TextStream+popCursor)

<a name="TextStream+pos"></a>

### stream.pos : <code>number</code>
Current cursor position

**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+text"></a>

### stream.text : <code>string</code>
Original text

**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
**Read only**: true  
<a name="TextStream+tabSize"></a>

### stream.tabSize : <code>number</code>
Tab size

**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+lines"></a>

### stream.lines : [<code>Array.&lt;TextLine&gt;</code>](#TextLine)
Lines, separated by line breaks

**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+markers"></a>

### stream.markers : <code>Object</code>
Stream markers, used by `pushMarker()`, `popMarker()`, `setMarkerData()`

**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+cursorStack"></a>

### stream.cursorStack : <code>Array.&lt;number&gt;</code>
Cursor stack, used by `pushCursor()` and `popCursor`

**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+init"></a>

### stream.init()
Prepare line indexes

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+getPosition"></a>

### stream.getPosition(pos) ⇒ <code>Object</code>
Get line and column position of the cursor

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- pos <code>number</code> - Cursor position of the text

<a name="TextStream+sol"></a>

### stream.sol([trimSpaces]) ⇒ <code>boolean</code>
Check if cursor is at the start of a line

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- [trimSpaces] <code>boolean</code> <code> = false</code> - Trim starting spaces

<a name="TextStream+eol"></a>

### stream.eol([trimSpaces]) ⇒ <code>boolean</code>
Check if cursor is at the end of a line

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- [trimSpaces] <code>boolean</code> <code> = false</code> - Trim ending spaces

<a name="TextStream+eof"></a>

### stream.eof([pos]) ⇒ <code>boolean</code>
Check if cursor is at the end of whole text

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- [pos] <code>number</code>

<a name="TextStream+peek"></a>

### stream.peek() ⇒ <code>string</code>
Get one next char, but keep the cursor position (if available)

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - The next char  
<a name="TextStream+next"></a>

### stream.next() ⇒ <code>string</code>
Get one next char, and move cursor forward (if available)

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - The next char  
<a name="TextStream+eat"></a>

### stream.eat(pattern) ⇒ <code>string</code>
Consumes one char if the next char fitting the pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - The char been eaten  
**Params**

- pattern [<code>TextPattern</code>](#TextPattern)

<a name="TextStream+eatWhile"></a>

### stream.eatWhile(match) ⇒ <code>boolean</code>
Consumes chars while fitting the pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>boolean</code> - If any chars been consumed  
**Params**

- match [<code>TextPattern</code>](#TextPattern)

<a name="TextStream+eatUntil"></a>

### stream.eatUntil(pattern) ⇒ <code>boolean</code>
Consumes chars until the first char not fitting the pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>boolean</code> - If any chars been consumed  
**Params**

- pattern [<code>TextPattern</code>](#TextPattern) - char or pattern

<a name="TextStream+eatSpace"></a>

### stream.eatSpace() ⇒ <code>boolean</code>
Consumes spaces

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>boolean</code> - If any space has been consumed  
<a name="TextStream+search"></a>

### stream.search(pattern, [options])
Find position of matched text to the pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- pattern [<code>TextPattern</code>](#TextPattern)
- [options] <code>object</code>
    - [.caseInsensitive] <code>boolean</code> <code> = false</code> - Case insensitive for string pattern

<a name="TextStream+read"></a>

### stream.read([n])
Read n chars after current cursor

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- [n] <code>number</code> <code> = 1</code> - Number of chars to read

<a name="TextStream+readTo"></a>

### stream.readTo(pattern, [options]) ⇒ <code>string</code>
Read to text or pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - Sub-text after current cursor and before (or contains) matched text  
**Params**

- pattern [<code>TextPattern</code>](#TextPattern)
- [options] <code>object</code>
    - [.toEOL] <code>boolean</code> <code> = false</code> - If no matched text is found, read to the end
    - [.toEOF] <code>boolean</code> <code> = false</code> - If read to matched text or to the end of line
    - [.consume] <code>boolean</code> <code> = false</code> - Read to end of the matched text
    - [.skipMatched] <code>boolean</code> <code> = false</code> - Read to the matched text, move cursor to the end

<a name="TextStream+readOver"></a>

### stream.readOver(pattern, options) ⇒ <code>string</code>
Read to pattern (contains the matched text)

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - Sub-text after current cursor and until the end of matched text  
**Params**

- pattern [<code>TextPattern</code>](#TextPattern) - Text to find or pattern
- options <code>object</code> - Match options

<a name="TextStream+readLine"></a>

### stream.readLine() ⇒ <code>string</code>
Read one line

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - Text containing one line (not including line break)  
<a name="TextStream+skipToEnd"></a>

### stream.skipToEnd()
Move cursor to end of text

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+skipTo"></a>

### stream.skipTo(pattern, options) ⇒ <code>boolean</code>
Skip to the beginning of matched text

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- pattern [<code>TextPattern</code>](#TextPattern)
- options <code>object</code>

<a name="TextStream+skipOver"></a>

### stream.skipOver(pattern) ⇒ <code>boolean</code>
Skip to the end of matched text

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- pattern [<code>TextPattern</code>](#TextPattern)

<a name="TextStream+backUp"></a>

### stream.backUp(n)
Move cursor back

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- n <code>number</code> - Steps

<a name="TextStream+match"></a>

### stream.match(pattern, [options])
Check if rest text begins with pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- pattern [<code>TextPattern</code>](#TextPattern)
- [options] <code>object</code>
    - [.consume] <code>boolean</code> <code> = false</code>
    - [.caseInsensitive] <code>boolean</code> <code> = false</code>

<a name="TextStream+resetMarker"></a>

### stream.resetMarker()
Reset the marker stack

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+pushMarker"></a>

### stream.pushMarker(data, [pos])
Add a marker to stack

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- data <code>any</code>
- [pos] <code>number</code>

<a name="TextStream+setMarkerData"></a>

### stream.setMarkerData(data)
Set data for current marker

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- data <code>Object.&lt;string, any&gt;</code>

<a name="TextStream+getMarkerData"></a>

### stream.getMarkerData() ⇒ <code>any</code>
Get data of current markder

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+popMarker"></a>

### stream.popMarker([data], [end]) ⇒ <code>Object</code>
Return a combined structure of text and it's position according to the previously set start
marker

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- [data] <code>object</code> - Additional data
- [end] <code>number</code> - End marker, if not set, previous set value will be used

<a name="TextStream+pushCursor"></a>

### stream.pushCursor([pos])
Push current cursor to cursor stack, if new position provided, set current cursor to it

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Params**

- [pos] <code>number</code>

<a name="TextStream+popCursor"></a>

### stream.popCursor()
Pop last from cursor stack and set it to current cursor

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
<a name="Tokenizer"></a>

## Tokenizer
Tokenizer class

**Kind**: global class  

* [Tokenizer](#Tokenizer)
    * [new Tokenizer(stream, [options])](#new_Tokenizer_new)
    * [.process()](#Tokenizer+process) ⇒ [<code>Node</code>](#Node)

<a name="new_Tokenizer_new"></a>

### new Tokenizer(stream, [options])
**Params**

- stream [<code>TextStream</code>](#TextStream)
- [options] <code>object</code> - Constructor options
    - [.verbose] <code>boolean</code> <code> = false</code> - Debug verbose process of tokenizing

<a name="Tokenizer+process"></a>

### tokenizer.process() ⇒ [<code>Node</code>](#Node)
Process a text and parse to AST

**Kind**: instance method of [<code>Tokenizer</code>](#Tokenizer)  
**Returns**: [<code>Node</code>](#Node) - Root node of parsed AST  
<a name="NODE_TYPES"></a>

## NODE\_TYPES : <code>enum</code>
**Kind**: global enum  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| FRAGMENT | [<code>NodeType</code>](#NodeType) | <code>fragment</code> | 
| ROOT | [<code>NodeType</code>](#NodeType) | <code>root</code> | 
| PARAGRAPH | [<code>NodeType</code>](#NodeType) | <code>paragraph</code> | 
| TAG | [<code>NodeType</code>](#NodeType) | <code>tag</code> | 
| ENTITY | [<code>NodeType</code>](#NodeType) | <code>entity</code> | 
| TEXT | [<code>NodeType</code>](#NodeType) | <code>text</code> | 

<a name="STATE"></a>

## STATE : <code>enum</code>
**Kind**: global enum  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| FRONT_MATTER | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| NORMAL | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| START | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| TAG_START | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| TAG_NAME | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| TAG_ATTRIBUTE_LIST | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| TAG_ATTRIBUTE_NAME | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| TAG_ATTRIBUTE_VALUE | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| TAG_ATTRIBUTE_FINISH | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| TAG_END | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| ENTITY_START | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| ENTITY_BODY | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| ENTITY_END | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 
| FINISH | [<code>TokenizingState</code>](#TokenizingState) | <code></code> | 

<a name="recursiveFinder"></a>

## recursiveFinder(node, tester, [result]) ⇒ [<code>Array.&lt;Node&gt;</code>](#Node)
Recursive node finder

**Kind**: global function  
**Params**

- node [<code>Node</code>](#Node)
- tester <code>function</code>
- [result] [<code>Array.&lt;Node&gt;</code>](#Node) <code> = []</code> - Node list

<a name="formatValue"></a>

## formatValue(value)
Stringify attribute value

**Kind**: global function  
**Params**

- value <code>any</code>

<a name="parseValue"></a>

## parseValue(value)
Parse attribute value

**Kind**: global function  
**Params**

- value <code>any</code>

<a name="spacer"></a>

## spacer(space, indent)
Generate indent spaces

**Kind**: global function  
**Params**

- space <code>number</code>
- indent <code>number</code>

<a name="stringify"></a>

## stringify(node, options, [indent])
Stringify node

**Kind**: global function  
**Params**

- node [<code>Node</code>](#Node)
- options <code>object</code>
    - [.space] <code>number</code>
- [indent] <code>number</code> - Initial indent, increases 1 each block

<a name="NodeType"></a>

## NodeType : <code>string</code>
**Kind**: global typedef  
<a name="TextPattern"></a>

## TextPattern : <code>string</code> \| <code>RegExp</code>
**Kind**: global typedef  
<a name="TokenizingState"></a>

## TokenizingState : <code>number</code>
**Kind**: global typedef  
