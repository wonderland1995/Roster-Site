const express = require("express");
const { addBlueCollarWorker } = require("../controllers/blueCollarController");

const router = express.Router();

router.post("/", addBlueCollarWorker);

module.exports = router;
