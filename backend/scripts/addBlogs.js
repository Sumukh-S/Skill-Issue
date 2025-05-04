import mongoose from 'mongoose';
import Blog from '../models/Blog.js';
import dotenv from 'dotenv';

dotenv.config();

const sampleBlogs = [
    {
        title: "Getting Started with Web Development",
        content: "Web development is an exciting field that combines creativity with technical skills. As a beginner, you'll start with the fundamentals of HTML, CSS, and JavaScript. These three technologies form the foundation of modern web development. HTML provides the structure, CSS adds style and layout, and JavaScript brings interactivity to your websites. Start small with simple projects and gradually build your way up to more complex applications. Remember, every expert was once a beginner!",
        author: "Shreekara B",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        date: new Date()
    },
    {
        title: "Introduction to React.js",
        content: "React is a powerful JavaScript library for building user interfaces, developed and maintained by Facebook. It has revolutionized how we think about web development through its component-based architecture and virtual DOM implementation. React's declarative approach makes it easier to understand and debug your code. Key concepts include components, props, state, and hooks. With React, you can build everything from simple landing pages to complex web applications. The React ecosystem is vast, with tools like Redux for state management and React Router for navigation.",
        author: "Ashish Goswami",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        date: new Date(Date.now() - 86400000) // 1 day ago
    },
    {
        title: "Backend Development with Node.js",
        content: "Node.js has revolutionized backend development by bringing JavaScript to the server side. It's particularly well-suited for building scalable, real-time applications thanks to its event-driven, non-blocking I/O model. Express.js, the most popular Node.js framework, provides a robust set of features for building web and mobile applications. Learn about routing, middleware, database integration with MongoDB, and RESTful API design. Understanding asynchronous programming with async/await is crucial for effective Node.js development.",
        author: "Akkil M G",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
        date: new Date(Date.now() - 172800000) // 2 days ago
    }
];

async function addBlogs() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB successfully');

        // Clear existing blogs
        await Blog.deleteMany({});
        console.log('Cleared existing blogs');

        // Add new blogs
        const result = await Blog.insertMany(sampleBlogs);
        console.log(`Successfully added ${result.length} blogs:`, result);
    } catch (error) {
        console.error('Error adding blogs:', error);
        console.error('Error details:', error.message);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

// Run the script
console.log('Starting blog population script...');
addBlogs(); 