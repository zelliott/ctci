describe('11.2', function() {
  var ctci = require('../../11/11.2.js');

  it('should correctly order arrays', function() {
    expect(ctci.anagramArray(['abc', 'def', 'bac', 'fed'])).toEqual(['abc', 'bac', 'def', 'fed']);
  });

});
