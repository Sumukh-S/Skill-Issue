import Developer from '../models/Developer.js';

// Make sure to export the controller methods
const DeveloperController = {
  // Get all developers
  getAllDevelopers: async (req, res) => {
    try {
      const developers = await Developer.find().sort({ createdAt: -1 });
      console.log('Fetched developers:', developers);
      res.json(developers);
    } catch (error) {
      console.error('Error in getAllDevelopers:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single developer by ID
  getDeveloperById: async (req, res) => {
    try {
      const developer = await Developer.findById(req.params.id);
      if (!developer) {
        return res.status(404).json({ message: 'Developer not found' });
      }
      res.json(developer);
    } catch (error) {
      console.error('Error in getDeveloperById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new developer
  createDeveloper: async (req, res) => {
    try {
      const developer = new Developer(req.body);
      const savedDeveloper = await developer.save();
      console.log('Created developer:', savedDeveloper);
      res.status(201).json(savedDeveloper);
    } catch (error) {
      console.error('Error in createDeveloper:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Update a developer
  updateDeveloper: async (req, res) => {
    try {
      const developer = await Developer.findById(req.params.id);
      if (!developer) {
        return res.status(404).json({ message: 'Developer not found' });
      }

      Object.assign(developer, req.body);
      const updatedDeveloper = await developer.save();
      console.log('Updated developer:', updatedDeveloper);
      res.json(updatedDeveloper);
    } catch (error) {
      console.error('Error in updateDeveloper:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a developer
  deleteDeveloper: async (req, res) => {
    try {
      const developer = await Developer.findById(req.params.id);
      if (!developer) {
        return res.status(404).json({ message: 'Developer not found' });
      }

      await developer.deleteOne();
      console.log('Deleted developer:', req.params.id);
      res.json({ message: 'Developer deleted successfully' });
    } catch (error) {
      console.error('Error in deleteDeveloper:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

export default DeveloperController;