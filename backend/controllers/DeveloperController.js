const Developer = require('../models/Developer');

// Get all developers
exports.getAllDevelopers = async (req, res) => {
  try {
    const developers = await Developer.find();
    res.json(developers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new developer
exports.createDeveloper = async (req, res) => {
  const developer = new Developer({
    name: req.body.name,
    email: req.body.email,
    skills: req.body.skills
  });

  try {
    const newDeveloper = await developer.save();
    res.status(201).json(newDeveloper);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a developer by ID
exports.getDeveloperById = async (req, res) => {
  try {
    const developer = await Developer.findById(req.params.id);
    if (!developer) return res.status(404).json({ message: 'Developer not found' });
    res.json(developer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a developer
exports.updateDeveloper = async (req, res) => {
  try {
    const developer = await Developer.findById(req.params.id);
    if (!developer) return res.status(404).json({ message: 'Developer not found' });

    developer.name = req.body.name || developer.name;
    developer.email = req.body.email || developer.email;
    developer.skills = req.body.skills || developer.skills;

    const updatedDeveloper = await developer.save();
    res.json(updatedDeveloper);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a developer
exports.deleteDeveloper = async (req, res) => {
  try {
    const developer = await Developer.findById(req.params.id);
    if (!developer) return res.status(404).json({ message: 'Developer not found' });

    await developer.remove();
    res.json({ message: 'Developer deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};