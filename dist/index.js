import { createOrder, setStatus, getDetails, getStatus, setQuantity } from "./OrderFunctions.js";
import { statuses } from "./Statuses.js";
/* Create a new order,
set the required status or status table,
and display all information about the order.
*/
try {
    var order = createOrder(1, "Laptop", 1, statuses.UNSPECIFIED);
    setStatus(order, statuses.DELIVERED);
    getStatus(order);
    getDetails(order);
    setQuantity(order, 4);
}
catch (error) {
    console.log("Something went wrong, try again while changing the order parameters. Check if you are using the same statuses as in the status table." + error);
}
