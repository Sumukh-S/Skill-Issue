const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './config/.env' });

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Log environment variables to verify
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

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