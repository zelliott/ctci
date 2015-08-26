describe('1.6', function() {
  var ctci = require('../../1/1.6.js');

  it('should rotate a basic 2x2 array', function() {
    var image = [
      [0, 1],
      [1, 0]
    ];

    var rotatedImage = [
      [1, 0],
      [0, 1]
    ];

    expect(ctci.rotate(image)).toEqual(rotatedImage);
  });

  it('should rotate a basic 3x3 array', function() {
    var image = [
      [0, 1, 0],
      [1, 0, 1],
      [1, 1, 1]
    ];

    var rotatedImage = [
      [1, 1, 0],
      [1, 0, 1],
      [1, 1, 0]
    ];

    expect(ctci.rotate(image)).toEqual(rotatedImage);
  });
});
