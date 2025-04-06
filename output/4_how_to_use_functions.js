"use strict";
// Basic Function Declaration with return type
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Paul72")); // Output: Hello, Paul72!
// Function with multiple parameters
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
// Function with optional parameters
function introduce(name, age) {
    if (age) {
        return `My name is ${name} and I am ${age} years old.`;
    }
    return `My name is ${name}.`;
}
console.log(introduce("Paul72")); // Output: My name is Paul72.
console.log(introduce("Paul72", 25)); // Output: My name is Paul72 and I am 25 years old.
// Function with default parameters
function greetPerson(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greetPerson("Paul72")); // Output: Hello, Paul72!
console.log(greetPerson("Paul72", "Good morning")); // Output: Good morning, Paul72!
// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// Function with return type 'void' (no return value)
function logMessage(message) {
    console.log(message);
}
logMessage("This is a log message!");
function calculateDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
const p1 = { x: 0, y: 0 };
const p2 = { x: 3, y: 4 };
console.log("Distance:", calculateDistance(p1, p2)); // Output: Distance: 5
