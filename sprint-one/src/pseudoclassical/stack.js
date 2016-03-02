var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.numItems = 0;
  this.storage = {};

};

Stack.prototype.size = function() {
  return this.numItems;
};

Stack.prototype.push = function(item) {
  this.numItems++;
  this.storage[this.numItems] = item;
};

Stack.prototype.pop = function() {
  if ( this.numItems ) return this.storage[this.numItems--];
};

