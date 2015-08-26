var Queue = function(size) {
  this._queue = [];
  this.size = size || Infinity;
};

Queue.prototype = {
  enqueue: function(value) {
    this._queue.unshift(value);

    if (this._queue.length > this.size) {
      this._queue.pop();
    }
  },

  dequeue: function() {
    return this._queue.pop();
  }
};

module.exports = Queue;
