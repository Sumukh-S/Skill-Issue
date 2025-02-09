const express = require('express');
const router = express.Router();
const DeveloperController = require('../controllers/DeveloperController');

// Debug log to check what's being imported
console.log('DeveloperController:', DeveloperController);

// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'Test route working' });
});

// Main routes with proper error handling
router.get('/', async (req, res) => {
    try {
        const developers = await DeveloperController.getAllDevelopers(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newDeveloper = await DeveloperController.createDeveloper(req, res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;