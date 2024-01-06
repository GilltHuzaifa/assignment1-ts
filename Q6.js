"use strict";
let personName = "john snow";
// Print in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);
// Print in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);
// Print in titlecase
console.log(`titlecase: ${personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()}`);
