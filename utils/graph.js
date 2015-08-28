var GraphNode = function(value, neighbors) {
  this.value = value;
  this.neighbors = neighbors || [];
};

var Graph = function(options) {
  this.nodes = {};

  if (typeof options === 'undefined') {
    this.directed = false;
  } else {
    this.directed = options.directed || false;
  }
};

Graph.prototype = {
  addNode: function(value) {
    this.nodes[value] = [];
  },

  addEdge: function(value, neighbor) {
    if (typeof this.nodes[value] === 'undefined') {
      this.nodes[value] = [];
    }

    this.nodes[value].push(neighbor);

    // If the graph isn't directed, add an edge in the
    // other direction.
    if (!this.directed) {
      if (typeof this.nodes[neighbor] === 'undefined') {
        this.nodes[neighbor] = [];
      }

      this.nodes[neighbor].push(value);
    }
  },

  getNodes: function() {
    return this.nodes;
  },

  getProperties: function() {
    return {
      'directed': this.directed
    };
  }
};



module.exports = Graph;
