var Stack = function() {
  var stack = Object.create(stackMethods);

  stack.numItems = 0;
  stack.storage = {};

  return stack;
};

var stackMethods = {
  size: function() {
    return this.numItems;
  },

  push: function(item) {
    this.storage[++this.numItems] = item;
  },

  pop: function () {
    // if (this.numItems > 0) {
    //   var returnVal = this.storage[this.numItems];
    //   this.numItems = Math.max(--this.numItems, 0);
    //   return returnVal;
    // }
    if (this.numItems) return this.storage[this.numItems--];
  }
};

