function reverseString(str) {
    // Split the string into an array of characters, reverse it, and join it back into a string
    return str.split('').reverse().join('');
}

// Example usage:
let text = "Hello, world!";
let reversedText = reverseString(text);
console.log("Reversed string:", reversedText);
