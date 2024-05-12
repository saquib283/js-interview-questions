function isPalindrome(str) { 

    return str.toUpperCase() === str.toUpperCase().split("").reverse().join(""); 
  
  }
console.log(isPalindrome("Radar"));