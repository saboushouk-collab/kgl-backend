const mongoose = require("mongoose");

const ProcurementSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productType: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    tonnage: { type: Number, required: true },
    cost: { type: Number, required: true },
    dealerName: { type: String, required: true },
    branch: { type: String, enum: ["Maganjo", "Matugga"], required: true },
    contact: { type: String, required: true },
    sellingPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Procurement", ProcurementSchema);
