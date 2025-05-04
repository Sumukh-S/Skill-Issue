import express from 'express';
import DeveloperController from '../controllers/DeveloperController.js';

const router = express.Router();

// Debug log to check what's being imported
console.log('DeveloperController:', DeveloperController);

// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'Test route working' });
});

// Get all developers
router.get('/', DeveloperController.getAllDevelopers);

// Get a single developer by ID
router.get('/:id', DeveloperController.getDeveloperById);

// Create a new developer
router.post('/', DeveloperController.createDeveloper);

// Update a developer
router.put('/:id', DeveloperController.updateDeveloper);

// Delete a developer
router.delete('/:id', DeveloperController.deleteDeveloper);

export default router;