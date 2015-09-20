function longestSequenceSum(arr) {
  var maxSum;
  var sum = 0;

  for (var i = 0; i i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] >= 0) {
      maxSum = Math.max(maxSum, sum);
    } else {
      if (sum < 0) {
        sum = 0;
      }
    }

  }

  return maxSum;

}
