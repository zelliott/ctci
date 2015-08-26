var Ctci = function() {};

Ctci.prototype.isPalindrome = function(list) {
  var values = [];
  var node = list.head;

  while (node !== null) {
    values.push(node.value);
    node = node.next;
  }

  for (var i = 0; i < values.length; i++) {
    if (i >= values.length - 1 - i) {
      return true;
    }

    if (values[i] !== values[values.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

module.exports = new Ctci();
