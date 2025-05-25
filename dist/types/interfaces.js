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
const user2 = {
    name: 'Candice',
    role: 2
};
const kitty = {
    name: 'Kitty',
    breed: "Persian",
    meow() {
        return "Meow meow";
    }
};
const juan = {
    name: 'Juan',
    id: 2423341,
    email: 'delacruzjuan@gmail.com',
    level: 'mid'
};
const empJohn = {
    name: "John Doe",
    age: 23,
    role: "Developer"
};
console.log(employee);
const administrator = {
    username: "adminUser",
    email: "admin@example.com",
    isActive: true,
    permissions: ["read", "write", "delete"]
};
console.log(administrator);
