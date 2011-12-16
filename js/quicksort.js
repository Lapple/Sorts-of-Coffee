(function() {

  /*
  Quicksort - sorting algorithm developed by Tony Hoare
  that, on average, makes O(nlog n) comparisons to sort n items.
  In the worst case, it makes O(n2) comparisons.
  
  http://en.wikipedia.org/wiki/Quicksort
  */

  var quicksort;

  quicksort = function(array, low, high) {
    var l, pivot, r, _ref;
    if (low == null) low = 0;
    if (high == null) high = array.length - 1;
    l = low;
    r = high;
    pivot = array[Math.floor((low + high) / 2)];
    while (l <= r) {
      while (array[l] < pivot) {
        l += 1;
      }
      while (array[r] > pivot) {
        r -= 1;
      }
      if (l <= r) {
        if (l < r) {
          _ref = [array[r], array[l]], array[l] = _ref[0], array[r] = _ref[1];
        }
        l += 1;
        r -= 1;
      }
    }
    if (l < high) quicksort(array, l, high);
    if (r > low) return quicksort(array, low, r);
  };

  if (typeof module !== "undefined" && module !== null) module.exports = quicksort;

}).call(this);
