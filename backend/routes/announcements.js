const express = require('express');
const router = express.Router();
const Announcement = require('../models/Announcement');

// Get all announcements
router.get('/', async (req, res) => {
    try {
        const announcements = await Announcement.find().sort({ priority: -1, date: -1 });
        res.json(announcements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add an announcement
router.post('/', async (req, res) => {
    const announcement = new Announcement({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date || new Date(),
        category: req.body.category,
        image: req.body.image,
        link: req.body.link,
        priority: req.body.priority || 0
    });

    try {
        const newAnnouncement = await announcement.save();
        res.status(201).json(newAnnouncement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;