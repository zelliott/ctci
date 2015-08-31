describe('11.5', function() {
  var ctci = require('../../11/11.5.js');

  it('should correctly find the string we are searching for #1', function() {
    var arr = ['', '', '', 'a', '', '', '', 'b', 'c', 'd', 'e', '', '', 'f'];

    expect(ctci.findAmongEmpties(arr, 'a')).toEqual(3);
  });

  it('should correctly find the string we are searching for #2', function() {
    var arr = ['', '', '', 'a', '', '', '', '', 'c', 'd', 'e', '', '', 'f'];

    expect(ctci.findAmongEmpties(arr, 'e')).toEqual(10);
  });

  it('should correctly find the string we are searching for #3', function() {
    var arr = ['', '', 'a', 'c', '', '', '', 'e', '', '', 'f'];

    expect(ctci.findAmongEmpties(arr, 'a')).toEqual(2);
  });
});
