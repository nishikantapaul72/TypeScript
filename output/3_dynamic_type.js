"use strict";
// 'any' type: can hold any kind of value, disables type checking
let randomValue = "Hello";
console.log("Random (string):", randomValue);
randomValue = 42;
console.log("Random (number):", randomValue);
randomValue = { key: "value" };
console.log("Random (object):", randomValue);
// Drawback of 'any': no type safety
let result = "123";
// No error, but may cause runtime issues
console.log("Length of result:", result.length);
// 'unknown' type: safer alternative to 'any'
let unknownValue;
unknownValue = "A string";
unknownValue = 100;
unknownValue = true;
// Need to check type before using
if (typeof unknownValue === "string") {
    console.log("Unknown is a string of length:", unknownValue.length);
}
else {
    console.log("Unknown is not a string");
}
// Function accepting dynamic input
function handleData(input) {
    console.log("Handled:", input);
}
handleData("Text");
handleData(123);
handleData({ key: "value" });
// Better with 'unknown' for safer operations
function processValue(value) {
    if (typeof value === "number") {
        console.log("Processed number:", value * 2);
    }
    else if (typeof value === "string") {
        console.log("Processed string:", value.toUpperCase());
    }
    else {
        console.log("Unsupported type");
    }
}
processValue(10);
processValue("hello");
processValue(true);
