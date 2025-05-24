console.log('Interfaces')

interface UserForm {
    name: string;
    birthdate: Date;
    address: string;
}


const formData: UserForm = {
    name: 'Tom',
    birthdate: new Date('1995-01-01'),
    address: '213 CA USA'
}



//adding methods
type Skills = "beginner" | "intermediate" | "advanced" | "expert"

interface Game {
    title: string;
    ageBracket: string;
    skill?: Skills;
    purchased: () => boolean //method
}

const gta: Game = {
    title: 'GTA V',
    ageBracket: "18+",
    skill: "intermediate",
    purchased: () => true
}

//methods w/params
interface Item {
    name: string;
    price: number;
    applyDiscount(amount: number): number;
}

const shoes: Item = {
    name: 'Nike',
    price: 100,
    applyDiscount(amount: number) {
        return this.price - amount
    }
}

//interfce adding properties
interface Client {
    name: string;
}

interface Client { //valid
    role: 2
}

const user2: Client = {
    name: 'Candice',
    role: 2
}

//extending interfaces

interface Animal {
    name: string;
    breed: string
}

interface Kitten extends Animal {
    meow(): string
}

const kitty: Kitten = {
    name: 'Kitty',
    breed: "Persian",
    meow() {
        return "Meow meow"
    }
}

interface Persona {
    name: string;
}

interface CompanyEmployee {
    readonly id: number;
    email: string;
}

interface Engineer extends Persona, CompanyEmployee {
    level: "junior" | "mid" | "senior "
}

const juan: Engineer = {
    name: 'Juan',
    id: 2423341,
    email: 'delacruzjuan@gmail.com',
    level: 'mid'
}
