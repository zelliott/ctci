function selectionSort(arr) {

  for (var i = 0; i < arr.length; i++) {

    // take the beginning index as the smallest.
    var smallest = {
      'index': i,
      'value': arr[i]
    };

    // Actually find the smallest
    for (var j = i + 1; j < arr.length; j++) {
      if (smallest.value > arr[j]) {
        smallest = {
          'index': j,
          'value': arr[j]
        };
      }
    }

    // Swap values
    var temp = arr[i];
    arr[i] = smallest.value;
    arr[smallest.index] = temp;
  }

  return arr;
}

console.log(selectionSort([6, 5, 4, 3, 2, 1]));
console.log(selectionSort([4, 3, 6, 1, 2]));
console.log(selectionSort([1, 1, 6, 6, 4, 7, 2, 2]));
