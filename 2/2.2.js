var Ctci = function() {};
var Queue = require('../utils/queue.js');


Ctci.prototype.findKthToLast = function(list, k) {

  // Create queue with a max size of 'k'
  var queue = new Queue(k);

  var currentNode = list.head;

  // Iterate through the LinkedList and store nodes in
  // the queue.
  while (currentNode.next !== null) {
    queue.enqueue(currentNode);
    currentNode = currentNode.next;
  }

  queue.enqueue(currentNode);
  return queue.dequeue();
};

module.exports = new Ctci();
