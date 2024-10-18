const express = require("express");
const { addLeave, getAllLeaves, deleteLeave } = require("../controllers/leaveController");

const router = express.Router();

router.post("/", addLeave);
router.get("/", getAllLeaves);
router.delete("/:id", deleteLeave);

module.exports = router;
