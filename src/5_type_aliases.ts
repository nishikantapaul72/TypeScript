// Type Alias for a basic object
type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Paul72",
  age: 25,
};

console.log("User 1:", user1);

// Type Alias for a function type
type Greet = (name: string) => string;

const greet: Greet = (name) => `Hello, ${name}!`;

console.log(greet("Paul72")); // Output: Hello, Paul72!

// Type Alias for Union Types
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "A string";
console.log("Value (string):", value);

value = 100;
console.log("Value (number):", value);

// Type Alias for Array
type NumbersArray = number[];

const numbers: NumbersArray = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);

// Type Alias for a Tuple
type Point = [number, number];

const point: Point = [10, 20];
console.log("Point:", point);

// Type Alias for a more complex function signature
type Calculator = (a: number, b: number) => number;

const add: Calculator = (a, b) => a + b;
const subtract: Calculator = (a, b) => a - b;

console.log("Add:", add(5, 3)); // Output: Add: 8
console.log("Subtract:", subtract(5, 3)); // Output: Subtract: 2

// Type Alias for an object with nested types
type Employee = {
  id: number;
  name: string;
  department: string;
  position: string;
  isActive: boolean;
};

const employee1: Employee = {
  id: 1,
  name: "Paul72",
  department: "Engineering",
  position: "Software Engineer",
  isActive: true,
};

console.log("Employee 1:", employee1);
