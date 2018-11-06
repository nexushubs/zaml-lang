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

  beforeEach(() => {
  });

  it('Constructor', () => {
    const tokenizer = new Tokenizer(source);
    // tokenizer = new Tokenizer(source, {verbose: true});
    expect(tokenizer).to.be.instanceOf(Tokenizer);
  });

  it('process()', () => {
    const tokenizer = new Tokenizer(source);
    const node = tokenizer.process();
    expect(tokenizer.parsed).to.be.true;
    expect(JSON.parse(JSON.stringify(node.toJSON({ position: true })))).to.deep.equal(parsed);
  });

  describe('feature: front matter', () => {

    it('front matter without leading mark', () => {
      const sample = `
        hello: world
        foo: bar
        ---
        The leading mark of front matter could be ignored
      `;
      const node = zaml.parse(sample);
      expect(node.attributes).deep.equal({
        hello: 'world',
        foo: 'bar'
      });
    })

  });

  describe('feature: simple block', () => {

    it('simple block', () => {
      const sample = `
        {
          This is a simple block
        }
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
    });

    it('simple block with labels', () => {
      const sample = `
        {#FOO #BAR #标签
          This is a simple block with labels
        }
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
      expect(node.childNodes[0].labels.sort()).deep.equal(['BAR', 'FOO', '标签']);
    });

    it('simple block with attributes', () => {
      const sample = `
        {A=1 属性1=2 attr_1=3
          This is a simple block with attributes
        }
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
      expect(node.childNodes[0].attributes).deep.equal({A: 1, 属性1: 2, attr_1: 3 });
    });

    it('simple block with attributes and labels', () => {
      const sample = `
        {foo=1 #L1 bar=2 #L2
          This is a simple block with attributes and labels
        }
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
      expect(node.childNodes[0].attributes).deep.equal({foo: 1, bar: 2 });
      expect(node.childNodes[0].labels.sort()).deep.equal(['L1', 'L2']);
    });

    it('simple block with labels and attributes', () => {
      const sample = `
        {#L1 foo=1 bar=2 #L2
          This is a simple block with labels and attributes  
        }
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
      expect(node.childNodes[0].attributes).deep.equal({foo: 1, bar: 2 });
      expect(node.childNodes[0].labels.sort()).deep.equal(['L1', 'L2']);
    });

    it('simple block with labels and without bracket', () => {
      const sample = `
        #FOO #BAR
        This is a simple block with labels
        And no start and end marker

        Another paragraph
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
      expect(node.childNodes[0].labels.sort()).deep.equal(['BAR', 'FOO']);
    });

  });

});
