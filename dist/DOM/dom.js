"use strict";
const btn = document.querySelector('button');
if (btn) {
    btn.style.background = 'red';
    btn.style.color = '#fff ';
    btn.addEventListener('click', () => {
        alert('you clicked the button');
    });
}
