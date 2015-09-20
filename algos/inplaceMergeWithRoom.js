function inplaceMergeWithRoom(a, b) {
  var index = a.length + b.length - 1;
  var aPointer = a.length - 1;
  var bPointer = b.length - 1;

  while (index >= 0) {
    if (aPointer < 0) {
      a = b.slice(0, bPointer + 1).concat(a.slice(index, a.length));
    } else if (bPointer < 0) {
      b = a.slice(0, aPointer + 1).concat(a.slice(index, a.length));
    } else if (a[aPointer] > b[bPointer]) {
      a[index] = a[aPointer];
      aPointer--;
    } else {
      a[index] = b[bPointer];
      bPointer--;
    }

    index--;
  }

  return a;
}

console.log(inplaceMergeWithRoom([1, 4, 5, 7], [2, 3, 4, 6]));
console.log(inplaceMergeWithRoom([3, 5, 8, 9], [1, 4, 10]));
