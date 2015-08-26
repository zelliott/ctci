// A stack that keeps track of the min element
var MinStack = function() {
  this._stack = [];
};

MinStack.prototype = {
  push: function(value) {
    var min = (this._stack.length === 0) ?
      Infinity : this.min();

    this._stack.push({
      'value': value,
      'min': Math.min(value, min)
    });
  },

  pop: function() {
    return this._stack.pop().value;
  },

  peek: function() {
    return this._stack[this._stack.length - 1].value;
  },

  min: function() {
    return this._stack[this._stack.length - 1].min;
  },

  empty: function() {
    this._stack = [];
  }
};

module.exports = MinStack;
