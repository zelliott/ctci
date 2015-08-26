var Ctci = function() {};
var ListUtils = require('../utils/linkedlist');

var LinkedList = ListUtils.linkedlist;
var Node = ListUtils.node;

/* Runtime: O(n) where n is the size of the longest list
 *
 * Note: I check that nodes !== null instead of if (node)...
 * just so it is explicitly clear that nodes are null if
 * they do not exist, not undefined.
 */
Ctci.prototype.sumLinkedLists = function(list1, list2) {
  var summedList = new LinkedList();
  var node1 = list1.head;
  var node2 = list2.head;
  var carryOver = 0;

  // Edge case if list1 is null
  if (node1 === null) {
    return list2;
  }

  // Edge case if list2 is null
  if (node2 === null) {
    return list1;
  }

  while (node1 !== null || node2 !== null || carryOver > 0) {

    // One or both of the nodes are null
    if (node1 === null || node2 === null) {
      if (node1 === null && node2 !== null) {
        var sum = node2.value + carryOver;
        var summedListNextValue = sum % 10;

        summedList.add(summedListNextValue);
        carryOver = Math.floor(sum / 10);

        node2 = node2.next;
      } else if (node1 !== null && node2 === null) {
        var sum = node1.value + carryOver;
        var summedListNextValue = sum % 10;

        summedList.add(summedListNextValue);
        carryOver = Math.floor(sum / 10);

        node1 = node1.next;
      } else {
        summedList.add(carryOver);
        break;
      }
    }

    // If neither node is null, sum them
    if (node1 !== null && node2 !== null) {
      var nodeSum = node1.value + node2.value + carryOver;
      var summedListNextValue = nodeSum % 10;

      summedList.add(summedListNextValue);
      carryOver = Math.floor(nodeSum / 10);

      node1 = node1.next;
      node2 = node2.next;
    }
  }

  return summedList;
};

module.exports = new Ctci();
