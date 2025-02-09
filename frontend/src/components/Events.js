import React from 'react';

function Events() {
  // Sample event data (replace with your actual data source)
  const events = [
    {
      id: 1,
      title: 'Open Source Workshop',
      date: '2025-03-10',
      time: '14:00',
      description: 'Learn the basics of contributing to open source projects.',
      location: 'Online'
    },
    {
      id: 2,
      title: 'React.js Deep Dive',
      date: '2025-03-15',
      time: '10:00',
      description: 'A deep dive into React.js concepts and best practices.',
      location: 'Conference Room A'
    },
    {
        id: 3,
        title: 'Hackathon Prep Session',
        date: '2025-03-22',
        time: '16:00',
        description: 'Get ready for the upcoming hackathon with tips and tricks.',
        location: 'Innovation Lab'
      }
  ];

  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      <ul className="event-list">
        {events.map(event => (
          <li key={event.id} className="event-item">
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>{event.description}</p>
            <button onClick={() => alert(`Registering for ${event.title}`)}>Register</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Events;
