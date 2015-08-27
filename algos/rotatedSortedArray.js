function searchArray(arr, n) {
  var beg = 0;
  var mid = Math.floor(arr.length / 2);
  var end = arr.length - 1;

  // Edge case
  if (arr.length === 2) {
    return arr[0] === n ? arr[0] : arr[1];
  }

  // Edge case
  if (arr.length === 1) {
    return arr[0];
  }

  // If actual beginning is in the first partition
  if (arr[beg] > arr[mid]) {
    if (n >= arr[mid] && n <= arr[end]) {
      return searchArray(arr.slice(mid, end + 1), n);
    } else {
      return searchArray(arr.slice(beg, mid), n);
    }
  } else {
    if (n >= arr[beg] && n <= arr[mid]) {
      return searchArray(arr.slice(beg, mid), n);
    } else {
      return searchArray(arr.slice(mid, end + 1), n);
    }
  }
}

console.log(searchArray([5, 6, 1, 2, 3, 4], 4));
