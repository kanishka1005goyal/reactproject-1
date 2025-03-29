const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../database/models/userModel"); // Import updated User model

const router = express.Router();

// Register User 
router.post("/register", async (req, res) => {
    try {
        const { username, password, email, phone } = req.body;
        if (!username || !password || !email || !phone) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists in MongoDB
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user in MongoDB
        const newUser = new User({ username, email, phone, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Get all users (for testing)
router.get("/users", async (req, res) => {
    try {
        const users = await User.find({}, "username email phone"); // Return username, email, and phone
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
