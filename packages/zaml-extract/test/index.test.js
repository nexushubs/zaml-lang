const chai = require('chai');
const fs = require('fs');
const extractor = require('../lib');
const zaml = require('@lvfang/zaml-parser');

const { expect } = chai;
const { Extractor, RestExtractor } = extractor;

describe('extractor', () => {

  let extractor;
  const sample = fs.readFileSync(`${__dirname}/fixtures/sample.txt`, { encoding: 'utf8' });

  beforeEach(() => {
    extractor = new Extractor({});
  });

  it('Constructor', () => {
    expect(extractor).to.be.instanceOf(Extractor);
  });

  it('test extracting text', async () => {
    extractor = new Extractor({
      plugins: [
        'link',
        'mention',
        { name: 'rest', options: { url: 'http://127.0.0.1:4040/parse' } },
      ],
    });
    const result = await extractor.extract([sample, sample]);
    // console.log(JSON.stringify(result, null, 2));
  });

  it('test extracting node', async () => {
    extractor = new Extractor({
      plugins: [
        'link',
        'mention',
        // TODO replace to mock http server
        { name: 'rest', options: { url: 'http://127.0.0.1:4040/parse' } },
      ],
    });
    const node = zaml.tokenize(sample);
    // console.log(JSON.stringify(node, null, 2));
    await node.extractEntities(extractor);
    // console.log(JSON.stringify(node, null, 2));
    const newSource = node.toSource();
    // console.log(newSource);
    const newNode = zaml.tokenize(newSource);
    // console.log(JSON.stringify(newNode, null, 2));
    expect(newNode.toJSON()).to.deep.equal(node.toJSON());
  });
});
