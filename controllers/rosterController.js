const Roster = require("../models/Roster");

exports.getRosterByDate = async (req, res) => {
  const { date } = req.query;

  try {
    const roster = await Roster.findOne({ date });
    if (!roster) {
      return res.status(404).json({ message: "Roster not found" });
    }
    res.json(roster);
  } catch (error) {
    console.error("Error fetching roster:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateRoster = async (req, res) => {
  const { date, employees } = req.body;

  try {
    const updatedRoster = await Roster.findOneAndUpdate(
      { date },
      { employees },
      { new: true, upsert: true }
    );
    res.json(updatedRoster);
  } catch (error) {
    console.error("Error updating roster:", error);
    res.status(500).json({ message: "Server error" });
  }
};
