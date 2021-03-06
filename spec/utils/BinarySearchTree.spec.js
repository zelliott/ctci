describe('BinarySearchTree', function() {
  var BinarySearchTree = require('../../utils/bst.js');

  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree();
  });

  it('is instantiated with a null root', function() {
    expect(binarySearchTree.root()).toEqual(null);
  });

  it('properly adds nodes', function() {
    binarySearchTree.add(1);
    expect(binarySearchTree.root().value).toEqual(1);
    binarySearchTree.add(2);
    expect(binarySearchTree.root().value).toEqual(1);
    expect(binarySearchTree.root().left).toEqual(null);
    expect(binarySearchTree.root().right.value).toEqual(2);
    binarySearchTree.add(3);
    expect(binarySearchTree.root().right.right.value).toEqual(3);
  });

  it('properly finds nodes', function() {
    binarySearchTree.groupAdd([2, 3, 1, 6, 4, 8, 5]);
    expect(binarySearchTree.find(3)).toEqual(3);
    expect(binarySearchTree.find(2)).toEqual(2);
    expect(binarySearchTree.find(0)).toEqual(undefined);
  });

  it('returns the height of an empty tree to be 0', function() {
    expect(binarySearchTree.height()).toEqual(0);
  });

  it('returns the height of a non-empty tree correctly', function() {
    binarySearchTree.add(1);
    expect(binarySearchTree.height()).toEqual(1);
    binarySearchTree.add(2);
    expect(binarySearchTree.height()).toEqual(2);
    binarySearchTree.add(3);
    expect(binarySearchTree.height()).toEqual(3);
  });

  it('returns the height of a more complex tree correctly', function() {
    binarySearchTree.groupAdd([2, 3, 1, 6, 4, 8, 5]);
    expect(binarySearchTree.height()).toEqual(5);
  });
});
