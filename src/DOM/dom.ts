const btn = document.getElementById('btn')! as HTMLButtonElement;
const input = document.getElementById('todo-input')! as HTMLInputElement;
const form = document.querySelector('#form-action')! as HTMLFormElement;
const ul = document.querySelector('.todo-list')!;

interface Todo {
    text: string;
    completed: boolean;
}

const todos: Todo[] = getTodos()
todos.forEach(createTodoElement)



//button event listener `click`
// btn.addEventListener('click', () => {
//     if (input.value === "") return;
//     alert(input.value)
//     input.value = ""
// })
function getTodos(): Todo[] {
    const storedTodos = localStorage.getItem('app-todos')
    if (storedTodos === null) return []
    return JSON.parse(storedTodos)
}

console.log('current todos', todos)

const saveTodos = () => {
    localStorage.setItem('app-todos', JSON.stringify(todos))
}

function createTodoElement(todo: Todo) {
    if (todo.text.trim() === "") return;

    const newList = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked
        saveTodos()
    })

    newList.append(todo.text)
    newList.append(checkbox)
    ul.append(newList)
}

const handleSubmit = (e: SubmitEvent) => { // or Event
    e.preventDefault();

    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodoElement(newTodo)
    todos.push(newTodo)


    input.value = ""
    saveTodos()
    console.log('current todo', todos)
}



form.addEventListener('submit', handleSubmit)

console.log('ul', ul)

let mystery: unknown = "5213"

const numChars = (mystery as string).length