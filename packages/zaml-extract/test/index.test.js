const chai = require('chai');
const fs = require('fs');
const extractor = require('..');
const zaml = require('@zaml/parser');

const { expect } = chai;
const { Extractor, RestExtractor } = extractor;

describe('extractor', () => {

  let extractor;
  const sample = fs.readFileSync(`${__dirname}/fixtures/sample.txt`, { encoding: 'utf8' });
  const links = fs.readFileSync(`${__dirname}/fixtures/links.txt`, { encoding: 'utf8' });

  beforeEach(() => {
    extractor = new Extractor({});
  });

  it('Constructor', () => {
    expect(extractor).to.be.instanceOf(Extractor);
  });

  it('test extracting text array', async () => {
    extractor = new Extractor({
      plugins: [
        'link',
        'mention',
        // TODO replace to mock http server
        // { name: 'rest', options: { url: 'http://127.0.0.1:4500/api/parse' } },
      ],
    });
    const result = await extractor.extract([sample, sample]);
    // console.log(JSON.stringify(result, null, 2));
  });

  it('test extracting node', async () => {
    extractor = new Extractor({
      plugins: [
        'link',
        { name: 'mention', options: { users: ['someone', 'someone_else']}},
        // TODO replace to mock http server
        // { name: 'rest', options: { url: 'http://127.0.0.1:4500/api/parse' } },
      ],
    });
    const node = zaml.parse(sample);
    // console.log(JSON.stringify(node, null, 2));
    await node.extractEntities(extractor);
    // console.log(JSON.stringify(node, null, 2));
    const newSource = node.toSource();
    // console.log(newSource);
    const newNode = zaml.parse(newSource);
    // console.log(JSON.stringify(newNode, null, 2));
    expect(newNode.toJSON()).to.deep.equal(node.toJSON());
  });

  it('preserve line-breaks around single link', async () => {
    extractor = new Extractor({
      plugins: [
        'link',
      ],
    });
    const node = zaml.parse(links);
    await node.extractEntities(extractor);
    const newSource = node.toSource();
    console.log(JSON.stringify(node.toJSON(), null, 2));
    console.log(node.toSource());
  });

});
