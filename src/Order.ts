import { statuses } from "./Statuses.js";
import { IOrder } from "./IOrder.js";
/* Create an order layout with the following fields: 
id, product, quantity, status. 
As well as methods of setting status and getting all information. 
*/
export class Order implements IOrder {
    constructor(
        public id: number,
        public product: string,
        public quantity: number,
        public status: statuses,
    ) {}
    public setStatus(status: statuses): void {
        this.status = status;
    }
    public getStatus(): statuses {
        return this.status;
    }
    public getAllDetails(): string {
        return `Order id: ${this.id}. Product: ${this.product}. Quantity: ${this.quantity}. Status: ${this.status}.`;
    }
    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }
}