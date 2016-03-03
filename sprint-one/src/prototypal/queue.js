var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.numItems = 0;
  someInstance.startVal = 1;

  return someInstance;
};

var queueMethods = {
  size: function() {
    return this.numItems;
  },
  enqueue: function(item) {
    this.numItems++;
    this.storage[this.numItems + this.startVal - 1] = item;
  },
  dequeue: function() {
    var val = this.storage[this.startVal];
    this.numItems = Math.max(--this.numItems, 0);
    this.startVal++;
    return val;
  }
};


