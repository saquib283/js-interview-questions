const arr = [2, 1, 4, 6, 10, 8, 10, 9];

const findSecondLargestValueInArray = (arr) => {
//   const sorted = arr.sort((a, b) => b - a);

const sorted = [
    10, 9, 8,
     6,  4, 2, 1
  ]
  // console.log(sorted);
  let current = 0;
  let next = 1;
  while(sorted[current]===sorted[next]){
    current=current+1
    next=next+1
  };

  return sorted[next];
};
console.log("second largest ", findSecondLargestValueInArray(arr));
