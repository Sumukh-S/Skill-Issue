const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort({ date: -1 });
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add an event
router.post('/', async (req, res) => {
    try {
        console.log('Received event data:', req.body);
        const event = new Event({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            time: req.body.time,
            venue: req.body.venue,
            image: req.body.image,
            registrationLink: req.body.registrationLink,
            status: req.body.status || 'Upcoming',
            category: req.body.category || 'Other'
        });

        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;