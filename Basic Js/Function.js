// Declaring a Function
function greet(){
    return ("hello world");
}
// console.log(greet());


// Function with parameter
function add(a,b){
    return a+b;
}
// console.log(add(5,6));


// Default Parameters
function mul(a,b=5){
    return "Multiplication is--> "+a*b;
}
// console.log(mul(6));


// Function Expressions(function can be also stored in variables)
let mes = function print(){
    return "how are you doing..?"
};
// console.log(mes());

// Arrow Functions (ES6+)
let arrowSum = (a,b) =>{
    console.log(a+b);
};
arrowSum(4,6);

let mult = (a,b) =>{
    return a*b;
}
let cube = n =>{
    // return  "your cube of "+n+" is "+(n*n*n);
    return `your cube of ${n} is ${n*n*n}`;
}
console.log(cube(4));
    

