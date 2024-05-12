let arr = [1, 2, 3, 4, 5, 1, 2, 1, 3, 4, 2, 5, 1];

function findFrequency (arr){
    let frequency = {};

    arr.forEach((element)=>{
        if(frequency[element]){
            frequency[element]=frequency[element]+1;
        }
        else{
            frequency[element]=1;
        }
    })

    return frequency;
}


console.log(findFrequency(arr));


