const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  employeeId: mongoose.Schema.Types.ObjectId,
  leaveType: String,
  startDate: Date,
  endDate: Date,
  status: { type: String, default: "Approved" },
});

module.exports = mongoose.model("Leave", leaveSchema);
