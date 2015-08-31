var Ctci = function() {};

function panSearch(arr, mid, v, lookLeft, iteration) {
  var indexToTest = lookLeft ? mid - iteration : mid + iteration;

  // If past lower bound, panSearch to the right.  If past
  // upper bound, element does not exist.  Otherwise, test
  // for a non-empty string
  if (indexToTest < 0) {
    return panSearch(arr, mid, v, false, iteration);
  } else if (indexToTest > arr.length - 1) {
    console.log('Element cannot be found');
    return;
  } else {

    // If another empty string, pan search again.  Otherwise,
    // use this as our mid.
    if (arr[indexToTest].length > 0) {
      return indexToTest;
    } else {
      iteration = lookLeft ? iteration : iteration + 1;
      return panSearch(arr, mid, v, !lookLeft, iteration);
    }
  }
}

function modifiedBinarySearch(arr, mid, v) {

  // If we're on an empty string, pan left and right
  // one step at a time to search for a non empty string.
  if (arr[mid].length === 0) {
    mid = panSearch(arr, mid, v, true, 1);
  }

  if (v === arr[mid]) {
    return mid;
  } else if (v < arr[mid]) {
    return modifiedBinarySearch(arr, Math.floor(mid / 2), v);
  } else {
    return modifiedBinarySearch(arr, Math.floor((mid + arr.length) / 2), v);
  }
}

Ctci.prototype.findAmongEmpties = function(arr, v) {
  return modifiedBinarySearch(arr, Math.floor(arr.length / 2), v);
};

module.exports = new Ctci();
