describe('9.7', function() {
  var ctci = require('../../9/9.7.js');

  it('should fill screens with color', function() {
    var screenA = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 0, 1, 1, 0]
    ];
    var screenAPainted = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];

    ctci.paintFill(screenA, 1, 2, 0);

    expect(screenA).toEqual(screenAPainted);
  });
});
