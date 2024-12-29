const express = require("express");
const Product = require("../models/Product"); // Assuming the Product model is set up

const router = express.Router();

// Example route to get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Example route to create a new product
router.post("/", async (req, res) => {
  const { title, description, price, image } = req.body;
  
  try {
    const newProduct = new Product({
      title,
      description,
      price,
      image,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

