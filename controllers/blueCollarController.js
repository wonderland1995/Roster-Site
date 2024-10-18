const User = require("../models/User");

exports.addBlueCollarWorker = async (req, res) => {
  const { firstName, lastName, employeeId, employeeType, scheduleType } =
    req.body;

  try {
    const newWorker = new User({
      username: `${firstName} ${lastName}`,
      employeeId,
      role: "user", // Default role for blue-collar workers
      team: employeeType,
    });

    await newWorker.save();
    res.status(201).json(newWorker);
  } catch (error) {
    console.error("Error adding worker:", error);
    res.status(500).json({ message: "Server error" });
  }
};
