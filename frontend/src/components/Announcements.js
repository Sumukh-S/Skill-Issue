import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/Announcements.css';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedAnnouncement, setExpandedAnnouncement] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await axios.get(`${API_URL}/api/announcements`);
      setAnnouncements(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch announcements');
      setLoading(false);
      console.error('Error fetching announcements:', err);
    }
  };

  const toggleAnnouncement = (id) => {
    if (expandedAnnouncement === id) {
      setExpandedAnnouncement(null);
    } else {
      setExpandedAnnouncement(id);
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Important': return 'var(--accent-red)';
      case 'Event': return 'var(--accent-blue)';
      case 'Notice': return 'var(--accent-yellow)';
      default: return 'var(--accent-green)';
    }
  };

  if (loading) return <div className="page-container">Loading announcements...</div>;
  if (error) return <div className="page-container">{error}</div>;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Announcements</h1>
        <p>Stay updated with the latest news and events</p>
      </div>

      <div className="announcements-container">
        {announcements.map((announcement) => (
          <div
            key={announcement._id}
            className={`announcement-card ${announcement.priority > 0 ? 'priority' : ''}`}
          >
            <div className="announcement-header">
              <span
                className="category-tag"
                style={{ backgroundColor: getCategoryColor(announcement.category) }}
              >
                {announcement.category}
              </span>
              <span className="announcement-date">
                {new Date(announcement.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <h3 className="announcement-title">{announcement.title}</h3>

            <div className={`announcement-content ${expandedAnnouncement === announcement._id ? 'expanded' : ''}`}>
              {announcement.image && (
                <div className="announcement-image">
                  <img src={announcement.image} alt={announcement.title} />
                </div>
              )}
              <p>{announcement.content}</p>
            </div>

            <div className="announcement-actions">
              <button
                className="read-more-btn"
                onClick={() => toggleAnnouncement(announcement._id)}
              >
                {expandedAnnouncement === announcement._id ? 'Show Less' : 'Read More...'}
              </button>
              {announcement.link && (
                <a
                  href={announcement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link"
                >
                  <i className="fas fa-external-link-alt"></i> Learn More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
