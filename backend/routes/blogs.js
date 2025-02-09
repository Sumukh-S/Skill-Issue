const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

router.get('/', BlogController.getAllBlogs);
router.post('/', BlogController.createBlog);
// Add other routes as needed

module.exports = router;