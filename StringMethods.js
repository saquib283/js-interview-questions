const simpleString =
  "This is a string andnit will be used to learn to manipulate string.";

// Length
console.log(simpleString.length);

// Extracting String Characters

// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

console.log(simpleString.charAt(3));

// JavaScript String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

console.log(simpleString.charCodeAt(5));

// JavaScript String at()
console.log(simpleString.at(2));

// Property Access [ ]

console.log(simpleString[0]);

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).
{
  let result = simpleString.slice(0, 4);
  console.log(result);
}

// Examples
// If you omit the second parameter, the method will slice out the rest of the string:

{
  let text = "Apple, Banana, Kiwi";
  let part = text.slice(7);
  console.log(part);
}

// If a parameter is negative, the position is counted from the end of the string:

{
  let text = "Apple, Banana, Kiwi";
  let part = text.slice(-12);
  console.log(part);
}

// This example slices out a portion of a string from position -12 to position -6:

{
  let text = "Apple, Banana, Kiwi";
  console.log(text.length);
  let part = text.slice(-12, -6);
  console.log(part);
}

// JavaScript String substring()
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

{
  let str = "Apple, Banana, Kiwi";
  let part = str.substring(7, 13);
  console.log(part);
}

// JavaScript String substr()
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

{
  let str = "Apple, Banana, Kiwi";
  let part = str.substr(7, 6);
  console.log(part);
}

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():

{
  let text = "Hello World!";
  console.log(text.toUpperCase());
  console.log(text.toLowerCase());
}

// JavaScript String concat()
// concat() joins two or more strings:
// The concat() method can be used instead of the plus operator. These two lines do the same:

{
  let text1 = "Hello";
  let text2 = "World";
  let text3 = text1.concat(" ", text2);
  console.log(text3);
}

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

{
  let text1 = "      Hello World!      ";
  let text2 = text1.trim();
  console.log(text2);
}

// JavaScript String trimStart()
// ECMAScript 2019 added the String method trimStart() to JavaScript.

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

{
  let text1 = "     Hello World!     ";
  let text2 = text1.trimStart();
  console.log(text2);
}

// JavaScript String trimEnd()
// ECMAScript 2019 added the string method trimEnd() to JavaScript.

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

{
  let text1 = "     Hello World!     ";
  let text2 = text1.trimEnd();
  console.log(text2);
}

// JavaScript String Padding
// ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

// JavaScript String padStart()
// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length.

{
  let text = "3512";
  let padded = text.padStart(16, "*");
  console.log(padded);
}

// JavaScript String padEnd()
// The padEnd() method pads a string from the end.

// It pads a string with another string (multiple times) until it reaches a given length.

{
  let text = "5";
  let padded = text.padEnd(4, "+");
  console.log(padded);
}

// JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.

// The repeat() method returns a new string.

// The repeat() method does not change the original string.

{
  let text = "Hello world!";
  let result = text.repeat(2);
  console.log(result);
}

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

{
  let text = "Student is Genius coder";
  let result = text.replace("Student", "Rehan");
  console.log(result);
}
// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

// JavaScript String ReplaceAll()
// In 2021, JavaScript introduced the string method replaceAll():

{
  
    let text = "cat dog is dog ddog cat and cat and dog is fox and fox is cat";

    let newText =text.replace(/cat/g,"kitten")
    console.log(newText);
}


// Converting a String to an Array

// JavaScript String split()
// A string can be converted to an array with the split() method:


// JavaScript String split()

{
    let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);
// Use the limit parameter:
const myArray1 = text.split(" ", 3);
console.log(myArray1);

}


// JavaScript String search()
{
    let text = "Mr. Blue has a blue house";
let position = text.search("Blue");
console.log(position);
}

// JavaScript String valueOf()

{
    let text = "Hello World!";
let result = text.valueOf();
console.log(result);
}