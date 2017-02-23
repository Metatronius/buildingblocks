const expect = require('chai').expect;
const search = require('../search-for-trouble').search;

describe('search()\n\t', () =>
{
  it('returns false if input contains "trouble", case insensitive.', () =>
  {
    expect(search(['trouble', 'howdy', 'partner'])).to.equal(false);
    expect(search(['howdy', 'partner', 'are', 'you', 'looking', 'for',
      'TrouBle', '?'
    ]));
  });
  it('returns tue if input does not contain "trouble", case insensitive', () =>
  {
    expect(search(['no', 'problem', 'here', 'officer'])).to.equal(true);
    expect(search([1, 2, 3, 4, 5])).to.equal(true);
    expect(search([true, false, true, false])).to.equal(true);
  })
})
