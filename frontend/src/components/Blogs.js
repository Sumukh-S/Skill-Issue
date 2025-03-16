import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedBlog, setExpandedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await axios.get(`${API_URL}/api/blogs`);
      setBlogs(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch blogs');
      setLoading(false);
      console.error('Error fetching blogs:', err);
    }
  };

  const toggleBlog = (blogId) => {
    if (expandedBlog === blogId) {
      setExpandedBlog(null);
    } else {
      setExpandedBlog(blogId);
    }
  };

  if (loading) return <div className="page-container">Loading blogs...</div>;
  if (error) return <div className="page-container">{error}</div>;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Blog</h1>
        <p>Insights, updates, and stories from our team</p>
      </div>

      <div className="blogs-container">
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className={`blog-card ${expandedBlog === blog._id ? 'expanded' : ''}`}
            >
              {blog.image && (
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
              )}
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="blog-author">{blog.author}</span>
                </div>
                <h3>{blog.title}</h3>
                <div className={`blog-description ${expandedBlog === blog._id ? 'expanded' : ''}`}>
                  <p>{blog.content}</p>
                </div>
                <button
                  className="read-more-btn"
                  onClick={() => toggleBlog(blog._id)}
                >
                  {expandedBlog === blog._id ? 'Show Less' : 'Read More...'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
