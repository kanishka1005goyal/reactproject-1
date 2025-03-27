const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve static files from "public/" folder

// Import Routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
