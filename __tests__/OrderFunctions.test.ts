import { createOrder, setStatus, getDetails } from "../src/OrderFunctions";
import { statuses } from "../src/Statuses";
import { Order } from "../src/Order";

describe("Order Functions", () => {
    it("should create a new order", () => {
        const order = createOrder(1, "Laptop", 1, statuses.UNSPECIFIED);
        expect(order).toBeInstanceOf(Order);
        expect(order.id).toBe(1);
        expect(order.product).toBe("Laptop");
        expect(order.quantity).toBe(1);
        expect(order.status).toBe(statuses.UNSPECIFIED);
    });

    it("should set a new status", () => {
        const order = createOrder(1, "Laptop", 1, statuses.UNSPECIFIED);
        setStatus(order, statuses.DELIVERED);
        expect(order.getStatus()).toBe(statuses.DELIVERED);
    });

    it("should get order details", () => {
        const order = createOrder(1, "Laptop", 1, statuses.UNSPECIFIED);
        const details = order.getAllDetails();
        expect(details).toBe("Order id: 1. Product: Laptop. Quantity: 1. Status: Unspecified.");
    });
});