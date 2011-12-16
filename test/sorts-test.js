var vows   = require('vows')
  , assert = require('assert')
  , sorts  = vows.describe('Testing sorting algorithms');
  
var quicksort     = require('./../js/quicksort')
  , mergesort     = require('./../js/mergesort')
  , bubblesort    = require('./../js/bubblesort')
  , insertionsort = require('./../js/insertionsort')
  , shellsort     = require('./../js/shellsort')
  
var arr0 = (function() {
		var result = []
		  , i;
		for (i = 0; i < 10000; i += 1) {
			result.push(Math.round(Math.random() * 10000));
		}
		return result;
	}());

var arr2 = arr0.slice().sort(function(a, b) {
		return a - b;
	});

var genericSort = function(algorithm) {
		return {
			topic: algorithm(arr0.slice()),
			'is working': function(array) {
				assert.deepEqual(array, arr2);
			}
		}
	};

sorts.addBatch({
	'Quicksort': {
		topic: function() {
			var arr1 = arr0.slice();
			quicksort(arr1)
			return arr1;
		},
		'is working': function(array) {
			assert.deepEqual(array, arr2);
		}
	},
	'Merge sort'    : genericSort(mergesort),
	'Bubble sort'   : genericSort(bubblesort),
	'Insertion sort': genericSort(insertionsort),
	'Shell sort'    : genericSort(shellsort)
}).export(module);
