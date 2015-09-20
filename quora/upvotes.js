// Input
// 5 3
// [1 2 3 1 1]
//
// Output
// (incr - decr)
// 3 = (12) + (13) + (123)
// 0 = (23) - (31)
// -2 = (11) - (11) - (31) - (311)

function squash(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      arr[i - 1] = 1;
    } else {
      arr[i - 1] = -1;
    }
  }

  return arr.slice(0, arr.length - 1);
}

function shrink(arr, level) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i - 1] > 0) {
      arr[i - 1] = (0.5 * Math.pow(level, 2)) - (0.5 * level);
    } else {
      arr[i - 1] = 0;
    }
  }

  return arr.slice(0, arr.length - 1);
}

function trackUpvotes(n, k, upvotes) {
  var result = squash(upvotes);

  for (var i = 3; i <= k; i++) {
    result = shrink(result, i);
  }

  return result;
}

console.log(trackUpvotes(5, 4, [1, 2, 3, 1, 2]));
