var Ctci = function() {};

// Not the sexiest algo... but I think it gets the job done...
Ctci.prototype.findMagicIndex = function(arr) {
  var increasing = arr[0] < arr[1];

  if (arr[0] === 0 || arr[1] === 1) {
    return true;
  }

  var i = 2;

  while (arr[i] !== i) {
    if (i >= arr.length) {
      return false;
    }

    if ((arr[i] < i && !increasing) ||
      (arr[i] > i && increasing)) {
      return false;
    }  else {
      i++;
    }
  }

  return true;
};

module.exports = new Ctci();
