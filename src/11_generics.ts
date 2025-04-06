// 1. Generic Function

// A simple generic function that accepts a parameter of any type and returns the same type.
function identity<T>(value: T): T {
  //here T is a placeholder for the type of value
  return value;
}

console.log(identity(42)); // Output: 42 (number)
console.log(identity("Hello")); // Output: Hello (string)

// 2. Generic Function with Multiple Types

// A generic function that accepts two different types and returns a combined string.
function combine<T, U>(value1: T, value2: U): string {
  return `${value1} and ${value2}`;
}

console.log(combine(1, "apple")); // Output: 1 and apple
console.log(combine("age", 30)); // Output: age and 30

// 3. Generic Interface

// Defining a generic interface that holds a pair of values of any type.
interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<number, string> = {
  first: 1,
  second: "apple",
};

console.log(pair); // Output: { first: 1, second: 'apple' }
