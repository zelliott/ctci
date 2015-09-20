var hash = {};

function process(str) {
  for (var i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      hash[str[i]] = [];
    }

    hash[str[i]].push(i);
  }

}

function distanceBetweenWords(str, a, b) {
  process(str);

  var listA = hash[a];
  var listB = hash[b];
  var pointerA = 0;
  var pointerB = 0;
  var min = Math.abs(listA[pointerA] - listB[pointerB]);

  while (min > 1 || (pointerA === listA.length - 1 && pointerB === listB.length - 1)) {
    min = Math.min(min, Math.abs(listA[pointerA] - listB[pointerB]));

    if (pointerA === listA.length - 1) {
      pointerB++;
    } else if (pointerB === listB.length - 1) {
      pointerA++;
    } else if (listA[pointerA] < listB[pointerB]) {
      pointerA++;
    } else {
      pointerB++;
    }
  }

  return min;
}

console.log(distanceBetweenWords(['bob', 'wood', 'fire', 'cat', 'bob'], 'bob', 'cat'));
