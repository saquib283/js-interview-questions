let users ={
    student:{
        name:"",
        age:0
    },

}

console.log(users.student.pass ?? 'unknown');
console.log(users.student.pass ?? 21);

// ?? checks for undefined and null