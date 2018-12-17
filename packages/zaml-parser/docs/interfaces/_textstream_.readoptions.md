[@zaml/parser](../README.md) > ["TextStream"](../modules/_textstream_.md) > [ReadOptions](../interfaces/_textstream_.readoptions.md)

# Interface: ReadOptions

## Hierarchy

**ReadOptions**

## Index

### Properties

* [consume](_textstream_.readoptions.md#consume)
* [skipMatched](_textstream_.readoptions.md#skipmatched)
* [toEOF](_textstream_.readoptions.md#toeof)
* [toEOL](_textstream_.readoptions.md#toeol)

---

## Properties

<a id="consume"></a>

### `<Optional>` consume

**● consume**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in [TextStream.ts:26](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/TextStream.ts#L26)*

Read to end of the matched text

___
<a id="skipmatched"></a>

### `<Optional>` skipMatched

**● skipMatched**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in [TextStream.ts:28](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/TextStream.ts#L28)*

Read to the matched text, move cursor to the end

___
<a id="toeof"></a>

### `<Optional>` toEOF

**● toEOF**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in [TextStream.ts:24](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/TextStream.ts#L24)*

If read to matched text or to the end of line

___
<a id="toeol"></a>

### `<Optional>` toEOL

**● toEOL**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in [TextStream.ts:22](https://github.com/nexushubs/zaml-lang/blob/660834a/packages/zaml-parser/src/TextStream.ts#L22)*

If no matched text is found, read to the end

___

