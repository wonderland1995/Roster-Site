const express = require("express");
const Roster = require("../models/Roster");
const router = express.Router();

router.get("/", async (req, res) => {
  const { startDate, endDate } = req.query;
  const query = {
    date: { $gte: new Date(startDate), $lte: new Date(endDate) },
  };
  const roster = await Roster.find(query);
  res.json(roster);
});

module.exports = router;
