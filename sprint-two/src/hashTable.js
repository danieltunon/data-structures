

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.numItems = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  
  if (arr) {
    this.remove(k);
  } else {
    arr = [];
  }

  arr.push([k, v]);
  this._storage.set(index, arr);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var searchArr = this._storage.get(index);
  if (searchArr.length > 0) {
    // return this._storage.get(index)[k];
    for (var i = 0; i < searchArr.length; i++) {
      if (searchArr[i][0] === k) return searchArr[i][1];
    }
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var searchArr = this._storage.get(index);

  for (var i = 0; i < searchArr.length; i++) {
    if (searchArr[i][0] === k) searchArr.splice(i, 1);
  }

  // if (Object.keys(obj).length === 1) {
  //   this._storage.set(index, undefined);
  // } else {
  //   delete obj[k];
  // }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


