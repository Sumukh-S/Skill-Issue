const express = require('express');
const router = express.Router();
const DeveloperController = require('../controllers/DeveloperController');

// CRUD operations
router.get('/', DeveloperController.getAllDevelopers);
router.post('/', DeveloperController.createDeveloper);
router.get('/:id', DeveloperController.getDeveloperById);
router.put('/:id', DeveloperController.updateDeveloper);
router.delete('/:id', DeveloperController.deleteDeveloper);

module.exports = router;