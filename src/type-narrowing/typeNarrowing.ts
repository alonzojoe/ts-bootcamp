console.clear()
console.log('Type Narrowing')

//Typeof Guard
const tripleValue = (value: number | string) => {
    if (typeof value === 'number') { //typeof guard
        return value * 3
    }
    return value.repeat(3)
}

console.log(tripleValue(5))
console.log(tripleValue('hi'))


//Truthiness Guards
const printLetters = (word: string | null) => {
    if (!word) {
        console.log('No word provided')
    } else {
        const name = [...word]
        name.forEach((letter) => console.log(letter))
    }
}

printLetters(null)
printLetters('asylum')

const el = document.getElementById('inputEl')

if (el) {
    el.style.backgroundColor = 'red'
}


//Equality Narrowing
type StringNum = string | number
type StringBool = string | boolean
const demoFunction = (x: StringNum, y: StringBool) => {
    if (x === y) {
        return x.toUpperCase()
    }
}

console.log(demoFunction('a', 'a'))

//Narrowing with `in` Operator
interface CinemaMovie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

const getRunTime = (media: CinemaMovie | TVShow) => {
    if ("duration" in media) {
        return media.duration
    }
    return media.numEpisodes * media.episodeDuration
}

//instanceof Narrowing
class Vehicle { }
class Car {
    constructor(public brand: string, public model: string) { }
    getInfo() {
        return `${this.brand} ${this.model}`
    }
}

class Honda extends Car {
    constructor(public brand: string, public model: string) {
        super(brand, model)
    }
}

const car = new Car('Toyota', 'Camry')
const honda = new Honda('Honda', 'Civic')

console.log("car instanceof Car:", car instanceof Car); // true
console.log("honda instanceof Car:", honda instanceof Car); // true
console.log("honda instanceof Car:", honda instanceof Vehicle); // false

const anonFunc = () => {
    return `Anonymous Function`
}


console.log(anonFunc instanceof Function)//true
console.log([1, 2, 3, 4] instanceof Array)//true
console.log([1, 2, 3, 4] instanceof Object)//true
console.log(new Date('2000-01-01') instanceof Date)//true


const printDate = (date: Date | string) => {
    if (date instanceof Date) {
        console.log(date.toUTCString())
    } else {
        console.log(new Date(date).toUTCString())
    }
}
