"use strict";
// Explicit Types
let fullName;
let age;
let isActive;
fullName = "Paul72";
age = 25;
isActive = true;
console.log("Full Name:", fullName);
console.log("Age:", age);
console.log("Active:", isActive);
// Array with explicit types
let hobbies = ["reading", "coding", "cycling"];
console.log("Hobbies:", hobbies);
// Union Types: A variable that can hold more than one type
let userId;
userId = 101;
console.log("User ID (number):", userId);
userId = "A102X";
console.log("User ID (string):", userId);
// Function using union types
function printValue(value) {
    console.log("Value:", value);
}
printValue("Hello");
printValue(123);
const product1 = {
    id: 1,
    name: "Laptop",
    price: 1200,
};
const product2 = {
    id: "A-456",
    name: "Phone",
    price: 800,
};
console.log("Product 1:", product1);
console.log("Product 2:", product2);
