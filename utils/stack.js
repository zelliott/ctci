var Stack = function() {
  this._stack = [];
};

Stack.prototype = {
  push: function(value) {
    this._stack.push(value);
  },

  pop: function() {
    return this._stack.pop();
  },

  peek: function() {
    return this._stack[this._stack.length - 1];
  },

  empty: function() {
    this._stack = [];
  }
};

module.exports = Stack;
