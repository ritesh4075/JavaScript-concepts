// if/else
let x = 5;

if (x > 0) {
    console.log("Positive");
} else if (x < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// Ternary Operator
let result = x > 0 ? "positive" : "non-positive";
console.log(result);


// switch statement
let day = 1;

switch(day) {
    case 1:
        console.log("Mon");
        break;

    case 2:
        console.log("Tue");
        break;

    default:
        console.log("Other");
}


// for loop
for (let i = 0; i < 5; i++) {
    console.log("i =", i);
}


// for...of loop (array values)
let arr = [10, 20, 30];

for (let val of arr) {
    console.log(val);
}


// for...in loop (object keys)
let obj = {
    name: "Ritesh",
    age: 21
};

for (let key in obj) {
    console.log(key, ":", obj[key]);
}


// while loop
let count = 0;

while (count < 3) {
    console.log("Count =", count);
    count++;
}