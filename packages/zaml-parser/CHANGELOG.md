# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2018-10-06

### Added

* Omit the beginning front matter.
* Block labels `#label`.
* Simple block, see [Tokenizer.test.js](./test/Tokenizer.test.js).
* Add new selector `#some_label` for searching `Node.is()` and searching functions
* Add node searching methods:
  * `Node.findBy()`
  * `Node.findOneBy()`
  * `Node.find()`
  * `Node.findOne()`
  * `Node.querySelector()`
  * `Node.querySelectorAll()`
