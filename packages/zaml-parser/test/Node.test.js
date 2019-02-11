const chai = require('chai');
const fs = require('fs');
const zaml = require('..');
const { readFile, readJSON } = require('./util');

const { expect } = chai;
const { Node, NodeType } = zaml;

describe('class Node', () => {

  const source = readFile('fixtures/sample.zaml');

  it('Constructor', () => {
    const node = new Node(NodeType.Root);
    expect(node).to.be.instanceOf(Node);
  });

  it('node.fromJSON()', () => {
    const sample = readJSON('fixtures/parsed-ast.json')
    const node = Node.fromJSON(sample);
    // console.log(node.toSource());
    expect(node.toSource().replace(/\n\n/g, '\n')).to.equal(source);
    // expect(Node.fromJSON(parsed).toJSON({ position: true })).to.deep.equal(parsed);
  });

  // it('Node.toString()', () => {
  //   expect(node.toString()).to.equal(stringified);
  // });

  // it('Node.findTextByRange()', () => {
  //   expect(Node.fromJSON(parsed).toJSON({ position: true })).to.deep.equal(parsed);
  //   const textNode = node.findTextByRange(40, 50)
  //   expect(textNode).to.be.instanceOf(Node);
  //   expect(textNode.type).to.equal(NODE_TYPES.TEXT);
  // });

  it('node.createEntitiesFromText()', () => {
    const node = Node.fromSource('The quick brown [fox]{ANIMAL} jumps over the lazy dog.');
    result = 'The [quick]{SPEED} brown [fox]{ANIMAL} [jumps]{ACTION} over the lazy [dog]{ANIMAL}.';
    text = 'The quick brown fox jumps over the lazy dog.';
    const entities = [{
      start: 4,
      end: 9,
      type: 'SPEED',
    }, {
      start: 20,
      end: 25,
      type: 'ACTION',
    }, {
      start: 40,
      end: 43,
      type: 'ANIMAL',
    }];
    node.createEntitiesFromText(entities);
    expect(node.toSource().indexOf(result))
  });

  describe('node.toSource()', () => {

    let attributes;
    beforeEach(() => {
      attributes = {
        string1: 'unwrapped_string',
        string2: 'wrapped string with escaped quote \"',
        string3: '2cats',
        string4: '123',
        int1: 0,
        int2: 1,
        int3: -56,
        bigInt: `${Number.MAX_SAFE_INTEGER}0`,
        float1: 3.1415926,
        float2: .618,
        float3: 1e3,
        float4: -1e-3,
        hex: 0x10,
        oct: 0o10,
        bin: 0b10,
        bool1: true,
        bool2: true,
        bool3: true,
        bool4: true,
        bool5: false,
        bool6: false,
        bool7: false,
      }
    });

    it('attributes', () => {
      const block = Node.createBlock({ attributes });
      const source = block.toSource();
      const node = zaml.parse(source);
      expect(node.firstChild.attributes).to.deep.equal(attributes);
    });

    it('attributes as string', () => {
      const _attributes = {
        string1: 'unwrapped_string',
        string2: 'wrapped string with escaped quote \"',
        string3: '2cats',
        string4: '123',
        int1: '0',
        int2: '1',
        int3: '-56',
        bigInt: `${Number.MAX_SAFE_INTEGER}0`,
        float1: '3.1415926',
        float2: '0.618',
        float3: '1000',
        float4: '-0.001',
        hex: '16',
        oct: '8',
        bin: '2',
        bool1: 'true',
        bool2: 'true',
        bool3: 'true',
        bool4: 'true',
        bool5: 'false',
        bool6: 'false',
        bool7: 'false',
      };
      const block = Node.createBlock({ attributes });
      const source = block.toSource({ attributeAsString: true });
      const node = zaml.parse(source);
      expect(node.firstChild.attributes).to.deep.equal(_attributes);
    });

  });

});
