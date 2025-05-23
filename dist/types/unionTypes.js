"use strict";
console.log('Union Types');
//union types with single value
let age = 22;
age = "23";
const address = {
    long: 23.323232,
    lat: 35.567346,
};
const printSalary = (salary) => {
    if (typeof salary === 'number') {
        return `Your salary is: ${salary.toFixed(2)}`;
    }
    return `Your salary is: ${salary}`;
};
const totalPrice = (price, qty) => {
    if (typeof price === 'string') {
        const formattedPrice = price.replace("$", "");
        return parseFloat(formattedPrice) * qty;
    }
    return price * qty;
};
//Union types with arrays
const stuff = [1, 2, 3, true, false];
const appUsers = [
    { email: "admin@example.com", password: "secure123" },
    { company: "TechCorp", address: "123 Street, City" },
];
// let appUsers: Administrator[] | Employer[];
// //Separate Type Arrays:
// appUsers = [
//     { email: "admin1@example.com", password: "adminpass" },
//     { email: "admin2@example.com", password: "adminpass2" },
//     { company: 'X', address: 'Y' }
// ]; // ✅ Only Administrators here
//literal types
let direction = "right";
const getAnswer = (answer) => {
    return `The answer is ${answer}`;
};
const currentDay = "friday";
//------------------
// 1. Create a variable called highscore that can be a number or a boolean
let highScore = 100;
highScore = false;
// 2. Create an array of items that can an aaray of numbers or string (cannot be and array of numbers and string mix together)
const items = [1, 2, 3, 4,];
const items2 = ["a", "b", "c", "d",];
const arrColors = [
    { r: 0, g: 0, b: 0 },
    { h: 3, s: 5, l: 4 },
];
// 6. Write a function called greetings that accepts a single string or an array of strings,
//It should print `Hello, <name>` for the single person Or greet each person in the array with the same format.
const greetings = (name) => {
    if (Array.isArray(name)) {
        name.forEach((n) => {
            console.log(`Hello, ${n}`);
        });
        return;
    }
    console.log(`Hello, ${name}`);
};
const namev1 = "Joe";
const names = ["Joe", "Jane", "John"];
greetings(namev1);
greetings(names);
