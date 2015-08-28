describe('4.5', function() {
  var ctci = require('../../4/4.5.js');

  it('should report that an empty tree is a BST', function() {
    var tree = {
      root: null
    };

    expect(ctci.isBST(tree)).toBe(true);
  });

  it('should report that a tree with a single node is a BST', function() {
    var tree = {
      root: {
        value: 1,
        left: null,
        right: null
      }
    };

    expect(ctci.isBST(tree)).toBe(true);
  });

  it('should report that a BST tree with 3 nodes is a BST', function() {
    var tree = {
      root: {
        value: 2,
        left: {
          value: 1,
          left: null,
          right: null
        },
        right: {
          value: 3,
          left: null,
          right: null
        }
      }
    };

    expect(ctci.isBST(tree)).toBe(true);
  });
  it('should report that a non-BST tree with 3 nodes is not a BST', function() {
    var tree = {
      root: {
        value: 2,
        left: {
          value: 3,
          left: null,
          right: null
        },
        right: {
          value: 1,
          left: null,
          right: null
        }
      }
    };

    expect(ctci.isBST(tree)).toBe(false);
  });
});
