const expect = require('chai').expect;
const controlFlow = require('../control-flow');

describe('ifHappy()', () =>
{
  before(() =>
  {
    const ifHappy = controlFlow.ifHappy
  });
  it('returns true if happy', () =>
  {
    expect(ifHappy('happy')).to.equal(true);
  });

  it('handles capital letters', () =>
  {
    expect(ifHappy('hApPy')).to.equal(true);
  });

  it('returns false if not happy', () =>
  {
    expect(ifHappy('nothappy :(')).to.equal(false);
    expect(ifHappy(5)).to.equal(false);
    expect(ifHappy(true)).to.equal(false);
  });
});

describe('odd()', () =>
{
  before(() =>
  {
    const odd = controlFlow.odd;
  });
  it('returns an array', () =>
  {
    expect(odd(7)).to.be.a('array');
  });

  it('returns all odd numbers from 1 to the parameter', () =>
  {
    expect(odd(18)).to.equal([1, 3, 5, 7, 9, 11, 13, 15, 17]);
  });

  it('throw error if input is not a positive integer', () =>
  {
    expect(odd('this is a string')).to.be.an('error');
    expect(odd(-5)).to.be.an('error');
    expect(odd(5.5)).to.be.an('error');
  });
});

describe('stairs()', () =>
{
  before(() =>
  {
    const stairs = controlFlow.stairs;
  });
  it('throws an error if height is not a positive integer', () =>
  {
    expect(stairs('this is a string')).to.be.an('error');
    expect(stairs(-5)).to.be.an('error');
    expect(stairs(5)).to.be.an('error');
  });

  it('returns a proper staircase', () =>
  {
    expect(stairs(4)).to.equal('   *\n  **\n ***\n****');
  });
});

describe('emote()', () =>
{
  before(() =>
  {
    const emote = controlFlow.emote
  });
  it('throws an error if mood is not valid', () =>
  {
    expect(emote('cow')).to.be.an('error');
    expect(emote(5)).to.be.an('error');
  });
  it('returns the correct emoticons', () =>
  {
    expect(emote('happy')).to.equal(':)');
    expect(emote('sad')).to.equal(':(');
    expect(emote('angry')).to.equal('>:(');
    expect(emote('EvIL')).to.equal('>:)');
    expect(emote('MiScHeIvIoUs')).to.equal(';)');
    expect(emote('LAUGhing')).to.equal(':D');
    expect(emote('despair')).to.equal('D:')
    expect(emote('crYING')).to.equal(':\'(');
  });
})
