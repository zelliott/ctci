describe('4.6', function() {
  var ctci = require('../../4/4.6.js');
  var BinarySearchTree = require('../../utils/bst.js');

  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree();
  });

  it('should return the next node on a normal tree', function() {
    binarySearchTree.groupAdd([4, 2, 3, 1]);
    expect(ctci.findNext(2, binarySearchTree)).toEqual(3);
  });

  it('should return the next node on a more complex tree', function() {
    binarySearchTree.groupAdd([8, 6, 5, 1, 2, 4, 3]);
    expect(ctci.findNext(2, binarySearchTree)).toEqual(3);
  });

});
