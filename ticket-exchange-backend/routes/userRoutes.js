const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create a new user
router.post("/register", async (req, res) => {
    try {
        console.log("Received data:", req.body); // Debugging line to check request body

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "✅ User registered successfully!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
