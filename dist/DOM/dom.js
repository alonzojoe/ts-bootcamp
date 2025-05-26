"use strict";
const todos = getTodos();
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
function getTodos() {
    const storedTodos = localStorage.getItem('app-todos');
    if (storedTodos === null)
        return [];
    return JSON.parse(storedTodos);
}
console.log('current todos', todos);
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
    localStorage.setItem('app-todos', JSON.stringify(todos));
    console.log('current todo', todos);
};
form.addEventListener('submit', handleSubmit);
console.log('ul', ul);
let mystery = "5213";
const numChars = mystery.length;
