console.log('Enums')

//Numeric Enums
enum Answers {
    yes, //1
    no, //2 
    maybe //3
}

enum Results {
    success = 2, //2
    error, //3
}

enum ResponseStatus {
    ok = 200,
    created = 201,
    badRequest = 400,
    unauthorized = 401,
    notFound = 404,
    serverError = 500
}

//String Enums
enum OrderStatus {
    PENDING = "pending",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    RETURNED = "returned"
}

//Heterogenous Enums
enum HybridResesults {
    success = 200,
    error = "error"
}


//usecase
const orderStatus = OrderStatus.PENDING

const isDelivered = (status: OrderStatus) => {
    return status === OrderStatus.DELIVERED
}

const myOrder = isDelivered(OrderStatus.DELIVERED)

enum ArrowKeys {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

const handleArrowKeyPress = (key: ArrowKeys) => {
    switch (key) {
        case ArrowKeys.UP:
            console.log('Moving Up!')
            break;
        case ArrowKeys.DOWN:
            console.log('Moving Down!')
            break;
        case ArrowKeys.LEFT:
            console.log('Moving Left!')
            break
        case ArrowKeys.RIGHT:
            console.log('Moving Right!')
            break;
        default:
            console.log('Invalid key press!')
    }
}

handleArrowKeyPress(ArrowKeys.DOWN)