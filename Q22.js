"use strict";
let fruits = ["Apple", "Banana", "Orange"];
// Intentional error
let outOfIndex = 5;
let fruitatindex = fruits[outOfIndex];
console.log("Fruit at index", outOfIndex, ":", fruitatindex);
// Corrected
const validIndex = 2;
let index = fruits[validIndex];
console.log("Fruit at index", validIndex, ":", index);
