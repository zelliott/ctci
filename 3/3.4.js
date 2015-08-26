var Ctci = function() {};
var Stack = require('../utils/stack.js');

function moveTower(disk, source, dest, extra) {
  if (disk === 1) {
    dest.push(source.pop());
    // console.log('Moving ' + dest.peek() + ' from ' + source + ' to ' + dest);
  } else {
    moveTower(disk - 1, source, extra, dest);
    dest.push(source.pop());
    // console.log('Moving ' + dest.peek() + ' from ' + source + ' to ' + dest);
    moveTower(disk - 1, extra, dest, source);
  }
}

Ctci.prototype.towersOfHanoi = function(n) {
  var pegA = new Stack();
  var pegB = new Stack();
  var pegC = new Stack();

  for (var i = 0; i < n; i++) {
    pegA.push(n - i);
  }

  moveTower(n, pegA, pegB, pegC);
};

var ctci = new Ctci();

console.log(ctci.towersOfHanoi(3));

module.exports = new Ctci();
