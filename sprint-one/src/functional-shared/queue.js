var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.numItems = 0;
  someInstance.startVal = 1;
  someInstance.size = queueMethods.size;
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;

  return someInstance;
};

var queueMethods = {
  size: function() {
    return this.numItems;
  },

  enqueue: function(item) {
    this.numItems++;
    this.storage[this.startVal + this.numItems - 1] = item;
  },

  dequeue: function() {
    var retVal = this.storage[this.startVal];
    this.startVal++;
    this.numItems = Math.max(--this.numItems, 0);
    return retVal;
  }
};


