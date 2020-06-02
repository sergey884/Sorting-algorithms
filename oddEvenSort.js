Array.prototype.oddEvenSort = function () {
    const A = this;
    const len = A.length;
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;

        for (let i = 1; i < len; i += 2) {
            if (A[i] > A[i + 1]) {
                [A[i], A[i + 1]] = [A[i + 1], A[i]];
                isSorted = false;
            }
        }

        for (let i = 0; i < len; i += 2) {
            if (A[i] > A[i + 1]) {
                [A[i], A[i + 1]] = [A[i + 1], A[i]];
                isSorted = false;
            }
        }
    }
}

const arr = [8, 176, 32, 3, 0, 44, 52, 78, 15, 7, 1, 5, 9];
arr.oddEvenSort()
console.log(arr);