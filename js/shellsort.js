(function() {

  /*
  Shellsort is an in-place comparison sort.
  It generalizes an exchanging sort, such as
  insertion or bubble sort, by allowing the
  comparison and exchange of elements that
  lie far apart.
  The running time of Shellsort is heavily
  dependent on the gap sequence it uses.
  
  http://en.wikipedia.org/wiki/Shellsort
  */

  var shellsort;

  shellsort = function(array) {
    var gap, gaps, i, j, n, temp, _i, _len;
    n = array.length;
    gaps = shellsort.gaps(n);
    for (_i = 0, _len = gaps.length; _i < _len; _i++) {
      gap = gaps[_i];
      for (i = gap; gap <= n ? i < n : i > n; gap <= n ? i++ : i--) {
        temp = array[i];
        j = i;
        while (j >= gap && array[j - gap] > temp) {
          array[j] = array[j - gap];
          j -= gap;
        }
        array[j] = temp;
      }
    }
    return array;
  };

  shellsort.gaps = function(count) {
    var index, item, result;
    index = 0;
    result = [1];
    while (true) {
      /*
      		Sedgewick's gap sequence is used
      		[1, 6, 16, 47, 95, ...]
      */
      if (index++ % 2 === 0) {
        item = 9 * Math.pow(2, index) - 9 * Math.pow(2, index / 2) + 1;
      } else {
        item = 8 * Math.pow(2, index) - 6 * Math.pow(2, (index + 1) / 2) + 1;
      }
      if (item > count) {
        break;
      } else {
        result.push(Math.floor(item));
      }
    }
    return result.reverse();
  };

  if (typeof module !== "undefined" && module !== null) module.exports = shellsort;

}).call(this);
