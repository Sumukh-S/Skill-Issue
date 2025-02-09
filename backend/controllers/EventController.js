const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createEvent = async (req, res) => {
  try {
    console.log('Request body:', req.body);
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

    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.log('Error details:', error);
    res.status(400).json({ message: error.message });
  }
};

// Add other CRUD operations as needed