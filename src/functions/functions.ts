
//function parameters
const sum = (a: number, b: number) => {
    return a + b
}

//function return type
const greet = (name: string): string => {
    return `Hello, ${name}`
}

//Anonymous Function
const nums = [1, 2, 3]
//Typescript can infer how an unnamed function is going to be called, it can automatically infer its parameters' types.
nums.forEach((num) => num.toFixed(2))


//Void return type.
const users = ['Jane', 'John', 'Ric']
const greetUsers = (items: string[]): void => { //this functions doesn't return anything.
    for (let index = 0; index < items.length; index++) {
        console.log(`Hellon, ${items[index]}`)
    }
}

greetUsers(users)

const printMsg = (msg: string) => { //automaticallt infer void as return type
    console.log(msg)
}


//Never return type
const neverStop = () => {
    while (true) {
        console.log('value is always truthful')
    }
}


//Automatically infer type never
const throwError = (msg: string) => {
    throw new Error(msg)
}