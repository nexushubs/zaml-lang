# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.6.17] - 2019-02-11

### Added

* Support Support hex, oct, bin number literal parsing

## [0.6.16] - 2019-02-11

### Fixed

* Fix attribute `toSource()` of string with number pattern

### Added

* Add parsing option `attributeAsString` to force parsing attribute value as string
* Add parsing option `bigIntAsString` to enable big integer parsing
* Add stringify option `attributeAsString` to force convert number, boolean to string

## [0.6.15] - 2019-02-11

### Fixed

* Fix typing of entity with extractor

## [0.6.14] - 2019-01-31

### Fixed

* Fix `node.toSource()` multi-line text indentation 

## [0.6.13] - 2019-01-31

### Fixed

* Fix `node.splitText()`
* Fix parsing error of empty file by adding a empty line at the end of file
* Fix node.toJSON(), attach `node.id` to metadata entities

## [0.6.12] - 2019-01-28

### Fixed

* Fix `node.toSource()` metadata indentation

## [0.6.11] - 2019-01-28

### Added

* New parsing option `needMetadataMarker` for `---` is required
* New stringify option `metadataMarker` to force output `---` in source

## [0.6.10] - 2019-01-28

### Fixed

* Fix literal parsing
  * Disable truthy boolean in metadata
  * Parse big integer as string
  * Correctly parse string with leading number
  * Added literal parsing unit tests

### Added

* Command line parser debugger

## [0.6.9] - 2019-01-25

### Fixed

* Fix string literal stringify.

## [0.6.8] - 2019-01-21

### Fixed

* Fix block metadata stringify.

## [0.6.7] - 2018-12-29

### Fixed

* Remove `u` flag of RegExp to support older browser.

## [0.6.6] - 2018-12-29

### Fixed

* Remove chalk for old browsers, use a lite version instead.

## [0.6.4] - 2018-12-27

### Added

* Add a `needMetadataMarker` option to `parse()` to avoid parsing normal text as metadata.

## [0.6.3] - 2018-12-28

### Fixed

* Fix custom inline block parsing
* Fix `node.splitText()`, avoid adding duplicated inline block, wrapping the only text of paragraph.

## [0.6.2] - 2018-12-27

### Added

* `Node` static helpers
  * [`Node.createRoot()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#createparagraph)
  * [`Node.createParagraph()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#createparagraph)
  * [`Node.createTag()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#createtag)
* `Node` instance
  * [`node.splitText()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#splittext)

### Changed

* Export and import `node.id` for json, see [`node.toJSON()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#tojson), [`Node.fromJSON()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#fromjson)

### Fixed

* `Node.createBlockByRange()` bug

## [0.6.1] - 2018-12-24

### Added

* `Node` static helpers:
  * [`Node.createText()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#createtext)
  * [`Node.createBlock()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#createblock)
  * [`Node.createInlineBlock()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#createinlineblock)
  * [`Node.findCommonAncestor()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#findcommonancestor)
  * [`Node.createBlockByRange()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#createblockbyrange)
* `Node` instance helpers:
  * [`node.isEntity`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#isentity)
  * [`node.isText`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#istext)
  * [`node.isPlainText`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#isonlychild)
  * [`node.isOnlyChild`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#isonlydescendantof)
  * [`node.isOnlyDescendantOf()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#isonlydescendantof)
  * [`node.isSidedDescendantOf()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#issideddescendantof)
  * [`node.prependChild()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#prependchild)
  * [`node.prependText()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#prependtext)
  * [`node.removeChildAt()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#removechildat)
  * [`node.mergeText()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#mergetext) Merge sibling text nodes
  * [`node.extractNodes()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#extractnodes) Extract nodes by range of child index
  * [`node.flatten()`](https://github.com/nexushubs/zaml-lang/blob/master/packages/zaml-parser/docs/classes/_node_.node.md#flatten) Remove wrapping node

### Changed

* Add error range in `ParseError` instance, to provide more detailed information.

## [0.6.0] - 2018-12-17

### Added

* Generate unique id for each node when created, this is useful for React rendering etc.

### Fixed

* Fix paragraph parsing when end with entity in entity sample.

### Changed

* 🔥 `@zaml/parser` has been totally rewritten into typescript.

## [0.5.2] - 2018-12-13

### Added

* Support simple inline block `{#label text content}`, by `node.toSource({ simple: true })`.
* Colorful console debug with [chalk](https://github.com/chalk/chalk).

## [0.5.1] - 2018-12-10

### Added

* Inline block `NUM`, `HEADING`.

### Fixed

* Parsing when only metadata and no content.

## [0.5.0] - 2018-12-05

### Added

* Support for inline block tag `{INLINE}`.
* Support block scope metadata.
* Support tag & entity in attributes & metadata.

### Fixed

* Fix `node.toSource()` output of block labels, better block line break.

### Changed

* Front-matter is renamed to metadata.

## [0.4.1] - 2018-11-30

### Fixed

* Handling extractor error.

## [0.4.0] - 2018-11-21

### Changed

* 🔥 Make ZAML project open source, and publish packages to npm `@zaml` scope.

## [0.3.3] - 2018-10-21

### Added

* Support full-width assignment character `：` for front-matter and attribute.

## [0.3.2] - 2018-10-20

### Fixed

* Fix white space after label mark `#` not reported.

## [0.3.0] - 2018-10-06

### Added

* Block labels `#label`.
* Simple block, see [Tokenizer.test.js](./test/Tokenizer.test.js).
* Add new selector `#some_label` for `Node.is()` and searching functions.
* Add node searching methods:
  * `Node.findBy()`
  * `Node.findOneBy()`
  * `Node.find()`
  * `Node.findOne()`
  * `Node.querySelector()`
  * `Node.querySelectorAll()`

### Changed

* The beginning front matter `---` can be omitted.
