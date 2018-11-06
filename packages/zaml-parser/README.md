# zaml-parser

Javascript ZAML tokenizer & parser.

## Install

```shell
npm install @lvfang/zaml-parser
# or
yarn add @lvfang/zaml-parser
```

## API

[API Documentation](./docs/API.md)

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
