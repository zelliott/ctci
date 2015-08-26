var Ctci = function() {};

// O(n), where n is the length of the string
Ctci.prototype.replaceSpaces = function(str) {
  return str.split(' ').join('%20');
};

module.exports = new Ctci();

