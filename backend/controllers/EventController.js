import Event from '../models/Event.js';

const EventController = {
  // Get all events
  getAllEvents: async (req, res) => {
    try {
      const events = await Event.find().sort({ date: 1 }); // Sort by date ascending
      console.log('Fetched events:', events);
      res.json(events);
    } catch (error) {
      console.error('Error in getAllEvents:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single event by ID
  getEventById: async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json(event);
    } catch (error) {
      console.error('Error in getEventById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new event
  createEvent: async (req, res) => {
    try {
      console.log('Creating event with data:', req.body);
      const event = new Event({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        venue: req.body.venue,
        image: req.body.image,
        registrationLink: req.body.registrationLink,
        status: req.body.status,
        category: req.body.category
      });

      const savedEvent = await event.save();
      console.log('Created event:', savedEvent);
      res.status(201).json(savedEvent);
    } catch (error) {
      console.error('Error in createEvent:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Update an event
  updateEvent: async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }

      Object.assign(event, req.body);
      const updatedEvent = await event.save();
      console.log('Updated event:', updatedEvent);
      res.json(updatedEvent);
    } catch (error) {
      console.error('Error in updateEvent:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Delete an event
  deleteEvent: async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }

      await event.deleteOne();
      console.log('Deleted event:', req.params.id);
      res.json({ message: 'Event deleted successfully' });
    } catch (error) {
      console.error('Error in deleteEvent:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

export default EventController;