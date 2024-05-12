function areMatricesEqual(matrix1, matrix2) {
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        return false; // Matrices have different dimensions
    }

    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[i].length; j++) {
            if (matrix1[i][j] !== matrix2[i][j]) {
                return false; // Found unequal elements
            }
        }
    }

    return true; // Matrices are equal
}

// Example usage:
let matrix1 = [
    [1, 2],
    [3, 4]
];

let matrix2 = [
    [1, 2],
    [3, 4]
];

let matrix3 = [
    [1, 2],
    [3, 5]
];

console.log("Are matrices equal:", areMatricesEqual(matrix1, matrix2)); // true
console.log("Are matrices equal:", areMatricesEqual(matrix1, matrix3)); // false
