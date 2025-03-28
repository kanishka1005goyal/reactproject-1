const mongoose = require("mongoose");
const Contact = require("./models/contactModel");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("✅ MongoDB Connected!");

        // Sample Contact Data
        const contacts = [
            { name: "John Doe", email: "john@example.com", phone: "1234567890" },
            { name: "Alice Smith", email: "alice@example.com", phone: "9876543210" },
            { name: "Bob Johnson", email: "bob@example.com", phone: "1122334455" }
        ];

        // Insert Many Contacts
        await Contact.insertMany(contacts);
        console.log("✅ Contacts Added Successfully!");

        // Close Connection
        mongoose.connection.close();
    })
    .catch(err => console.error("❌ MongoDB Connection Failed:", err));
