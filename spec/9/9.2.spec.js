describe('9.2', function() {
  var ctci = require('../../9/9.2.js');

  it('should generate the correct path counts for multiple dimension grids', function() {
    expect(ctci.robotPaths(1, 1)).toEqual(1);
    expect(ctci.robotPaths(2, 2)).toEqual(2);
    expect(ctci.robotPaths(3, 3)).toEqual(6);
    expect(ctci.robotPaths(2, 5)).toEqual(5);
  });

});
