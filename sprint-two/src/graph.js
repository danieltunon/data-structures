

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {
    val: node,
    edges: []
  };

  this.nodes.push(newNode);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var nodes = this.nodes;
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].val === node) return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodes = this.nodes;
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].val === node) {
      var nodeIndex = i;
    }
  }
  if (nodeIndex === undefined) return false;

  var edges = nodes[nodeIndex].edges;
  for (var i = 0; i < edges.length; i++) {
    this.removeEdge(nodes[nodeIndex], edges[i]);
  }

  nodes.splice(nodeIndex, 1);
  return true;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var searchNode;
  this.nodes.forEach(function(node) {
    if (node.val === fromNode) {
      searchNode = node;
    }
  });

  var searchEdges = searchNode.edges;
  for (var i = 0; i < searchEdges.length; i++) {
    if (searchEdges[i].val === toNode) return true;
  }

  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var nodes = this.nodes;

  var startNode;
  var endNode;
  nodes.forEach(function(node) {
    if (node.val === fromNode) {
      startNode = node;
    } 
    if (node.val === toNode) {
      endNode = node;
    }
  });

  startNode.edges.push(endNode);
  endNode.edges.push(startNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var nodes = this.nodes;
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].val === fromNode) {
      var startNode = nodes[i];
    } else if (nodes[i].val === toNode) {
      var endNode = nodes[i];
    }
  }

  var startEdges = startNode.edges;
  var endEdges = endNode.edges;

  startEdges.splice(startEdges.indexOf(endNode), 1);
  endEdges.splice(endEdges.indexOf(startNode), 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node.val);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


