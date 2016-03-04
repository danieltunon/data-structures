var BinarySearchTree = function(value) {
  var tree = {};

  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(value) {
    if (value < this.value) {
      this.left === null ? this.left = BinarySearchTree(value) : this.left.insert(value);
    } else if (value > this.value) {
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

  tree.breadthFirstLog = function(cb) {
    var searchArray = [this];

    for (var i = 0; i < searchArray.length; i++) {
      cb(searchArray[i].value);
      if (searchArray[i].left !== null) searchArray.push(searchArray[i].left);
      if (searchArray[i].right !== null) searchArray.push(searchArray[i].right);
    }
  };

  return tree;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//  var tree = BinarySearchTree(5);
//  tree.insert(4);
//  tree.insert(7);
//  tree.insert(3);
//  tree.insert(6);
//  tree.insert(8);

//  tree.breadthFirstLog(function(val){
//   console.log(val);
// });