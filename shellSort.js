Array.prototype.shellSort = function () {
    const A = this;
    const len = A.length;
    let step = Math.floor(len / 2);

    for (step; step > 0; step = Math.floor(step / 2)) {
        for (let i = step; i < len; i++) {
            for (let j = i - step; j >= 0 && A[j] > A[j + step]; j -= step) {
                [A[j], A[j + step]] = [A[j + step], A[j]];
            }
        }
    }
}

const arr = [8, 176, -1, 32, 3, 0, 44, 52, 78, 15, 7, 1, 9];
arr.shellSort()
console.log(arr);