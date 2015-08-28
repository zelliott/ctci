var Ctci = function() {};

// Returns the height of the subtree with node
// as its root.
function height(node) {
  if (node === null) {
    return 0;
  } else {
    return 1 + Math.max(height(node.left), height(node.right));
  }
}

// Takes in the root of a BST and returns true if balanced.
// False otherwise.
Ctci.prototype.isBalanced = function(node) {
  return (node === null) ||
    (this.isBalanced(node.left) &&
    this.isBalanced(node.right) &&
    (Math.abs(height(node.left) - height(node.right)) <= 1));
};

module.exports = new Ctci();
