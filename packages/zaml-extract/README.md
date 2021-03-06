# zaml-extract

Entity extracting helper for [ZAML](https://github.com/nexushubs/zaml-lang).

Thanks to Github ❤️ ci is integrated with [Github Actions](/.github/workflows/extract.yml)

## Install

```shell
npm install @zaml/extract
```

## Usage

### Plugin

A plugin is a function takes a text or Object expose methods for single text or text array

```ts
// extracting result structure
interface EntityInfo {
  start: number;
  end: number;
  text: string;
  type: string;
  data: {};
}

// function plugin
type SingleExtractor = (text: string) => Promise<EntityInfo[]>;

// instance plugin
interface ExtractorInterface {
  extract(text: string): Promise<EntityInfo[]>;
  extractArray(textList: string[]): Promise<EntityInfo[][]>;
}

```

Build-in plugin

| Plugin                              | Type     | Options                                | Description                                   |
| ----------------------------------- | -------- | -------------------------------------- | --------------------------------------------- |
| [link](./src/plugins/link.js)       | function | `none`                                 | Extracting domain names, emails               |
| [mention](./src/plugins/mention.js) | function | `{ users: string[], pattern: RegExp }` | Extract user mention                          |
| [rest](./src/plugins/rest.js)       | Class    | `{ url: string }`                      | Extract entities from third party RESTful API |

### Extractor

```ts
type PluginOptions = string | {name: string, options: any} | SingleExtractor | ExtractorInterface;

interface {
  constructor(options: {plugins: ExtractorOptions[]}});
  extract(text: string | string[]): Promise<EntityInfo[] | EntityInfo[][]>
}
```

`Extractor` instance can be created by `extract.create()`,

It takes a option with `plugins` as an array of plugin options, each of options can be:

* A single string indicates build-in plugin name.
* A object with `name` of build-in plugin name and a `options` for plugin options.
* A simple function of type `SingleExtractor`.
* A object of type `ExtractorInterface`.

You can specify one plugin multi-times with different options, like `rest` plugin for different API.

Each plugin will take turns to execute the extraction process, in case there is some entity overlap,
the former ones will be kept.

### Example

```js
import zaml from '@zaml/parser';
import extract from '@zaml/extract';

const extractor = extract.create({
  plugins: ['link'],
});
const node = zaml.tokenize('Hello @everyone! this is our web site: www.example.com');
node.extractEntities(extractor);

console.log(JSON.stringify(node, null, 2));
```

output:

[example.json](./docs/example.json)

## API Documentation

Checkout [API Documentation](https://github.com/nexushubs/zaml-lang/tree/master/packages/zaml-extract/docs)

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
