Array.prototype.selectionSort = function() {
	let A = this;
	const arrLength = A.length;
	let i = 0, j = 0;

	for (i; i < arrLength - 1; i++) {
		let minIndex = i;
		for(j = i + 1; j < arrLength; j++) {
			if (A[j] < A[minIndex] ) {
				minIndex = j;
			}
		}

		if (minIndex !== i) {
			let tmp = A[minIndex];
			A[minIndex] = A[i];
			A[i] = tmp;
		} 
	}
}

let arr = [8, 5, -5, 89, 54, 3, 2, 6, 4, 7, 9];
arr.selectionSort();