var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var next = Node(value);
    if (list.tail !== null) {
      list.tail.next = next;
    }
    list.tail = next;
    if (list.head === null) {
      list.head = next;
    }
  };

  list.removeHead = function() {
    var retVal = list.head;
    list.head = list.head.next;
    return retVal.value;
  };

  list.contains = function(target) {
    var searchNode = list.head;
    while (searchNode !== null) {
      if (searchNode.value === target) {
        return true;
      }
      searchNode = searchNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
