const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: Date
});

module.exports = mongoose.model('Blog', BlogSchema);