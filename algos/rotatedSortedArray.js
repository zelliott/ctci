/* The gist of this algo is to use binary search
 * to find where the rotation pivot must be.
 * Once this is known, we can smartly search each
 * partition for 'n'.
 *
 * Note: if instead you want to return the index,
 * pass in the start, end indices of the arr in
 * each recursive call instead of calling `.slice`
 * on the array.
 */
function searchArray(arr, n) {
  var beg = 0;
  var mid = Math.floor(arr.length / 2);
  var end = arr.length - 1;

  // If only two elements remaining, quickly check both.
  if (arr.length === 2) {
    return arr[0] === n ? arr[0] : arr[1];
  }

  // If only one element remaining, return it.
  if (arr.length === 1) {
    return arr[0];
  }

  // If arr[beg] > arr[mid], then the rotation partition
  // must be this one.  Otherwise, it must be the other.
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
