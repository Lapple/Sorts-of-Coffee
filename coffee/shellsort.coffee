###
Shellsort is an in-place comparison sort.
It generalizes an exchanging sort, such as
insertion or bubble sort, by allowing the
comparison and exchange of elements that
lie far apart.
The running time of Shellsort is heavily
dependent on the gap sequence it uses.

http://en.wikipedia.org/wiki/Shellsort
###

shellsort = (array) ->
	n    = array.length
	gaps = shellsort.gaps(n)
	
	for gap in gaps
		for i in [gap...n]
			temp = array[i]
			j    = i
			
			while j >= gap and array[j - gap] > temp
				array[j] = array[j - gap]
				j -= gap
			
			array[j] = temp
	
	array
			
	
shellsort.gaps = (count) ->
	index  = 0
	result = [1]
	
	loop
		###
		Sedgewick's gap sequence is used
		[1, 6, 16, 47, 95, ...]
		###
		if index++ % 2 is 0
			item = 9 * Math.pow(2, index) - 9 * Math.pow(2, index / 2) + 1
		else
			item = 8 * Math.pow(2, index) - 6 * Math.pow(2, (index + 1) / 2) + 1
			
		if item > count
			break
		else
			result.push Math.floor item
			
	result.reverse()
		
module?.exports = shellsort

