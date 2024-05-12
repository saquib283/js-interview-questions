function findMaxAndMinOccurringCharacters(str) {
    const charCount = {};
    
    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find maximum occurring character
    let maxChar = '';
    let maxCount = 0;
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    // Find minimum occurring character
    let minChar = '';
    let minCount = Infinity;
    for (let char in charCount) {
        if (charCount[char] < minCount) {
            minChar = char;
            minCount = charCount[char];
        }
    }

    return { maxChar, maxCount, minChar, minCount };
}

// Example usage:
let text = "Hello, world!";
let result = findMaxAndMinOccurringCharacters(text);
console.log("Maximum occurring character:", result.maxChar, "occurs", result.maxCount, "times");
console.log("Minimum occurring character:", result.minChar, "occurs", result.minCount, "times");
