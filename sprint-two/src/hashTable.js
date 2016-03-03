

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(index) || {};
  obj[k] = v;
  this._storage.set(index, obj);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    return this._storage.get(index)[k];
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(index) || {};
  if (Object.keys(obj).length === 1) {
    this._storage.set(index, undefined);
  } else {
    delete obj[k];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


