
export const add = (x: number, y: number) => {
    return x + y
}

export const pickRandom = <T,>(arr: T[]): T => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

const narrow = () => {
    console.log('narrow')
}