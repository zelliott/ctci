var Ctci = function() {};
var Node = require('../utils/linkedlist.js').node;
var LinkedList = require('../utils/linkedlist.js').linkedlist;

/* [ 4, 2, 5, 1 ] -> [ 1, 2, 4, 5 ]
 *
 * Find number >= x
 * Find number <= x
 *
 * Runtime: O(n) where N is the size of the list.
 * FIXME: This needs to get working...
 */
Ctci.prototype.partitionList = function(list, x) {
  var orderedList = new LinkedList();
  var currentNode = list.head;

  while (currentNode.next !== null) {
    var value = currentNode.value;
    var node = new Node(value);

    if (value < x) {
      node.next = orderedList.head;
      orderedList.head = node;

      if (orderedList.tail === null) {
        orderedList.tail = node;
      }

    } else if (value > x) {
      orderedList.tail.next = node;
      orderedList.tail = node;
    } else {

      var currentOrderedNode = orderedList.head;
      while (currentOrderedNode.next !== null) {
        if (currentOrderedNode.value > x) {
          var cachedValue = currentOrderedNode.value;
          var cachedNext = currentOrderedNode.next;
          currentOrderedNode.value = value;
          currentOrderedNode.next = new Node(cachedValue);
          currentOrderedNode.next.next = cachedNext;
        }
        currentOrderedNode = currentOrderedNode.next;
      }
    }

    currentNode = currentNode.next;
  }

  return orderedList;
};

module.exports = new Ctci();
