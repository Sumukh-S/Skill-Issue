import express from 'express';
import TeamController from '../controllers/TeamController.js';

const router = express.Router();

// Get all team members
router.get('/', TeamController.getAllTeams);

// Get a single team member by ID
router.get('/:id', TeamController.getTeamById);

// Create a new team member
router.post('/', TeamController.createTeam);

// Update a team member
router.put('/:id', TeamController.updateTeam);

// Delete a team member
router.delete('/:id', TeamController.deleteTeam);

export default router;