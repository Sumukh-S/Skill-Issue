const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// Get all team members
router.get('/', async (req, res) => {
    try {
        const team = await Team.find().sort({ createdAt: -1 });
        res.json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a team member
router.post('/', async (req, res) => {
    console.log('Received request body:', req.body);

    const teamMember = new Team({
        name: req.body.name,
        role: req.body.role,
        bio: req.body.bio,
        image: req.body.image,
        socialLinks: {
            github: req.body.socialLinks?.github,
            linkedin: req.body.socialLinks?.linkedin,
            twitter: req.body.socialLinks?.twitter
        }
    });

    try {
        const newTeamMember = await teamMember.save();
        res.status(201).json(newTeamMember);
    } catch (error) {
        console.error('Error saving team member:', error);
        res.status(400).json({
            message: error.message,
            details: error.errors
        });
    }
});

module.exports = router;