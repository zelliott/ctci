describe('9.4', function() {
  var ctci = require('../../9/9.4.js');

  it('should return all subsets of the following sets', function() {
    expect(ctci.findSubsets([])).toEqual([[]]);
    expect(ctci.findSubsets([0]).sort()).toEqual([[], [0]].sort());
    expect(ctci.findSubsets([1, 2]).sort()).toEqual([[], [1], [1, 2], [2]].sort());
    expect(ctci.findSubsets([1, 2, 3]).sort()).toEqual([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]].sort());
  });
});
