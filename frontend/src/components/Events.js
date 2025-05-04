import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import '../styles/components/Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedEvent, setExpandedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await api.get('/events');
      setEvents(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch events');
      setLoading(false);
      console.error('Error fetching events:', err);
    }
  };

  const toggleEvent = (eventId) => {
    if (expandedEvent === eventId) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(eventId);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming': return 'var(--accent-green)';
      case 'Ongoing': return 'var(--accent-blue)';
      case 'Completed': return 'var(--accent-yellow)';
      default: return 'var(--accent-blue)';
    }
  };

  if (loading) return <div className="page-container">Loading events...</div>;
  if (error) return <div className="page-container">{error}</div>;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Events</h1>
        <p>Join us in our upcoming events and activities</p>
      </div>

      <div className="events-container">
        <div className="events-grid">
          {events.map((event) => (
            <div
              key={event._id}
              className={`event-card ${expandedEvent === event._id ? 'expanded' : ''}`}
            >
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <span
                  className="event-status"
                  style={{ backgroundColor: getStatusColor(event.status) }}
                >
                  {event.status}
                </span>
              </div>

              <div className="event-content">
                <div className="event-header">
                  <h3>{event.title}</h3>
                  <span className="event-category">{event.category}</span>
                </div>

                <div className="event-details">
                  <div className="detail-item">
                    <i className="far fa-calendar"></i>
                    <span>{new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="detail-item">
                    <i className="far fa-clock"></i>
                    <span>{event.time}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{event.venue}</span>
                  </div>
                </div>

                <div className={`event-description ${expandedEvent === event._id ? 'expanded' : ''}`}>
                  <p>{event.description}</p>
                </div>

                <div className="event-actions">
                  <button
                    className="read-more-btn"
                    onClick={() => toggleEvent(event._id)}
                  >
                    {expandedEvent === event._id ? 'Show Less' : 'Read More...'}
                  </button>
                  {event.registrationLink && event.status !== 'Completed' && (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="register-btn"
                    >
                      <i className="fas fa-sign-in-alt"></i> Register Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
