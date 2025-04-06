// Basic Class Definition
export class Person {
  name: string;
  age: number;

  // Constructor to initialize properties
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method to introduce the person
  introduce(): string {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
