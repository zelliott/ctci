describe('1.1', function() {
  var ctci = require('../../1/1.1.js');

  it('should return true on an empty string', function() {
    expect(ctci.hasUniqueChars('')).toBe(true);
  });

  it('should return true on a single character', function() {
    expect(ctci.hasUniqueChars('a')).toBe(true);
  });

  it('should return false when 2 characters are identical', function() {
    expect(ctci.hasUniqueChars('aa')).toBe(false);
  });

  it('should return true when 2 characters are different', function() {
    expect(ctci.hasUniqueChars('ab')).toBe(true);
  });

  it('should handle complex strings', function() {
    expect(ctci.hasUniqueChars('abcjdksjqlw')).toBe(false);
    expect(ctci.hasUniqueChars('abcjdiwoq*-=kJ')).toBe(true);
  });
});
