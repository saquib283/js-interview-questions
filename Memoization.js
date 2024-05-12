function sum (n){
    let result = 0;
    let obj={};

    if(obj.num === n){
        return obj.result;
    }
    else{
        for(let i=0;i<=n;i++){
            result+=i;
        }
        obj.num=n;
        obj.result=result;
    }

    return obj.result;
    
}

console.time();
console.log(sum(1000000000000));
console.timeEnd();



console.time();
console.log(sum(1000000000000));
console.timeEnd()
