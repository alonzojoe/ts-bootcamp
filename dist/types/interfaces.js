"use strict";
console.log('Interfaces');
const formData = {
    name: 'Tom',
    birthdate: new Date('1995-01-01'),
    address: '213 CA USA'
};
const gta = {
    title: 'GTA V',
    ageBracket: "18+",
    skill: "intermediate",
    purchased: () => true
};
const shoes = {
    name: 'Nike',
    price: 100,
    applyDiscount(amount) {
        return this.price - amount;
    }
};
