require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/developers', require('./routes/developers'));
app.use('/api/events', require('./routes/events'));
app.use('/api/announcements', require('./routes/announcements'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/blogs', require('./routes/blogs'));
app.use('/api/team', require('./routes/team'));
app.use('/api/joinus', require('./routes/joinus'));

// Redirect root to home
app.get('/', (req, res) => {
  res.redirect('/home');
});

// Home route
app.get('/home', (req, res) => {
  res.send('Welcome to the Developer Community Home Page');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));