const fs = require('fs');

function findMostRepeatedWord(filename) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(filename, 'utf8');
        
        // Tokenize the content into words
        const words = data.split(/\s+/);

        const wordCount = {};

        // Count occurrences of each word
        for (let word of words) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }

        // Find the word with the highest frequency
        let mostRepeatedWord = '';
        let maxCount = 0;
        for (let word in wordCount) {
            if (wordCount[word] > maxCount) {
                mostRepeatedWord = word;
                maxCount = wordCount[word];
            }
        }

        return mostRepeatedWord;
    } catch (error) {
        console.error("Error reading file:", error);
        return null;
    }
}

// Example usage:
const filename = 'example.txt';
const mostRepeatedWord = findMostRepeatedWord(filename);
console.log("Most repeated word:", mostRepeatedWord);
