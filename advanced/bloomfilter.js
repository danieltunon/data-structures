var BloomFilter = function() {
  this._limit = 18;
  this._filter = [];  
  this._jenkins = new Jenkins();
};

BloomFilter.prototype.insert = function(k, v) {
  /* suppressCounter is an optional argument used for resize */
  /* it prevents incremementing numitems when migrating data */
  var indeces = [];
  indeces.push(parseInt(this._jenkins.hash32(k), 16) % this._limit);
  indeces.push(murmurhash2_32_gc(k, 7) % this._limit);
  indeces.push(fnv32a(k) % this._limit);

  for (var i = 0; i < indeces.length; i++) {
    this._filter[indeces[i]] = 1;
  }
};

BloomFilter.prototype.retrieve = function(k) {
  var indeces = [];
  indeces.push(parseInt(this._jenkins.hash32(k), 16) % this._limit);
  indeces.push(murmurhash2_32_gc(k, 7) % this._limit);
  indeces.push(fnv32a(k) % this._limit);

  for (var i = 0; i < indeces.length; i++) {
    if (!this._filter[indeces[i]]) return false;
  }

  return true;
};

// var bloom = new BloomFilter();
// bloom.insert('hello');
// bloom.insert('world');
// console.log(bloom.retrieve('hello'));
// console.log(bloom.retrieve('world'));
// console.log(bloom.retrieve('pumpkins'));

var wordsToAdd = ['hello', 'world', 'danny', 'travis', 'hack', 'reactor',
'san francisco', 'california', 'pumpkins', 'et cetera'];

var makeRandomWord = function() {
  var retString = '';
  var stringLength = 15;
  for (var i = 0; i < stringLength; i++) {
    retString += String.fromCharCode('a'.charCodeAt(0) + Math.random() * 26);
  }
  return retString;
};

var bloom = new BloomFilter();
var falsePositivesPerWords = [];
for (var i = 0; i < wordsToAdd.length; i++) {
  var falsePositives = 0;
  bloom.insert(wordsToAdd[i]);
  for (var j = 0; j < 1000; j++) {
    var randomWord = makeRandomWord();
    if (bloom.retrieve(randomWord)) falsePositives++;
  }
  falsePositivesPerWords.push(falsePositives);
}

console.log(falsePositivesPerWords);
/*
 * Complexity: What is the time complexity of the above functions?
 */