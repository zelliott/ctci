var Ctci = function() {};

// Very strange implementation...
function permute(str, permutations) {
  var modifiedPermutations = [];

  if (str.length === 0) {
    return permutations;
  }

  // For every permutation in the current list of
  // permutations...
  for (var i = 0; i < permutations.length; i++) {
    var permutation = permutations[i];

    // Modify them by adding the next character in each
    // possible location and creating a modified
    // permutations array.
    for (var j = 0; j <= permutation.length; j++) {
      modifiedPermutations.push(
        permutation.slice(0, j) +
        str.charAt(0) +
        permutation.slice(j, permutation.length));
    }
  }

  // Call permute again with the modified permutations and
  // the sliced string.
  return permute(str.slice(1, str.length), modifiedPermutations);
}

Ctci.prototype.stringPermutations = function(str) {
  return permute(str.slice(1, str.length), [str.charAt(0)]);
};

module.exports = new Ctci();
