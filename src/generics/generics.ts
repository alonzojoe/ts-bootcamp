console.clear()
console.log('Generics')


const numerics: Array<number> = []
const alphabets: Array<string> = []

const inputEl = document.querySelector<HTMLInputElement>('#inputEl')

console.log(inputEl?.value)

const identity = <T,>(item: T): T => {
    return item
}

identity<number>(7)
identity<string>('Hello')
identity<boolean>(true)

const genRandomElement = <T,>(list: T[]): T => {
    const randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex]
}

const arrNumber = [1, 2, 3, 4, 5]

console.log('random number', genRandomElement(arrNumber))

const arrString = ['a', 'b', 'c', 'd', 'e']

console.log('random string', genRandomElement(arrString))

interface Book {
    id: number,
    title: string
}

const books: Book[] = [
    { id: 1, title: 'Toy Story' },
    { id: 2, title: 'Finding Nemo' },
    { id: 3, title: 'Bad Piggies' }
]

console.log('random book', genRandomElement(books))

//generics with multiple types
const mergeObjects = <T extends object, K extends object>(object1: T, object2: K): T & K => {
    return {
        ...object1,
        ...object2
    }

}

const mergePerson = mergeObjects({ id: 1 }, { name: 'John Doe', email: 'johndoe@gmail.com' })

console.log('merged', mergePerson)

interface Length {
    length: number
}

const printDoubleLenght = <T extends Length>(thing: T) => {
    return thing.length * 2
}

printDoubleLenght({ length: 5 })

//Generic Type with default parameter
const makeEmptyArray = <T = number>(): T[] => {
    return []
}

const emptyNumbers = makeEmptyArray()
const emptyStrings = makeEmptyArray<string>()


//Generics w/ Classes
interface SongItem {
    title: string;
    artists: string
}

interface Video {
    title: string;
    creator: string
}

class Playlist<T> {
    public queue: T[] = []
    addSong(song: T) {
        this.queue.push(song)
        console.log(this.queue)
    }
}

const songPlaylist = new Playlist<SongItem>()
songPlaylist.addSong({ title: 'Hotel of California', artists: 'Eagles' })

const videoPlaylist = new Playlist<Video>()
videoPlaylist.addSong({ title: 'Supreme Rules', creator: 'Tyler the creator' })