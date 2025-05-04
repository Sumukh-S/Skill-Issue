import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  registrationLink: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Upcoming', 'Ongoing', 'Completed'],
    default: 'Upcoming'
  },
  category: {
    type: String,
    enum: ['Workshop', 'Seminar', 'Competition', 'Other'],
    default: 'Other'
  }
}, {
  timestamps: true
});

export default mongoose.model('Event', eventSchema);