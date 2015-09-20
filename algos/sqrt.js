// Babylonian method implementation
function sqrtFn(n) {
  var ERROR_MARGIN = 0.01;

  if (n < 0) {
    console.log(n + ' should be greater than 0');
    return;
  }

  var upperBound = 1;
  var lowerBound = n;

  while(Math.abs(upperBound - lowerBound) > ERROR_MARGIN) {
    upperBound = (upperBound + lowerBound) / 2;
    lowerBound = n / upperBound;
  }

  return upperBound;
}

console.log(sqrtFn(100));
console.log(sqrtFn(26));
console.log(sqrtFn(12388));
