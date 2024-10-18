const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "supervisor", "user"], default: "user" },
  team: String,
}, { collection: 'users' });  // <- Force collection name

module.exports = mongoose.model("User", userSchema);
