"use strict";
console.log('Hello Typecript');
//type annotation
let message = "Hello Typescript!";
message.slice(0, 1);
console.log(message);
let num = 10;
num.toFixed(2);
let isValid = false;
isValid = true;
let empty = null;
let undef = undefined;
//type inference - autommatically assigns types based on default value.
const email = "example@gmail.com";
let myVar = 'hi';
myVar = 10;
myVar = true;
myVar = false;
myVar = { name: 'Doe', age: 5 };
myVar = [1, 2, 3];
myVar = null;
myVar = undefined;
