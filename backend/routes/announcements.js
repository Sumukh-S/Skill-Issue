import express from 'express';
import AnnouncementController from '../controllers/AnnouncementController.js';

const router = express.Router();

// Get all announcements
router.get('/', AnnouncementController.getAllAnnouncements);

// Get a single announcement by ID
router.get('/:id', AnnouncementController.getAnnouncementById);

// Create a new announcement
router.post('/', AnnouncementController.createAnnouncement);

// Update an announcement
router.put('/:id', AnnouncementController.updateAnnouncement);

// Delete an announcement
router.delete('/:id', AnnouncementController.deleteAnnouncement);

export default router;