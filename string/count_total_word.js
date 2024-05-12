function countWords(str) {
    // Split the string by whitespace characters to get an array of words
    let words = str.split(/\s+/);

    // Filter out empty strings (resulting from multiple consecutive spaces)
    words = words.filter(word => word.length > 0);

    // Return the length of the filtered array, which represents the total number of words
    return words.length;
}

// Example usage:
let text = "Hello, world! How are you?";
let wordCount = countWords(text);
console.log("Total number of words:", wordCount);
