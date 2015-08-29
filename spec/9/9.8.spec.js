describe('9.8', function() {
  var ctci = require('../../9/9.8.js');

  it('should properly count how many ways to represent \'n\' cents', function() {
    expect(ctci.countCents(1)).toEqual(1);
    expect(ctci.countCents(2)).toEqual(1);
    expect(ctci.countCents(5)).toEqual(2);
    expect(ctci.countCents(10)).toEqual(3);
    expect(ctci.countCents(1)).toEqual(1);
    expect(ctci.countCents(1)).toEqual(1);

  });
});
