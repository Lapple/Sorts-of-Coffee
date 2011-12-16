###
Bubble sort, also known as sinking sort,
is a simple sorting algorithm that works
by repeatedly stepping through the list
to be sorted, comparing each pair of adjacent
items and swapping them if they are in
the wrong order.

http://en.wikipedia.org/wiki/Bubble_sort
###

bubblesort = (array) ->
	for key, n in array
		for i in [0..array.length - n]
			if array[i] > array[i + 1]
				[array[i], array[i + 1]] = [array[i + 1], array[i]]

	array

module?.exports = bubblesort