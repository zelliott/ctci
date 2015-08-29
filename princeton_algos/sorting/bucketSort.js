function bucketSort(arr, n) {
  var buckets = {};

  for (var i = 0; i < arr.length; i++) {
    var a = arr[i];
    var bucket = Math.floor(a / n);

    if (typeof buckets[bucket] === 'undefined') {
      buckets[bucket] = [];
    }

    buckets[bucket].push(a);
  }

  var sortedArr = [];

  // TODO: Replace '.sort()' with insertion sort
  // implementation or something.
  for (var bucket in buckets) {
    sortedArr = sortedArr.concat(buckets[bucket].sort());
  }

  return sortedArr;
}

console.log(bucketSort([6, 5, 4, 3, 2, 1], 1));
console.log(bucketSort([4, 3, 6, 1, 2], 1));
console.log(bucketSort([1, 1, 6, 6, 4, 7, 2, 2], 1));
