// Would merge in sorted order the following arrays:
// [1, 2, 5, 9]
// [3, 4, 6, 10]
//
// TODO: This 'break;' and 'continue;' pattern needs to be
// revisitied...
function merge(arrA, arrB) {
  var result = [];
  var indexA = 0;
  var indexB = 0;

  while (true) {
    var outOfA = indexA >= arrA.length;
    var outOfB = indexB >= arrB.length;

    if (outOfA && outOfB) {
      break;
    }

    if (outOfA && !outOfB) {
      result.push(arrB[indexB]);
      indexB++;
      continue;
    }

    if (outOfB && !outOfA) {
      result.push(arrA[indexA]);
      indexA++;
      continue;
    }

    if (arrA[indexA] < arrB[indexB]) {
      result.push(arrA[indexA]);
      indexA++;
    } else {
      result.push(arrB[indexB]);
      indexB++;
    }
  }

  return result;
}

function mergeSort(arr) {
  var mid = Math.floor(arr.length / 2);

  if (arr.length === 1) {
    return arr;
  }

  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid, arr.length)));
}

console.log(mergeSort([6, 5, 4, 3, 2, 1]));
console.log(mergeSort([4, 3, 6, 1, 2]));
console.log(mergeSort([1, 1, 6, 6, 4, 7, 2, 2]));
