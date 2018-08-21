const chai = require('chai');
const fs = require('fs');
const ZAML = require('../lib');

const { expect } = chai;
const { Node, NODE_TYPES } = ZAML;

describe('class Node', () => {

  const source = fs.readFileSync(`${__dirname}/fixtures/sample.zaml`, { encoding: 'utf8' });
  const parsed = JSON.parse(fs.readFileSync(`${__dirname}/fixtures/parsed-ast.json`, { encoding: 'utf8' }));
  const stringified = fs.readFileSync(`${__dirname}/fixtures/stringified.txt`, { encoding: 'utf8' });
  let node;

  beforeEach(() => {
    node = new Node(NODE_TYPES);
  });

  it('Constructor', () => {
    expect(node).to.be.instanceOf(Node);
  });

  it('node.fromJSON()', () => {
    node = Node.fromSource(source);
    // console.log(node.toSource());
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

  it.only('node.createEntitiesFromText()', () => {
    node = Node.fromSource('The quick brown [fox]{ANIMAL} jumps over the lazy dog.');
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
