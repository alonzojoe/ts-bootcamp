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
//Delayed Initialization and Implicit Any
const movies = ["Titanic", "Avatar", "Saw II"];
let foundMovie; //typescript infers this type as any.
for (let movie of movies) {
    if (movie === "Titanic") {
        foundMovie = "Titanic";
    }
}
// foundMovie(); throw error since ou cast movie to string
// foundMovie = 1; throw error since ou cast movie to string
// foundMovie.move() throw error since ou cast movie to string
//# sourceMappingURL=variables.js.map