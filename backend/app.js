import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import teamRoutes from './routes/team.js';
import blogRoutes from './routes/blogs.js';
import announcementRoutes from './routes/announcements.js';
import developerRoutes from './routes/developers.js';
import eventRoutes from './routes/events.js';
import projectRoutes from './routes/projects.js';
import joinUsRoutes from './routes/joinus.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        console.log('MongoDB URI:', process.env.MONGO_URI ? 'URI exists' : 'URI is missing');

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to MongoDB successfully');

        // Test the connection by counting Team documents
        const Team = mongoose.model('Team');
        const teamCount = await Team.countDocuments();
        console.log(`Number of team members in database: ${teamCount}`);

    } catch (err) {
        console.error('MongoDB connection error:', err);
        console.error('Error details:', err.message);
        if (err.name === 'MongoParseError') {
            console.error('Invalid MongoDB connection string');
        }
    }
};

connectDB();

// API Routes
app.use('/api/team', teamRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/developers', developerRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/joinus', joinUsRoutes);

// Health check route
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Backend API is running',
        mongoConnection: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Global error handler:', err);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app; 