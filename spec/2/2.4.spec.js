xdescribe('2.4', function() {
  var ctci = require('../../2/2.4.js');
  var LinkedList = require('../../utils/linkedlist.js').linkedlist;

  var list;
  beforeEach(function() {
    list = new LinkedList();
  });

 it('partition an ordered list of 3 elements evenly', function() {
   list.add(1);
   list.add(3);

   expect(ctci.partitionList(list, 2)).toEqual(list);
 });

  it('partition an ordered list with 3 elements evenly', function() {
    list.add(1);
    list.add(2);
    list.add(3);

    expect(ctci.partitionList(list, 2)).toEqual(list);
  });

  it('partition an unordered list with 3 elements evenly', function() {
    list.add(3);
    list.add(2);
    list.add(1);

    var orderedList = new LinkedList();
    orderedList.add(1);
    orderedList.add(2);
    orderedList.add(3);

    expect(ctci.partitionList(list, 2)).toEqual(orderedList);
  });

  it('partition another unordered list with 3 elements evenly', function() {
    list.add(2);
    list.add(1);
    list.add(3);

    var orderedList = new LinkedList();
    orderedList.add(1);
    orderedList.add(2);
    orderedList.add(3);

    expect(ctci.partitionList(list, 2)).toEqual(orderedList);
  });
});
