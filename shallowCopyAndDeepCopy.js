// when we assign a object to another object , their reference is copied
//not their value , so when we change something in that object it will be
//reflected in the original object

let obj = {
  name: "Heisenberg",
};
let user = obj;

user.name = "Walter White";
console.log(obj.name);

// to resolve this issue we have to come up with some solutions

// shallow copy

//first method
let newUser = Object.assign({}, obj);
newUser.name = "John snow";

console.log(obj);

//second method

{
  let newUser = { ...obj };
  newUser.name = "John snow";
  console.log(obj);
}


///For Nested Object , this method is different as both above method only 
//checks for 1 level .


//deep copy

{
    let obj = {
        name:"Peter",
        address:{
            city:"Noida",
            state:"Bihar"
        }
    }

    let user  = JSON.parse(JSON.stringify(obj));
    user.address.state="UP";
    console.log(obj);

    //One limitation of this method is that we cannot have function or date 
    //in object.
    //this is only method for deep copy
}