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


// Type Alias - Can define objects, arrays, unions, and intersections
type Person2 = {
    name: string;
    age: number;
};

// Type Alias with an array of objects
type People = Person[];

// Type Alias with union types
type ID = number | string;

// Type Alias with intersection using '&' to combine properties
type Employee2 = Person2 & { role: string };

const empJohn: Employee2 = {
    name: "John Doe",
    age: 23,
    role: "Developer"
};

console.log(employee);

// Interface - Limited to describing the structure of an object
interface User2 {
    username: string;
    email: string;
}

// Interface with property re-declaration (can add more properties later)
interface User2 {
    isActive: boolean;
}

// Interface extending another interface using `extends`
interface Admin extends User2 {
    permissions: string[];
}

const administrator: Admin = {
    username: "adminUser",
    email: "admin@example.com",
    isActive: true,
    permissions: ["read", "write", "delete"]
};

console.log(administrator);
