// Program to determine whether two strings are the anagram
// Two Strings are called the anagram if they contain the same characters. However, the order or sequence of the characters can be different.Two Strings are called the anagram if they contain the same characters. However, the order or sequence of the characters can be different

function areAnagrams(str1, str2) {
    // Remove whitespace and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if the lengths are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Create character frequency maps for both strings
    const frequencyMap1 = getFrequencyMap(str1);
    const frequencyMap2 = getFrequencyMap(str2);

    // Compare frequency maps
    for (let char in frequencyMap1) {
        if (frequencyMap1[char] !== frequencyMap2[char]) {
            return false;
        }
    }

    return true;
}

function getFrequencyMap(str) {
    const frequencyMap = {};
    for (let char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
    return frequencyMap;
}

// Example usage:
let string1 = "listen";
let string2 = "silent";

console.log("Are the strings anagrams?", areAnagrams(string1, string2)); // true
