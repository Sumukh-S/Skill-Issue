const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const teamRoutes = require('./routes/team');
const blogRoutes = require('./routes/blogs');
const announcementRoutes = require('./routes/announcements');
const developerRoutes = require('./routes/developers');
const eventRoutes = require('./routes/events');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/team', teamRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/developers', developerRoutes);
app.use('/api/events', eventRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 