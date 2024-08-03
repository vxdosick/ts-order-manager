import { Order } from "./Order.js";
/*
All possible ordering methods are here,
and for the sake of convenience they are packed into functions where explanatory text is added.
*/
export var createOrder = function (id, product, quantity, status) {
    var newOrder = new Order(id, product, quantity, status);
    console.log("Created new order: id: ".concat(newOrder.id, ", product: ").concat(newOrder.product, ", quantity:     {newOrder.quantity}, status: ").concat(newOrder.status));
    return newOrder;
};
export var getStatus = function (orderFunction) {
    console.log("Status is ".concat(orderFunction.getStatus()));
};
export var setStatus = function (orderFunction, newStatus) {
    orderFunction.setStatus(newStatus);
    console.log("New status is ".concat(newStatus));
};
export var getDetails = function (orderFunction) {
    console.log(orderFunction.getAllDetails());
};
export var setQuantity = function (orderFunction, quantity) {
    console.log("New quantity is ".concat(quantity));
};
