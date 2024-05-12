const arr = [4,1,5,6,10];
// arr.sort((a,b)=>a-b);
// console.log(arr);
// console.log("Min ",arr[0]);
// console.log("Max ",arr[arr.length-1]);

// Maximum Value ---
const Maxvalue =arr.reduce((prev,curr)=>{
    if(prev>curr){
        return prev;
    }
    else{
        return curr
    }
})
console.log("Maximum elements is ",Maxvalue);

// Minimum value
const minValue = arr.reduce((prev,curr)=>{
    if(curr>prev){
        return prev
    }
    else{
        return curr
    }
})

console.log("Minumum value is ",minValue);



