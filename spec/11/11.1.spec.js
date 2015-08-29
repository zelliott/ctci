describe('11.1', function() {
  var ctci = require('../../11/11.1.js');

  it('should correctly merge arrays', function() {
    expect(ctci.mergeArrays([1], [2])).toEqual([1, 2]);
    expect(ctci.mergeArrays([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
    expect(ctci.mergeArrays([1, 4, 5], [2, 3, 4])).toEqual([1, 2, 3, 4, 4, 5]);
    expect(ctci.mergeArrays([3, 4, 5], [1, 2, 3])).toEqual([1, 2, 3, 3, 4, 5]);
  });

});
