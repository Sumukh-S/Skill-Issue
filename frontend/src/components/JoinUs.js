import React, { useState } from 'react';
import Hero from './Hero';
import './JoinUs.css';

function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    semester: '',
    section: '',
    role: '',
    whyConsider: '',
    github: '',
    linkedin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a backend)
    console.log('Form Data:', formData); // For demonstration purposes
    alert('Form submitted successfully!');
    // Reset form fields after successful submission
    setFormData({
      name: '',
      semester: '',
      section: '',
      role: '',
      whyConsider: '',
      github: '',
      linkedin: '',
    });
  };

  return (
    <section className="join-us-page">
      <Hero />
      <div className="join-us-form-container">
        <h2>Join Our Community</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
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
            <label htmlFor="semester">Semester:</label>
            <select
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
            >
              <option value="">Select Semester</option>
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
              <option value="3">3rd Semester</option>
              <option value="4">4th Semester</option>
              <option value="5">5th Semester</option>
              <option value="6">6th Semester</option>
              <option value="7">7th Semester</option>
              <option value="8">8th Semester</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="section">Section:</label>
            <input
              type="text"
              id="section"
              name="section"
              value={formData.section}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Interested Role:</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="whyConsider">Why should we consider you for this role?</label>
            <textarea
              id="whyConsider"
              name="whyConsider"
              value={formData.whyConsider}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="github">GitHub Profile URL:</label>
            <input
              type="url"
              id="github"
              name="github"
              value={formData.github}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn Profile URL:</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default JoinUs;
