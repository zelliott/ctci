// FIXME: A few bugs with this implementation.
function sortRange(arr) {
  var min = arr[0];
  var max = arr[arr.length - 1];

  var startIndex = 0;
  var endIndex = arr.length - 1;

  // Calculate the starting index of the range
  for (var i = 1; i < arr.length; i++) {
    var prev = arr[i - 1];
    var curr = arr[i];

    if (prev <= curr) {

    } else {
      startIndex = i;
      break;
    }
  }

  // Calculate the ending index of the range
  for (i = arr.length - 2; i > startIndex; i--) {
    var prev = arr[i + 1];
    var curr = arr[i];

    if (prev >= curr) {

    } else {
      endIndex = i;
      break;
    }
  }

  // Check min and max conditions
  for (i = startIndex; i <= endIndex; i++) {

    for (var j = startIndex - 1; j >= 0; j--) {
      if (arr[startIndex] < arr[j]) {

      } else {
        break;
      }
    }

    startIndex = j + 1;

    for (j = endIndex + 1; j < arr.length; j++) {
      if (arr[endIndex] > arr[j]) {

      } else {
        break;
      }
    }

    endIndex = j - 1;
  }


  return {
    'start': startIndex,
    'end': endIndex
  };
}

console.log(sortRange([3, 4, 5, 10, 8, 9, 1, 2]));
console.log(sortRange([4, 5, 1, 2, 3, 9, 7, 8]));
console.log(sortRange([2, 4, 5, 6, 3, 8]));
