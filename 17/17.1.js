function swapNumbersInPlace(a, b) {
  b = (a + b) / 2;
  a = (b - a) + b;
  b = b - (a - b);

  return {
    'a': a,
    'b': b
  };
}

console.log(swapNumbersInPlace(10, 20));
console.log(swapNumbersInPlace(1, 2));
console.log(swapNumbersInPlace(5, 3));
