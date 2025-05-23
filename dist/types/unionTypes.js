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
