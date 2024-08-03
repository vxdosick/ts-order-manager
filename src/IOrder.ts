import { statuses } from "./Statuses.js";
export interface IOrder {
    id: number;
    product: string;
    quantity: number;
    status: statuses;
    setStatus(status: statuses): void;
    getStatus(): statuses;
    getAllDetails(): string;
}