# ZAML - Zebra (Hybrid) AI Markup Language

![ZAML Logo](./docs/logo.png)

## Introduction

This repo contains the [Language Specification](./docs/spec.md) and a couple of [npm packages](#packages) of parser, renderer and editor.

> Inspired by [YAML](http://yaml.org/spec/1.2/spec.html), [Markdown](https://www.markdownguide.org/cheat-sheet), [AIML](https://en.wikipedia.org/wiki/AIML) and PHP template syntax [Smarty](https://www.smarty.net/), ZAML is a human readable marked up language which could be easily transformed into computer data structure.

Quick Look:

```zaml
---
foo: bar
---
#Question
What is your name?

#Answer
My name is [Jack]{PER}
```

Try it yourself:

https://nexushubs.github.io/zaml-lang/

## Packages

| Package | Version | Description |
| -- | -- | -- |
| [@zaml/parser](./packages/zaml-parser) | [![npm](https://img.shields.io/npm/v/@zaml/parser.svg?style=flat-square)](https://www.npmjs.com/package/@zaml/parser) | Javascript tokenizer & lexer for ZAML |
| [@zaml/extract](./packages/zaml-extract) | [![npm](https://img.shields.io/npm/v/@zaml/extract.svg?style=flat-square)](https://www.npmjs.com/package/@zaml/extract) | Entity extracting helper for ZAML |
| [@zaml/editor](./packages/zaml-editor) | [![npm](https://img.shields.io/npm/v/@zaml/editor.svg?style=flat-square)](https://www.npmjs.com/package/@zaml/editor) | ZAML source code editor write in React [try online](https://nexushubs.github.io/zaml-lang/) |

## FAQ

### What is the purpose of ZAML?

ZAML is designed for text samples of machine learning, checkout [application scenario](./docs/spec.md#1-application-scenario)

### How is the repo structured?

The Javascript packages of this repo is managed as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) that is composed of many npm packages.

This structure was introduced by [BABEL](https://github.com/babel/babel) and managed by [lerna](https://github.com/lerna/lerna)

## License

[MIT](./LICENSE)
