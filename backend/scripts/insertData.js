const mongoose = require("mongoose");
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import the User model (ensure the correct path)
const User = require("../models/User");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    // Check if a user with the same email already exists
    User.findOne({ email: "john.doe@example.com" })
      .then(existingUser => {
        if (existingUser) {
          console.log("User already exists with this email. Skipping insert.");
          mongoose.disconnect();
        } else {
          // Create a new user document
          const newUser = new User({
            name: "John Doe",
            email: "john.doe@example.com",
            password: "password123",
          });

          // Save the new user to the database
          newUser.save()
            .then(() => {
              console.log("User saved to database");
              mongoose.disconnect(); // Disconnect after saving the data
            })
            .catch((error) => {
              console.error("Error saving user:", error);
              mongoose.disconnect();
            });
        }
      })
      .catch((error) => {
        console.error("Error checking existing user:", error);
        mongoose.disconnect();
      });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
