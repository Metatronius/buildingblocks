const expect = require('chai').expect;
const controlFlow = require('../control-flow');

describe('ifHappy()', () =>
{
  it('returns true if happy', () =>
  {
    const happy = controlFlow.ifHappy('happy');
    expect(happy).to.be.a('boolean');
    expect(happy).to.equal(true);
  });

  it('handles capital letters', () =>
  {
    const happy = controlFlow.ifHappy('hApPy');
    expect(happy).to.be.a('boolean');
    expect(happy).to.equal(true);
  });

  it('returns false if not happy', () =>
  {
    const happy = controlFlow.ifHappy('nothappy :(')
    expect(happy).to.be.a('boolean');
    expect(happy).to.equal(false);
  });
});

describe('odd()', () =>
{
  it('returns an array', () =>
  {
    const odd = controlFlow.odd(7);
    expect(odd).to.be.a('array');
  });

  it('returns all odd numbers from 1 to the parameter', () =>
  {
    const odd = controlFlow.odd(18);
    expect.odd.to.equal([1, 3, 5, 7, 9, 11, 13, 15, 17]);
  });

  it('throw error if input is not a positive integer', () =>
  {
    let odd = controlFlow.odd('this is a string');
    expect.odd.to.be.an('error');
    odd = controlFlow.odd(-5);
    expect.odd.to.be.an('error');
    odd = controlFlow.odd(5.5);
    expect.odd.to.be.an('error');
  });
});

describe('stairs()', () =>
{
  it('throws an error if height is not a positive integer', () =>
  {
    let stairs = controlFlow.stairs('this is a string');
    expect.stairs.to.be.an('error');
    stairs = controlFlow.stairs(-5);
    expect.stairs.to.be.an('error');
    stairs = controlFlow.stairs(5.5);
    expect.odd.to.be.an('error');
  });

  it('returns a proper staircase', () =>
  {
    let stairs = controlFlow.stairs(4);
    expect.stairs.to.equal('   *\n  **\n ***\n****');
  });
});

describe('emote()', () =>
{
  it('throws an error if mood is not valid', () =>
  {
    let emote = controlFlow.emote('cow');
    expect.emote.to.be.an('error');
    emote = controlFlow.emote(5);
    expect.stairs.to.be.an('error');
  })
  it('returns the correct emoticons', () =>
  {
    const e = controlFlow.emote
    let emote = e('happy');
    expect.emote.to.equal(':)');
    emote = e('sad');
    expect.emote.to.equal(':(');
    emote = e('angry');
    expect.emote.to.equal('>:(');
    emote = e('EvIl');
    expect.emote.to.equal('>:)');
    emote = e("MiScHeIvIoUs");
    expect.emote.to.equal(';)');
    emote = e("LAUGhing");
    expect.emote.to.equal(':D');
    emote = e("despair");
    expect.emote.to.equal('D:')
    emote = e('crYING');
    expect.emote.to.equal(':\'(');
  })
})
