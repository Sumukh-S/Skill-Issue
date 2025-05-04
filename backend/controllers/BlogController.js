import Blog from '../models/Blog.js';

const BlogController = {
  // Get all blogs
  getAllBlogs: async (req, res) => {
    try {
      console.log('Attempting to fetch blogs...');
      const blogs = await Blog.find().sort({ date: -1 });
      console.log(`Found ${blogs.length} blogs:`, blogs);
      res.json(blogs);
    } catch (error) {
      console.error('Error in getAllBlogs:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single blog by ID
  getBlogById: async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.json(blog);
    } catch (error) {
      console.error('Error in getBlogById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new blog
  createBlog: async (req, res) => {
    try {
      console.log('Creating new blog with data:', req.body);
      const blog = new Blog(req.body);
      const savedBlog = await blog.save();
      console.log('Successfully created blog:', savedBlog);
      res.status(201).json(savedBlog);
    } catch (error) {
      console.error('Error in createBlog:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Update a blog
  updateBlog: async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }

      Object.assign(blog, req.body);
      const updatedBlog = await blog.save();
      console.log('Successfully updated blog:', updatedBlog);
      res.json(updatedBlog);
    } catch (error) {
      console.error('Error in updateBlog:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a blog
  deleteBlog: async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }

      await blog.deleteOne();
      console.log('Successfully deleted blog:', req.params.id);
      res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
      console.error('Error in deleteBlog:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

export default BlogController;

// Add other CRUD operations as needed