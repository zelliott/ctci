// TODO: Need to finish
function merge(arrA, arrB) {
  console.log(arrA, arrB);
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
