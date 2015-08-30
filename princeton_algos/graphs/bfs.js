var Graph = require('../../utils/graph.js');

function bfs(graph) {
  var visited = {};
  var queue = [];
  var adjacencyList = graph.getNodes();
  var nodes = Object.keys(adjacencyList);

  queue.push(nodes[0]);

  // While we still have nodes in the queue.
  while (queue.length > 0) {
    var node = queue.shift();

    // If not visited yet
    if (typeof visited[node] === 'undefined') {
      console.log('visited: ' + node);
      visited[node] = true;

      // Push neighbors onto the queue
      for (var i = 0; i < adjacencyList[node].length; i++) {
        queue.push(adjacencyList[node][i]);
      }
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

bfs(graphA);

