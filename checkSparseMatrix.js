function isSparseMatrix(matrix) {
    let zeroCount = 0;
    let totalElements = matrix.length * matrix[0].length;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroCount++;
            }
        }
    }

    // Determine the threshold for sparsity (e.g., 80%)
    let threshold = 0.8;
    let density = 1 - (zeroCount / totalElements);

    return density < threshold;
}

// Example usage:
let sparseMatrix = [
    [0, 0, 0],
    [0, 5, 0],
    [0, 0, 0]
];

let denseMatrix = [
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3]
];

console.log("Is sparse matrix:", isSparseMatrix(sparseMatrix)); // true
console.log("Is sparse matrix:", isSparseMatrix(denseMatrix)); // false
