function divideString(str, parts) {
    const length = str.length;
    const partLength = Math.floor(length / parts);
    const result = [];

    let startIndex = 0;
    let endIndex = 0;

    // Divide the string into 'parts' equal parts
    for (let i = 0; i < parts; i++) {
        endIndex = startIndex + partLength;
        if (i < length % parts) {
            endIndex++;
        }
        result.push(str.substring(startIndex, endIndex));
        startIndex = endIndex;
    }

    return result;
}

// Example usage:
let text = "Hello, world!";
let parts = 3;

console.log(`Dividing "${text}" into ${parts} equal parts:`);
console.log(divideString(text, parts));
