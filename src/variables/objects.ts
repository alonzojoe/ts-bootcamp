

const printName = (name: { firstname: string, lastname: string }) => {
    return `Name: ${name.firstname} ${name.lastname}`
}

const admin = {
    firstname: 'Admin',
    lastname: 'Administrator'
}

printName(admin)


//confusing
const printOut = (person: { first: string, last: string }) => {
    return `Printing out name: ${person.first} ${person.last}`
}

//printOut({ first: 'my', last: 'last', age: 10 })//typescript will throw an error on this because it is direct assignment of object object as params
const singer = { first: 'lady', last: 'gaga', age: 45 }
printOut(singer) // TypeScript does NOT complain here because singer is a separate variable and has proerty of first and last



type Person = {
    name: string;
    age: number;
    address: string;
}


const user: Person = {
    name: 'Mary',
    age: 35,
    address: 'San Fernando City, Pampanga'
}

type Product = {
    id: number;
    name: string;
    price: number;
    remarks?: string;
}


const apple: Product = {
    id: 1,
    name: 'Apple',
    price: 25.55
}

type StatusCode = 200 | 201 | 400 | 401 | 500 //union type

const getCodeError = (status: StatusCode) => {
    switch (status) {
        case 200:
            return `Success`;
        case 201:
            return `Created`;
        case 400:
            return `Client Error`;
        case 401:
            return `Unauthorized`;
        case 500:
            return `Server Error`;
        default:
            return 'Invalid Status Code'
    }
}

type Parent = {
    mom: string;
    dad: string;
}

type Baby = {
    name: string;
    age: number;
    parents: Parent
}

const baby: Baby = {
    name: 'Joe',
    age: 0,
    parents: {
        mom: 'Mommy',
        dad: 'Daddy'
    }
}




//readonly a modifier keyword used to freeze a property of an object

type Song = {
    id: number;
    title: string;
    readonly artist: string;
}

const song: Song = {
    id: 1,
    title: 'Ghost',
    artist: 'Justin Bieber'
}

// song.artist = 'Eminem' //throws error due to readonly property



//Nested
type BoxOffice = {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
}

type Movie = {
    readonly title: string;
    originalTitle?: string;
    director: string;
    releaseYear: number;
    boxOffice: BoxOffice
}

const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};

const cats: Movie = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};

//Write a function called getProfit that accepts a single Movie object
//It should return the movie's worldwide gross - its budget
//example: cats returns -21166652


const getProfit = (selectedMovie: Movie) => {
    const { grossWorldwide, budget } = selectedMovie.boxOffice
    return grossWorldwide - budget
}

getProfit(cats)