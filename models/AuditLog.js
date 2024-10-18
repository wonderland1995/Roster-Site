const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  username: String,
  action: String,
  timestamp: { type: Date, default: Date.now },
  details: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model("AuditLog", auditLogSchema);
