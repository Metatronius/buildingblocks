const expect = require('chai').expect;
const fence = require('../fencepost').fence;

describe('fence()\n\t', () =>
{
  it('throws an error if times is not a positive integer', () =>
  {
    expect(fence('cow')).to.throw(Error);
    expect(fence(-9)).to.throw(Error);
    expect(fence(8.8)).to.throw(Error);
  });

  it('has no fenceposting issues', () =>
  {
    expect(fence(4)).to.equal('|1|2|3|4|');
  })
});
