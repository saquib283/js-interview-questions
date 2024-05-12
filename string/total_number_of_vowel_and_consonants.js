function countVowelsAndConsonants(str) {
    // Define arrays of vowels and consonants
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = 'bcdfghjklmnpqrstvwxyz';

    // Initialize counts
    let vowelCount = 0;
    let consonantCount = 0;

    // Convert the input string to lowercase to handle both cases
    str = str.toLowerCase();

    // Iterate through each character in the string
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

// Example usage:
let text = "Hello, world! How are you?";
let counts = countVowelsAndConsonants(text);
console.log("Total number of vowels:", counts.vowels);
console.log("Total number of consonants:", counts.consonants);
