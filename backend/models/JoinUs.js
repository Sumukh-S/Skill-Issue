const mongoose = require('mongoose');

const JoinUsSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

module.exports = mongoose.model('JoinUs', JoinUsSchema);