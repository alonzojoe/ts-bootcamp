console.log('Type Narrowing')

//Typeof Guard
const tripleValue = (value: number | string) => {
    if (typeof value === 'number') { //typeof guard
        return value * 3
    }
    return value.repeat(3)
}

console.log(tripleValue(5))
console.log(tripleValue('hi'))


//Truthiness Guards
const printLetters = (word: string | null) => {
    if (!word) {
        console.log('No word provided')
    } else {
        const name = [...word]
        name.forEach((letter) => console.log(letter))
    }
}

printLetters(null)
printLetters('asylum')

const el = document.getElementById('inputEl')

if (el) {
    el.style.backgroundColor = 'red'
}




