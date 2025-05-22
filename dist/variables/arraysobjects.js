"use strict";
const printName = (name) => {
    return `Name: ${name.firstname} ${name.lastname}`;
};
const admin = {
    firstname: 'Admin',
    lastname: 'Administrator'
};
printName(admin);
const user = {
    name: 'Mary',
    age: 35,
    address: 'San Fernando City, Pampanga'
};
const apple = {
    id: 1,
    name: 'Apple',
    price: 25.55
};
const getCodeError = (status) => {
    switch (status) {
        case 200:
            return `Success`;
        case 201:
            return `Created`;
        case 400:
            return `Client Error`;
        case 401:
            return `Unauthorized`;
        case 500:
            return `Server Error`;
        default:
            return 'Invalid Status Code';
    }
};
const baby = {
    name: 'Joe',
    age: 0,
    parents: {
        mom: 'Mommy',
        dad: 'Daddy'
    }
};
