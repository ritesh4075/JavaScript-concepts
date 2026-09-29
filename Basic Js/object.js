// Basic Objects
const user = {
    name : "Ritesh",
    age : 20,
    istudent : true
};
// Objects inside objects(Real JSON structure) 
const data = {
    user:{
        id:101,
        info:{
            email : "ritesh@gmail.com",
            city : "Noida"
        }
    }
};

// Objects can holds functions(methods)
console.log(user.name);
const car = {
    brand : "Tesla",
    start() {
        console.log("Starting...");
    }
};
car.start();

// Objects are Reference types
const a = {x : 1};
const b = a;
b.x = 99;
console.log(a.x);  // objects are not copied, they are Referenced


// Spread operator for copying (Shallow copy)
const c = {x : 1, y : 2};
const d = {...c};
d.x = 50;
console.log("Output is: "+ c.x);    /* Here O/P is not changing to 50 because c.x is on different places and d.x is on different places.
For primitive values (numbers, strings, booleans), the spread operator copies the VALUE, not the reference.
x and y are primitive values → copied by value.*/
