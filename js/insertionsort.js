(function() {

  /*
  Insertion sort is a simple sorting
  algorithm: a comparison sort in which
  the sorted array (or list) is built
  one entry at a time. It is much less
  efficient on large lists than more
  advanced algorithms such as quicksort,
  heapsort, or merge sort.
  
  http://en.wikipedia.org/wiki/Insertion_sort
  */

  var insertionsort;

  insertionsort = function(array) {
    var i, j, value, _len;
    for (i = 0, _len = array.length; i < _len; i++) {
      value = array[i];
      j = i - 1;
      while (j >= 0 && array[j] > value) {
        array[j + 1] = array[j--];
      }
      array[j + 1] = value;
    }
    return array;
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = insertionsort;
  }

}).call(this);
