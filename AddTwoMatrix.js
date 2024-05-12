function addMatrices(matrix1, matrix2) {
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        throw new Error("Matrices must have the same dimensions for addition.");
    }

    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return result;
}

// Example usage:
let matrix1 = [[1, 2, 3], [4, 5, 6]];
let matrix2 = [[7, 8, 9], [10, 11, 12]];

try {
    let result = addMatrices(matrix1, matrix2);
    console.log("Result of matrix addition:");
    for (let row of result) {
        console.log(row);
    }
} catch (error) {
    console.error(error.message);
}
