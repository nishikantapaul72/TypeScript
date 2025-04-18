// String Type
let username: string = "Paul72";
console.log("Username:", username);

// Number Type
let age: number = 25;
let price: number = 19.99;
console.log("Age:", age, "| Price:", price);

// Boolean Type
let isLoggedIn: boolean = true;
console.log("Is Logged In?", isLoggedIn);

// Any Type (Avoid if possible — used when type is unknown)
let anything: any = "Hello";
console.log("Any (before):", anything);
anything = 123;
console.log("Any (after):", anything);

// Type Inference (TypeScript guesses the type)
let country = "Bangladesh"; // inferred as string
// country = 404; // Error: Type 'number' is not assignable to type 'string'

// Array Types
let fruits: string[] = ["apple", "banana", "mango"];
let scores: number[] = [85, 90, 78];
console.log("Fruits:", fruits);
console.log("Scores:", scores);

// Object Types
let user: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};
console.log("User:", user);

// Null and Undefined
let nothing: null = null;
let notAssigned: undefined = undefined;
console.log("Null:", nothing, "| Undefined:", notAssigned);
