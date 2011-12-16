(function() {

  /*
  Bubble sort, also known as sinking sort,
  is a simple sorting algorithm that works
  by repeatedly stepping through the list
  to be sorted, comparing each pair of adjacent
  items and swapping them if they are in
  the wrong order.
  
  http://en.wikipedia.org/wiki/Bubble_sort
  */

  var bubblesort;

  bubblesort = function(array) {
    var i, key, n, _len, _ref, _ref2;
    for (n = 0, _len = array.length; n < _len; n++) {
      key = array[n];
      for (i = 0, _ref = array.length - n; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
        if (array[i] > array[i + 1]) {
          _ref2 = [array[i + 1], array[i]], array[i] = _ref2[0], array[i + 1] = _ref2[1];
        }
      }
    }
    return array;
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = bubblesort;
  }

}).call(this);
