const express = require("express");
const bcrypt = require("bcryptjs");
const Contact = require("../../database/models/contactModel"); // Import Contact model

const router = express.Router();

// Register User 
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ message: "All fields are required" });

        // Check if user already exists in MongoDB
        const existingUser = await Contact.findOne({ name: username });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user in MongoDB
        const newUser = new Contact({ name: username, email: `${username}@example.com`, phone: "1234567890" });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Get all users (for testing)
router.get("/users", async (req, res) => {
    try {
        const users = await Contact.find({}, "name"); // Only return names
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
