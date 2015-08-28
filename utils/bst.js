var BinarySearchTreeNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var BinarySearchTree = function() {
  this._root = null;
};

BinarySearchTree.prototype = {

  /* Adds the value to the BST, and logs in the console
   * if the value already exists
   */
  add: function(value) {
    var newNode = new BinarySearchTreeNode(value);

    function recursivelyAdd(node) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          recursivelyAdd(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
        } else {
          recursivelyAdd(node.right);
        }
      } else {
        console.log('Already in tree');
      }
    }

    if (this._root === null) {
      this._root = newNode;
    } else {
      recursivelyAdd(this._root);
    }
  },

  /* Add values to a BST sequentially as an array
   * (e.g. [1, 2, 3, 4, 5])
   */
  groupAdd: function(values) {
    for (var i = 0; i < values.length; i++) {
      this.add(values[i]);
    }
  },

  /* Returns the value if it found it in the BST
   * Returns undefined if the value is not to be found
   */
  find: function(value) {
    function recursivelyFind(node) {
      if (node === null) {
        return;
      }

      if (node.value === value) {
        return value;
      } else if (node.value > value) {
        return recursivelyFind(node.left);
      } else {
        return recursivelyFind(node.right);
      }
    }

    return recursivelyFind(this._root);
  },

  remove: function(value) {
    function recursivelyRemove(node) {
      if (node === null) {
        console.log('The value ' + value  + ' does not exist in the BST');
        return;
      }

      if (node.value === value) {
        if (node.left === null && node.right === null) {
          node = null;
        } else {
          // TODO: More complicated...
        }
      } else if (node.value > value) {
        recursivelyRemove(node.left);
      } else {
        recursivelyRemove(node.right);
      }
    }

    recursivelyRemove(this._root)
  },

  /* Returns the root of the BST */
  root: function() {
    return this._root;
  },

  /* Returns the neight of the BST */
  height: function() {
    function height(node) {
      if (node === null) {
        return 0;
      }

      return 1 + Math.max(height(node.left), height(node.right));
    }

    if (this._root === null) {
      return 0;
    }

    return 1 + Math.max(height(this._root.left), height(this._root.right));
  }
};

module.exports = BinarySearchTree;
