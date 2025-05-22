

const numbers: number[] = [1, 2, 3]

const activeUsers: Array<string> = ['Joe', 'Mave', 'Jane']


type User = {
    id: number;
    name: string;
    age: number
}


const students: User[] = [
    { id: 1, name: 'Foor', age: 10 },
    { id: 2, name: 'Bar', age: 11 },
    { id: 3, name: 'Bazz', age: 12 },
]

const newEnrolee = {
    id: 4,
    name: 'Voo',
    age: 13
}

students.push(newEnrolee)