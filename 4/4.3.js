var Ctci = function() {};
var BinarySearchTree = require('../utils/bst.js');

function reorderArray(values, reordered) {
  if (values.length === 0) {
    return reordered;
  }

  if (values.length === 1) {
    reordered.push(values[0]);
    return reordered;
  }

  var mid = Math.floor(values.length / 2);
  var firstPartition = values.slice(0, mid);
  var secondPartition = values.slice(mid + 1, values.length);

  reordered.push(values[mid]);

  var combinedReordered = reordered.concat(reorderArray(firstPartition, []));
  combinedReordered = combinedReordered.concat(reorderArray(secondPartition, []));

  return combinedReordered;
}

Ctci.prototype.createMinimalBST = function(values) {
  var bst = new BinarySearchTree();
  var reorderedArray = reorderArray(values, []);

  bst.groupAdd(reorderedArray);

  return bst;
};

module.exports = new Ctci();
