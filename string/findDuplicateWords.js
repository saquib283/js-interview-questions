function findDuplicateWords(str) {
    const wordCount = {};
    const duplicates = [];

    // Split the string into words
    const words = str.split(/\s+/);

    // Count occurrences of each word
    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    // Find words with counts greater than 1
    for (let word in wordCount) {
        if (wordCount[word] > 1) {
            duplicates.push(word);
        }
    }

    return duplicates;
}

// Example usage:
let text = "hello world hello world!";
let result = findDuplicateWords(text);
console.log("Duplicate words:", result);
