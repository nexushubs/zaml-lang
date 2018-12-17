# zaml-parser

Javascript tokenizer & lexer for [ZAML](https://github.com/nexushubs/zaml-lang).

## Install

```shell
npm install @zaml/parser
# or
yarn add @zaml/parser
```

## Documentation

Checkout [API Documentation](./docs)

## Usage

### `zaml.parse(text:string):Node`

Parse a ZAML source code, and returns the root node of AST

### Example

```js
import zaml from 'zaml-parser';
const node = zaml.parse('Hello World!');
console.log(node);
```

## Test

```shell
yarn test
```

Test with more info of tokenizing

```shell
DEBUG=verbose yarn test
```

## License

[MIT](./LICENSE)
