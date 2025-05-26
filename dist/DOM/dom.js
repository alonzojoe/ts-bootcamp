"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todo-input');
const form = document.querySelector('#form-action');
const ul = document.querySelector('.todo-list');
//button event listener `click`
// btn.addEventListener('click', () => {
//     if (input.value === "") return;
//     alert(input.value)
//     input.value = ""
// })
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = input.value;
    if (newTodo.trim() === "")
        return;
    const newList = document.createElement('LI');
    newList.append(newTodo);
    ul.append(newList);
    input.value = "";
};
form.addEventListener('submit', handleSubmit);
console.log('ul', ul);
let mystery = "5213";
const numChars = mystery.length;
