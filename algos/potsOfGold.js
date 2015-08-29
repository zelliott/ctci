function maxCoin(coins, start, end) {
  if (start > end) {
    return 0;
  }

  // If you pick the start, you get the min of the values in the diagram below.
  // ['start', 'start + 1', 'start + 2', ... , 'end - 1', 'end']
  var a = coins[start] +
    Math.min(maxCoin(coins, start + 2, end), maxCoin(coins, start + 1, end - 1));
  var b = coins[end] +
    Math.min(maxCoin(coins, start + 1, end - 1), maxCoin(coins, start, end - 2));

  return Math.max(a, b);
}

console.log(maxCoin([1, 2, 3, 4, 5, 6], 0, 5));
console.log(maxCoin([2, 9, 10, 15, 2, 1, 1, 18, 0, 0, 9, 1], 0, 11));
