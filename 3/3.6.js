var Ctci = function() {};
var Stack = require('../utils/stack.js');

// TODO: have to finish still
Ctci.prototype.sortStack = function(stack) {
  var tempStack = new Stack();

  tempStack.push(stack.pop());

  while (!stack.isEmpty()) {
    var tempA = stack.pop();

    if (tempA >= tempStack.peek()) {
      tempStack.push(tempA);
    } else {

    }


  }
};

module.exports = new Ctci();
