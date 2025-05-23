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