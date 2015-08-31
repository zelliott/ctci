var Graph = require('../../utils/graph.js');

function cycleDetection(graph) {
  var visited = {};
  var stack = [];
  var adjacencyList = graph.getNodes();
  var nodes = Object.keys(adjacencyList);

  stack.push({
    'node': nodes[0]
  });

  // While we still have nodes in the stack.
  while (stack.length > 0) {
    var nodeInfo = stack.pop();
    var cameFrom = nodeInfo.cameFrom;
    var node = nodeInfo.node;

    // If not visited yet
    if (typeof visited[node] === 'undefined') {
      console.log('visited: ' + node);
      visited[node] = true;

      // Push neighbors onto the stack
      for (var i = 0; i < adjacencyList[node].length; i++) {

        // Don't add the neighbor we *just* came from...
        // FIXME: This '!=' is bad style, used because we are comparing 1 with '1'
        // for some reason.
        // FIXME: Also, I can use visited instead of this cameFrom variable...
        if (typeof cameFrom === 'undefined' || adjacencyList[node][i] != cameFrom) {
          stack.push({
            'node': adjacencyList[node][i],
            'cameFrom': node
          });
        }
      }
    } else if (visited[node]) {
      return false;
    }

  }

  return true;
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

console.log(cycleDetection(graphA));
