console.log('Tuples')


let myTuple: [number, string]
myTuple = [10, 'typescript'];

type Variants = [string, string, string, string]

let buttonVariants: Variants = ["primary", "secondary", "warning", "danger"]

type HTTPResponse = [number, string]

const goodResponse: HTTPResponse = [200, "ok"]
const createdResponse: HTTPResponse = [201, "created"]
const badResponse: HTTPResponse = [400, "bad request"]
const unauthorizedResponse: HTTPResponse = [401, 'unauthorized']
const notFoundResponse: HTTPResponse = [404, "not found"]
const serverErrorResponse: HTTPResponse = [500, "internal server error"]

const responses: HTTPResponse[] = [
    [200, "ok"],
    [201, "created"],
    [400, "bad request"],
    [401, 'unauthorized'],
    [404, "not found"],
    [500, "internal server error"],
]