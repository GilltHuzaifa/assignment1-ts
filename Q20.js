"use strict";
let mountains = ["Mount Everest", "K2", "Denali", "Kangchenjunga", "Matterhorn"];
let rivers = ["Nile", "Amazon", "Yangtze", "Mississippi", "Danube"];
let countries = ["USA", "China", "India", "Brazil", "Germany"];
let cities = ["New York", "Tokyo", "Paris", "Mumbai", "Sydney"];
let languages = ["English", "Mandarin", "Spanish", "Hindi", "French"];
let combineArray = [...mountains, ...rivers, ...countries, ...cities, ...languages];
console.log(combineArray);
