import express from 'express';
import JoinUsController from '../controllers/JoinUsController.js';

const router = express.Router();

// Get all join requests
router.get('/', JoinUsController.getAllJoinUsRequests);

// Get a single join request by ID
router.get('/:id', JoinUsController.getJoinUsRequestById);

// Create a new join request
router.post('/', JoinUsController.createJoinUsRequest);

// Update a join request
router.put('/:id', JoinUsController.updateJoinUsRequest);

// Delete a join request
router.delete('/:id', JoinUsController.deleteJoinUsRequest);

export default router;