function bubbleSort(arr) {

  var limit = arr.length;

  while (limit > 1) {
    for (var i = 1; i < limit; i++) {
      if (arr[i - 1] > arr[i]) {
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }

    limit--;
  }

  return arr;
}

console.log(bubbleSort([6, 5, 4, 3, 2, 1]));
console.log(bubbleSort([4, 3, 6, 1, 2]));
console.log(bubbleSort([1, 1, 6, 6, 4, 7, 2, 2]));
