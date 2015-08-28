describe('4.3', function() {
  var ctci = require('../../4/4.3.js');

  it('should create a minimum height bst for an empty values set', function() {
    expect(ctci.createMinimalBST([]).height()).toEqual(0);
  });

  it('should create a minimum height bst for a single value', function() {
     expect(ctci.createMinimalBST([1]).height()).toEqual(1);
  });

  it('should create a minimum height bst for multiple values', function() {
    expect(ctci.createMinimalBST([1, 2]).height()).toEqual(2);
  });

  it('should create a minimum height bst for an even number of values', function() {
    expect(ctci.createMinimalBST([1, 2, 3, 4, 5, 6]).height()).toEqual(3);
  });

  it('should create a minimum height bst for an odd number of values', function() {
    expect(ctci.createMinimalBST([2, 4, 6, 8, 10, 12, 14, 16, 18]).height()).toEqual(4);
  });

});
