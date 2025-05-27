import axios from "axios"
console.clear()
console.log('Type Declaration')


const API_ENDPOINT = `https://jsonplaceholdessr.typicode.com`

interface APITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

let todos: APITodo[] = []

const fetchTodo = async (id: number) => {
    try {
        const response = await axios.get<APITodo>(`${API_ENDPOINT}/todos/${id}`)
        const { data } = response
        printTodo(data)
    } catch (error) {
        if (error instanceof Error) {
            console.log(`Error: ${error.message}`)
        } else {
            console.log(error)
        }
    }
}

function printTodo(todo: APITodo) {
    console.log('todo details:', todo)
}

fetchTodo(1)

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const fetchData = async <T,>(endpoint: string): Promise<T> => {
    try {
        const res = await axios.get<T>(endpoint)
        return res.data
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error?.message)
            // throw error instanceof Error ? error : new Error("An error occurred while fetching data");
        } else {
            throw new Error(`An error occured while fetching data`)
        }
    }
}

const posts = fetchData<Post[]>(`${API_ENDPOINT}/posts`).then((data) => { //Replace Promise<T> with Promise<Post[]>
    console.log('posts', data)
}).catch((e) => {
    console.log('error', e)
})


