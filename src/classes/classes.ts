

console.log('Classes')

class Player {
    public readonly first: string;
    public readonly last: string;
    public score: number = 0;
    private numOfLives: number = 100;

    constructor(first: string, last: string) {
        this.first = first
        this.last = last
    }
    getName() {
        console.log(`Player name is: ${this.first} ${this.last}`)
    }
    taunt() {
        console.log('You are a terrible player!')
    }
}

const player1 = new Player('John', 'Doe')
player1.taunt()
player1.getName()
player1.score = 53
