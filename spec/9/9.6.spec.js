describe('9.6', function() {
  var ctci = require('../../9/9.6.js');

  it('should correctly generate all parentheses n-pairs', function() {
    expect(ctci.pairsOfParentheses(1)).toEqual(['()']);
    expect(ctci.pairsOfParentheses(2)).toEqual(['()()', '(())']);
    expect(ctci.pairsOfParentheses(3).sort()).toEqual(['()()()', '(())()', '()(())', '((()))', '(()())'].sort());
  });
});
