const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: { type: String, required: true }, // Assuming user is a string, but use ObjectId if you link to the User model
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    shippingAddress: { type: String, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
