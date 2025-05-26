"use strict";
const todos = [];
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
const createTodoElement = (todo) => {
    if (todo.text.trim() === "")
        return;
    const newList = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    newList.append(todo.text);
    newList.append(checkbox);
    ul.append(newList);
};
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodoElement(newTodo);
    todos.push(newTodo);
    input.value = "";
    console.log('current todo', todos);
};
form.addEventListener('submit', handleSubmit);
console.log('ul', ul);
let mystery = "5213";
const numChars = mystery.length;
