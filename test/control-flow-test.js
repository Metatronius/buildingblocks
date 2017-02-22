const expect = require('chai').expect;
const controlFlow = require('../control-flow');

describe('Returns True if happy', () =>
{
  it('Should', () =>
  {
    const happy = controlFlow.ifHappy('happy');
    expect(happy).to.be.a('boolean');
    expect(happy).to.equal(true);
  })
});

describe('Handles capital letters', () =>
{
  it('Should', () =>
  {
    const happy = controlFlow.ifHappy('hApPy');
    expect(happy).to.be.a('boolean');
    expect(happy).to.equal(true);
  })
});

describe('Returns false if not happy', () =>
{
  it('Should', () =>
  {
    const happy = controlFlow.ifHappy('nothappy :(')
    expect(happy).to.be.a('boolean');
    expect(happy).to.equal(false);
  })
});
