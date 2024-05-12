const arr = [1,2,3,4,5,6,10];

const minValue = Math.min(...arr);
const maxValue = Math.max(...arr);

const missingValue=[];

for(let i = minValue ; i<maxValue;i++){
    if(arr.indexOf(i)<0){
        missingValue.push(i)
    }
}



console.log(missingValue);