// 1. Basic Interface Usage

interface Person {
  name: string;
  age: number;
  greet(): string;
}

const person1: Person = {
  name: "Alice",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.

// 2. Optional Properties

interface Car {
  make: string;
  model: string;
  year?: number; // year is optional
}

const car1: Car = {
  make: "Toyota",
  model: "Corolla",
};

const car2: Car = {
  make: "Ford",
  model: "Mustang",
  year: 2022,
};

console.log(car1); // Output: { make: 'Toyota', model: 'Corolla' }
console.log(car2); // Output: { make: 'Ford', model: 'Mustang', year: 2022 }

// 3. Readonly Properties

interface ReadOnlyPerson {
  readonly name: string;
  readonly age: number;
}

const person2: ReadOnlyPerson = {
  name: "Bob",
  age: 25,
};

// person2.name = "Charlie"; // Error: Cannot assign to 'name' because it is a read-only property

console.log(person2); // Output: { name: 'Bob', age: 25 }

// 4. Index Signature

interface StringArray {
  [index: number]: string; // index type is number and value type is string
}

const fruits: StringArray = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple

// 5. Interface as a Type for Objects with Methods

interface PersonWithJob {
  name: string;
  age: number;
  job: string;
  getDetails(): string;
}

const employee: PersonWithJob = {
  name: "Charlie",
  age: 28,
  job: "Software Developer",
  getDetails() {
    return `${this.name}, ${this.age}, ${this.job}`;
  },
};

console.log(employee.getDetails()); // Output: Charlie, 28, Software Developer
