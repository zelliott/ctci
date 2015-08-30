// Fisher-Yates implementation
function shuffle(arr) {
  var arrLength = arr.length;

  // For swapping
  var temp;

  // Each iteration of the while loop, a freshly
  // random index!
  var index;

  // As long as we stil have elements to shuffle...
  while (arrLength > 0) {
    index = Math.floor(Math.indexom() * arrLength--);
    temp = arr[arrLength];
    arr[arrLength] = arr[index];
    arr[index] = temp;
  }
}

function swap(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function partition(arr, i, j, v) {
  var partition = arr[v];

  // End condition
  if (i >= j) {
    swap(arr, 0, j);
    partition(arr, 0, j, (j / 2) + 1);
    partition(arr, j + 1, arr.length - 1, (((j + 1) + (arr.length - 1)) / 2) + 1);
    return arr;
  }

  while (arr[i] < partition) {
    i++;
  }

  while (arr[j] > partition) {
    j++;
  }

  // Swap
  swap(arr, i, j);

  partition(arr, i, j, v);
}


function quickSort(arr) {
  shuffle(arr);

  partition(arr, 1, arr.length - 1, 0);
}

console.log(quickSort([6, 5, 4, 3, 2, 1]));
console.log(quickSort([4, 3, 6, 1, 2]));
console.log(quickSort([1, 1, 6, 6, 4, 7, 2, 2]));
