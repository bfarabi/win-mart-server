const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        username:{type: String, require: true },
       products: [
           {
               productId: {type: String},
               quantity: {type: Number, default: 1}
           },
       ],
       amount: {type: Number, require: true},
       address: {type: Object, require: true},
       status: {type: String, default: "pending"},
    },
    {timestamps: true}
)
module.exports = mongoose.model("Cart", CartSchema);