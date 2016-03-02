var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};

  stack.storage = {};
  stack.numItems = 0;

  stack.size = stackMethods.size;
  stack.pop = stackMethods.pop;
  stack.push = stackMethods.push;

  return stack;
};

var stackMethods = {
  size: function() {
    return this.numItems;
  },

  push: function(item) {
    this.numItems++;
    this.storage[this.numItems] = item;
  },

  pop: function () {
    if ( this.numItems > 0 ) {
      var returnVal = this.storage[this.numItems];
      this.numItems = Math.max(--this.numItems, 0);
      return returnVal;
    }
  }
};


