var Stack = require('../utils/stack.js');

// Queue implementation with two Stacks.
var QueueFromStacks = function() {
  this._enqueueStack = new Stack();
  this._dequeueStack = new Stack();
};

QueueFromStacks.prototype = {

  // Always push to the 'enqueueStack' stack
  // Runtime: O(1)
  enqueue: function(value) {
    this._enqueueStack.push(value);
  },

  // Runtime: O(n) sometimes, O(1) mostly.
  dequeue: function() {

    // If 'dequeueStack' isn't empty, keep popping.
    // Otherwise, transfer from 'enqueueStack' to
    // 'dequeueStack'.
    if (!this._dequeueStack.isEmpty()) {
      return this._dequeueStack.pop();
    } else {

      // Transfer...
      while (!this._enqueueStack.isEmpty()) {
        this._dequeueStack.push(this._enqueueStack.pop());
      }

      return this._dequeueStack.pop();
    }
  }
};

module.exports = QueueFromStacks;
