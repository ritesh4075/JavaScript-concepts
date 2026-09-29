// let p = new Promise((resolve, reject) => {
//   resolve(10);
// });

// p.then(val => {
//   console.log(val);
//   return val + 5;
// }).then(val => {
//   console.log(val);
//   return val * 2;
// }).then(val => {
//   console.log(val);
// });
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data Loaded"), 5000);
  });
}

getData().then(res => console.log(res));
console.log("Continuing program...");
