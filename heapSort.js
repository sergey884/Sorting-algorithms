const swap = (arr, i, j) => {
	const tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

const heapify = (arr, len, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        // swap(arr, i, largest);
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        heapify(arr, len, largest);
    }

    return arr;
}

Array.prototype.heapSort = function () {
    const A = this;
    const len = A.length;
    let i = Math.floor(len / 2);
    let j = len - 1;

    while (i >= 0) {
        heapify(A, len, i);
        i--;
    }

    while (j >= 0) {
        [A[0], A[j]] = [A[j], A[0]];
        // swap(arr, 0, j);
        heapify(A, j, 0);
        j--;
    }
}

const arr = [8, 176, 32, 3, 0, 44, 52, 78, 15, 7, 1, 5, 9];
arr.heapSort()
console.log(arr);