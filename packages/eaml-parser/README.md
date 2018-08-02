# eaml-parser

Javascript EAML tokenizer & parser.

## Install

```shell
npm install eaml-parser
```

## Build-in Classes

### `class Node`

AST node data structure.

properties:

```ts
interface Node {
  type: string,     // root, tag, entity, text
  name: string,     // name for tag or entity
  isBlock: boolean, // isBlock node
  content: string,  // text content for text node
  source: string,   // source code for none text node
  start: number,    // start position
  end: number,      // end position
  parent: Node,     // parent node
  root: Node,       // root node
  children: Node[], // child nodes
}
```

### `class Tokenizer`

Text tokenizer.

#### constructor `Tokenizer(text:string,options:{verbose:boolean})`

#### method `tokenizer.process():Node`

## API

### `tokenize(text:string):Node`

Parse a EAML source code, and returns the root node of AST

## Test

```shell
npm test
```

Test with more info of tokenizing

```shell
DEBUG=verbose npm test
```

## License

[MIT](../../LICENSE)
