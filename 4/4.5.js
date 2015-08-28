var Ctci = function() {};

// Note: this function takes in an 'object-like' tree,
// not a specific BST or BinaryTree object.
Ctci.prototype.isBST = function(tree) {
  var preorderValues = [];

  function traverse(node) {
    if (node === null) {
      return;
    }

    traverse(node.left);
    preorderValues.push(node.value);
    traverse(node.right);
  }

  traverse(tree.root);

  for (var i = 1; i < preorderValues.length; i++) {
    if (preorderValues[i - 1] > preorderValues[i]) {
      return false;
    }
  }

  return true;
};

module.exports = new Ctci();
