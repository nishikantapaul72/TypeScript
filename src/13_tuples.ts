// 1. Basic Tuple Usage

let tuple1: [string, number] = ["Alice", 30];
console.log(tuple1); // Output: [ 'Alice', 30 ]
console.log(tuple1[0]); // Output: Alice
console.log(tuple1[1]); // Output: 30

// 2. Tuple with Optional Elements

let tuple2: [string, number?, boolean?] = ["Bob", 25];
console.log(tuple2); // Output: [ 'Bob', 25 ]

tuple2 = ["Charlie", 28, true];
console.log(tuple2); // Output: [ 'Charlie', 28, true ]

// 3. Tuple with Mixed Types

let tuple3: [string, number, boolean] = ["John", 35, true];
console.log(tuple3); // Output: [ 'John', 35, true ]

// 4. Destructuring a Tuple

let tuple4: [string, number] = ["David", 45];
const [name, age] = tuple4;
console.log(name); // Output: David
console.log(age); // Output: 45

// 5. Using Tuples in Functions

function getEmployee(): [string, number] {
  return ["Eve", 22];
}

const [employeeName, employeeAge] = getEmployee();
console.log(employeeName); // Output: Eve
console.log(employeeAge); // Output: 22

// 6. Tuple with Union Types

let tuple7: [string, number | boolean] = ["Henry", true];
console.log(tuple7); // Output: [ 'Henry', true ]

tuple7 = ["Henry", 30];
console.log(tuple7); // Output: [ 'Henry', 30 ]

// 7. Tuple with Named Types

type Employee = [id: number, name: string, position: string];

let employee1: Employee = [1, "Frank", "Developer"];
console.log(employee1); // Output: [ 1, 'Frank', 'Developer' ]
