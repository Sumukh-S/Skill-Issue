import JoinUs from '../models/JoinUs.js';

const JoinUsController = {
  // Get all join requests
  getAllJoinUsRequests: async (req, res) => {
    try {
      const requests = await JoinUs.find().sort({ createdAt: -1 });
      console.log('Fetched join requests:', requests);
      res.json(requests);
    } catch (error) {
      console.error('Error in getAllJoinUsRequests:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single join request by ID
  getJoinUsRequestById: async (req, res) => {
    try {
      const request = await JoinUs.findById(req.params.id);
      if (!request) {
        return res.status(404).json({ message: 'Join request not found' });
      }
      res.json(request);
    } catch (error) {
      console.error('Error in getJoinUsRequestById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new join request
  createJoinUsRequest: async (req, res) => {
    try {
      const request = new JoinUs(req.body);
      const savedRequest = await request.save();
      console.log('Created join request:', savedRequest);
      res.status(201).json(savedRequest);
    } catch (error) {
      console.error('Error in createJoinUsRequest:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Update a join request
  updateJoinUsRequest: async (req, res) => {
    try {
      const request = await JoinUs.findById(req.params.id);
      if (!request) {
        return res.status(404).json({ message: 'Join request not found' });
      }

      Object.assign(request, req.body);
      const updatedRequest = await request.save();
      console.log('Updated join request:', updatedRequest);
      res.json(updatedRequest);
    } catch (error) {
      console.error('Error in updateJoinUsRequest:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a join request
  deleteJoinUsRequest: async (req, res) => {
    try {
      const request = await JoinUs.findById(req.params.id);
      if (!request) {
        return res.status(404).json({ message: 'Join request not found' });
      }

      await request.deleteOne();
      console.log('Deleted join request:', req.params.id);
      res.json({ message: 'Join request deleted successfully' });
    } catch (error) {
      console.error('Error in deleteJoinUsRequest:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

export default JoinUsController;