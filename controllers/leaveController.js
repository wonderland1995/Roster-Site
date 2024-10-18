const Leave = require("../models/Leave");

exports.addLeave = async (req, res) => {
  const { employeeName, leaveType, startDate, endDate, submittedBy } = req.body;

  try {
    const newLeave = new Leave({
      employeeName,
      leaveType,
      startDate,
      endDate,
      submittedBy,
    });
    await newLeave.save();
    res.status(201).json(newLeave);
  } catch (error) {
    console.error("Error adding leave:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json(leaves);
  } catch (error) {
    console.error("Error fetching leaves:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteLeave = async (req, res) => {
  const { id } = req.params;

  try {
    await Leave.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting leave:", error);
    res.status(500).json({ message: "Server error" });
  }
};
