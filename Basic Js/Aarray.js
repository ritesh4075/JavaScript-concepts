const arr = [1,2,"Amit",true,{x:1},[3,5]];
console.log(arr[4]);

// 1) map() - Transforn the array 
const nums = [1,2,3];
const doubled = nums.map(n => n *2);
console.log(doubled);

// eg-
const users = [
    {name : "Ritesh",age : 21},
    {name : "Aman" , age : 22}
];
const names = users.map(n => n.name);
console.log(names); 

// 2) filter() keep items that pass a condition 
const num = [5,8,16,11,20];
const big = num.filter(n=> n > 10);
console.log("Big numbers are: "+big);

// eg 
const usere = [
    {name : "Ritesh" , active: true},
    {name : "Amit" , active: false}
];
const activeUsers = usere.filter(a=> a.active);
console.log(activeUsers);

// 3) reduce() - Reduce collapses the entire array into ONE value.
const numb = [1,2,3];
const sum = numb.reduce((acc,val) => acc+val,0);
console.log("The sum of array is: "+sum);

// eg 
const letters = ["a","b","c","a","b"];
const freq = letters.reduce((acc,val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;

},{});
console.log(freq);