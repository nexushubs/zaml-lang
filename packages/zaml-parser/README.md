# zaml-parser

Javascript ZAML tokenizer & parser.

## Install

```shell
npm install zaml-parser
```

## Build-in Classes

### `class TextStream`

A stream like text reader

```js
class TextStream
  constructor(text:string, tabSize?:number) {}
  init() {}
  getPosition(pos?:number) {}
  sol(trimSpaces?:boolean) {}
  eol(trimSpaces?:boolean) {}
  eof(pos:number) {}
  peek() {}
  next() {}
  eat(pattern:(string|RegExp)) {}
  eatWhile(pattern:(string|RegExp)) {}
  eatUntil(pattern:(string|RegExp)) {}
  eatSpace() {}
  search(pattern:(string|RegExp), options:object) {}
  read(n?:number) {}
  readTo(pattern:(string|RegExp), options:object) {}
  readOver(pattern:(string|RegExp), options:object) {}
  readLine() {}
  skipToEnd() {}
  skipTo(pattern:(string|RegExp), options) {}
  skipOver(pattern:(string|RegExp), options:object) {}
  backUp(n) {}
  match(pattern:(string|RegExp), options:object) {}
  resetMarker() {}
  pushMarker(data, start) {}
  setMarkerData(data) {}
  getMarkerData() {}
  popMarker(_data:object, end?:number) {}
  pushCursor(pos) {}
  popCursor() {}
  debugLine(line:number, numWidth:number, isCurrent:boolean) {}
  debugCursor(col:number, numWidth:number) {}
  debugState(range?:number) {}
}
```

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

Parse a ZAML source code, and returns the root node of AST

### Example

```js
import { tokenize } from 'zaml-parser';
const node = tokenize('Hello World!');
console.log(node);
```

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
