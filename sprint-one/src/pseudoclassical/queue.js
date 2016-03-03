var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.startVal = 1;
  this.numItems = 0;

};

Queue.prototype.size = function() {
  return this.numItems;
};

Queue.prototype.enqueue = function(item) {
  this.numItems++;
  this.storage[this.startVal + this.numItems - 1] = item;
};

Queue.prototype.dequeue = function() {
  var val = this.storage[this.startVal];
  this.startVal++;
  this.numItems = Math.max(--this.numItems, 0);
  return val;
};


