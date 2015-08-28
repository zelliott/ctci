var Ctci = function() {};

// Note: this function takes in an 'object-like' tree,
// not a specific BST or BinaryTree object.
Ctci.prototype.isBST = function(tree) {
  var inorderValues = [];

  function traverse(node) {
    if (node === null) {
      return;
    }

    traverse(node.left);
    inorderValues.push(node.value);
    traverse(node.right);
  }

  traverse(tree.root);

  for (var i = 1; i < inorderValues.length; i++) {
    if (inorderValues[i - 1] > inorderValues[i]) {
      return false;
    }
  }

  return true;
};

module.exports = new Ctci();
