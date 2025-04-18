const mongoose = require("mongoose");

const ehrSchema = new mongoose.Schema({
  patientId: String,
  doctorId: String,
  description: String,
  ipfsHash: String,
  blockchainTx: String,
  accessControl: [Object],
});

module.exports = mongoose.model("EHR", ehrSchema);