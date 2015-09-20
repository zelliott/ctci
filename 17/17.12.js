function sumPairs(arr, n) {
  var hash = {};
  var pairs = {};

  for (var i = 0; i < arr.length; i++) {
    var a = arr[i];

    hash[n - a] = true;
  }

  for (i = 0; i < arr.length; i++) {
    var a = arr[i];

    if (hash[a]) {
      if (a < n - a) {
        pairs[[a, n - a]] = true;
      } else {
        pairs[[n - a, a]] = true;
      }
    }
  }

  return Object.keys(pairs);
}

console.log(sumPairs([1, 2, 3, 4, 5], 5));
console.log(sumPairs([3, 4, 7, 8, 1, 2, 0, 9], 7));
