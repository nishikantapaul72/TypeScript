// Basic function signature
type Greet = (name: string) => string;

const greet: Greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet("Paul72")); // Output: Hello, Paul72!

// Function signature with multiple parameters
type AddNumbers = (a: number, b: number) => number;

const add: AddNumbers = (a, b) => {
  return a + b;
};

console.log(add(5, 10)); // Output: 15

// Function signature with optional parameters
type Introduce = (name: string, age?: number) => string;

const introduce: Introduce = (name, age) => {
  if (age !== undefined) {
    return `My name is ${name} and I am ${age} years old.`;
  }
  return `My name is ${name}.`;
};

console.log(introduce("Paul72")); // Output: My name is Paul72.
console.log(introduce("Paul72", 30)); // Output: My name is Paul72 and I am 30 years old.

// Function signature with default parameters
type GreetPerson = (name: string, greeting?: string) => string;

const greetPerson: GreetPerson = (name, greeting = "Hello") => {
  return `${greeting}, ${name}!`;
};

console.log(greetPerson("Paul72")); // Output: Hello, Paul72!
console.log(greetPerson("Paul72", "Good morning")); // Output: Good morning, Paul72!

// Function signature with rest parameters
type Sum = (...numbers: number[]) => number;

const sum: Sum = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Function signature returning void (no return value)
type LogMessage = (message: string) => void;

const logMessage: LogMessage = (message) => {
  console.log(message);
};

logMessage("This is a log message!"); // Output: This is a log message!
