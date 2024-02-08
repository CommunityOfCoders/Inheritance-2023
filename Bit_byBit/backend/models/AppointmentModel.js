const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    date: { type: String, required: true },
    slot: { type: String, required: true },
    PName: { type: String, required: true },
    Drname: { type: String, required: true },
  },
  { timestamps: true }
);

const AppointmentInfo = mongoose.model("AppointmentInfo", schema);
module.exports = AppointmentInfo;
