const express = require('express');
const router = express.Router();
const EventController = require('../controllers/EventController');

router.get('/', EventController.getAllEvents);
router.post('/', EventController.createEvent);
// Add other routes as needed

module.exports = router;