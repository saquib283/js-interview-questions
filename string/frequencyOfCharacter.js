function findCharacterFrequency(str) {
    const charFrequency = {};

    // Iterate through each character in the string
    for (let char of str) {
        // Increment the count for each character encountered
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    return charFrequency;
}

// Example usage:
let text = "hello world";
let result = findCharacterFrequency(text);
console.log("Character frequency:", result);
