function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function insertionSort(arr) {

  // For each element/index in the array
  for (var i = 1; i < arr.length; i++) {
    var j = i;

    // Sink the element at that index down depending
    // on comparator result.
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j, j - 1);
      j = j - 1;
    }
  }

  return arr;
}

console.log(insertionSort([6, 5, 4, 3, 2, 1]));
console.log(insertionSort([4, 3, 6, 1, 2]));
console.log(insertionSort([1, 1, 6, 6, 4, 7, 2, 2]));
