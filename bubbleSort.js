Array.prototype.bubbleSort = function () {
    const A = this;
    const len = A.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (A[j] > A[j + 1]) {
                [A[j], A[j + 1]] = [A[j + 1], A[j]];
            }
        }
    }
}

const arr = [8, 176, -1, 32, 3, 0, 44, 52, 78, 15, 7, 1, 9];
arr.bubbleSort()
console.log(arr);