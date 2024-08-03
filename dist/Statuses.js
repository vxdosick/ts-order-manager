// The numbering of the statuses available to us.
export var statuses;
(function (statuses) {
    statuses["UNSPECIFIED"] = "Unspecified";
    statuses["PENDING"] = "Pending";
    statuses["SHIPPED"] = "Shipped";
    statuses["DELIVERED"] = "Delivered";
    statuses["CANCELLED"] = "Cancelled";
})(statuses || (statuses = {}));
