function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the clean string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
let text = "A man, a plan, a canal, Panama!";
console.log("Is the string a palindrome?", isPalindrome(text));
