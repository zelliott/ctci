var Ctci = function() {};

function generatePairs(n, existingPairs) {

  if (n === 0) {
    return existingPairs;
  }

  var numberOfPairs = Object.keys(existingPairs).length;

  // For each of our exisiting pairs of parens...
  for (var i = 0; i < numberOfPairs; i++) {
    var pair = Object.keys(existingPairs)[i];

    // Add a '()' before the current pair
    existingPairs['()' + pair] = true;

    // Add a '()' after each '('
    for (var j = 0; j < pair.length; j++) {
      if (pair.charAt(j) === '(') {
        existingPairs[pair.slice(0, j + 1) + '()' + pair.slice(j + 1, pair.length)] = true;
      }
    }

    existingPairs[pair] = false;
  }

  return generatePairs(n - 1, existingPairs);
}

Ctci.prototype.pairsOfParentheses = function(n) {
  var existingPairs = {
    '()': true
  };

  existingPairs = generatePairs(n - 1, existingPairs);

  var finalPairs = [];

  Object.keys(existingPairs).map(function(existingPair) {
    if (existingPairs[existingPair]) {
      finalPairs.push(existingPair);
    }
  });

  return finalPairs;
};

module.exports = new Ctci();
