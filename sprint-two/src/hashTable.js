

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.numItems = 0;
};

HashTable.prototype.insert = function(k, v, suppressCounter) {
  /* suppressCounter is an optional argument used for resize */
  /* it prevents incremementing numitems when migrating data */
  this.resize();

  if (!suppressCounter) this.numItems++;

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
    for (var i = 0; i < searchArr.length; i++) {
      if (searchArr[i][0] === k) return searchArr[i][1];
    }
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var searchArr = this._storage.get(index);

  for (var i = 0; i < searchArr.length; i++) {
    if (searchArr[i][0] === k) {
      searchArr.splice(i, 1);
      this.numItems--;
    }
  }

  this.resize();
};

HashTable.prototype.resize = function () {
  var oldLimit = this._limit;
  var newLimit = oldLimit;

  if (this.numItems === 0) return undefined;

  if (this.numItems / oldLimit > 0.75) {
    newLimit = oldLimit * 2;
  } else if (this.numItems / oldLimit < 0.25) {
    newLimit = Math.max(oldLimit / 2, 8);
  }

  this._limit = newLimit;

  if (newLimit !== oldLimit) {
    debugger;
    var oldData = this._storage;
    this._storage = LimitedArray(newLimit);
    

    for (var i = 0; i < oldLimit; i++) {
      var tuples = oldData.get(i);
      if (Array.isArray(tuples)) {
        for (var j = 0; j < tuples.length; j++) {
          this.insert(tuples[j][0], tuples[j][1], true);
        }
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */