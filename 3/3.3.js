var Ctci = function() {};

Ctci.prototype.removeDups = function(list) {
  var nodeBuffer = {};
  var currentNode = list.head;

  // Handle two easy cases
  if (currentNode === null || currentNode.next === null) {
    return list;
  } else {
    nodeBuffer[currentNode.value] = 1;
  }

  // Traverse the linkedlist
  while (currentNode.next !== null) {
    if (typeof nodeBuffer[currentNode.next.value] === 'undefined') {

      // Add node's value to our temporary buffer
      nodeBuffer[currentNode.next.value] = 1;
      currentNode = currentNode.next;
    } else {

      // Remove node from linkedlist
      currentNode.next = currentNode.next.next;
    }
  }

  return list;
};

module.exports = new Ctci();
