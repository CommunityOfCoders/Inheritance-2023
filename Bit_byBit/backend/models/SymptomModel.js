const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    ID: { type: Number, required: true },
    Name: { type: String, required: true },
  }
);

const SymptomModel = mongoose.model("SymptomModel", schema);
module.exports = SymptomModel;
