const chai = require('chai');
const fs = require('fs');
const EAML = require('../lib');

const { expect } = chai;
const { TextStream } = EAML;

describe('class TextStream', () => {

  const sample = 'Hello World!';
  const multiLineSample = 'Line 1\nLine 2\r\nLine 3';
  let stream;

  beforeEach(() => {
    stream = new TextStream(sample);
  });

  it('Constructor', () => {
    expect(stream).to.be.instanceOf(TextStream);
  });

  it('sol() start of line', () => {
    stream = new TextStream(multiLineSample);
    stream.pos = 1;
    expect(stream.sol()).to.be.false;
    stream.pos = 7;
    expect(stream.sol()).to.be.true;
    expect(stream.sol(15)).to.be.true;
  });

  it('eol() end of line', () => {
    stream = new TextStream(multiLineSample);
    expect(stream.eol()).to.be.false;
    stream.pos = 6;
    expect(stream.eol()).to.be.true;
    expect(stream.eol(13)).to.be.true;
  });

  it('eof() end of file', () => {
    stream = new TextStream(multiLineSample);
    stream.pos = multiLineSample.length;
    expect(stream.eol()).to.be.true;
    expect(stream.eol(multiLineSample.length)).to.be.true;
  });

  it('peek() next char, cursor stays', () => {
    const char = stream.peek();
    expect(char).to.equal('H');
    expect(stream.pos).to.equal(0);
  });

  it('peek() while EOF', () => {
    stream.pos = 1000;
    expect(stream.peek()).to.be.undefined;
  });

  it('next() next char, cursor moves 1 step forward', () => {
    const char = stream.next();
    expect(char).to.equal('H');
    expect(stream.pos).to.equal(1);
  });

  it('next() while EOF', () => {
    stream.pos = 1000;
    expect(stream.next()).to.be.undefined;
  });

  it('eat() correct char, cursor moves 1 step forward', () => {
    const char1 = stream.eat('H');
    expect(stream.pos).to.equal(1);
    expect(char1).to.equal('H');
    const char2 = stream.eat(/[a-z]/);
    expect(stream.pos).to.equal(2);
    expect(char2).to.equal('e');
  });

  it('eat() incorrect char, cursor stays', () => {
    const char1 = stream.eat('S');
    expect(stream.pos).to.equal(0);
    expect(char1).to.be.undefined;
    const char2 = stream.eat(/\d/);
    expect(stream.pos).to.equal(0);
    expect(char2).to.be.undefined;
  });

  it('eat() while EOF', () => {
    stream.pos = 1000;
    expect(stream.eat('')).to.be.undefined;
  });

  it('eatWhile() char', () => {
    expect(stream.eatWhile('l')).to.be.false;
    stream.next();
    stream.next();
    expect(stream.eatWhile('l')).to.be.true;
    expect(stream.pos).to.equal(4);
  });

  it('eatWhile() regexp pattern', () => {
    expect(stream.eatWhile(/[a-z]/i)).to.be.true;
    expect(stream.pos).to.equal(5);
  });

  it('eatUntil() char', () => {
    expect(stream.eatUntil(' ')).to.be.true;
    expect(stream.pos).to.equal(5);
  });

  it('eatUntil() regexp pattern', () => {
    expect(stream.eatUntil(/[^a-z]/i)).to.be.true;
    expect(stream.pos).to.equal(5);
  });

  it('eatSpace() no space to eat', () => {
    expect(stream.eatSpace()).to.be.false;
  });

  it('eatSpace() eat spaces', () => {
    stream = new TextStream(`      ${sample}`);
    expect(stream.eatSpace()).to.be.true;
    expect(stream.pos).to.equal(6);
  });

  it('read() empty parameter, assumes 1', () => {
    expect(stream.read()).to.equal('H');
    expect(stream.pos).to.equal(1);
  });

  it('read() read n chars', () => {
    expect(stream.read(5)).to.equal('Hello');
    expect(stream.pos).to.equal(5);
  });

  it('read() read overflowed chars', () => {
    expect(stream.read(1000)).to.equal(sample);
    expect(stream.pos).to.equal(sample.length);
  });

  it('readTo() read to char', () => {
    expect(stream.readTo(' ')).to.equal('Hello');
    expect(stream.pos).to.equal(5);
  });

  it('readTo() read to char, consumes the match', () => {
    expect(stream.readTo(' ', { consume: true })).to.equal('Hello ');
    expect(stream.pos).to.equal(6);
  });

  it('readTo() read to none-exists char', () => {
    expect(stream.readTo('?')).to.equal('');
    expect(stream.pos).to.equal(0);
  });

  it('readTo() read to none-exists char, to EOF', () => {
    expect(stream.readTo('?', { toEOF: true })).to.equal(sample);
    expect(stream.pos).to.equal(sample.length);
  });

  it('readTo() read to pattern', () => {
    expect(stream.readTo(/\s/)).to.equal('Hello');
    expect(stream.pos).to.equal(5);
  });

  it('readTo() read to pattern, consumes the match', () => {
    expect(stream.readTo(/lo/, { consume: true })).to.equal('Hello');
    expect(stream.pos).to.equal(5);
  });

  it('readOver() shortcut for readTo(text, { consume: true })', () => {
    expect(stream.readOver(' ')).to.equal('Hello ');
    expect(stream.pos).to.equal(6);
  });

  it('readLine() read lines', () => {
    stream = new TextStream(multiLineSample);
    expect(stream.readLine()).to.equal('Line 1');
    expect(stream.readLine()).to.equal('Line 2');
    expect(stream.readLine()).to.equal('Line 3');
  })

  it('skipTo() skip to pattern', () => {
    expect(stream.skipTo(' ')).to.be.true;
    expect(stream.pos).to.equal(5);
  });

  it('skipTo() skip to none exists pattern', () => {
    expect(stream.skipTo('foo')).to.be.false;
    expect(stream.pos).to.equal(0);
  });

  it('skipOver() skip after pattern', () => {
    expect(stream.skipOver(' ')).to.be.true;
    expect(stream.pos).to.equal(6);
  });

  it('match() match incorrect string', () => {
    expect(stream.match('World')).to.be.null;
  });

  it('match() match incorrect regexp', () => {
    expect(stream.match(/\d+/)).to.be.null;
  });

  it('match() match string', () => {
    expect(stream.match('Hello')).to.equal('Hello');
    expect(stream.pos).to.equal(5);
    expect(stream.match(' ', { consume: false })).to.equal(' ');
    expect(stream.pos).to.equal(5);
  });
  
  it('match() match regexp', () => {
    expect(stream.match(/Hell/)).to.equal('Hell');
  });

  it('match() match string case insensitive', () => {
    expect(stream.match('hello', { caseInsensitive: true })).to.equal('Hello');
  });

  it('pushMarker() & setMarkerData() & popMarker()', () => {
    stream.pos = 3;
    stream.pushMarker({name: 'wired'});
    stream.pushMarker({}, 5);
    stream.setMarkerData({name: 'space'});
    stream.pos = 6;
    expect(stream.popMarker()).to.deep.equal({
      text:' ',
      position: {
        start: 5,
        end: 6,
      },
      data: {
        name: 'space',
      },
    });
    expect(stream.popMarker({}, 8)).to.deep.equal({
      text:'lo Wo',
      position: {
        start: 3,
        end: 8,
      },
      data: {
        name: 'wired',
      },
    });
  });

});
