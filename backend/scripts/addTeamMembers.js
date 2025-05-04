import mongoose from 'mongoose';
import Team from '../models/Team.js';
import dotenv from 'dotenv';

dotenv.config();

// Example team members data
const teamMembers = [
    {
        name: "Shreekara B",
        role: "Team Lead",
        bio: "Full Stack Developer passionate about building innovative solutions",
        image: "https://github.com/Shreek1009.png", // Using GitHub avatar
        socialLinks: {
            github: "https://github.com/Shreek1009",
            linkedin: "https://linkedin.com/in/shreekara"
        }
    },
    {
        name: "Akkil M G",
        role: "Backend Developer",
        bio: "Experienced in building scalable backend solutions",
        image: "https://github.com/AkkilMG.png",
        socialLinks: {
            github: "https://github.com/AkkilMG",
            linkedin: "https://linkedin.com/in/akkil"
        }
    },
    {
        name: "Ashish Goswami",
        role: "Frontend Developer",
        bio: "Specialized in creating beautiful user interfaces",
        image: "https://github.com/Ashish6298.png",
        socialLinks: {
            github: "https://github.com/Ashish6298",
            linkedin: "https://linkedin.com/in/ashish"
        }
    },
    {
        name: "Pradyumna P",
        role: "Full Stack Developer",
        bio: "Full stack developer with a passion for clean code",
        image: "https://github.com/VoidGeek.png",
        socialLinks: {
            github: "https://github.com/VoidGeek",
            linkedin: "https://linkedin.com/in/pradyumna"
        }
    },
    {
        name: "Skanda Ganesh P V",
        role: "Developer",
        bio: "Passionate about creating impactful solutions",
        image: "https://github.com/Skandaganesh.png",
        socialLinks: {
            github: "https://github.com/Skandaganesh",
            linkedin: "https://linkedin.com/in/skanda"
        }
    },
    {
        name: "Keerthi Prasad Kalluraya",
        role: "Developer",
        bio: "Enthusiastic about solving complex problems",
        image: "https://github.com/captmk.png",
        socialLinks: {
            github: "https://github.com/captmk",
            linkedin: "https://linkedin.com/in/keerthi"
        }
    },
    {
        name: "Saiesh Savant",
        role: "Developer",
        bio: "Dedicated to writing efficient and maintainable code",
        image: "https://github.com/SaieshSavant.png",
        socialLinks: {
            github: "https://github.com/SaieshSavant",
            linkedin: "https://linkedin.com/in/saiesh"
        }
    }
];

async function addTeamMembers() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // Clear existing team members
        await Team.deleteMany({});

        // Add new team members
        const result = await Team.insertMany(teamMembers);
        console.log(`Added ${result.length} team members successfully`);
    } catch (error) {
        console.error('Error adding team members:', error);
    } finally {
        await mongoose.disconnect();
    }
}

addTeamMembers(); 