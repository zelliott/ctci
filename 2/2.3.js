var Ctci = function() {};

Ctci.prototype.deleteNode = function(node) {
  if (node.next === null) {
    node = null;
  } else {

    // Copy value from next -> current node
    node.value = node.next.value;

    // Update this node's next ref
    node.next = node.next.next;
  }
};

module.exports = new Ctci();
