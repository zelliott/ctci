describe('2.2', function() {
  var ctci = require('../../2/2.2.js');
  var LinkedList = require('../../utils/linkedlist.js').linkedlist;

  var list;
  beforeEach(function() {
    list = new LinkedList();
  });

  it('should return the kth to last element of a normal list', function() {
    var list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    expect(ctci.findKthToLast(list, 3).value).toEqual(1);
  });

  it('should return the kth to last element of another normal list', function() {
    var list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(4);
    list.add(5);
    list.add(6);

    expect(ctci.findKthToLast(list, 2).value).toEqual(5);
  });
});
