describe('9.3', function() {
  var ctci = require('../../9/9.3.js');

  it('should find the magic index properly for many different arrays', function() {
    expect(ctci.findMagicIndex([0])).toEqual(true);
    expect(ctci.findMagicIndex([2, 1])).toEqual(true);
    expect(ctci.findMagicIndex([-1, 0, 1, 2, 3, 5])).toEqual(true);
    expect(ctci.findMagicIndex([5, 4, 2, 1, 0])).toEqual(true);
  });

  it('should not report a magic index for other arrays', function() {
    expect(ctci.findMagicIndex([-1, -2, -3, -4, -5, -6 , -7])).toEqual(false);
    expect(ctci.findMagicIndex([1, 2, 3, 4, 5])).toEqual(false);
    expect(ctci.findMagicIndex([4, 6, 1, 2, 8, 9, 0])).toEqual(false);
    expect(ctci.findMagicIndex([-1, 0, 1, 2, 3, 4])).toEqual(false);

  });

});
