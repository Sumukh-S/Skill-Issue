const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  image: {
    type: String
  },
  socialLinks: {
    linkedin: String,
    github: String,
    twitter: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);