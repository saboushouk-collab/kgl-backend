const express = require("express");
const Procurement = require("../models/Procurement");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const data = await Procurement.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
