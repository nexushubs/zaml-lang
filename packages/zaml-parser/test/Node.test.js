const chai = require('chai');
const fs = require('fs');
const ZAML = require('../lib');

const { expect } = chai;
const { Node, NODE_TYPES } = ZAML;

describe('class Node', () => {

  let node;

  beforeEach(() => {
    node = new Node(NODE_TYPES);
  });

  it('Constructor', () => {
    expect(node).to.be.instanceOf(Node);
  });

});
