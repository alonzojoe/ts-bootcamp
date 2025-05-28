"use strict";
console.log('Enums');
//Numeric Enums
var Answers;
(function (Answers) {
    Answers[Answers["yes"] = 0] = "yes";
    Answers[Answers["no"] = 1] = "no";
    Answers[Answers["maybe"] = 2] = "maybe"; //3
})(Answers || (Answers = {}));
var Results;
(function (Results) {
    Results[Results["success"] = 2] = "success";
    Results[Results["error"] = 3] = "error";
})(Results || (Results = {}));
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["ok"] = 200] = "ok";
    ResponseStatus[ResponseStatus["created"] = 201] = "created";
    ResponseStatus[ResponseStatus["badRequest"] = 400] = "badRequest";
    ResponseStatus[ResponseStatus["unauthorized"] = 401] = "unauthorized";
    ResponseStatus[ResponseStatus["notFound"] = 404] = "notFound";
    ResponseStatus[ResponseStatus["serverError"] = 500] = "serverError";
})(ResponseStatus || (ResponseStatus = {}));
//String Enums
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "pending";
    OrderStatus["SHIPPED"] = "shipped";
    OrderStatus["DELIVERED"] = "delivered";
    OrderStatus["RETURNED"] = "returned";
})(OrderStatus || (OrderStatus = {}));
//Heterogenous Enums
var HybridResesults;
(function (HybridResesults) {
    HybridResesults[HybridResesults["success"] = 200] = "success";
    HybridResesults["error"] = "error";
})(HybridResesults || (HybridResesults = {}));
//usecase
const orderStatus = OrderStatus.PENDING;
const isDelivered = (status) => {
    return status === OrderStatus.DELIVERED;
};
const myOrder = isDelivered(OrderStatus.DELIVERED);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys[ArrowKeys["UP"] = 0] = "UP";
    ArrowKeys[ArrowKeys["DOWN"] = 1] = "DOWN";
    ArrowKeys[ArrowKeys["LEFT"] = 2] = "LEFT";
    ArrowKeys[ArrowKeys["RIGHT"] = 3] = "RIGHT";
})(ArrowKeys || (ArrowKeys = {}));
const handleArrowKeyPress = (key) => {
    switch (key) {
        case ArrowKeys.UP:
            console.log('Moving Up!');
            break;
        case ArrowKeys.DOWN:
            console.log('Moving Down!');
            break;
        case ArrowKeys.LEFT:
            console.log('Moving Left!');
            break;
        case ArrowKeys.RIGHT:
            console.log('Moving Right!');
            break;
        default:
            console.log('Invalid key press!');
    }
};
handleArrowKeyPress(ArrowKeys.DOWN);
//# sourceMappingURL=enums.js.map