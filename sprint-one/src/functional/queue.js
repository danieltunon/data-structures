var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var startVal = 1;
  var numItems = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    numItems++;
    storage[startVal + numItems - 1] = value;
  };

  someInstance.dequeue = function() {
    var val = storage[startVal];

    startVal++;

    numItems = Math.max(--numItems, 0);

    return val;
  };

  someInstance.size = function() {
    return numItems;
  };

  return someInstance;
};
