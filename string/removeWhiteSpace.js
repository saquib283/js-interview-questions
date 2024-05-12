function removeWhiteSpaces(str) {
    return str.replace(/\s/g, '');
}

// Example usage:
let text = "  Hello,    world!  ";
let result = removeWhiteSpaces(text);
console.log("String without white spaces:", result);
