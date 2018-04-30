const swap = (arr, i, j) => {
	const tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

const partition = (arr, left, right) => {
	const pivot = arr[right];
	let i = left - 1;

	for (let j = left; j < arr.length; j++) {
		if (arr[j] < pivot) {
			i = i + 1;
			swap(arr, i, j)
		}
	}
	swap(arr, i + 1, right);
	return  i + 1;
}

Array.prototype.quickSort = function(left = 0, right = this.length - 1) {
	const arr = this;

	if (left < right) {
		const index = partition(arr, left, right);
		arr.quickSort(left, index - 1 )
        arr.quickSort(index + 1, right)
	}
}

const arr = [8, 6, 76, 32, 3, 2, 4, 52, 78, 15, 7, 1, 5, 9];
arr.quickSort();
console.log(arr);