const mergeSort = (numbers, p, r) => {

	if (numbers.length <=1) {
		return numbers;
	}

	var middle = Math.floor(numbers.length / 2);
	var left = numbers.slice(0, middle);
	var right = numbers.slice(middle);
	
	return merge(mergeSort(left), mergeSort(right));

}

const merge = (firstArray, secondArray) => {
	
	var leftIndex = 0;
	var rightIndex = 0;
	var lengthOfSubArrays = firstArray.length + secondArray.length;
	var sortedArray = [];

	while(leftIndex + rightIndex < lengthOfSubArrays) {

		var leftItem = firstArray[leftIndex];
		var rightItem = secondArray[rightIndex];

		if (leftItem === undefined) {
			sortedArray.push(rightItem);
			rightIndex++;
		} else if (rightItem === undefined) {
			sortedArray.push(leftItem);
			leftIndex++;
		} else if (leftItem > rightItem) {
			sortedArray.push(rightItem);
			rightIndex++;
		} else {
			sortedArray.push(leftItem);
			leftIndex++;
		}

	}

	return sortedArray;
}

export default mergeSort;