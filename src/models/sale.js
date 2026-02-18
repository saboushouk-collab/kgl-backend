const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
    type: { type: String, enum: ["cash", "credit"], required: true },
    productName: String,
    tonnage: Number,
    amountPaid: Number,
    buyerName: String,
    agentName: String,
    nin: String,
    location: String,
    contact: String,
    amountDue: Number,
    dueDate: String,
    dispatchDate: String,
    date: String,
    time: String,
});

module.exports = mongoose.model("Sale", SaleSchema);
