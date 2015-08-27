describe('3.5', function() {
  var QueueFromStacks = require('../../3/3.5.js');

  var queueFromStacks;

  beforeEach(function() {
    queueFromStacks = new QueueFromStacks();
  });

  it('should act like a normal queue', function() {
    queueFromStacks.enqueue(1);
    queueFromStacks.enqueue(2);
    expect(queueFromStacks.dequeue()).toEqual(1);
    queueFromStacks.enqueue(3);
    queueFromStacks.enqueue(1);
    queueFromStacks.dequeue();
    expect(queueFromStacks.dequeue()).toEqual(3);
    expect(queueFromStacks.dequeue()).toEqual(1);

  });
});
