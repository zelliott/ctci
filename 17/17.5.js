function returnHits(guess, solution) {
  var isLabeled = {
    0: false,
    1: false,
    2: false,
    3: false
  };

  var hits = 0;
  var pseudoHits = 0;

  // Look for hits
  for (var i = 0; i < 4; i++) {

    if (solution[i] === guess[i]) {
      isLabeled[i] = true;
      hits++;
    }
  }

  // Look for pseudo-hits
  for (i = 0; i < 4; i++) {

    var guessI = guess[i];

    for (var j = 0; j < 4; j++) {
       if (i !== j && !isLabeled[j] && solution[j] === guessI) {
         pseudoHits++;
         isLabeled[j] = true;
       }
     }
  }

  return {
    'hits': hits,
    'pseudoHits': pseudoHits
  };
}

var guess = {
  0: 'G',
  1: 'G',
  2: 'R',
  3: 'R'
};

var solution = {
  0: 'R',
  1: 'G',
  2: 'B',
  3: 'Y'
};

console.log(returnHits(guess, solution));
