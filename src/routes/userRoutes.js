const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Create user
router.post("/", async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
        res.status(200).json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

module.exports = router;
