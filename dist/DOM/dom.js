"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todo-input');
const form = document.querySelector('#form-action');
//button event listener
// btn.addEventListener('click', () => {
//     if (input.value === "") return;
//     alert(input.value)
//     input.value = ""
// })
const handleSubmit = (e) => {
    e.preventDefault();
    alert('form subbmited');
};
form.addEventListener('submit', handleSubmit);
let mystery = "5213";
const numChars = mystery.length;
