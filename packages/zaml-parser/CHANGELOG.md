# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2018-12-13

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
