import Announcement from '../models/Announcement.js';

const AnnouncementController = {
  // Get all announcements
  getAllAnnouncements: async (req, res) => {
    try {
      const announcements = await Announcement.find().sort({ date: -1, priority: -1 });
      res.json(announcements);
    } catch (error) {
      console.error('Error in getAllAnnouncements:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single announcement by ID
  getAnnouncementById: async (req, res) => {
    try {
      const announcement = await Announcement.findById(req.params.id);
      if (!announcement) {
        return res.status(404).json({ message: 'Announcement not found' });
      }
      res.json(announcement);
    } catch (error) {
      console.error('Error in getAnnouncementById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new announcement
  createAnnouncement: async (req, res) => {
    try {
      const announcement = new Announcement(req.body);
      const savedAnnouncement = await announcement.save();
      console.log('Created announcement:', savedAnnouncement);
      res.status(201).json(savedAnnouncement);
    } catch (error) {
      console.error('Error in createAnnouncement:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Update an announcement
  updateAnnouncement: async (req, res) => {
    try {
      const announcement = await Announcement.findById(req.params.id);
      if (!announcement) {
        return res.status(404).json({ message: 'Announcement not found' });
      }

      Object.assign(announcement, req.body);
      const updatedAnnouncement = await announcement.save();
      console.log('Updated announcement:', updatedAnnouncement);
      res.json(updatedAnnouncement);
    } catch (error) {
      console.error('Error in updateAnnouncement:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // Delete an announcement
  deleteAnnouncement: async (req, res) => {
    try {
      const announcement = await Announcement.findById(req.params.id);
      if (!announcement) {
        return res.status(404).json({ message: 'Announcement not found' });
      }

      await announcement.deleteOne();
      console.log('Deleted announcement:', req.params.id);
      res.json({ message: 'Announcement deleted successfully' });
    } catch (error) {
      console.error('Error in deleteAnnouncement:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

export default AnnouncementController;