var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.parent = null;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var addedTree = Tree(value);
  addedTree.parent = this;
  this.children.push(addedTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
};

treeMethods.removeFromParent = function() {
  var siblings = this.parent.children;

  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i] === this) {
      siblings.splice(i, 1);
    }
  }

  this.parent = null;
  return this;
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
