const mongoose = require("mongoose");

const rosterSchema = new mongoose.Schema({
  employeeId: mongoose.Schema.Types.ObjectId,
  name: String,
  team: String,
  date: Date,
  status: { type: String, enum: ["Present", "Absent", "On Leave"] },
  shift: String,
});

module.exports = mongoose.model("Roster", rosterSchema);
