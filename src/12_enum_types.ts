// 12_enum_types.ts

// 1. Basic Enum Usage

enum Direction {
  Up = 1, // Starting from 1
  // Up, // This would be 0 by default
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // Output: 1
console.log(Direction.Down); // Output: 2
console.log(Direction.Left); // Output: 3
console.log(Direction.Right); // Output: 4

// 2. Enum with String Values

enum Response {
  Yes = "YES",
  No = "NO",
}

console.log(Response.Yes); // Output: YES
console.log(Response.No); // Output: NO

// 3. Heterogeneous Enum (Mixed string and numeric values)

enum Status {
  Active = "ACTIVE",
  Inactive = 0,
  Pending = 1,
}

console.log(Status.Active); // Output: ACTIVE
console.log(Status.Inactive); // Output: 0
console.log(Status.Pending); // Output: 1

// 4. Reverse Mapping for Numeric Enums

enum Color {
  Red = 1,
  Green,
  Blue,
}

console.log(Color[1]); // Output: Red
console.log(Color[2]); // Output: Green
console.log(Color[3]); // Output: Blue

// 5. Enum as a Type for Variables

let direction: Direction = Direction.Up;
console.log(direction); // Output: 1

direction = Direction.Right;
console.log(direction); // Output: 4

// 6. Const Enums (Enum values are inlined at compile time)

const enum Size {
  Small = "S",
  Medium = "M",
  Large = "L",
}

let shirtSize: Size = Size.Medium;
console.log(shirtSize); // Output: M

// 7. Enum Member Computed Values

enum Month {
  January = 1,
  February,
  March,
  April = 10,
  May = "May",
}

console.log(Month.January); // Output: 1
console.log(Month.April); // Output: 10
console.log(Month.May); // Output: May
console.log(Month.February); // Output: 2 (computed value based on previous member)

// 8. Enum Iteration (Using Object.keys to iterate)

enum Days {
  Monday = "Mon",
  Tuesday = "Tue",
  Wednesday = "Wed",
  Thursday = "Thu",
  Friday = "Fri",
  Saturday = "Sat",
  Sunday = "Sun",
}

for (const day in Days) {
  console.log(`${day}: ${Days[day as keyof typeof Days]}`);
}

// Output:
// Monday: Mon
// Tuesday: Tue
// Wednesday: Wed
// Thursday: Thu
// Friday: Fri
// Saturday: Sat
// Sunday: Sun
