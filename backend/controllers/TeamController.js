import Team from '../models/Team.js';

const TeamController = {
  // Get all team members
  getAllTeams: async (req, res) => {
    try {
      const teams = await Team.find().sort({ createdAt: -1 });
      console.log('Fetched teams:', teams);
      res.json(teams);
    } catch (error) {
      console.error('Error in getAllTeams:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single team member by ID
  getTeamById: async (req, res) => {
    try {
      const team = await Team.findById(req.params.id);
      if (!team) {
        return res.status(404).json({ message: 'Team member not found' });
      }
      res.json(team);
    } catch (error) {
      console.error('Error in getTeamById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new team member
  createTeam: async (req, res) => {
    try {
      const team = new Team(req.body);
      const savedTeam = await team.save();
      console.log('Created team:', savedTeam);
      res.status(201).json(savedTeam);
    } catch (error) {
      console.error('Error in createTeam:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Update a team member
  updateTeam: async (req, res) => {
    try {
      const team = await Team.findById(req.params.id);
      if (!team) {
        return res.status(404).json({ message: 'Team member not found' });
      }

      Object.assign(team, req.body);
      const updatedTeam = await team.save();
      console.log('Updated team:', updatedTeam);
      res.json(updatedTeam);
    } catch (error) {
      console.error('Error in updateTeam:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a team member
  deleteTeam: async (req, res) => {
    try {
      const team = await Team.findById(req.params.id);
      if (!team) {
        return res.status(404).json({ message: 'Team member not found' });
      }

      await team.deleteOne();
      console.log('Deleted team member:', req.params.id);
      res.json({ message: 'Team member deleted successfully' });
    } catch (error) {
      console.error('Error in deleteTeam:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

export default TeamController;