const express = require("express");
const { getRosterByDate, updateRoster } = require("../controllers/rosterController");

const router = express.Router();

router.get("/", getRosterByDate);
router.post("/", updateRoster);

module.exports = router;
