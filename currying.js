function curry(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d
            }
        }
    }
}


// es-6 

const makeCurry=a=>b=>c=>d=>a+b+c+d;

console.log(makeCurry(2)(3)(6)(4));

console.log(curry(2)(3)(6)(4));