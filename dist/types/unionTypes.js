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
