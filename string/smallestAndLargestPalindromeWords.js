function isPalindrome(word) {
    // Check if the word is a palindrome
    return word === word.split('').reverse().join('');
}

function findSmallestAndBiggestPalindrome(str) {
    let smallestPalindrome = null;
    let biggestPalindrome = null;

    // Iterate through each substring of the string
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.substring(i, j);
            // Check if the substring is a palindrome
            if (isPalindrome(substring)) {
                // Update smallestPalindrome and biggestPalindrome
                if (!smallestPalindrome || substring.length < smallestPalindrome.length) {
                    smallestPalindrome = substring;
                }
                if (!biggestPalindrome || substring.length > biggestPalindrome.length) {
                    biggestPalindrome = substring;
                }
            }
        }
    }

    return { smallestPalindrome, biggestPalindrome };
}

// Example usage:
let text = "abcracecargooddog";
let result = findSmallestAndBiggestPalindrome(text);
console.log("Smallest palindrome word:", result.smallestPalindrome);
console.log("Biggest palindrome word:", result.biggestPalindrome);
