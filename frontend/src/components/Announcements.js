import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      // For Vercel deployment, use environment variable for API URL
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/announcements`);
      setAnnouncements(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch announcements');
      setLoading(false);
      console.error('Error fetching announcements:', err);
    }
  };

  if (loading) return <div>Loading announcements...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="announcements-container">
      <h2>Announcements</h2>
      <div className="announcements-grid">
        {announcements.map((announcement) => (
          <div key={announcement._id} className="announcement-card">
            <h3>{announcement.title}</h3>
            <p>{announcement.description}</p>
            <span className="date">{new Date(announcement.date).toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
