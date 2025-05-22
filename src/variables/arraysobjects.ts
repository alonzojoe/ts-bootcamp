

const printName = (name: { firstname: string, lastname: string }) => {
    return `Name: ${name.firstname} ${name.lastname}`
}

const admin = {
    firstname: 'Admin',
    lastname: 'Administrator'
}

printName(admin)


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

