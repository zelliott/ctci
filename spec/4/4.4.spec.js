describe('4.4', function() {
  var ctci = require('../../4/4.4.js');
  var BinarySearchTree = require('../../utils/bst.js');

  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree();
  });

  it('should return an empty object for an empty bst', function() {
    expect(ctci.createDepthLists(binarySearchTree)).toEqual({});
  });

  it('should return a single list for a bst with a single node', function() {
    binarySearchTree.add(1);

    var depthLists = {
      '0': [1]
    };

    expect(ctci.createDepthLists(binarySearchTree)).toEqual(depthLists);
  });

  it('should return multiple lists for a larger tree', function() {
    binarySearchTree.groupAdd([4, 2, 1, 3, 6, 5, 7]);

    var depthLists = {
      '0': [4],
      '1': [2, 6],
      '2': [1, 3, 5, 7]
    };

    expect(ctci.createDepthLists(binarySearchTree)).toEqual(depthLists);
  });
});
