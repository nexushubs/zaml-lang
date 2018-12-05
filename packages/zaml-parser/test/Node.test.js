const chai = require('chai');
const fs = require('fs');
const ZAML = require('../lib');
const { readFile, readJSON } = require('./util');

const { expect } = chai;
const { Node, NodeType } = ZAML;

describe('class Node', () => {

  const source = readFile('fixtures/sample.zaml');

  it('Constructor', () => {
    const node = new Node(NodeType.Root);
    expect(node).to.be.instanceOf(Node);
  });

  it('node.fromJSON()', () => {
    const sample = readJSON('fixtures/parsed-ast.json')
    const node = Node.fromJSON(sample);
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

});
