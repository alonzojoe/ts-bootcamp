

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