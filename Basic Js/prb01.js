// const Profile={
//     fullName: "Ritesh singh",
//     isTick:true,
//     isFollow : true,
//     post : 11,
//     followers : 477,
//     following : 222,
//     about : "I am learning javascript",

// };
// // console.log(Profile);
// // console.log(typeof"fullName");
// let a = 10;
// let b = "10";
// let c= 30;
// console.log("a===b",a===b);
// c1 = a>=b; // true
// c2 = a<=c; // true
// c3 = a>=c; // false
// console.log("a>=b",);
// console.log("a<=c",c2);
// console.log("a+c",a+c);
// console.log("c1 && c2",c1&&c3);

// // Conditional statements
// let num = 10;
// if(num%2 === 0){
//     console.log("even number")
// }else{
//     console.log("odd number")

// }
// // alert("hello world");
// let name=prompt("what is your name");
// console.log("your name is", name);
const info = {name:"Ritesh",age:20,course:"CSE"};
for(let key in info ){
    console.log(key ,":",info[key]);
}

const fruit = ["Apple","Mango","Banana"];
for(let fruits of fruit){
    console.log(fruits);
}
let fullName = prompt("Enter your full name ");
let userName = "@"+ fullName+"$"+fullName.length;
console.log(userName);