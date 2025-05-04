import express from 'express';
import EventController from '../controllers/EventController.js';

const router = express.Router();

// Get all events
router.get('/', EventController.getAllEvents);

// Get a single event by ID
router.get('/:id', EventController.getEventById);

// Create a new event
router.post('/', EventController.createEvent);

// Update an event
router.put('/:id', EventController.updateEvent);

// Delete an event
router.delete('/:id', EventController.deleteEvent);

export default router;