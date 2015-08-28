var Ctci = function() {};

Ctci.prototype.findNext = function(value, tree) {
  var node = tree.root();

  while (node.value !== value) {
    if (node.value > value) {
      node = node.left;
    } else {
      node = node.right;
    }
  }

  if (node.right !== null) {
    node = node.right;
  } else {

    // This 'parent()' function here actually isn't
    // implemented on the BST class yet.
    return node.parent();
  }

  while (node.left !== null) {
    node = node.left;
  }

  return node.value;
};

module.exports = new Ctci();
