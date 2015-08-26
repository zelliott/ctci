var Ctci = function() {};


/* Not in-place
 * [1 0 1]    [0 1 1]
 * [1 1 0] -> [0 1 0]
 * [0 0 0]    [0 0 1]
 *
 */
Ctci.prototype.rotate = function(image) {

  // Shallowly copy array
  var rotatedImage = image.map(function(imageRow) {
    return imageRow.slice();
  });

  for (var i = 0; i < image.length; i++) {
    var row = image[i];

    // Add this row to the rotated image now
    for (var y = 0; y < image.length; y++) {
      var rowValue = row[y];
      rotatedImage[y][image[y].length - 1 - i] = rowValue;
    }
  }

  return rotatedImage;
};

module.exports = new Ctci();
