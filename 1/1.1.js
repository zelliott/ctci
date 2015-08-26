var Ctci = function() {};

Ctci.prototype.hasUniqueChars = function(str) {
  var hash = {};

  // For each character in the string...
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];

    // Add characters to the hash
    if (typeof hash[letter] === 'undefined') {
      hash[letter] = 1;
    } else {
      hash[letter] = ++hash[letter];
    }

    // If > 1 of the same character has been added,
    // the string is not made up of unique characters.
    if (hash[letter] > 1) {
      return false;
    }
  }

  return true;
};

module.exports = new Ctci();
