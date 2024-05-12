function multiplyMatrices(matrix1, matrix2) {
    let rowsA = matrix1.length;
    let colsA = matrix1[0].length;
    let rowsB = matrix2.length;
    let colsB = matrix2[0].length;

    if (colsA !== rowsB) {
        throw new Error("Number of columns of the first matrix must be equal to the number of rows of the second matrix for multiplication.");
    }

    let result = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
        result[i] = new Array(colsB).fill(0);
    }

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

// Example usage:
let matrix1 = [
    [1, 2],
    [3, 4]
];

let matrix2 = [
    [5, 6],
    [7, 8]
];

try {
    let product = multiplyMatrices(matrix1, matrix2);
    console.log("Product of matrices:");
    for (let row of product) {
        console.log(row);
    }
} catch (error) {
    console.error(error.message);
}
