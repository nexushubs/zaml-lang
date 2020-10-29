[@zaml/parser](../README.md) › ["TextStream"](../modules/_textstream_.md) › [ReadOptions](_textstream_.readoptions.md)

# Interface: ReadOptions

## Hierarchy

* **ReadOptions**

## Index

### Properties

* [consume](_textstream_.readoptions.md#optional-consume)
* [skipMatched](_textstream_.readoptions.md#optional-skipmatched)
* [toEOF](_textstream_.readoptions.md#optional-toeof)
* [toEOL](_textstream_.readoptions.md#optional-toeol)

## Properties

### `Optional` consume

• **consume**? : *undefined | false | true*

*Defined in [src/TextStream.ts:26](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L26)*

Read to end of the matched text

___

### `Optional` skipMatched

• **skipMatched**? : *undefined | false | true*

*Defined in [src/TextStream.ts:28](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L28)*

Read to the matched text, move cursor to the end

___

### `Optional` toEOF

• **toEOF**? : *undefined | false | true*

*Defined in [src/TextStream.ts:24](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L24)*

If read to matched text or to the end of line

___

### `Optional` toEOL

• **toEOL**? : *undefined | false | true*

*Defined in [src/TextStream.ts:22](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L22)*

If no matched text is found, read to the end
