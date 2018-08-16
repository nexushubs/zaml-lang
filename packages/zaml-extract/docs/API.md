## Classes

<dl>
<dt><a href="#Extractor">Extractor</a></dt>
<dd><p>Extractor class</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#isExtractorClass">isExtractorClass(target)</a></dt>
<dd><p>Check if a extractor is a class</p>
</dd>
<dt><a href="#isOverlapping">isOverlapping(items, target)</a> ⇒ <code>boolean</code></dt>
<dd><p>Is entity ranges overlapped with existing items</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#EntityInfo">EntityInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ExtractorResult">ExtractorResult</a> : <code><a href="#EntityInfo">EntityInfo</a></code> | <code><a href="#EntityInfo">Promise.&lt;EntityInfo&gt;</a></code></dt>
<dd></dd>
<dt><a href="#FuncExtractor">FuncExtractor</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#ExtractorType">ExtractorType</a> : <code><a href="#FuncExtractor">FuncExtractor</a></code> | <code>Object</code></dt>
<dd></dd>
<dt><a href="#ExtractorOptions">ExtractorOptions</a> : <code>string</code> | <code>Object</code> | <code><a href="#ExtractorType">ExtractorType</a></code></dt>
<dd></dd>
<dt><a href="#ExtractorConstructorOptions">ExtractorConstructorOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="Extractor"></a>

## Extractor
Extractor class

**Kind**: global class  

* [Extractor](#Extractor)
    * [new Extractor(options)](#new_Extractor_new)
    * [.addPlugin(options)](#Extractor+addPlugin)
    * [.execSingleExtractor(text, extractor)](#Extractor+execSingleExtractor)
    * [.extract(list)](#Extractor+extract) ⇒
    * [.extractNode(node)](#Extractor+extractNode)

<a name="new_Extractor_new"></a>

### new Extractor(options)
**Params**

- options <code>object</code>
    - .plugins [<code>ExtractorConstructorOptions</code>](#ExtractorConstructorOptions)

<a name="Extractor+addPlugin"></a>

### extractor.addPlugin(options)
**Kind**: instance method of [<code>Extractor</code>](#Extractor)  
**Params**

- options [<code>ExtractorOptions</code>](#ExtractorOptions)

<a name="Extractor+execSingleExtractor"></a>

### extractor.execSingleExtractor(text, extractor)
Execute single plugin to the text (array)

**Kind**: instance method of [<code>Extractor</code>](#Extractor)  
**Params**

- text <code>string</code> | <code>Array.&lt;string&gt;</code>
- extractor <code>function</code> | <code>Object</code>

<a name="Extractor+extract"></a>

### extractor.extract(list) ⇒
Extract all entities from text by plugins

**Kind**: instance method of [<code>Extractor</code>](#Extractor)  
**Returns**: Promise<EntityInfo>  
**Params**

- list <code>string</code> | <code>Array.&lt;string&gt;</code>

<a name="Extractor+extractNode"></a>

### extractor.extractNode(node)
**Kind**: instance method of [<code>Extractor</code>](#Extractor)  
**Params**

- node <code>any</code>

<a name="isExtractorClass"></a>

## isExtractorClass(target)
Check if a extractor is a class

**Kind**: global function  
**Params**

- target <code>any</code>

<a name="isOverlapping"></a>

## isOverlapping(items, target) ⇒ <code>boolean</code>
Is entity ranges overlapped with existing items

**Kind**: global function  
**Params**

- items [<code>Array.&lt;EntityInfo&gt;</code>](#EntityInfo)
- target [<code>EntityInfo</code>](#EntityInfo)

<a name="EntityInfo"></a>

## EntityInfo : <code>Object</code>
**Kind**: global typedef  
<a name="ExtractorResult"></a>

## ExtractorResult : [<code>EntityInfo</code>](#EntityInfo) \| [<code>Promise.&lt;EntityInfo&gt;</code>](#EntityInfo)
**Kind**: global typedef  
<a name="FuncExtractor"></a>

## FuncExtractor : <code>function</code>
**Kind**: global typedef  
<a name="ExtractorType"></a>

## ExtractorType : [<code>FuncExtractor</code>](#FuncExtractor) \| <code>Object</code>
**Kind**: global typedef  
<a name="ExtractorOptions"></a>

## ExtractorOptions : <code>string</code> \| <code>Object</code> \| [<code>ExtractorType</code>](#ExtractorType)
**Kind**: global typedef  
<a name="ExtractorConstructorOptions"></a>

## ExtractorConstructorOptions : <code>Object</code>
**Kind**: global typedef  
