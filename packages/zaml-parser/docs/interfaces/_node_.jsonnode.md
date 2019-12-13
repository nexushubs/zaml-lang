[@zaml/parser](../README.md) › ["Node"](../modules/_node_.md) › [JsonNode](_node_.jsonnode.md)

# Interface: JsonNode

## Hierarchy

* **JsonNode**

## Index

### Properties

* [attributes](_node_.jsonnode.md#optional-attributes)
* [children](_node_.jsonnode.md#optional-children)
* [content](_node_.jsonnode.md#optional-content)
* [id](_node_.jsonnode.md#optional-id)
* [labels](_node_.jsonnode.md#optional-labels)
* [metadata](_node_.jsonnode.md#optional-metadata)
* [name](_node_.jsonnode.md#optional-name)
* [position](_node_.jsonnode.md#optional-position)
* [textPosition](_node_.jsonnode.md#optional-textposition)
* [type](_node_.jsonnode.md#type)

## Properties

### `Optional` attributes

• **attributes**? : *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [src/Node.ts:228](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/Node.ts#L228)*

___

### `Optional` children

• **children**? : *[JsonNode](_node_.jsonnode.md)[]*

*Defined in [src/Node.ts:233](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/Node.ts#L233)*

___

### `Optional` content

• **content**? : *undefined | string*

*Defined in [src/Node.ts:227](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/Node.ts#L227)*

___

### `Optional` id

• **id**? : *undefined | string*

*Defined in [src/Node.ts:224](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/Node.ts#L224)*

___

### `Optional` labels

• **labels**? : *string[]*

*Defined in [src/Node.ts:230](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/Node.ts#L230)*

___

### `Optional` metadata

• **metadata**? : *[KeyValueMap](../modules/_node_.md#keyvaluemap)*

*Defined in [src/Node.ts:229](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/Node.ts#L229)*

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [src/Node.ts:226](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/Node.ts#L226)*

___

### `Optional` position

• **position**? : *[SourceMapRange](_node_.sourcemaprange.md)*

*Defined in [src/Node.ts:231](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/Node.ts#L231)*

___

### `Optional` textPosition

• **textPosition**? : *[SourceMapRange](_node_.sourcemaprange.md)*

*Defined in [src/Node.ts:232](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/Node.ts#L232)*

___

###  type

• **type**: *[NodeType](../enums/_node_.nodetype.md)*

*Defined in [src/Node.ts:225](https://github.com/nexushubs/zaml-lang/blob/52476e1/packages/zaml-parser/src/Node.ts#L225)*
