console.log('Union Types')



//union types with single value
let age: number | string = 22
age = "23"

//union types with objects 
type Point = {
    x: number;
    y: number
}

type Coordinates = {
    long: number;
    lat: number;
}

const address: Point | Coordinates | { ref: number; point: number } = {
    long: 23.323232,
    lat: 35.567346,
}


const printSalary = (salary: number | string) => {
    if (typeof salary === 'number') {
        return `Your salary is: ${salary.toFixed(2)}`
    }
    return `Your salary is: ${salary}`
}

const totalPrice = (price: number | string, qty: number) => {
    if (typeof price === 'string') {
        const formattedPrice = price.replace("$", "")
        return parseFloat(formattedPrice) * qty
    }
    return price * qty
}


//Union types with arrays
const stuff: any[] = [1, 2, 3, true, false]

type Administrator = {
    email: string;
    password: string
}

type Employer = {
    company: string;
    address: string;
}

const appUsers: (Administrator | Employer)[] = [
    { email: "admin@example.com", password: "secure123" },
    { company: "TechCorp", address: "123 Street, City" },
];

// let appUsers: Administrator[] | Employer[];
// //Separate Type Arrays:
// appUsers = [
//     { email: "admin1@example.com", password: "adminpass" },
//     { email: "admin2@example.com", password: "adminpass2" },
//     { company: 'X', address: 'Y' }
// ]; // ✅ Only Administrators here

//literal types
let direction: "up" | "down" | "right" = "right"


const getAnswer = (answer: "yes" | "no" | "maybe") => {
    return `The answer is ${answer}`
}

type DayOfWeek =
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";


const currentDay: DayOfWeek = "friday"

//------------------
// 1. Create a variable called highscore that can be a number or a boolean
let highScore: number | boolean = 100
highScore = false

// 2. Create an array of items that can an aaray of numbers or string (cannot be and array of numbers and string mix together)
const items: (number | string)[] = [1, 2, 3, 4,]
const items2: (number | string)[] = ["a", "b", "c", "d",]
// 3. Create a literal type called SkillLevel "Beginner" | "Intermediate" | "Advanced" | "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"
// 4. Create a type alias called Student, name must be string, age as number, sports must be "basketball" or "volleyball" level must be from type SkillLevel
type Student = {
    name: string;
    age: number;
    sports: "basketball" | "volleyball"
    level: SkillLevel
}
// 5. Define a type to represent RGB color (r,g,b) are number, Define a type called HSL color (h,s,l) are number.
// Create an array of colors that can hold a mixture of RGB and HSL
type RGB = {
    r: number;
    g: number;
    b: number;
}

type HSL = {
    h: number;
    s: number;
    l: number
}

const arrColors: (RGB | HSL)[] = [
    { r: 0, g: 0, b: 0 },
    { h: 3, s: 5, l: 4 },
]

// 6. Write a function called greetings that accepts a single string or an array of strings,
//It should print `Hello, <name>` for the single person Or greet each person in the array with the same format.
const greetings = (name: string | string[]) => {
    if (Array.isArray(name)) {
        name.forEach((n) => {
            console.log(`Hello, ${n}`)
        })
        return;
    }
    console.log(`Hello, ${name}`)
}

const namev1 = "Joe"
const names = ["Joe", "Jane", "John"]
greetings(namev1)
greetings(names)
