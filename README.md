# ZAML - Zebra (Hybrid) AI Markup Language

![ZAML Logo](./docs/logo.png)

## Introduction

This repo contains the [Language Specification](./docs/spec.md) and a couple of [npm packages](#packages) of parser, renderer and editor.

> Inspired by [YAML](http://yaml.org/spec/1.2/spec.html), [Markdown](https://www.markdownguide.org/cheat-sheet), [AIML](https://en.wikipedia.org/wiki/AIML) and PHP template syntax [Smarty](https://www.smarty.net/), ZAML is a human readable marked up language which could be easily transformed into computer data structure.

## Packages

| Package | Version | Description |
| -- | -- | -- |
| [zaml-parser](./packages/zaml-parser) | `0.2.8` | ZAML javascript parser & tokenizer |
| [zaml-extract](./packages/zaml-extract) | `0.2.8` | Entity extractor helper for ZAML |

## FAQ

### What is the purpose of ZAML?

ZAML is designed for text samples of machine learning, checkout [application scenario](./docs/spec.md#1-application-scenario)

### How is the repo structured?

The Javascript packages of this repo is managed as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) that is composed of many npm packages.

This structure was introduced by [BABEL](https://github.com/babel/babel) and managed by [lerna](https://github.com/lerna/lerna)

## License

[MIT](./LICENSE)
