var Graph = require('../../utils/graph.js');

function dfs(graph) {
  var visited = {};
  var stack = [];
  var adjacencyList = graph.getNodes();
  var nodes = Object.keys(adjacencyList);

  stack.push(nodes[0]);

  // While we still have nodes in the stack.
  while (stack.length > 0) {
    var node = stack.pop();

    // If not visited yet
    if (typeof visited[node] === 'undefined') {
      console.log('visited: ' + node);
      visited[node] = true;

      // Push neighbors onto the stack
      for (var i = 0; i < adjacencyList[node].length; i++) {
        stack.push(adjacencyList[node][i]);
      }
    }
  }
}

function dfsRecursive(graph, node, visited) {
  var adjacent = graph.getNodes()[node];
  console.log('visited: ' + node);
  visited[node] = true;

  for (var i = 0; i < adjacent.length; i++) {
    if (typeof visited[adjacent[i]] === 'undefined') {
      dfsRecursive(graph, adjacent[i], visited);
    }
  }
}

var graphA = new Graph();

graphA.addNode(1);
graphA.addNode(2);
graphA.addNode(3);
graphA.addNode(4);

graphA.addEdge(1, 2);
graphA.addEdge(2, 3);
graphA.addEdge(3, 4);
graphA.addEdge(2, 4);

dfs(graphA);
console.log('---');
dfsRecursive(graphA, 1, {});
