var dict = {
  'this': true,
  'i': true,
  'is': true,
  'his': true,
  'a': true,
  'awe': true,
  'we': true,
  'so': true,
  'awesome': true,
  'me': true,
  'saw': true
};

// TODO: To improve, MEMOIZE
function unconcat(str) {
  var min = Infinity;

  if (str.length === 0) {
    return 0;
  }

  for (var i = 1; i <= str.length; i++) {
    if (dict[str.slice(0, i)]) {
      min = Math.min(unconcat(str.slice(i, str.length)), min);
    }
  }

  return Math.min(1 + unconcat(str.slice(1, str.length)), min);
}

// console.log(unconcat('this'));
console.log(unconcat('thisisawesome'));
