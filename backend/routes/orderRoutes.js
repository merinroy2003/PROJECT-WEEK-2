const express = require("express");
const Order = require("../models/Order"); // Assuming the Order model is set up

const router = express.Router();

// Example route to get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Example route to create a new order
router.post("/", async (req, res) => {
  const { user, products, totalPrice } = req.body;

  try {
    const newOrder = new Order({
      user,
      products,
      totalPrice,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
