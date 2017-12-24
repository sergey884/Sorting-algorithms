const merge = (leftArr, rightArr, A) => {
	const leftArrayLength = leftArr.length;
	const rightArrayLength = rightArr.length;
	let i = 0, j = 0, k = 0;

	while (i < leftArrayLength && j < rightArrayLength) {
		if (leftArr[i] <= rightArr[j]) {
			A[k] = leftArr[i];
			i++;
		} else {
			A[k] = rightArr[j];
			j++;
		}
		k++;
	}

	while (i < leftArrayLength) {
		A[k] = leftArr[i];
		i++;
		k++;
	}

	while (j < rightArrayLength) {
		A[k] = rightArr[j];
		j++;
		k++;
	}
}

Array.prototype.mergeSort = function() {
	let A = this;
	const n = A.length;
	
	if (n < 2) return;

	const middle = parseInt(n / 2);
	const leftArr = [], rightArr = [];
	let i = 0, j = 0;

	for(i; i < middle; i++ ) {
		leftArr.push(A[i]);
	}

	for(j; j < n - middle; j++ ) {
		rightArr.push(A[middle + j]);
	}

	leftArr.mergeSort();
	rightArr.mergeSort();

	merge(leftArr, rightArr, A);
}

const arr = [8, 6, 76, 32, 3, 2, 4, 52, 78, 15, 7, 1, 5, 9];

arr.mergeSort();