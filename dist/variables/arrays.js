"use strict";
console.log('TS Arrays');
const numbers = [1, 2, 3];
const activeUsers = ['Joe', 'Mave', 'Jane'];
const students = [
    { id: 1, name: 'Foor', age: 10 },
    { id: 2, name: 'Bar', age: 11 },
    { id: 3, name: 'Bazz', age: 12 },
];
const newEnrolee = {
    id: 4,
    name: 'Voo',
    age: 13
};
students.push(newEnrolee);
const board = [
    ["X", "0", "X"],
    ["0", "0", "X"],
    ["X", "X", "0"]
];
console.log(board);
//type assertion
let employee = {};
employee.name = "Test";
employee.age = 45;
let code = 123;
code = 24;
//# sourceMappingURL=arrays.js.map