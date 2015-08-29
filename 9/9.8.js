var Ctci = function() {};

// Was used for old algo...
// var steps = {};

function countCombinations(n, coinTypes) {

  // For each coinType (stored as the value of the coin),
  // save its value and the number of times it divides into our
  // eventual sum of 'n' cents.  That second value will be our
  // 'limit' for this coin, that is, the maximum number of this coin
  // we can have in a combination.
  // for (var i = coinTypes.length - 1; i >= 0; i--) {
  var coinType = coinTypes[coinTypes.length - 1];
  var limit = Math.floor(n / coinType);

  if (n === 0) {
    return 1;
  }

  if (limit === 0) {
    return 0;
  }

  // Pop this coinType out of our array because
  // we will be accounting for all combinations with
  // this coin type.
  coinTypes.pop();

  // For each possible number of this coin, see how many combinations
  // we can have.
  var combinations = 0;
  for (var j = 0; j <= limit; j++) {

    // How many combinations with exactly 'j'# of
    // coin = 'coinType'?
    // (e.g.: how many combinations with 1 penny?)
    combinations += countCombinations(n - (j * coinType), coinTypes);
  }

  return combinations;
}

Ctci.prototype.countCents = function(n) {

  /* This code takes order into account, which is
   * not exactly what we want...

  if (n < 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  if (steps[n] > 0) {
    return steps[n];
  } else {
    steps[n] = this.countCents(n - 25) +
      this.countCents(n - 10) +
      this.countCents(n - 5) +
      this.countCents(n - 1);
    return steps[n];
  }
  */

  var coinTypes = [25, 10, 5, 1];

  return countCombinations(n, coinTypes);
};

module.exports = new Ctci();
