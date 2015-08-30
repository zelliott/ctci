describe('Graph', function() {
  var Graph = require('../../utils/graph.js');

  var graph;
  var directedGraph;

  beforeEach(function() {
    graph = new Graph();
    directedGraph = new Graph({
      directed: true
    });
  });

  it('should properly create a new graph', function() {
    expect(graph.getNodes()).toEqual({});
  });

  it('should properly add a new node', function() {
    graph.addNode(1);

    var expectedGraph = {
      1: []
    };

    expect(graph.getNodes()).toEqual(expectedGraph);
  });

  it('should properly add two new nodes', function() {
    graph.addNode(1);
    graph.addNode(2);

    var expectedGraph = {
      1: [],
      2: []
    };

    expect(graph.getNodes()).toEqual(expectedGraph);
  });

  it('should properly add two new nodes and an edge', function() {
    graph.addNode(1);
    graph.addNode(2);
    graph.addEdge(1, 2);

    var expectedGraph = {
      1: [2],
      2: [1]
    };

    expect(graph.getNodes()).toEqual(expectedGraph);
  });

  it('should properly add three new nodes in a triangle formation', function() {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    var expectedGraph = {
      1: [2, 3],
      2: [1, 3],
      3: [1, 2]
    };

    expect(graph.getNodes()).toEqual(expectedGraph);
  });

  it('should properly create a new directed graph', function() {
    expect(directedGraph.getProperties()).toEqual({
      'directed': true
    });
  });

  it('should properly add edges to a directed graph', function() {
    directedGraph.addNode(1);
    directedGraph.addNode(2);
    directedGraph.addEdge(1, 2);

    var expectedGraph = {
      1: [2],
      2: []
    };

    expect(directedGraph.getNodes()).toEqual(expectedGraph);
  });
});
