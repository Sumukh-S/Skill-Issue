import React from 'react';
import './Team.css'; // Create Team.css
import Hero from './Hero'; // Import Hero component

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Shreekara B',
      photo: '/assets/images/shreekara.jpg', // Replace with actual image path
      github: 'Shreek1009', // Replace with actual GitHub username
    },
    {
      id: 2,
      name: 'Akkil M G',
      photo: '/assets/images/akkil.jpg', // Replace with actual image path
      github: 'AkkilMG', // Replace with actual GitHub username
    },
    {
      id: 3,
      name: 'Ashish Goswami',
      photo: '/assets/images/ashish.jpg', // Replace with actual image path
      github: 'Ashish6298', // Replace with actual GitHub username
    },
    {
      id: 4,
      name: 'Pradyumna P',
      photo: '/assets/images/pradyumna.jpg', // Replace with actual image path
      github: 'VoidGeek', // Replace with actual GitHub username
    },
    {
      id: 5,
      name: 'Skanda Ganesh P V',
      photo: '/assets/images/skanda.jpg', // Replace with actual image path
      github: 'Skandaganesh', // Replace with actual GitHub username
    },
    {
      id: 6,
      name: 'Keerthi Prasad Kalluraya',
      photo: '/assets/images/keerthi.jpg', // Replace with actual image path
      github: 'captmk', // Replace with actual GitHub username
    },
    {
      id: 7,
      name: 'Saiesh Savant',
      photo: '/assets/images/saiesh.jpg', // Replace with actual image path
      github: 'SaieshSavant', // Replace with actual GitHub username
    },
  ];

  return (
    <section className="team-page">
      <Hero />
      <h2>Team Members</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <a
              href={`https://github.com/${member.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
