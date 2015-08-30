var Ctci = function() {};

function sortStr(str) {
  return str.split('').sort().join('');
}

Ctci.prototype.anagramArray = function(arrayOfStrings) {
  var anagramHash = {};

  // For each string in the array, sort it and store it in a hash
  for (var i = 0; i < arrayOfStrings.length; i++) {
    var currentStr = arrayOfStrings[i];
    var sortedStr = sortStr(currentStr);

    if (typeof anagramHash[sortedStr] === 'undefined') {
      anagramHash[sortedStr] = [];
    }

    anagramHash[sortedStr].push(currentStr);
  }

  var result = [];

  // Then, iterate over the hash and concat all of the anagram buckets
  // into a single result array
  for (i = 0; i < Object.keys(anagramHash).length; i++) {
    var hashKey = Object.keys(anagramHash)[i];
    result = result.concat(anagramHash[hashKey]);
  }

  return result;
};

module.exports = new Ctci();
