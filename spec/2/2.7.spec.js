describe('2.7', function() {
  var ctci = require('../../2/2.7.js');
  var LinkedList = require('../../utils/linkedlist.js').linkedlist;

  var list;

  beforeEach(function() {
    list = new LinkedList();
  });

  it('should return true for an empty list', function() {
    expect(ctci.isPalindrome(list)).toEqual(true);
  });

  it('should return true for a list with a single element', function() {
    list.add(1);
    expect(ctci.isPalindrome(list)).toEqual(true);
  });

  it('should return true for a list with two identical elements', function() {
    list.add(1);
    list.add(1);
    expect(ctci.isPalindrome(list)).toEqual(true);
  });

  it('should return true for a palindromic list of 3 elements', function() {
    list.add(1);
    list.add(2);
    list.add(1);
    expect(ctci.isPalindrome(list)).toEqual(true);
  });

  it('should return false for a non-palindromic list', function() {
    list.add(1);
    list.add(2);
    expect(ctci.isPalindrome(list)).toEqual(false);
  });

  it('should return true for a longer non-palindromic list', function() {
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(3);
    list.add(4);
    list.add(1);
    expect(ctci.isPalindrome(list)).toEqual(false);
  });
});
