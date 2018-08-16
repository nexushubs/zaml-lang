# zaml-extract

ZAML helper for entity extracting

## Install

```shell
npm install @lvfang/zaml-extract
```

## API

[API Documentation](./docs/API.md)

## Usage

```js
import zaml from '@lvfang/zaml-parser';
import extract from '@lvfang/zaml-extract';

const extractor = extract.create({
  plugins: ['link'],
});
const node = tokenize('Hello World! www.example.com');
node.extractEntities(extractor);

console.log(JSON.stringify(node, null, 2));
```

output:
```json
{
  "type": "root",
  "name": null,
  "attributes": {},
  "children": [
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "content": "Hello World! "
        },
        {
          "type": "entity",
          "name": "LINK",
          "attributes": {
            "url": "http://www.example.com"
          },
          "children": [
            {
              "type": "text",
              "content": "www.example.com"
            }
          ]
        }
      ]
    }
  ]
}
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

[MIT](./LICENSE)
