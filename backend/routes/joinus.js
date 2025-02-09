const express = require('express');
const router = express.Router();
const JoinUsController = require('../controllers/JoinUsController');

router.get('/', JoinUsController.getAllJoinUsRequests);
router.post('/', JoinUsController.createJoinUsRequest);
// Add other routes as needed

module.exports = router;