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
<dd><p>Stringify node attribute value</p>
</dd>
<dt><a href="#spacer">spacer(space, indent)</a></dt>
<dd><p>Generate indent spaces</p>
</dd>
<dt><a href="#stringify">stringify(node, [space], [indent])</a></dt>
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
    * [.parse(text)](#module_zaml-parser.parse) ⇒ [<code>Node</code>](#Node)
    * [.tokenize(text)](#module_zaml-parser.tokenize) ⇒ [<code>Node</code>](#Node)

<a name="module_zaml-parser.parse"></a>

### parser.parse(text) ⇒ [<code>Node</code>](#Node)
Parse a plain text or ZAML source string, and extract common entities

**Kind**: static method of [<code>zaml-parser</code>](#module_zaml-parser)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Source string |

<a name="module_zaml-parser.tokenize"></a>

### parser.tokenize(text) ⇒ [<code>Node</code>](#Node)
Tokenize a ZAML source string

**Kind**: static method of [<code>zaml-parser</code>](#module_zaml-parser)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Source string |

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
        * [.parent](#Node+parent) : <code>number</code>
        * [._source](#Node+_source) : <code>string</code>
        * [.source](#Node+source) : <code>string</code>
        * [.content](#Node+content) : <code>string</code>
        * [.children](#Node+children) : [<code>Array.&lt;Node&gt;</code>](#Node)
        * [.attributes](#Node+attributes) : <code>Object</code>
        * [.isBlock](#Node+isBlock) ⇒ <code>boolean</code>
        * [.isRoot](#Node+isRoot) ⇒ <code>boolean</code>
        * [.root](#Node+root) ⇒ <code>boolean</code>
        * [.source](#Node+source) ⇒ <code>string</code>
        * [.isFirstChild](#Node+isFirstChild) ⇒ <code>boolean</code>
        * [.isLastChild](#Node+isLastChild) ⇒ <code>boolean</code>
        * [.siblings](#Node+siblings) ⇒ [<code>Array.&lt;Node&gt;</code>](#Node)
        * [.childIndex](#Node+childIndex) ⇒ <code>number</code>
        * [.nextSibling](#Node+nextSibling) ⇒ [<code>Node</code>](#Node)
        * [.nextSibling](#Node+nextSibling) ⇒ [<code>Node</code>](#Node)
        * [.attributes](#Node+attributes) : <code>Object.&lt;string, any&gt;</code>
        * [.createChild(type, [name], [options])](#Node+createChild)
        * [.appendChild(node)](#Node+appendChild)
        * [.appendText(text, options)](#Node+appendText)
        * [.removeChild(...nodes)](#Node+removeChild)
        * [.setAttribute(key, value)](#Node+setAttribute)
        * [.setAttributes(data)](#Node+setAttributes)
        * [.find(selector)](#Node+find)
        * [.findBy(callback)](#Node+findBy)
        * [.toString()](#Node+toString)
    * _static_
        * [.create(type, [name], [options])](#Node.create)

<a name="new_Node_new"></a>

### new Node(type, [name], [options])

| Param | Type | Default |
| --- | --- | --- |
| type | [<code>NodeType</code>](#NodeType) |  | 
| [name] | <code>string</code> | <code>null</code> | 
| [options] | <code>object</code> |  | 
| [options.source] | <code>string</code> |  | 
| [options.start] | <code>number</code> |  | 
| [options.end] | <code>number</code> |  | 
| [options.attributes] | <code>Object.&lt;string, any&gt;</code> |  | 
| [options.parent] | [<code>Node</code>](#Node) |  | 

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
Start cursor position to root source

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+end"></a>

### node.end : <code>number</code>
End cursor position to root source

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+parent"></a>

### node.parent : <code>number</code>
Parent node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+_source"></a>

### node._source : <code>string</code>
Source code string, only for root node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+source"></a>

### node.source : <code>string</code>
Source code for none-root node

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

### node.attributes : <code>Object</code>
Attributes, for root, tag, entity node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+isBlock"></a>

### node.isBlock ⇒ <code>boolean</code>
Property indicates if the node is a block (wrapping other nodes)

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+isRoot"></a>

### node.isRoot ⇒ <code>boolean</code>
If the node is root

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+root"></a>

### node.root ⇒ <code>boolean</code>
Property indicates if the root is root (which has no children)

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+source"></a>

### node.source ⇒ <code>string</code>
Get source code of the node

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
<a name="Node+nextSibling"></a>

### node.nextSibling ⇒ [<code>Node</code>](#Node)
Previous sibling node

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+attributes"></a>

### node.attributes : <code>Object.&lt;string, any&gt;</code>
**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+createChild"></a>

### node.createChild(type, [name], [options])
**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type |
| --- | --- |
| type | [<code>NodeType</code>](#NodeType) | 
| [name] | <code>string</code> | 
| [options] | <code>object</code> | 

<a name="Node+appendChild"></a>

### node.appendChild(node)
Append a node to children list

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type |
| --- | --- |
| node | [<code>Node</code>](#Node) | 

<a name="Node+appendText"></a>

### node.appendText(text, options)
**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| options |  | 

<a name="Node+removeChild"></a>

### node.removeChild(...nodes)
Remove 1 or more children

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type |
| --- | --- |
| ...nodes | [<code>Array.&lt;Node&gt;</code>](#Node) | 

<a name="Node+setAttribute"></a>

### node.setAttribute(key, value)
Set attribute

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Attribute key |
| value | <code>any</code> | Attribute value |

<a name="Node+setAttributes"></a>

### node.setAttributes(data)
Set multiple attributes

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object.&lt;string, any&gt;</code> | Key - value pair |

<a name="Node+find"></a>

### node.find(selector)
Find matched children recursively

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>object</code> |  |
| [selector.type] | [<code>NodeType</code>](#NodeType) | Node type |
| [selector.name] | <code>string</code> | Node name |
| [selector.text] | <code>RegExp</code> \| <code>string</code> | Including text or pattern |
| [selector.source] | <code>RegExp</code> \| <code>string</code> | Pattern to match source |

<a name="Node+findBy"></a>

### node.findBy(callback)
Find matched children recursively by callback

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type |
| --- | --- |
| callback | <code>NodeTester</code> | 

<a name="Node+toString"></a>

### node.toString()
Build source code of the node

**Kind**: instance method of [<code>Node</code>](#Node)  
<a name="Node.create"></a>

### Node.create(type, [name], [options])
**Kind**: static method of [<code>Node</code>](#Node)  

| Param | Type |
| --- | --- |
| type | [<code>NodeType</code>](#NodeType) | 
| [name] | <code>string</code> | 
| [options] | <code>object</code> | 

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

<a name="new_TextLine_new"></a>

### new TextLine(lines, text, ln, offset, length)

| Param | Type |
| --- | --- |
| lines | [<code>Array.&lt;TextLine&gt;</code>](#TextLine) | 
| text | <code>string</code> | 
| ln | <code>number</code> | 
| offset | <code>number</code> | 
| length | <code>number</code> | 

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
    * [.setMarkerData()](#TextStream+setMarkerData)
    * [.getMarkerData()](#TextStream+getMarkerData)
    * [.popMarker([data], [end])](#TextStream+popMarker) ⇒ <code>Object</code>
    * [.pushCursor([pos])](#TextStream+pushCursor)
    * [.popCursor()](#TextStream+popCursor)

<a name="TextStream+pos"></a>

### textStream.pos : <code>number</code>
**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+text"></a>

### textStream.text : <code>string</code>
**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
**Read only**: true  
<a name="TextStream+tabSize"></a>

### textStream.tabSize : <code>number</code>
**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+lines"></a>

### textStream.lines : [<code>Array.&lt;TextLine&gt;</code>](#TextLine)
**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+markers"></a>

### textStream.markers : <code>Object</code>
**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+cursorStack"></a>

### textStream.cursorStack : <code>Array.&lt;number&gt;</code>
**Kind**: instance property of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+init"></a>

### textStream.init()
Prepare line indexes

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+getPosition"></a>

### textStream.getPosition(pos) ⇒ <code>Object</code>
Get line and column position of the cursor

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type | Description |
| --- | --- | --- |
| pos | <code>number</code> | Cursor position of the text |

<a name="TextStream+sol"></a>

### textStream.sol([trimSpaces]) ⇒ <code>boolean</code>
Check if cursor is at the start of a line

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [trimSpaces] | <code>boolean</code> | <code>false</code> | Trim starting spaces |

<a name="TextStream+eol"></a>

### textStream.eol([trimSpaces]) ⇒ <code>boolean</code>
Check if cursor is at the end of a line

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [trimSpaces] | <code>boolean</code> | <code>false</code> | Trim ending spaces |

<a name="TextStream+eof"></a>

### textStream.eof([pos]) ⇒ <code>boolean</code>
Check if cursor is at the end of whole text

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type |
| --- | --- |
| [pos] | <code>number</code> | 

<a name="TextStream+peek"></a>

### textStream.peek() ⇒ <code>string</code>
Get one next char, but keep the cursor position (if available)

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - The next char  
<a name="TextStream+next"></a>

### textStream.next() ⇒ <code>string</code>
Get one next char, and move cursor forward (if available)

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - The next char  
<a name="TextStream+eat"></a>

### textStream.eat(pattern) ⇒ <code>string</code>
Consumes one char if the next char fitting the pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - The char been eaten  

| Param | Type |
| --- | --- |
| pattern | [<code>TextPattern</code>](#TextPattern) | 

<a name="TextStream+eatWhile"></a>

### textStream.eatWhile(match) ⇒ <code>boolean</code>
Consumes chars while fitting the pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>boolean</code> - If any chars been consumed  

| Param | Type |
| --- | --- |
| match | [<code>TextPattern</code>](#TextPattern) | 

<a name="TextStream+eatUntil"></a>

### textStream.eatUntil(pattern) ⇒ <code>boolean</code>
Consumes chars until the first char not fitting the pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>boolean</code> - If any chars been consumed  

| Param | Type | Description |
| --- | --- | --- |
| pattern | [<code>TextPattern</code>](#TextPattern) | char or pattern |

<a name="TextStream+eatSpace"></a>

### textStream.eatSpace() ⇒ <code>boolean</code>
Consumes spaces

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>boolean</code> - If any space has been consumed  
<a name="TextStream+search"></a>

### textStream.search(pattern, [options])
Find position of matched text to the pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| pattern | [<code>TextPattern</code>](#TextPattern) |  |  |
| [options] | <code>object</code> |  |  |
| [options.caseInsensitive] | <code>boolean</code> | <code>false</code> | Case insensitive for string pattern |

<a name="TextStream+read"></a>

### textStream.read([n])
Read n chars after current cursor

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | Number of chars to read |

<a name="TextStream+readTo"></a>

### textStream.readTo(pattern, [options]) ⇒ <code>string</code>
Read to text or pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - Sub-text after current cursor and before (or contains) matched text  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| pattern | [<code>TextPattern</code>](#TextPattern) |  |  |
| [options] | <code>object</code> |  |  |
| [options.toEOL] | <code>boolean</code> | <code>false</code> | If no matched text is found, read to the end |
| [options.toEOF] | <code>boolean</code> | <code>false</code> | If read to matched text or to the end of line |
| [options.consume] | <code>boolean</code> | <code>false</code> | Read to end of the matched text |
| [options.skipMatched] | <code>boolean</code> | <code>false</code> | Read to the matched text, move cursor to the end |

<a name="TextStream+readOver"></a>

### textStream.readOver(pattern, options) ⇒ <code>string</code>
Read to pattern (contains the matched text)

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - Sub-text after current cursor and until the end of matched text  

| Param | Type | Description |
| --- | --- | --- |
| pattern | [<code>TextPattern</code>](#TextPattern) | Text to find or pattern |
| options | <code>object</code> | Match options |

<a name="TextStream+readLine"></a>

### textStream.readLine() ⇒ <code>string</code>
Read one line

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
**Returns**: <code>string</code> - Text containing one line (not including line break)  
<a name="TextStream+skipToEnd"></a>

### textStream.skipToEnd()
Move cursor to end of text

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+skipTo"></a>

### textStream.skipTo(pattern, options) ⇒ <code>boolean</code>
Skip to the beginning of matched text

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type |
| --- | --- |
| pattern | [<code>TextPattern</code>](#TextPattern) | 
| options | <code>object</code> | 

<a name="TextStream+skipOver"></a>

### textStream.skipOver(pattern) ⇒ <code>boolean</code>
Skip to the end of matched text

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type |
| --- | --- |
| pattern | [<code>TextPattern</code>](#TextPattern) | 

<a name="TextStream+backUp"></a>

### textStream.backUp(n)
Move cursor back

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | Steps |

<a name="TextStream+match"></a>

### textStream.match(pattern, [options])
Check if rest text begins with pattern

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type | Default |
| --- | --- | --- |
| pattern | [<code>TextPattern</code>](#TextPattern) |  | 
| [options] | <code>object</code> |  | 
| [options.consume] | <code>boolean</code> | <code>false</code> | 
| [options.caseInsensitive] | <code>boolean</code> | <code>false</code> | 

<a name="TextStream+resetMarker"></a>

### textStream.resetMarker()
Reset the marker stack

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+pushMarker"></a>

### textStream.pushMarker(data, [pos])
Add a marker to stack

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 
| [pos] | <code>number</code> | 

<a name="TextStream+setMarkerData"></a>

### textStream.setMarkerData()
Set data for current marker

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+getMarkerData"></a>

### textStream.getMarkerData()
Get data of current markder

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  
<a name="TextStream+popMarker"></a>

### textStream.popMarker([data], [end]) ⇒ <code>Object</code>
Return a combined structure of text and it's position according to the previously set start
marker

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>object</code> | Additional data |
| [end] | <code>number</code> | End marker, if not set, previous set value will be used |

<a name="TextStream+pushCursor"></a>

### textStream.pushCursor([pos])
Push current cursor to cursor stack

**Kind**: instance method of [<code>TextStream</code>](#TextStream)  

| Param | Type |
| --- | --- |
| [pos] | <code>number</code> | 

<a name="TextStream+popCursor"></a>

### textStream.popCursor()
Push current cursor to cursor stack

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

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| stream | [<code>TextStream</code>](#TextStream) |  |  |
| [options] | <code>object</code> |  | Constructor options |
| [options.verbose] | <code>boolean</code> | <code>false</code> | Debug verbose process of tokenizing |

<a name="Tokenizer+process"></a>

### tokenizer.process() ⇒ [<code>Node</code>](#Node)
Process a text and parse to AST

**Kind**: instance method of [<code>Tokenizer</code>](#Tokenizer)  
**Returns**: [<code>Node</code>](#Node) - Root node of parsed AST  
<a name="NODE_TYPES"></a>

## NODE_TYPES : <code>enum</code>
**Kind**: global enum  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
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

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| node | [<code>Node</code>](#Node) |  |  |
| tester | <code>function</code> |  |  |
| [result] | [<code>Array.&lt;Node&gt;</code>](#Node) | <code>[]</code> | Node list |

<a name="formatValue"></a>

## formatValue(value)
Stringify node attribute value

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="spacer"></a>

## spacer(space, indent)
Generate indent spaces

**Kind**: global function  

| Param | Type |
| --- | --- |
| space | <code>number</code> | 
| indent | <code>number</code> | 

<a name="stringify"></a>

## stringify(node, [space], [indent])
Stringify node

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| node | [<code>Node</code>](#Node) |  | 
| [space] | <code>number</code> | <code>2</code> | 
| [indent] | <code>number</code> | <code>0</code> | 

<a name="NodeType"></a>

## NodeType : <code>string</code>
**Kind**: global typedef  
<a name="TextPattern"></a>

## TextPattern : <code>string</code> \| <code>RegExp</code>
**Kind**: global typedef  
<a name="TokenizingState"></a>

## TokenizingState : <code>number</code>
**Kind**: global typedef  
