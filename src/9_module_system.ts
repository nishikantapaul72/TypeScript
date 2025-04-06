import { Person } from "./classes/person.js"; // Importing the Person class from person.ts
// Creating an instance of the class
const person1 = new Person("Paul72", 25);
console.log(person1.introduce()); // Output: Hi, my name is Paul72 and I am 25 years old.

const persons: Person[] = [];
persons.push(person1); // Adding the instance to an array of Person objects
console.log("Persons Array:", persons); // Output: Persons Array: [ Person { name: 'Paul72', age: 25 } ]

// Inheritance: A subclass inheriting from Person class
class Employee extends Person {
  jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  // Overriding the introduce method
  introduce(): string {
    return `${super.introduce()} I work as an ${this.jobTitle}.`;
  }
}

// Creating an instance of the subclass
const employee1 = new Employee("Paul72", 25, "Software Engineer");
console.log(employee1.introduce()); // Output: Hi, my name is Paul72 and I am 25 years old. I work as a(n) Software Engineer.

// Access Modifiers: Public, Private, and Protected

class Car {
  public brand: string;
  private model: string;
  protected year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  public displayInfo(): string {
    return `${this.brand} ${this.model}, Year: ${this.year}`;
  }

  // Private method
  private getModel(): string {
    return this.model;
  }

  // Protected method
  protected getYear(): number {
    return this.year;
  }
}

const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1.displayInfo()); // Output: Toyota Corolla, Year: 2020

// car1.getModel(); // Error: Property 'getModel' is private and only accessible within class 'Car'.
// console.log(car1.getModel());

// Getter and Setter methods
class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get area(): number {
    return this._width * this._height;
  }

  set dimensions(dimensions: { width: number; height: number }) {
    this._width = dimensions.width;
    this._height = dimensions.height;
  }
}

const rectangle = new Rectangle(10, 20);
console.log("Area of Rectangle:", rectangle.area); // Output: 200
rectangle.dimensions = { width: 15, height: 25 };
console.log("New Area of Rectangle:", rectangle.area); // Output: 375
