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