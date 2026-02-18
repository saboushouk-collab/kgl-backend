const express = require("express");
const Sale = require("../models/Sale");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const sale = await Sale.create(req.body);
        res.status(201).json(sale);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
