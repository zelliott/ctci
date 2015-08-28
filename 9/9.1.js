var Ctci = function() {};

// Recursive solution first.
// Runtime is exponential (O(3^n))...
function countPaths(n) {
  /*
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  if (n === 3) {
    return 4;
  }

  if (n > 3) {
    return countPaths(n - 1) + countPaths(n - 2) + countPaths(n - 3);
  }
  */

  // We add 1 *only* when we've found a path that has
  // brought 'n' to 0.
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return countPaths(n - 3) + countPaths(n - 2) + countPaths(n - 1);
  }
}

// Another recursive solution, this one using dynamic
// programming to cache some of the values that are
// recursively calculated multiple times.
function countPathsDP(n, map) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else if (map[n] > -1) {
    return map[n];
  } else {
    map[n] = countPathsDP(n - 1, map) +
      countPathsDP(n - 2, map) +
      countPathsDP(n - 3, map);

    return map[n];
  }
}

Ctci.prototype.stairPaths = function(n) {
  // return countPaths(n);
  return countPathsDP(n, {});
};

module.exports = new Ctci();
