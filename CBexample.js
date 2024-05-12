// Callbacks

function Add(...arr){
    let result =0;
    for (const item of arr) {
        result+=item;
    }
    return result;
}

function Subtract(sorted,...arr){
    if(sorted){
        arr.sort((a,b)=>b-a)
    };
    
    
    let result =arr.reduce((prev,curr,currIndex,arr)=>{
        return prev-curr;
    },arr[0]);

    return result; 
};

function Divide(sorted,...arr){
    if(sorted){
        arr.sort((a,b)=>a-b)
    };

    let result = arr.reduce((prev,curr,curInd,arrr)=>{
        return prev/curr
    })

    return result
}



function calculate(type,sorted,...arr){
    if(type==="Add"){
        return Add(...arr);
    }
    if(type==="Divide"){
        return Divide(sorted?true:false,...arr);
    }
    if(type==="Multiply"){
        return Multiply(...arr);
    }
    if(type==="Subtract"){
        return Subtract(sorted?true:false,...arr)
    }
    else{
        throw Error("Give name correctly")
    }
}

console.log(calculate("Add",false,1,2,3));
let value = calculate("Subtract",false,0,1);
console.log(value);

console.log(calculate("Divide",false,34,3,10,10));
