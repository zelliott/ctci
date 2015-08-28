describe('4.1', function() {
  var ctci = require('../../4/4.1.js');
  var BinarySearchTree = require('../../utils/bst.js');

  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree();
  });

  it('should report that an empty bst is balanced', function() {
    expect(ctci.isBalanced(binarySearchTree.root())).toBe(true);
  });

  it('should report that a bst with a single leaf is balanced', function() {
    binarySearchTree.add(1);
    expect(ctci.isBalanced(binarySearchTree.root())).toBe(true);
  });

  it('should report that a bst with two nodes is balanced', function() {
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    expect(ctci.isBalanced(binarySearchTree.root())).toBe(true);
  });

  it('should report that the following bst with three nodes is not balanced', function() {
    binarySearchTree.groupAdd([1, 2, 3]);
    expect(ctci.isBalanced(binarySearchTree.root())).toBe(false);
  });

  it('should report that the following bst with three nodes is balanced', function() {
    binarySearchTree.groupAdd([2, 1, 3]);
    expect(ctci.isBalanced(binarySearchTree.root())).toBe(true);
  });

  it('should report that the following more complex bst is balanced', function() {
    binarySearchTree.groupAdd([5, 3, 7, 1, 4, 6, 8]);
    expect(ctci.isBalanced(binarySearchTree.root())).toBe(true);
  });

  it('should report that the following complex bst is not balanced', function() {
    binarySearchTree.groupAdd([6, 5, 4, 7, 8, 9, 2, 3, 1]);
    expect(ctci.isBalanced(binarySearchTree.root())).toBe(false);
  });
});
