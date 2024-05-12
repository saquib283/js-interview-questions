function swapCase(str) {
    let swappedStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'a' && char <= 'z') {
            // Convert lower-case to upper-case
            swappedStr += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            // Convert upper-case to lower-case
            swappedStr += char.toLowerCase();
        } else {
            // Leave non-alphabetic characters unchanged
            swappedStr += char;
        }
    }
    return swappedStr;
}

// Example usage:
let text = "Hello, World!";
let result = swapCase(text);
console.log("Swapped case string:", result);
