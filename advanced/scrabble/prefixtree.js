var PrefixTree = function() {
  var newTree = {};
  newTree.value = '';
  newTree.isWord = false;

  // your code here
  newTree.children = [];

  newTree.addWord = treeMethods.addWord;
  newTree.search  = treeMethods.search;

  return newTree;
};

var treeMethods = {};

treeMethods.addWord = function(word) {
  var children = this.children;
  for (var i = 0; i < children.length; i++) {
    if (children[i].value === word.charAt(0)) {
      children[i].addWord(word.slice(1));
      return 1;
    }
  }

  if (word.length === 0) {
    this.isWord = true;
    return 2;
  } else {
    var addedTree = PrefixTree();
    addedTree.value = word.charAt(0);
    addedTree.addWord(word.slice(1));
    this.children.push(addedTree);
  }
};

treeMethods.search = function(word) {
  var children = this.children;
  if (word.length === 0) {
    if (this.isWord) {
      return this.value;
    } else {
      return this.value.concat(children[0].search(word.slice(1)));
    }
  }

  for (var i = 0; i < children.length; i++) {
    if (children[i].value === word.charAt(0)) {
      return this.value.concat(children[i].search(word.slice(1)));;
    }
  }

  return '';
};















