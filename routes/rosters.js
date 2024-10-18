// routes/rosters.js
const express = require("express");
const router = express.Router();
const { getAllRosters } = require("../controllers/rosterController");

// Example route for testing
router.get("/", (req, res) => {
  res.json({ message: "Rosters route is working!" });
});

module.exports = router; // Ensure router is exported correctly
