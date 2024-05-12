function findDuplicateCharacters(str) {
    const charCount = {};
    const duplicates = [];

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find characters with counts greater than 1
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicates.push(char);
        }
    }

    return duplicates;
}

// Example usage:
let text = "Hello, world!";
let result = findDuplicateCharacters(text);
console.log("Duplicate characters:", result);
