var Ctci = function() {};

// Save a cache of previously generated
// factorials.
var cache = {};

// Function to recursively generate factorials.
function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  if (cache[n] > 0) {
    return cache[n];
  }

  return cache[n] = factorial(n - 1) * n;
}

Ctci.prototype.robotPaths = function(x, y) {
  --x;
  --y;
  return factorial(x + y) / (factorial(x) * factorial(y));
};

module.exports = new Ctci();
