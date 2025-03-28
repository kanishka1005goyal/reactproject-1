const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("../database/config/db");
const authRoutes = require("./routes/auth");

require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/auth", authRoutes);

// Default Route to Serve HTML File
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("❌ Server Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
