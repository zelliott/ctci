describe('1.4', function() {
  var ctci = require('../../1/1.4.js');

  it('should not modify a string with no spaces', function() {
    expect(ctci.replaceSpaces('aa')).toBe('aa');
  });

  it('should replace spaces in a string', function() {
    expect(ctci.replaceSpaces('a a')).toBe('a%20a');
  });

  it('should replace multiple spaces in a row', function() {
    expect(ctci.replaceSpaces('a  a  ')).toBe('a%20%20a%20%20');
  });
});
