import React, { useState, useEffect } from 'react';

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const simulateApiCall = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = [
            {
              id: 1,
              title: 'Upcoming Hackathon',
              date: '2025-03-29',
              message:
                'Register now for our annual Hackathon! Prizes and workshops available. This is an important event!',
            },
            {
              id: 2,
              title: 'Guest Speaker: John Doe',
              date: '2025-03-15',
              message:
                'Join us for a talk by renowned developer John Doe on advanced React techniques. Don\'t miss it!',
            },
            {
              id: 3,
              title: 'Community Meeting',
              date: '2025-02-15',
              message:
                'Join our community to talk about our future plans, and get to know more members.',
            },
          ];
          resolve(data);
        }, 500); // Simulate a 500ms API call delay
      });
    };

    const fetchAnnouncements = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await simulateApiCall();
        setAnnouncements(data);
      } catch (err) {
        setError(err);
        console.error('Error fetching announcements:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return <p>Loading announcements...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="announcements">
      <h2>Announcements</h2>
      <ul className="announcement-list">
        {announcements.map((announcement) => (
          <li key={announcement.id} className="announcement-item">
            <h3>{announcement.title}</h3>
            <p className="announcement-date">{announcement.date}</p>
            <p>{announcement.message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Announcements;
