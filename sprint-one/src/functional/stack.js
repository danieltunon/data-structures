var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numItems = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    numItems++;
    storage[numItems] = value;
  };

  someInstance.pop = function() {
    if (numItems > 0) {
      var retVal = storage[numItems];
      numItems = Math.max(--numItems, 0);
      return retVal;
    }

  };

  someInstance.size = function() {
    return numItems;
  };

  return someInstance;
};
