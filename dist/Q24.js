"use strict";
let bike = `7TEA`;
//Test equality
console.log("bike.width==`10`");
console.log(bike == `10`); //false
//Test inequality
console.log("bike.lenght!>`10`");
console.log(bike > `10`); //true
//Numerical tests
console.log("bike.lenght<=`10`");
console.log(bike <= `10`); //false
console.log("bike>=`10`");
console.log(bike >= `10`); //true
console.log("bike===`20`");
console.log(bike === `20`); //false
//tolowercase
let result = bike.toLowerCase();
console.log(result);
//Test || operator
let ferrari = 10;
console.log(ferrari > 5 || ferrari < 10); //true
//Test && operator
console.log(ferrari > 10 && ferrari < 10); //false
let num = [1, 2, 3, 4, 5];
const inArray = 4;
const outArray = 6;
console.log("Is item in an array?");
console.log(num.includes(inArray)); //true
console.log("Is item in an array?");
console.log(num.includes(outArray)); //false
