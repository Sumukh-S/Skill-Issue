import React, { useState } from 'react';
import '../styles/components/JoinUs.css';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'member', // Default role
    interests: [],
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const interests = [
    'Web Development',
    'Mobile Development',
    'AI/ML',
    'Blockchain',
    'UI/UX Design',
    'Cloud Computing'
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Join Our Community</h1>
        <p>Be part of something extraordinary. Join us in shaping the future of technology.</p>
      </div>

      <div className="join-us-container">
        <div className="benefits-section">
          <h2>Why Join Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Learn & Grow</h3>
              <p>Access exclusive workshops, mentorship, and learning resources</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Network</h3>
              <p>Connect with like-minded developers and industry professionals</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Innovate</h3>
              <p>Work on exciting projects and bring your ideas to life</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌟</div>
              <h3>Opportunities</h3>
              <p>Get access to internships, jobs, and collaboration opportunities</p>
            </div>
          </div>
        </div>

        <form className="join-form" onSubmit={handleSubmit}>
          <h2>Apply Now</h2>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="member">Member</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>

          <div className="form-group">
            <label>Areas of Interest</label>
            <div className="interests-grid">
              {interests.map(interest => (
                <label key={interest} className="interest-checkbox">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestChange(interest)}
                  />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Why do you want to join?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button type="submit" className="submit-button">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
