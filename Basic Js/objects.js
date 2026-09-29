// Object literal (like a HashMap<String, Object>)
let person = {
  name: "Alice",
  age: 25,
  city: "Delhi"
};

// Access
person.name        // "Alice"
person["name"]     // "Alice"  ← useful when key is dynamic

// Add / modify / delete
person.email = "a@b.com";
person.age = 26;
delete person.city;

// Check if key exists
"name" in person   // true

// Loop over keys
for (let key in person) {
  console.log(key, person[key]);
}

// Useful Object methods
Object.keys(person)    // ["name", "age", "email"]
Object.values(person)  // ["Alice", 26, "a@b.com"]
Object.entries(person) // [["name","Alice"], ["age",26], ...]

// Destructuring (very common in JS!)
let { name, age } = person;  // like unpacking