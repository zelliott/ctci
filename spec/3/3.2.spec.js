describe('3.2', function() {
  var MinStack = require('../../3/3.2.js');

  var minStack;

  beforeEach(function() {
    minStack = new MinStack();
  });

  it('should keep track of the min element', function() {
    minStack.push(1);
    expect(minStack.min()).toEqual(1);
    minStack.pop();
    minStack.push(4);
    minStack.push(3);
    expect(minStack.min()).toEqual(3);
    minStack.push(6);
    expect(minStack.min()).toEqual(3);
    minStack.pop();
    minStack.pop();
    minStack.push(1);
    minStack.push(2);
    expect(minStack.min()).toEqual(1);
  });
});
