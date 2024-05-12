// A Harshad number (also called Niven number) is a number that is divisible by the sum of its digits. In other words, if you take a number, sum up its digits, and if the original number is divisible by that sum, then it’s a Harshad number. For example, 18 is a Harshad number because the sum of its digits is 1 + 8 = 9, and 18 is divisible by 9.

function isHarshad(number) {
  let sum = 0;
  let num = number;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return number % sum === 0;
}

console.log(isHarshad(15));
