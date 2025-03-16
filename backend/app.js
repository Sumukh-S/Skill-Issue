const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? ['https://isdc.vercel.app', 'https://isdc-frontend.vercel.app']
        : ['http://localhost:3000'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        };

        await mongoose.connect(process.env.MONGODB_URI, options);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        // Don't exit the process in production
        if (process.env.NODE_ENV !== 'production') {
            process.exit(1);
        }
    }
};

connectDB();

// API Routes
app.use('/api/team', require('./routes/team'));
app.use('/api/blogs', require('./routes/blogs'));
app.use('/api/announcements', require('./routes/announcements'));
app.use('/api/developers', require('./routes/developers'));
app.use('/api/events', require('./routes/events'));

// Basic route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Backend API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 