"use strict";
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Paul72")); // Output: Hello, Paul72!
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 10)); // Output: 15
const introduce = (name, age) => {
    if (age !== undefined) {
        return `My name is ${name} and I am ${age} years old.`;
    }
    return `My name is ${name}.`;
};
console.log(introduce("Paul72")); // Output: My name is Paul72.
console.log(introduce("Paul72", 30)); // Output: My name is Paul72 and I am 30 years old.
const greetPerson = (name, greeting = "Hello") => {
    return `${greeting}, ${name}!`;
};
console.log(greetPerson("Paul72")); // Output: Hello, Paul72!
console.log(greetPerson("Paul72", "Good morning")); // Output: Good morning, Paul72!
const sum = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
};
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
const logMessage = (message) => {
    console.log(message);
};
logMessage("This is a log message!"); // Output: This is a log message!
