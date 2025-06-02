import { add, pickRandom } from './utils';

console.log('modules!!!!!!')
const pr = [1, 2, 3, 4, 5]

const randomEl = pickRandom(pr)

const summation = add(1, 3)


console.log('Generics Activities')

interface User {
    name: string;
    role: string
}

const users: User[] = [
    { name: 'John', role: 'Client' },
    { name: 'Jane', role: 'Admin' },
    { name: 'Jude', role: 'Client' },
]

const filterByKeyValue = <T, K extends keyof T>(items: T[], key: K, value: T[K]) => {
    return items.filter((item) => item[key] === value)
}

console.log('Filters array of objects by key and value')
console.log(filterByKeyValue(users, 'role', 'Admin'))

const apple = {
    name: 'Apple',
    category: 'Fruits',
    price: 2.25
}

type Product = keyof typeof apple

interface Student {
    id: number;
    name: string;
    age: number;
}

const students: Student[] = [
    { id: 1, name: 'Mae', age: 23 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 3, name: 'Lal', age: 22 },
    { id: 4, name: 'There', age: 23 },
    { id: 5, name: 'For', age: 21 },
    { id: 6, name: 'Nikki', age: 24 },
];

type GroupedT<Type> = Record<string, Type[]>

const groupByProperty = <T, K extends keyof T>(arr: T[], property: K) => {
    return arr.reduce((group, curr) => {
        const key = curr[property] as string

        if (!group[key]) group[key] = []

        group[key].push(curr)

        return group
    }, {} as GroupedT<T>)
}

console.log('array reduce, group by age')
console.log(groupByProperty(students, 'age'))