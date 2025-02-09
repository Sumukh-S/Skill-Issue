import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/events`);
      setEvents(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch events');
      setLoading(false);
      console.error('Error fetching events:', err);
    }
  };

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            {event.image && (
              <img src={event.image} alt={event.title} className="event-image" />
            )}
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <div className="event-details">
              <span className="date">
                {new Date(event.date).toLocaleDateString()}
              </span>
              <span className="location">{event.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
