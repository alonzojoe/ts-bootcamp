

console.log('Classes')

class Player {
    public readonly first: string;
    public readonly last: string;
    public score: number = 0;
    private numOfLives: number = 100;

    constructor(first: string, last: string) {
        this.first = first
        this.last = last
        this.getLives()
    }
    getName() {
        console.log(`Player name is: ${this.first} ${this.last}`)
    }
    taunt() {
        console.log('You are a terrible player!')
    }
    private getLives() {
        console.log(`Number of lives: ${this.numOfLives}`)
    }
}

const player1 = new Player('John', 'Doe')
player1.taunt()
player1.getName()
player1.score = 53


class Tree {
    constructor(
        public name: string, //Parameter properties shorthand
        private type: number, //Parameter properties shorthand
        protected _height: number //Protected is only accessible in child classes unlike public which is accessible anywhere
    ) { }

    get info(): string {
        return `Tree: ${this.name}, Type: ${this.type}`
    }

    get heightInMeter() {
        return `${this.name} height: ${this._height} meters`
    }

    set height(value: number) {
        if (value < 0) {
            throw new Error(`Height cannot be negative`)
        }
        this._height = value
    }
}

class SuperTree extends Tree {
    public hybrid: boolean = true;
    resetHeight() {
        this._height = 0
    }
}

const oakTree = new Tree('Oak', 1, 2.13)
console.log(oakTree.info)
oakTree.height = 1.9
console.log(oakTree.heightInMeter)

//Classes and Interface

interface Color {
    color: string
}

interface Printable {
    print(): void
}

class Bike implements Color {
    constructor(public color: string) { }
}

class Jacket implements Color, Printable {
    constructor(public brand: string, public color: string) { }
    print(): void {
        console.log(`${this.color} ${this.brand} jacket`)
    }
}

const redBike = new Bike('red')
const blueJacket = new Jacket('Nike', 'blue')
blueJacket.print()

//Abstract class
abstract class Emp {
    constructor(public first: string, public last: string) { }
    abstract getPay(): number
    greet() {
        console.log(`Hello, ${this.first} ${this.last}`)
    }
}

class FullTimeEmp extends Emp {
    constructor(first: string, last: string, private salary: number) {
        super(first, last)
    }
    getPay(): number {
        return this.salary
    }
}

class PartTimeEmp extends Emp {
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
        super(first, last)
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked
    }
}

const fullTimeEmp = new FullTimeEmp('Jane', 'Doe', 20000)
const partTimeEmp = new PartTimeEmp('Cara', 'Doe', 20, 200)
console.log('full time', fullTimeEmp.getPay())
console.log('part time', partTimeEmp.getPay())
// new Employee()