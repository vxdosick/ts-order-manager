/* Create an order layout with the following fields:
id, product, quantity, status.
As well as methods of setting status and getting all information.
*/
var Order = /** @class */ (function () {
    function Order(id, product, quantity, status) {
        this.id = id;
        this.product = product;
        this.quantity = quantity;
        this.status = status;
    }
    Order.prototype.setStatus = function (status) {
        this.status = status;
    };
    Order.prototype.getStatus = function () {
        return this.status;
    };
    Order.prototype.getAllDetails = function () {
        return "Order id: ".concat(this.id, ". Product: ").concat(this.product, ". Quantity: ").concat(this.quantity, ". Status: ").concat(this.status, ".");
    };
    Order.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    return Order;
}());
export { Order };
