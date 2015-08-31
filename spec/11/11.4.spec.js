// FIXME: Coupled 11.4 exercise doesn't work either.
xdescribe('11.4', function() {
  var ctci = require('../../11/11.4.js');

  it('should correctly sort arrays of strings', function() {
    var arr = [
      'dee', 'bac', 'bcc', 'dac', 'abc', 'acc', 'ade'
    ];
    var sortedArr = [
      'abc', 'acc', 'ade', 'bac', 'bac', 'bcc', 'dac', 'dee'
    ];

    expect(ctci.sortData(arr)).toEqual(arr);
  });

});
