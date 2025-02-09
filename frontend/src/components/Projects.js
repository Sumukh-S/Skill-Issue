import React from 'react';
import Hero from './Hero';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Kulkunda Shree Basaveshwara Temple',
      description: 'Website for Kulkunda Shree Basaveshwara Temple',
      link: 'https://your-kulkunda-temple-website.com', // Replace with actual link
    },
    {
      id: 2,
      title: 'Harihareshwara Temple Hariharapallathadka',
      description: 'Website for Harihareshwara Temple Hariharapallathadka.',
      link: 'https://www.shriharihareshwara.org', // Replace with actual link
    },
    {
      id: 3,
      title: 'Shri Rama Seva Samithi Chokkadi',
      description: 'Website for Shri Rama Seva Samithi Chokkadi.',
      link: 'https://www.srtchokkadi.org', // Replace with actual link
    },
  ];

  return (
    <section className="projects-page">
      <Hero />
      <h2>Completed Projects</h2>
      <ul className="event-list">
        {projects.map((project) => (
          <li key={project.id} className="event-item">
            <h3>{project.title}</h3>
            <p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </p>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
