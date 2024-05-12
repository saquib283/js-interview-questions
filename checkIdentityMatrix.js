function isIdentityMatrix(matrix) {
    if (matrix.length !== matrix[0].length) {
        return false; // Not a square matrix
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j && matrix[i][j] !== 1) {
                return false; // Diagonal element is not 1
            } else if (i !== j && matrix[i][j] !== 0) {
                return false; // Non-diagonal element is not 0
            }
        }
    }
    return true; // Matrix meets conditions for an identity matrix
}

// Example usage:
let identityMatrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

let nonIdentityMatrix = [
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 1]
];

console.log("Is identity matrix:", isIdentityMatrix(identityMatrix)); // true
console.log("Is identity matrix:", isIdentityMatrix(nonIdentityMatrix)); // false
