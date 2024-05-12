// Basic Array Methods

const BasicArr = [
  "Biryani",
  "Nahari",
  "Keema",
  "Kaleji",
  "Bheja",
  "Paya",
  "Tangri",
];

// JavaScript Array length :
//       The length property returns the length (size) of an array:
console.log(BasicArr.length);

// JavaScript Array toString() :
//      The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(BasicArr.toString());

// JavaScript Array at() :
console.log(BasicArr.at(1));

// JavaScript Array join() :
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

console.log(BasicArr.join("*"));

// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.
// This is what popping and pushing is:
// Popping items out of an array, or pushing items into an array.

// JavaScript Array pop() :
console.log(BasicArr.pop());

// JavaScript Array push() :
// The push() method adds a new element to an array (at the end):

let itemToPush = ["Pulao", "Kabab", "Haleem"];
console.log(
  // BasicArr.push("Pulao")
  // Or
  BasicArr.push(...itemToPush)
);

// JavaScript Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

BasicArr.shift();
console.log(BasicArr);

// JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

BasicArr.unshift("Biryani");
console.log(BasicArr);

// Merging Arrays (Concatenating)
// In programming languages, concatenation means joining strings end-to-end.

// Concatenation "snow" and "ball" gives "snowball".

// Concatenating arrays means joining arrays end-to-end.

// JavaScript Array concat()
let BasicArr2 = ["Kulfi", "Sheera", "ShirKhurma"];
let resultOfConcat = BasicArr.concat(BasicArr2);
console.log(resultOfConcat);

// Note
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.

// Example (Merging Three Arrays)
let BasicArr3 = ["Kolkata Biyani", "Haleem Biryani", "Pulao Gost"];
let merging3Array = BasicArr.concat(BasicArr2, BasicArr3);
console.log(BasicArr);

// Array copyWithin()
BasicArr.copyWithin(3, 0);
BasicArr.copyWithin(3, 0, 5);
// arg-1 => Target Index
// arg-2 => Start Index
// arg-3 => End Index

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.

// The copyWithin() method does not change the length of the array.

// JavaScript Array flat()
// ES2019 Introduced the Array flat() method.

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

// JavaScript Array splice()
// The splice() method can be used to add new items to an array:
BasicArr.splice(0, 4, ...newArr);
// arg-1=>start index
// arg-2=>delete count
// arg-3=>item to add / can be spread value of array
console.log(BasicArr);

// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

myArr.slice(0, 4);
// arg-1=>start index
// arg-2=>end index

// JavaScript Array toSpliced()
// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);

// JavaScript Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");
console.log(position);

// array.indexOf(item, start)

// item	Required. The item to search for.
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.

// Array.indexOf() returns -1 if the item is not found.

// If the item is present more than once, it returns the position of the first occurrence.

// JavaScript Array lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

{
  const fruits = ["Apple", "Orange", "Apple", "Mango"];
  let position = fruits.lastIndexOf("Apple");
  console.log(position);
}

// array.lastIndexOf(item, start)
// item	Required. The item to search for
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning

// JavaScript Array includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  console.log(fruits.includes("Mango"));
}

// JavaScript Array find()
// The find() method returns the value of the first array element that passes a test function.
// This example finds (returns the value of) the first element that is larger than 18:

{
  const numbers = [4, 9, 16, 25, 29];
  let first = numbers.find(myFunction);
  console.log(first);

  function myFunction(value, index, array) {
    return value > 18;
  }
}
// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

// JavaScript Array findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.

// This example finds the index of the first element that is larger than 18:

{
  const numbers = [4, 9, 16, 25, 29];
  let first = numbers.findIndex(myFunction);
  console.log(first);

  function myFunction(value, index, array) {
    return value > 18;
  }
}

// JavaScript Array findLast() Method
// ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

{
  const temp = [27, 28, 30, 40, 42, 35, 30];
  let high = temp.findLast((x) => x > 40);
  console.log(high);
}



// Sorting an Array
// The sort() method sorts an array alphabetically:

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
}

// Reversing an Array
// The reverse() method reverses the elements in an array:
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
}


// JavaScript Array toSorted() Method
// ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

{
    const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
}


// JavaScript Array toReversed() Method
// ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.

// The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

{
    const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
}



// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:


{
    const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
}

// Use the same trick to sort an array descending:

{
    const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
}


// The Compare Function
// The purpose of the compare function is to define an alternative sort order.

// The compare function should return a negative, zero, or positive value, depending on the arguments:

// function(a, b){return a - b}
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative, a is sorted before b.

// If the result is positive, b is sorted before a.

// If the result is 0, no changes are done with the sort order of the two values.

