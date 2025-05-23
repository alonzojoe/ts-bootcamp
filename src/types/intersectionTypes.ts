//Intersection Type
type Circle = {
    radius: number;
}

type Colorful = {
    color: string
}

type ColorfulCircle = Circle & Colorful

const happyFace: ColorfulCircle = {
    radius: 5,
    color: 'red'
}

type Cat = {
    numLives: number;
}

type Dog = {
    breed: string;
}

type Hybrid = Cat & Dog & {
    name: string;
}

type Movable = {
    speed: number;
};

type Shape = {
    sides: number;
};

type MovingShape = Movable & Shape;

const fastTriangle: MovingShape = {
    speed: 10,
    sides: 3
};