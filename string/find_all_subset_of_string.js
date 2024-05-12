function findSubsets(str) {
    const subsets = [];

    // Recursive function to generate subsets
    function generateSubsets(current, remaining) {
        if (remaining.length === 0) {
            subsets.push(current);
            return;
        }

        // Include the first character of remaining in the subset
        generateSubsets(current + remaining[0], remaining.slice(1));

        // Exclude the first character of remaining from the subset
        generateSubsets(current, remaining.slice(1));
    }

    generateSubsets('', str);
    return subsets;
}

// Example usage:
let text = "abc";
let result = findSubsets(text);
console.log("Subsets of", text, ":", result);
