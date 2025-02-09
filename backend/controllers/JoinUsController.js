const JoinUs = require('../models/JoinUs');

exports.getAllJoinUsRequests = async (req, res) => {
  try {
    const joinUsRequests = await JoinUs.find();
    res.json(joinUsRequests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createJoinUsRequest = async (req, res) => {
  const joinUsRequest = new JoinUs(req.body);
  try {
    const newJoinUsRequest = await joinUsRequest.save();
    res.status(201).json(newJoinUsRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add other CRUD operations as needed