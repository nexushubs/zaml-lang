# zaml-extract

ZAML helper for entity extracting

## Install

```shell
npm install @lvfang/zaml-extract
```

## API

[API Documentation](./docs/API.md)

## Usage

```ts
interface EntityInfo {
  start: number,
  end: number,
  text: string,
  type: string,
  item?: {},
};

function extract(text: string): Promise<EntityInfo[]>;
function extract(text: string[]): Promise<EntityInfo[][]>;
```


Extract entities from a string or array of strings, returns

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
