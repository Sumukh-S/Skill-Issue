const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/TeamController');

router.get('/', TeamController.getAllTeamMembers);
router.post('/', TeamController.createTeamMember);
// Add other routes as needed

module.exports = router;