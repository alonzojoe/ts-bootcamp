"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todo-input');
btn.addEventListener('click', () => {
    alert(input.value);
    input.value = "";
});
