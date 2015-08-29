// 'k' lists of sorted integers.  Find the smallest range that includes
// at least 1 number from each list.

// TODO: Didn't complete, but solution is very close.  Basically just
// need to return some additional information from findRange and then implement
// the while loop w/ checks to make sure we don't index out of an array.
function findRange(values) {
  var max = {
    list: 0,
    value: values[0]
  };
  var min = {
    list: 0,
    value: values[0]
  };

  for (var i = 0; i < values.length; i++) {
    var value = values[i];

    if (value > max.value) {
      max = {
        list: i,
        value: value
      };
    }

    if (value < min.value) {
      min = {
        list: i,
        value: value
      };
    }
  }

  return {
    'max': max,
    'min': min
  };
}

function smallestRange(lists) {
  var indices = Array(lists.length + 1).join(0).split('');
  var values = indices.slice();

  for (var i = 0; i < indices.length; i++) {
    values[i] = lists[i][indices[i]];
  }

  var range = findRange(values);
  var smallestRange = range;

  while () {
    range = findRange(values);

    // Condition for updating our smallest encountered range
    if (smallestRange.max.value - smallestRange.min.value >
      range.max.value - range.min.value) {
      smallestRange = range;
    }

    // Move our min up
    values[min.list] = lists[min.list][++indices[i]];
  }
}

var lists = [
  [0, 1, 2],
  [3, 4],
  [5]
];

console.log(smallestRange(lists))
