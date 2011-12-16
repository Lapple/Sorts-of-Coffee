###
Insertion sort is a simple sorting
algorithm: a comparison sort in which
the sorted array (or list) is built
one entry at a time. It is much less
efficient on large lists than more
advanced algorithms such as quicksort,
heapsort, or merge sort.

http://en.wikipedia.org/wiki/Insertion_sort
###

insertionsort = (array) ->
	for value, i in array
		j = i - 1
			
		while j >= 0 and array[j] > value
			array[j + 1] = array[j--]
		
		array[j + 1] = value
		
	array

module?.exports = insertionsort