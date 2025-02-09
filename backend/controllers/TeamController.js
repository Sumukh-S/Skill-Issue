const Team = require('../models/Team');

exports.getAllTeamMembers = async (req, res) => {
  try {
    const team = await Team.find();
    res.json(team);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTeamMember = async (req, res) => {
  const teamMember = new Team(req.body);
  try {
    const newTeamMember = await teamMember.save();
    res.status(201).json(newTeamMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add other CRUD operations as needed