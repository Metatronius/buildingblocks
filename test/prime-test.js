const expect = require('chai').expect;
const prime = require('../prime').prime;

describe('prime()', () =>
{
  it('throws an error if limit is not a positive integer', () =>
  {
    expect(prime('cow')).to.be.an('error');
    expect(prime(-9)).to.be.an('error');
    expect(prime(8.8)).to.be.an('error');
  });

  it('returns an array', () =>
  {
    expect(prime(10)).to.be.a('array');
  });

  it('returns an array of all prime numbers up to limit', () =>
  {
    expect(prime(200)).to.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
      37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
      103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163,
      167, 173, 179, 181, 191, 193, 197, 199
    ]);
  });

})
