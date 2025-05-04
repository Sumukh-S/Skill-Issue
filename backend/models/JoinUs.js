import mongoose from 'mongoose';

const JoinUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['member', 'developer', 'designer', 'mentor'],
    default: 'member'
  },
  interests: [{
    type: String
  }],
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('JoinUs', JoinUsSchema);