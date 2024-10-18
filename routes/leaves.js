const express = require("express");
const Leave = require("../models/Leave");
const Roster = require("../models/Roster");
const router = express.Router();

router.post("/", async (req, res) => {
  const leave = new Leave(req.body);
  await leave.save();

  await Roster.findOneAndUpdate(
    { employeeId: req.body.employeeId },
    { status: "On Leave" }
  );
  res.json(leave);
});

module.exports = router;
