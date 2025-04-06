// Basic Class Definition
export class Person {
    // Constructor to initialize properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to introduce the person
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
