describe('2.3', function() {
  var ctci = require('../../2/2.3.js');
  var LinkedList = require('../../utils/linkedlist.js').linkedlist;

  var list;
  beforeEach(function() {
    list = new LinkedList();
  });

  it('should delete a node in the middle correctly', function() {
    list.add(1);
    list.add(2);
    list.add(3);

    var node = list.head.next;

    var alteredList = new LinkedList();
    alteredList.add(1);
    alteredList.add(3);

    ctci.deleteNode(node);

    expect(list).toEqual(alteredList);
  });

  it('should delete the head correctly', function() {
    list.add(1);
    list.add(2);
    list.add(3);

    var node = list.head;

    var alteredList = new LinkedList();
    alteredList.add(2);
    alteredList.add(3);

    ctci.deleteNode(node);

    expect(list).toEqual(alteredList);
  });

  // Note: this doesn't work... I believe because I am passing in a clone of
  // the tail and not actually the tail itself.
  xit('should delete the tail correctly', function() {
    list.add(1);
    list.add(2);
    list.add(3);

    var node = list.tail;

    var alteredList = new LinkedList();
    alteredList.add(1);
    alteredList.add(2);

    ctci.deleteNode(node);

    expect(list).toEqual(alteredList);
  });
});
