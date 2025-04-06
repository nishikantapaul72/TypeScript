"use strict";
// Access Modifiers: Public, Private, and Protected
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    // Public method
    introduce() {
        return `I am a ${this.species} named ${this.name}.`;
    }
    // Private method
    getAge() {
        return this.age;
    }
    // Protected method
    getSpecies() {
        return this.species;
    }
}
const animal1 = new Animal("Lion", 5, "Panthera leo");
console.log(animal1.introduce()); // Output: I am a Panthera leo named Lion.
// Accessing public property directly
console.log(animal1.name); // Output: Lion
// Accessing private property or method will result in an error
// console.log(animal1.age); // Error: Property 'age' is private and only accessible within class 'Animal'.
// console.log(animal1.getAge()); // Error: Property 'getAge' is private and only accessible within class 'Animal'
// Accessing protected property or method outside the class will result in an error
// console.log(animal1.species); // Error: Property 'species' is protected and only accessible within class 'Animal' and its subclasses.
// console.log(animal1.getSpecies()); // Error: Property 'getSpecies' is protected and only accessible within class 'Animal' and its subclasses
// Inheritance with Protected Members
class Dog extends Animal {
    constructor(name, age) {
        super(name, age, "Canis lupus familiaris"); // Calling the parent class constructor
    }
    // Accessing the protected member from the base class
    getDogInfo() {
        return `This is a ${this.getSpecies()} named ${this.name}.`;
    }
}
const dog1 = new Dog("Buddy", 3);
console.log(dog1.getDogInfo()); // Output: This is a Canis lupus familiaris named Buddy.
// Trying to access the protected member directly will result in an error
// console.log(dog1.species); // Error: Property 'species' is protected and only accessible within class 'Animal' and its subclasses
// console.log(dog1.getSpecies()); // Error: Property 'getSpecies' is protected and only accessible within class 'Animal' and its subclasses
