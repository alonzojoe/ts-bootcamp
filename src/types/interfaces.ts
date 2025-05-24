console.log('Interfaces')

interface UserForm {
    name: string;
    birthdate: Date;
    address: string;
}


const formData: UserForm = {
    name: 'Tom',
    birthdate: new Date('1995-01-01'),
    address: '213 CA USA'
}



//adding methods
type Skills = "beginner" | "intermediate" | "advanced" | "expert"

interface Game {
    title: string;
    ageBracket: string;
    skill?: Skills;
    purchased: () => boolean //method
}

const gta: Game = {
    title: 'GTA V',
    ageBracket: "18+",
    skill: "intermediate",
    purchased: () => true
}

