"use strict";
// 1. Basic Interface Usage
const person1 = {
    name: "Alice",
    age: 30,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
};
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
const car1 = {
    make: "Toyota",
    model: "Corolla",
};
const car2 = {
    make: "Ford",
    model: "Mustang",
    year: 2022,
};
console.log(car1); // Output: { make: 'Toyota', model: 'Corolla' }
console.log(car2); // Output: { make: 'Ford', model: 'Mustang', year: 2022 }
const person2 = {
    name: "Bob",
    age: 25,
};
// person2.name = "Charlie"; // Error: Cannot assign to 'name' because it is a read-only property
console.log(person2); // Output: { name: 'Bob', age: 25 }
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
const employee = {
    name: "Charlie",
    age: 28,
    job: "Software Developer",
    getDetails() {
        return `${this.name}, ${this.age}, ${this.job}`;
    },
};
console.log(employee.getDetails()); // Output: Charlie, 28, Software Developer
