const chai = require('chai');
const fs = require('fs');
const zaml = require('../lib');
const { readFile, readJSON } = require('./util');

const { expect } = chai;
const { Tokenizer, Node } = zaml;

describe('class Tokenizer', () => {

  const source = readFile('fixtures/sample.zaml');
  const parsed = readJSON('fixtures/parsed-ast.json');
  const stringified = readFile('fixtures/stringified.txt');
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

  it('front-matter: no leading mark', () => {
    const sample = readFile('fixtures/front-matter-no-leading-mark.zaml')
    const node = zaml.parse(sample)
    expect(node.attributes).deep.equal({
      "hello": "world",
      "foo": "bar"
    })
  })

});
