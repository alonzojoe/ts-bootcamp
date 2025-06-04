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

type Person = Omit<Student, "id">

const persons: Person[] = [
    { name: 'Bob', age: 25 },
    { name: 'Marley', age: 26 },
]

const transformedObject = <T, U>(items: T[], transform: (item: T) => U): U[] => {
    return items.map(transform)
}

const transformedPeople = transformedObject(persons, (person) => ({
    fullName: person.name,
    currentAge: person.age
}))

console.log('transform object', transformedPeople)

type Gadget = Pick<Student, "id" | "name"> & {
    price: number
}

const products: Gadget[] = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 700 },
    { id: 3, name: 'Tablet', price: 500 },
    { id: 4, name: 'Monitor', price: 300 }
];

const filterAndTransform = <T, U>(items: T[], filter: (item: T) => boolean, transform: (item: T) => U): U[] => {
    return items.filter(filter).map(transform)
}

const filterandTransformProducts = filterAndTransform(products,
    (item) => item.price > 500,
    (item) => ({
        gadgetId: item.id,
        gadgetName: item.name,
        gadgetPrice: item.price
    })
)

console.log('filter and transform gadgets', filterandTransformProducts)

const nestedFirstLevelArray = [1, [2], [4], [6], [0], 1]


const flatArray = <T>(items: T[]): T[] => {
    return items.reduce<T[]>((group, curr) => group.concat(curr), [])
}

console.log('flat array 1 level: ', flatArray(nestedFirstLevelArray))

const nestedArray = [1, [2, [3, [4, 5]], 6], 7];

const flattenDeep = <T>(items: any[]): T[] => {
    return items.reduce<T[]>((acc, curr) => {
        return Array.isArray(curr) ? acc.concat(flattenDeep(curr)) : acc.concat(curr);
    }, []);
};

console.log('Flattened Deep:', flattenDeep(nestedArray));

const studs = [
    { id: 1, name: 'Mae', age: 23 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 3, name: 'Lal', age: 22 },
];

const convertArrayToObjectByProperty = <T, K extends keyof T>(arr: T[], property: K) => {
    return arr.reduce((group, curr) => {
        const key = curr[property] as string
        group[key] = curr;
        return group
    }, {} as Record<string, T>)
}

console.log('convert array to objects by property', convertArrayToObjectByProperty(studs, 'id'))