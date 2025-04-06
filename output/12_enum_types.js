"use strict";
// 12_enum_types.ts
// 1. Basic Enum Usage
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    // Up, // This would be 0 by default
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // Output: 1
console.log(Direction.Down); // Output: 2
console.log(Direction.Left); // Output: 3
console.log(Direction.Right); // Output: 4
// 2. Enum with String Values
var Response;
(function (Response) {
    Response["Yes"] = "YES";
    Response["No"] = "NO";
})(Response || (Response = {}));
console.log(Response.Yes); // Output: YES
console.log(Response.No); // Output: NO
// 3. Heterogeneous Enum (Mixed string and numeric values)
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Inactive"] = 0] = "Inactive";
    Status[Status["Pending"] = 1] = "Pending";
})(Status || (Status = {}));
console.log(Status.Active); // Output: ACTIVE
console.log(Status.Inactive); // Output: 0
console.log(Status.Pending); // Output: 1
// 4. Reverse Mapping for Numeric Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log(Color[1]); // Output: Red
console.log(Color[2]); // Output: Green
console.log(Color[3]); // Output: Blue
// 5. Enum as a Type for Variables
let direction = Direction.Up;
console.log(direction); // Output: 1
direction = Direction.Right;
console.log(direction); // Output: 4
let shirtSize = "M" /* Size.Medium */;
console.log(shirtSize); // Output: M
// 7. Enum Member Computed Values
var Month;
(function (Month) {
    Month[Month["January"] = 1] = "January";
    Month[Month["February"] = 2] = "February";
    Month[Month["March"] = 3] = "March";
    Month[Month["April"] = 10] = "April";
    Month["May"] = "May";
})(Month || (Month = {}));
console.log(Month.January); // Output: 1
console.log(Month.April); // Output: 10
console.log(Month.May); // Output: May
console.log(Month.February); // Output: 2 (computed value based on previous member)
// 8. Enum Iteration (Using Object.keys to iterate)
var Days;
(function (Days) {
    Days["Monday"] = "Mon";
    Days["Tuesday"] = "Tue";
    Days["Wednesday"] = "Wed";
    Days["Thursday"] = "Thu";
    Days["Friday"] = "Fri";
    Days["Saturday"] = "Sat";
    Days["Sunday"] = "Sun";
})(Days || (Days = {}));
for (const day in Days) {
    console.log(`${day}: ${Days[day]}`);
}
// Output:
// Monday: Mon
// Tuesday: Tue
// Wednesday: Wed
// Thursday: Thu
// Friday: Fri
// Saturday: Sat
// Sunday: Sun
