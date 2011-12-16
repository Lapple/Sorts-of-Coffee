(function() {

  /*
  Merge sort is an O(n log n) comparison-based sorting algorithm.
  Most implementations produce a stable sort, meaning that the
  implementation preserves the input order of equal elements
  in the sorted output. It is a divide and conquer algorithm.
  Merge sort was invented by John von Neumann in 1945.
  
  http://en.wikipedia.org/wiki/Merge_sort
  */

  var mergesort;

  mergesort = function(array) {
    var left, middle, right;
    if (array.length <= 1) return array;
    middle = array.length / 2;
    left = array.slice(0, middle);
    right = array.slice(middle);
    left = mergesort(left);
    right = mergesort(right);
    return mergesort.merge(left, right);
  };

  mergesort.merge = function(left, right) {
    var result;
    result = [];
    while (left.length > 0 && right.length > 0) {
      result.push((left[0] <= right[0] ? left : right).shift());
    }
    if (left.length > 0) result.push.apply(result, left);
    if (right.length > 0) result.push.apply(result, right);
    return result;
  };

  if (typeof module !== "undefined" && module !== null) module.exports = mergesort;

}).call(this);
