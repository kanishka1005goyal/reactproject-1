const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

// Temporary in-memory storage (this will reset when the server restarts)
let users = [];

// ✅ Register User (No Database)
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ message: "All fields are required" });

        // Check if user already exists in memory
        const existingUser = users.find(user => user.username === username);
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ username, password: hashedPassword });

        res.status(201).json({ message: "User registered successfully (TEMPORARY, not saved in DB)" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
