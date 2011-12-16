###
Merge sort is an O(n log n) comparison-based sorting algorithm.
Most implementations produce a stable sort, meaning that the
implementation preserves the input order of equal elements
in the sorted output. It is a divide and conquer algorithm.
Merge sort was invented by John von Neumann in 1945.

http://en.wikipedia.org/wiki/Merge_sort
###

mergesort = (array) ->
	if array.length <= 1 then return array
	
	middle = array.length / 2
	left   = array[0...middle]
	right  = array[middle..]
	
	left   = mergesort left
	right  = mergesort right
	
	mergesort.merge left, right
	
mergesort.merge = (left, right) ->
	result = []
	
	while left.length > 0 and right.length > 0
		result.push (if left[0] <= right[0] then left else right).shift()
	
	if left.length  > 0 then result.push left...
	if right.length > 0 then result.push right...
	
	result

module?.exports = mergesort

