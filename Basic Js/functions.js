// // Regular function (like Java method)
// function add(a, b) {
//   return a + b;
// }

// // Arrow function (lambda) — most common in modern JS
// const add = (a, b) => a + b;        // implicit return
// const square = x => x * x;          // single param, no parens needed
// const greet = () => "Hello!";        // no params

// // Default parameters
// function greet(name = "World") {
//   return `Hello, ${name}!`;
// }

// Rest parameters (like varargs in Java)
function sum(...nums) {
    let x = 5;

  return nums.reduce((a, b) => a + b, x);
}
console.log(sum(1, 2, 3, 4));  // 10
