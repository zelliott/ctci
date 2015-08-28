var Ctci = function() {};

Ctci.prototype.createDepthLists = function(tree) {
  var depthLists = {};

  function traverse(level, node) {
    if (typeof depthLists[level] === 'undefined' &&
      node !== null) {
      depthLists[level] = [];
    }

    if (node !== null) {
      depthLists[level].push(node.value);
      traverse(level + 1, node.left);
      traverse(level + 1, node.right);
    }
  }

  traverse(0, tree.root());

  return depthLists;
};

module.exports = new Ctci();
