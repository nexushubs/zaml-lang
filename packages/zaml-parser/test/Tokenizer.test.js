const chai = require('chai');
const fs = require('fs');
const ZAML = require('../lib');

const { expect } = chai;
const { Tokenizer, Node } = ZAML;

describe('class Tokenizer', () => {

  const source = fs.readFileSync(`${__dirname}/fixtures/sample.zaml`, { encoding: 'utf8' });
  const parsed = JSON.parse(fs.readFileSync(`${__dirname}/fixtures/parsed-ast.json`, { encoding: 'utf8' }));
  const stringified = fs.readFileSync(`${__dirname}/fixtures/stringified.txt`, { encoding: 'utf8' });
  let tokenizer;

  beforeEach(() => {
    tokenizer = new Tokenizer(source);
    // tokenizer = new Tokenizer(source, {verbose: true});
  });

  it('Constructor', () => {
    expect(tokenizer).to.be.instanceOf(Tokenizer);
  });

  it('process()', () => {
    const node = tokenizer.process();
    expect(tokenizer.parsed).to.be.true;
    expect(JSON.parse(JSON.stringify(node.toJSON({ position: true })))).to.deep.equal(parsed);
    // console.log(node.toSource());
    // console.log(node.toString());
    // console.log(JSON.stringify(node.toJSON({ position: true }), null, 2));
  });

});
