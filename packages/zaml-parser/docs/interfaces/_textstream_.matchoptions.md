[@zaml/parser](../README.md) › ["TextStream"](../modules/_textstream_.md) › [MatchOptions](_textstream_.matchoptions.md)

# Interface: MatchOptions

## Hierarchy

* **MatchOptions**

## Index

### Properties

* [caseInsensitive](_textstream_.matchoptions.md#optional-caseinsensitive)
* [consume](_textstream_.matchoptions.md#optional-consume)
* [skipMatched](_textstream_.matchoptions.md#optional-skipmatched)

## Properties

### `Optional` caseInsensitive

• **caseInsensitive**? : *undefined | false | true*

*Defined in [src/TextStream.ts:37](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L37)*

Case insensitive for string pattern

___

### `Optional` consume

• **consume**? : *undefined | false | true*

*Defined in [src/TextStream.ts:33](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L33)*

Read to end of the matched text

___

### `Optional` skipMatched

• **skipMatched**? : *undefined | false | true*

*Defined in [src/TextStream.ts:35](https://github.com/nexushubs/zaml-lang/blob/4389e8b/packages/zaml-parser/src/TextStream.ts#L35)*

Read to the matched text, move cursor to the end
