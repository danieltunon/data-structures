var BinarySearchTree = function(value) {
  var tree = {};

  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(value) {
    if (value < this.value) {
      this.left === null ? this.left = BinarySearchTree(value) : this.left.insert(value);
    } else {
      this.right === null ? this.right = BinarySearchTree(value) : this.right.insert(value);
    }
  };

  tree.contains = function(value) {
    if (this.value === value) {
      return true;
    } else if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    } else if (this.right !== null){
      return this.right.contains(value);
    }

    return false;
  };

  tree.depthFirstLog = function(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
