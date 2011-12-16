###
Quicksort - sorting algorithm developed by Tony Hoare
that, on average, makes O(nlog n) comparisons to sort n items.
In the worst case, it makes O(n2) comparisons.

http://en.wikipedia.org/wiki/Quicksort
###

quicksort = (array, low = 0, high = array.length - 1) ->

	l = low
	r = high
	pivot = array[Math.floor (low + high) / 2]
	
	while l <= r
		l += 1 while array[l] < pivot
		r -= 1 while array[r] > pivot
			
		if l <= r
			if l < r then [array[l], array[r]] = [array[r], array[l]]
				
			l += 1
			r -= 1
			
	if l < high then quicksort array, l, high
	if r > low  then quicksort array, low, r
	
module?.exports = quicksort