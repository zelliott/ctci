function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// Fisher Yates
function shuffle(arr) {
  var end = arr.length - 1;

  while (end > 0) {
    var i = Math.floor(Math.random() * end);

    swap(arr, i, end);
    end--;
  }

  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6]));
