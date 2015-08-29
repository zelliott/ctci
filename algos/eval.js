// Evaluates the boolean value of arrays such as
// ['0', '|', '1']
function evalSnippet(snippet) {
  var hash = {
    '0|0': '0',
    '0|1': '1',
    '1|0': '1',
    '1|1': '1',
    '0&0': '0',
    '0&1': '0',
    '1&0': '0',
    '1&1': '1'
  };

  var nextSnippet = snippet.slice(4, snippet.length);

  if (nextSnippet.length === 0) {
    return hash[snippet.slice(0, 3).join('')];
  }

  return hash[snippet.slice(0, 3).join('')] + evalSnippet(nextSnippet);
}

// Evaluates the boolean value of entire boolean strings.
function evalFn(str) {
  var stack = [];

  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);

    if (ch === ')') {
      var snippet = [];
      while (stack[stack.length - 1] !== '(') {
        snippet.push(stack.pop());
      }
      stack.pop();
      stack.push(evalSnippet(snippet));

    } else {
      stack.push(ch);
    }
  }

  if (stack[0] === '1') {
    return true;
  } else {
    return false;
  }
}

console.log('(0|1)', evalFn('(0|1)'));
console.log('(0|0|1|1|1|0)', evalFn('(0|0|1|1|1|0)'));
console.log('(1&(0|1))', evalFn('(1&(0|1))'));
