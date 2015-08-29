describe('9.5', function() {
  var ctci = require('../../9/9.5.js');

  it('should correctly generate all string permutations', function() {
    expect(ctci.stringPermutations('')).toEqual(['']);
    expect(ctci.stringPermutations('a').sort()).toEqual(['a'].sort());
    expect(ctci.stringPermutations('abc').sort()).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort());
    expect(ctci.stringPermutations('op').sort()).toEqual(['op', 'po'].sort());
  });
});
