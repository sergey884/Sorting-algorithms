Array.prototype.insertionSort = function() {
	let arr = this;
	let i = 1, j;
	for (i; i < arr.length; i++) {
		const x = arr[i];
		j = i - 1;
		while (j >= 0 && arr[j] > x) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = x;
	}
	return arr;
}

const arr = [8, 6, 76, 32, 3, 2, 4, 52, 78, 15, 7, 1, 5, 9];
console.log(arr.insertionSort());