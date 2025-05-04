import express from 'express';
import BlogController from '../controllers/BlogController.js';

const router = express.Router();

// Get all blogs
router.get('/', BlogController.getAllBlogs);

// Get a single blog by ID
router.get('/:id', BlogController.getBlogById);

// Create a new blog
router.post('/', BlogController.createBlog);

// Update a blog
router.put('/:id', BlogController.updateBlog);

// Delete a blog
router.delete('/:id', BlogController.deleteBlog);

export default router;