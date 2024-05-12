function findPermutations(str) {
    const permutations = [];

    // Recursive function to generate permutations
    function generatePermutations(current, remaining) {
        if (remaining.length === 0) {
            permutations.push(current);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            let nextCurrent = current + remaining[i];
            let nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
            generatePermutations(nextCurrent, nextRemaining);
        }
    }

    generatePermutations('', str);
    return permutations;
}

// Example usage:
let text = "abc";
let result = findPermutations(text);
console.log("Permutations of", text, ":", result);
