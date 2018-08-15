# zaml-parser

Javascript ZAML tokenizer & parser.

## Install

```shell
npm install @lvfang/zaml-parser
```

## API

[API Documentation](./docs/API.md)

## Usage

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
