// let fruits = ["mango", "apple","banana"];
// for(var i=0;i<fruits.length;i++){
//     // console.log(fruits[i]);
// }
// // Creating the array
// let arr1 = [10,20,30];  // Literal 
// let arr2 = new Array(15,30,45);  // Using Constructor
// let arr3 = [];
// // console.log(arr1+'\n',arr2);

// console.log("arr1 length "+arr1.length); // Array Length

// // Adding and Removing method
// arr1.push(40);      // Add at end
// arr2.pop();         // Remove last 

// arr1.unshift(5);    // Add at beginning
// arr2.shift()        // Remove first
// // console.log(arr1);
// // console.log(arr2);

// // Access or Modify
// fruits[1] = "Kivi";
// // console.log(fruits);
// // fruits.forEach(fruits => console.log(fruits));

// // Searching 
// let nums = [10, 20, 30, 40];

// nums.indexOf(20);    // 1
// nums.lastIndexOf(30); // 2
// nums.includes(40);   // true

// // Extracting / Joining
// let arr = ["a", "b", "c", "d"];

// let sliced = arr.slice(1, 3);  // ["b","c"] it will only include 1 to 3-1 
// arr.join("-");    // "a-b-c-d"
// console.log(sliced);


// Adding / Removing Anywhere
// let arr_1 = [1,3,5,7];
// console.log(arr_1.splice(1,2));
// console.log(arr_1);
// arr_1.splice(2,1,4);

// let ar1 = [4,5,6,78,];
// ar1.splice(0,0,110,111);
let arr = [1, 2, 3, 4, 5];

// Access & modify
arr[0]              // 1
arr.length          // 5
arr.push(6)         // add to end  → [1,2,3,4,5,6]
arr.pop()           // remove from end
arr.shift()         // remove from front
arr.unshift(0)      // add to front

// 🔥 Functional methods (very important for coding problems!)
arr.map(x => x * 2)         // [2,4,6,8,10]  — transform each element
arr.filter(x => x % 2 == 0) // [2,4]  — keep matching elements
arr.reduce((sum, x) => sum + x, 0) // 15  — accumulate to single value
arr.find(x => x > 3)        // 4  — first match
arr.findIndex(x => x > 3)   // 3  — index of first match
arr.includes(3)              // true
arr.indexOf(3)               // 2
arr.sort((a, b) => a - b)    // sort ascending ← always pass comparator!
arr.reverse()                // reverse in-place
arr.slice(1, 3)              // [2, 3]  — like subList()
arr.splice(1, 2)             // removes 2 elements from index 1
arr.join("-")                // "1-2-3-4-5"

// Spread operator
let copy = [...arr];         // shallow copy
let merged = [...arr, ...arr]; // merge arrays
