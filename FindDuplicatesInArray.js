const arr = [1,2,3,2,9,0,4,1,2];

const duplicates = arr.filter((element,index,array)=>{
   return arr.indexOf(element) != index;
})

console.log(duplicates);