var Ctci = function() {};

Ctci.prototype.doesRouteExist = function(node1, node2, graph) {
  var visitingQueue = graph.nodes[node1];
  var visited = {};

  // While we have nodes to visit
  while (visitingQueue.length !== 0) {
    var nextNode = visitingQueue.pop();

    // Only do anything if we haven't visiting this node
    if (!visited[nextNode]) {

      // If we've found the node, return true.  Otherwise,
      // mark the node as visited and add its neighbors
      // to our visitingQueue.
      if (nextNode === node2) {
        return true;
      } else {
        visited[nextNode] = true;
        visitingQueue = visitingQueue.concat(graph.nodes[nextNode]);
      }
    }
  }

  return false;
};

module.exports = new Ctci();
