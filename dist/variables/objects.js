"use strict";
const printName = (name) => {
    return `Name: ${name.firstname} ${name.lastname}`;
};
const admin = {
    firstname: 'Admin',
    lastname: 'Administrator'
};
printName(admin);
//confusing
const printOut = (person) => {
    return `Printing out name: ${person.first} ${person.last}`;
};
//printOut({ first: 'my', last: 'last', age: 10 })//typescript will throw an error on this because it is direct assignment of object object as params
const singer = { first: 'lady', last: 'gaga', age: 45 };
printOut(singer); // TypeScript does NOT complain here because singer is a separate variable and has proerty of first and last
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
const song = {
    id: 1,
    title: 'Ghost',
    artist: 'Justin Bieber'
};
const dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
const cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
//Write a function called getProfit that accepts a single Movie object
//It should return the movie's worldwide gross - its budget
//example: cats returns -21166652
const getProfit = (selectedMovie) => {
    const { grossWorldwide, budget } = selectedMovie.boxOffice;
    return grossWorldwide - budget;
};
getProfit(cats);
//# sourceMappingURL=objects.js.map