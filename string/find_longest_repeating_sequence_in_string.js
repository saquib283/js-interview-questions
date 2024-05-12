function longestRepeatingSequence(str) {
    const n = str.length;
    const dp = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(0));

    // Build the dp table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (str[i - 1] === str[j - 1] && i !== j) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }

    // Find the longest repeating sequence
    let result = '';
    let i = n;
    let j = n;
    while (i > 0 && j > 0) {
        if (dp[i][j] === dp[i - 1][j - 1] + 1) {
            result = str[i - 1] + result;
            i--;
            j--;
        } else if (dp[i][j] === dp[i - 1][j]) {
            i--;
        } else {
            j--;
        }
    }

    return result;
}

// Example usage:
let text = "aab";
let result = longestRepeatingSequence(text);
console.log("Longest repeating sequence:", result);
