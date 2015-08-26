describe('2.1', function() {
  var ctci = require('../../2/2.1.js');
  var LinkedList = require('../../utils/linkedlist.js').linkedlist;

  var list;
  beforeEach(function() {
    list = new LinkedList();
  });

  it('should not alter an empty list', function() {
    expect(ctci.removeDups(list)).toEqual(list);
  });

  it('should not alter a list with a single node', function() {
    list.add(1);
    expect(ctci.removeDups(list)).toEqual(list);
  });

  it('should alter a list with two identical items', function() {
    var alteredList = new LinkedList();
    alteredList.add(1);

    list.add(1);
    list.add(1);

    expect(ctci.removeDups(list)).toEqual(alteredList);
  });

  it('should not alter a list with all unique nodes', function() {
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);

    expect(ctci.removeDups(list)).toEqual(list);
  });

  it('should alter a list with many identical nodes', function() {
    var alteredList = new LinkedList();
    alteredList.add(1);
    alteredList.add(2);
    alteredList.add(3);

    list.add(1);
    list.add(1);
    list.add(2);
    list.add(1);
    list.add(3);
    list.add(2);
    list.add(3);

    expect(ctci.removeDups(list)).toEqual(alteredList);
  });
});
