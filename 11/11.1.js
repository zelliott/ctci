var Ctci = function() {};

Ctci.prototype.mergeArrays = function(arrA, arrB) {
  for (var indexB = 0; indexB < arrB.length; indexB++) {
    var indexA = 0;

    // While we are within array A and our B value is still
    // less than our A value, continue incrementing.
    while (indexA < arrA.length && arrB[indexB] > arrA[indexA]) {
      indexA++;
    }

    var firstPartition = arrA.slice(0, indexA );
    var secondPartition = arrA.slice(indexA, arrA.length);

    arrA = firstPartition.concat([arrB[indexB]]);
    arrA = arrA.concat(secondPartition);
  }

  return arrA;
};

module.exports = new Ctci();
