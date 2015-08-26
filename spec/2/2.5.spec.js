describe('2.5', function() {
  var ctci = require('../../2/2.5.js');
  var LinkedList = require('../../utils/linkedlist.js').linkedlist;

  var list1;
  var list2;

  beforeEach(function() {
    list1 = new LinkedList();
    list2 = new LinkedList();
  });

  it('should sum two linked lists with one value each', function() {
    list1.add(1);
    list2.add(1);

    var summedList = new LinkedList();
    summedList.add(2);

    expect(ctci.sumLinkedLists(list1, list2)).toEqual(summedList);
  });

  it('should sum two linked lists with two values each', function() {
    list1.add(1);
    list1.add(2);
    list2.add(1);
    list2.add(3);

    var summedList = new LinkedList();
    summedList.add(2);
    summedList.add(5);

    expect(ctci.sumLinkedLists(list1, list2)).toEqual(summedList);
  });

  it('should sum two linked lists with three values each', function() {
    list1.add(1);
    list1.add(2);
    list1.add(4);
    list2.add(1);
    list2.add(2);
    list2.add(3);

    var summedList = new LinkedList();
    summedList.add(2);
    summedList.add(4);
    summedList.add(7);

    expect(ctci.sumLinkedLists(list1, list2)).toEqual(summedList);
  });

  it('should sum two linked lists with different lengths', function() {
    list1.add(1);
    list2.add(1);
    list2.add(3);

    var summedList = new LinkedList();
    summedList.add(2);
    summedList.add(3);

    expect(ctci.sumLinkedLists(list1, list2)).toEqual(summedList);
  });
  it('should sum two linked lists again with different lengths', function() {
    list1.add(2);
    list1.add(4);
    list2.add(1);
    list2.add(2);
    list2.add(3);

    var summedList = new LinkedList();
    summedList.add(3);
    summedList.add(6);
    summedList.add(3);

    expect(ctci.sumLinkedLists(list1, list2)).toEqual(summedList);
  });
  it('should sum two linked lists with carry outs', function() {
    list1.add(5);
    list2.add(5);

    var summedList = new LinkedList();
    summedList.add(0);
    summedList.add(1);

    expect(ctci.sumLinkedLists(list1, list2)).toEqual(summedList);
  });

  it('should sum two uneven linked lists with carry outs', function() {
    list1.add(5);
    list1.add(6);
    list2.add(5);
    list2.add(9);
    list2.add(1);

    var summedList = new LinkedList();
    summedList.add(0);
    summedList.add(6);
    summedList.add(2);

    expect(ctci.sumLinkedLists(list1, list2)).toEqual(summedList);
  });
});
