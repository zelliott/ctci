describe('9.1', function() {
  var ctci = require('../../9/9.1.js');

  it('should count the possible stair paths for many different values of \'n\'', function() {
    expect(ctci.stairPaths(1)).toEqual(1);
    expect(ctci.stairPaths(2)).toEqual(2);
    expect(ctci.stairPaths(3)).toEqual(4);
    expect(ctci.stairPaths(4)).toEqual(7);
  });

});
