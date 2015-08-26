var Ctci = function() {};

// O(n), where n is the length of the string
Ctci.prototype.isPermutation = function(str1, str2) {
  var hash = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (var i = 0; i < str1.length; i++) {
    var letter1 = str1.charAt(i);
    var letter2 = str2.charAt(i);

    if (typeof hash[letter1] === 'undefined') {
      hash[letter1] = {
        letter1: 1,
        letter2: 0
      };
    } else {
      hash[letter1].letter1 = ++hash[letter1].letter1;
    }

    if (typeof hash[letter2] === 'undefined') {
      hash[letter2] = {
        letter1: 0,
        letter2: 1
      }
    } else {
      hash[letter2].letter2 = ++hash[letter2].letter2;
    }
  }

  for (i = 0; i < Object.keys(hash); i++) {
    if (hash[i].letter1 !== hash[i].letter2) {
      return false;
    }
  }

  return true;
};

module.exports = new Ctci();

