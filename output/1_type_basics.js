"use strict";
// String Type
let username = "Paul72";
console.log("Username:", username);
// Number Type
let age = 25;
let price = 19.99;
console.log("Age:", age, "| Price:", price);
// Boolean Type
let isLoggedIn = true;
console.log("Is Logged In?", isLoggedIn);
// Any Type (Avoid if possible — used when type is unknown)
let anything = "Hello";
console.log("Any (before):", anything);
anything = 123;
console.log("Any (after):", anything);
// Type Inference (TypeScript guesses the type)
let country = "Bangladesh"; // inferred as string
// country = 404; // Error: Type 'number' is not assignable to type 'string'
// Array Types
let fruits = ["apple", "banana", "mango"];
let scores = [85, 90, 78];
console.log("Fruits:", fruits);
console.log("Scores:", scores);
// Object Types
let user = {
    name: "Alice",
    age: 30,
};
console.log("User:", user);
// Null and Undefined
let nothing = null;
let notAssigned = undefined;
console.log("Null:", nothing, "| Undefined:", notAssigned);
