import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import '../styles/components/Team.css';

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const response = await api.get('/team');
      console.log('Team data:', response.data);
      setTeam(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch team members');
      setLoading(false);
      console.error('Error fetching team:', err);
    }
  };

  if (loading) return <div className="page-container">Loading team...</div>;
  if (error) return <div className="page-container">{error}</div>;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Team</h1>
        <p>Meet the amazing people behind our community</p>
      </div>

      <div className="team-container">
        <div className="team-grid">
          {team.map((member) => (
            <div key={member._id} className="team-card">
              <div className="member-image">
                <img
                  src={member.image || 'https://via.placeholder.com/150'}
                  alt={member.name}
                />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p className="bio">{member.bio}</p>
                <div className="social-links">
                  {member.socialLinks?.github && (
                    <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {member.socialLinks?.linkedin && (
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {member.socialLinks?.twitter && (
                    <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
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

export default Team;
