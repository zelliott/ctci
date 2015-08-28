describe('4.2', function() {
  var ctci = require('../../4/4.2.js');
  var Graph = require('../../utils/graph.js');

  var directedGraph;

  beforeEach(function() {
    directedGraph = new Graph({
      'directed': true
    });
  });

  it('should report that a path exists between two nodes', function() {
    directedGraph.addNode('a');
    directedGraph.addNode('b');
    directedGraph.addEdge('a', 'b');
    expect(ctci.doesRouteExist('a', 'b', directedGraph)).toBe(true);
  });

  it('should report that a path does not exist if it goes the wrong direction', function() {
    directedGraph.addNode('a');
    directedGraph.addNode('b');
    directedGraph.addEdge('b', 'a');
    expect(ctci.doesRouteExist('a', 'b', directedGraph)).toBe(false);
  });

  it('should report that a path exists on a more complicated graph', function() {
    directedGraph.addNode('a');
    directedGraph.addNode('b');
    directedGraph.addNode('c');
    directedGraph.addNode('d');
    directedGraph.addNode('e');
    directedGraph.addEdge('a', 'b');
    directedGraph.addEdge('b', 'd');
    directedGraph.addEdge('d', 'c');
    directedGraph.addEdge('c', 'e');
    expect(ctci.doesRouteExist('a', 'e', directedGraph)).toBe(true);
  });
});
