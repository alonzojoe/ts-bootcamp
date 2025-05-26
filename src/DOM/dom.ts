const btn = document.getElementById('btn')! as HTMLButtonElement;
const input = document.getElementById('todo-input')! as HTMLInputElement;
const form = document.querySelector('#form-action')! as HTMLFormElement;

//button event listener
// btn.addEventListener('click', () => {
//     if (input.value === "") return;
//     alert(input.value)
//     input.value = ""
// })

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    alert('form subbmited')
}

form.addEventListener('submit', handleSubmit)

let mystery: unknown = "5213"

const numChars = (mystery as string).length