"use strict";
//function parameters
const sum = (a, b) => {
    return a + b;
};
//function return type
const greet = (name) => {
    return `Hello, ${name}`;
};
//Anonymous Function
const nums = [1, 2, 3];
//Typescript can infer how an unnamed function is going to be called, it can automatically infer its parameters' types.
nums.forEach((num) => num.toFixed(2));
//Void return type.
const users = ['Jane', 'John', 'Ric'];
const greetUsers = (items) => {
    for (let index = 0; index < items.length; index++) {
        console.log(`Hellon, ${items[index]}`);
    }
};
greetUsers(users);
const printMsg = (msg) => {
    console.log(msg);
};
//Never return type
const neverStop = () => {
    while (true) {
        console.log('value is always truthful');
    }
};
//Automatically infer type never
const throwError = (msg) => {
    throw new Error(msg);
};
//default params
const hello = (name = 'Stranger') => {
    return `Hello ${name}`;
};
//# sourceMappingURL=functions.js.map