
console.log('TS Arrays')
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


const board: string[][] = [
    ["X", "0", "X"],
    ["0", "0", "X"],
    ["X", "X", "0"]
]


console.log(board)