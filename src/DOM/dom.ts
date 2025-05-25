const btn = document.getElementById('btn')! as HTMLButtonElement;
const input = document.getElementById('todo-input')! as HTMLInputElement;



btn.addEventListener('click', () => {
    alert(input.value)
    input.value = ""
})
