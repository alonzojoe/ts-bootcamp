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