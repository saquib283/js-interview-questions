function countPunctuation(str) {
    // Define punctuation characters
    const punctuationChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    // Initialize count
    let count = 0;

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is a punctuation character
        if (punctuationChars.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// Example usage:
let text = "Hello, world! How are you?";
let punctuationCount = countPunctuation(text);
console.log("Total number of punctuation characters:", punctuationCount);
