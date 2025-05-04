import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import '../styles/components/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await api.get('/projects');
      setProjects(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch projects');
      setLoading(false);
      console.error('Error fetching projects:', err);
    }
  };

  const toggleProject = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  if (loading) return <div className="page-container">Loading projects...</div>;
  if (error) return <div className="page-container">{error}</div>;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Projects</h1>
        <p>Explore our innovative solutions and developments</p>
      </div>

      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project._id}
              className={`project-card ${expandedProject === project._id ? 'expanded' : ''}`}
            >
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-tags">
                    {project.technologies?.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`project-description ${expandedProject === project._id ? 'expanded' : ''}`}>
                  <p>{project.description}</p>
                </div>
                <div className="project-actions">
                  <button
                    className="read-more-btn"
                    onClick={() => toggleProject(project._id)}
                  >
                    {expandedProject === project._id ? 'Show Less' : 'Read More...'}
                  </button>
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-website-btn"
                    >
                      <i className="fas fa-external-link-alt"></i> View Website
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                    >
                      <i className="fab fa-github"></i> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
