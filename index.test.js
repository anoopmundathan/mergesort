import mergeSort from './';

describe('Merge Sort', () => {

	it('Should return empty array if empty array is passed', () => {
		expect(mergeSort([])).toEqual([]);
	});

	it('Should return same array if array is having only one element', () => {
		expect(mergeSort([5])).toEqual([5]);
	});

	it('Should return sorted array', () => {
		expect(mergeSort([5,4,9,2,1])).toEqual([1,2,4,5,9]);
	});

});