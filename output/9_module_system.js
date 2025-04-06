import { Person } from "./classes/person.js"; // Importing the Person class from person.ts
// Creating an instance of the class
const person1 = new Person("Paul72", 25);
console.log(person1.introduce()); // Output: Hi, my name is Paul72 and I am 25 years old.
const persons = [];
persons.push(person1); // Adding the instance to an array of Person objects
console.log("Persons Array:", persons); // Output: Persons Array: [ Person { name: 'Paul72', age: 25 } ]
// Inheritance: A subclass inheriting from Person class
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the parent class constructor
        this.jobTitle = jobTitle;
    }
    // Overriding the introduce method
    introduce() {
        return `${super.introduce()} I work as an ${this.jobTitle}.`;
    }
}
// Creating an instance of the subclass
const employee1 = new Employee("Paul72", 25, "Software Engineer");
console.log(employee1.introduce()); // Output: Hi, my name is Paul72 and I am 25 years old. I work as a(n) Software Engineer.
// Access Modifiers: Public, Private, and Protected
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        return `${this.brand} ${this.model}, Year: ${this.year}`;
    }
    // Private method
    getModel() {
        return this.model;
    }
    // Protected method
    getYear() {
        return this.year;
    }
}
const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1.displayInfo()); // Output: Toyota Corolla, Year: 2020
// car1.getModel(); // Error: Property 'getModel' is private and only accessible within class 'Car'.
// console.log(car1.getModel());
// Getter and Setter methods
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get area() {
        return this._width * this._height;
    }
    set dimensions(dimensions) {
        this._width = dimensions.width;
        this._height = dimensions.height;
    }
}
const rectangle = new Rectangle(10, 20);
console.log("Area of Rectangle:", rectangle.area); // Output: 200
rectangle.dimensions = { width: 15, height: 25 };
console.log("New Area of Rectangle:", rectangle.area); // Output: 375
