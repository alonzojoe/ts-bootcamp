console.clear()
console.log('Generics')


const numerics: Array<number> = []
const alphabets: Array<string> = []

const inputEl = document.querySelector<HTMLInputElement>('#inputEl')

console.log(inputEl?.value)

