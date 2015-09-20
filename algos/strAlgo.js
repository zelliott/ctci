function strArrToHash(arr) {
  var hash = {};

  for (var i = 0; i < arr.length; i++) {
    hash[arr[i]] = arr[i];
  }

  return hash;
}

var MAX_CHAIN = 1;

function recurseHash(hash, val, maxChainLength) {
  var alteredStrs = [];

  // If 'a', 'b', etc... is in the hash, increment chain length & return out
  if (val.length === 1) {
    if (typeof hash[val] !== 'undefined') {
      MAX_CHAIN = Math.max(MAX_CHAIN, maxChainLength);
      return;
    }
  }

  // Given 'abc', generate 'ac', 'ab', 'bc'
  for (var i = 0; i < val.length; i++) {
    alteredStrs.push(val.slice(0, i) + val.slice(i + 1, val.length));
  }
console.log(alteredStrs);
  // For each altered str
  for (i = 0; i < alteredStrs.length; i++) {
    var alteredStr = alteredStrs[i];
    if (typeof hash[alteredStr] !== 'undefined') {
      recurseHash(hash, alteredStr, maxChainLength + 1);
    }
  }
}

function strAlgo(arr) {
  var strHash = strArrToHash(arr);

  for (var i = 0; i < arr.length; i++) {
    recurseHash(strHash, arr[i], 1);
  }

  return MAX_CHAIN;
}

console.log(strAlgo(['aaaaaa','aaaaa','aaaa','aaa','aa','a', 'abcd', 'bcd', 'ac', 'c', 'abc', 'aaaaaaa',  'aaaa!aaa']));
