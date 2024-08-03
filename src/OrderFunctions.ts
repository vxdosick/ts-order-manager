import { statuses } from "./Statuses.js";
import { Order } from "./Order.js";
/*
All possible ordering methods are here, 
and for the sake of convenience they are packed into functions where explanatory text is added.
*/ 
export const createOrder = (id: number, 
    product: string, 
    quantity: number, 
    status: statuses): Order => 
    {
        const newOrder: Order = new Order(id, product, quantity, status);
        console.log(`Created new order: id: ${newOrder.id}, product: ${newOrder.product}, quantity:     {newOrder.quantity}, status: ${newOrder.status}`);
        return newOrder;
    }
export const getStatus = (orderFunction: Order): void => {
    console.log(`Status is ${orderFunction.getStatus()}`);
}
export const setStatus = (orderFunction: Order, newStatus: statuses): void => {
    orderFunction.setStatus(newStatus)
    console.log(`New status is ${newStatus}`);
    
}
export const getDetails = (orderFunction: Order): void => {
    console.log(orderFunction.getAllDetails());
}
export const setQuantity = (orderFunction: Order, quantity: number): void => {
    console.log(`New quantity is ${quantity}`);
}