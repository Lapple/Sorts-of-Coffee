var Benchmark = require('benchmark')
  , assert    = require('assert')
  
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
  
var suite = new Benchmark.Suite;

suite
.add('Native Sort', function() {
	arr0.slice().sort(function(a, b) {
		return a - b;
	});
})
.add('Quicksort', function() {
	quicksort(arr0.slice());
})
.add('Mergesort', function() {
	mergesort(arr0.slice());
})
.add('Bubblesort', function() {
	bubblesort(arr0.slice());
})
.add('Insertion Sort', function() {
	insertionsort(arr0.slice());
})
.add('Shell Sort', function() {
	shellsort(arr0.slice());
})
.on('cycle', function(event, bench) {
	console.log(bench.name + "	took: " + (bench.times.period * 1000).toFixed(2) + "ms");
})
.on('complete', function() {
	console.log('');
	console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({'async': true});
