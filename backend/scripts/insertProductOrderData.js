require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");
const Product = require("../models/Product");
const Order = require("../models/Order");
const connectDB = require("../config/db");

// Connect to MongoDB
connectDB();

// Example data to insert
const productData = [
  {
    title: "Product 1",
    description: "Description for Product 1",
    price: 100,
    image: "product1.jpg",
    category: "Category1",
    quantity: 10,
  },
  {
    title: "Product 2",
    description: "Description for Product 2",
    price: 200,
    image: "product2.jpg",
    category: "Category2",
    quantity: 5,
  },
];

const orderData = [
  {
    user: "User1", // Use a valid user ID from your MongoDB database
    products: [
      { productId: "product_id_1", quantity: 2 },
      { productId: "product_id_2", quantity: 1 },
    ],
    totalAmount: 400,
    shippingAddress: "Address 1",
  },
  {
    user: "User2", // Use another valid user ID
    products: [
      { productId: "product_id_1", quantity: 1 },
    ],
    totalAmount: 100,
    shippingAddress: "Address 2",
  },
];

// Insert Products
const insertProducts = async () => {
  try {
    await Product.insertMany(productData);
    console.log("Sample products inserted");
  } catch (error) {
    console.error("Error inserting products:", error);
  }
};

// Insert Orders
const insertOrders = async () => {
  try {
    await Order.insertMany(orderData);
    console.log("Sample orders inserted");
  } catch (error) {
    console.error("Error inserting orders:", error);
  }
};

// Run the functions to insert data
const insertData = async () => {
  await insertProducts();
  await insertOrders();
  mongoose.disconnect(); // Disconnect from MongoDB after insertion
};

// Call the function
insertData();
