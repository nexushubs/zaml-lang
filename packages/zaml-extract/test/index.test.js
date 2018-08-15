const chai = require('chai');
const fs = require('fs');
const extractor = require('../lib');

const { expect } = chai;
const { Extractor, RestExtractor } = extractor;

describe('extractor', () => {

  let instance;
  const sample = fs.readFileSync(`${__dirname}/fixtures/sample.txt`, { encoding: 'utf8' });

  beforeEach(() => {
    instance = new Extractor({});
  });

  it('Constructor', () => {
    expect(instance).to.be.instanceOf(Extractor);
  });

  it('Constructor', async () => {
    instance = new Extractor({
      plugins: [
        'link',
        'mention',
        { name: 'rest', options: { url: 'http://127.0.0.1:4040/parse' } },
      ],
    });
    const result = await instance.extract(sample);
    console.log(JSON.stringify(result, null, 2));
  });

});
