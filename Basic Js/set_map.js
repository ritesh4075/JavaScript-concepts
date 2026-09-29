
// Set - A Set stores unique items, No duplicates. Automatically handles uniqueness — no need to manually check.
const letters = ["a","b","b","b","c"];
const unique = new Set(letters);
console.log(unique);

const arra = [1, 2, 2, 3, 3, 4];
const uniqu = [...new Set(arra)];

console.log(uniqu); // [1, 2, 3, 4]
// Checking membership FAST
// arra.includes(4); // O(n)
// set.has(2); // O(1)



const arr = [1,2,3,2,4,3];
const freq = new Map();
for(let i of arr){
    freq.set(i,(freq.get(i)||0)+1);

}
console.log(freq);
