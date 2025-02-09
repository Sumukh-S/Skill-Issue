import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Hero.css';
// Import images
import fineImg from '../assets/images/fine.png';
import girlImg from '../assets/images/girl.png';
import okImg from '../assets/images/ok.png';
import threeImg from '../assets/images/three.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/join-us');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text animate-fade-in-left">
          <h1>Information Science Student Developer Community (ISDC)</h1>
          <p>A community where Information Science students work on real-time projects, bridging the gap between academia and industry.</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={handleJoinClick}>
              Join ISDC
            </button>
          </div>
        </div>
        <div className="hero-image animate-fade-in-right">
          <img src={fineImg} alt="ISDC Hero" />
        </div>
      </div>
      
      <div className="hero-details">
        <div className="hero-detail">
          <img src={girlImg} alt="Industry-Level Projects" />
          <div className="hero-detail-content">
            <h3>🚀 Industry-Level Projects</h3>
            <p>ISDC enables students to work on real-world projects from actual clients, ensuring they gain practical experience before entering the workforce.</p>
          </div>
        </div>
        <div className="hero-detail">
          <img src={okImg} alt="Learn from Experts" />
          <div className="hero-detail-content">
            <h3>📚 Learn from Experts</h3>
            <p>We conduct workshops and training sessions led by industry professionals, senior students, and alumni, keeping members updated with the latest technologies and trends.</p>
          </div>
        </div>
        <div className="hero-detail">
          <img src={threeImg} alt="Collaborative Learning" />
          <div className="hero-detail-content">
            <h3>👥 Collaborative Learning</h3>
            <p>Our community fosters teamwork and innovation, encouraging students to collaborate on projects, exchange knowledge, and improve problem-solving skills.</p>
          </div>
        </div>
        <div className="hero-detail">
          <img src={girlImg} alt="Hands-on Skill Development" />
          <div className="hero-detail-content">
            <h3>🎯 Hands-on Skill Development</h3>
            <p>Through hands-on experience, ISDC members master essential technical skills, making them industry-ready while still in college.</p>
          </div>
        </div>
        <div className="hero-detail">
          <img src={okImg} alt="Join the ISDC Community" />
          <div className="hero-detail-content">
            <h3>🌍 Join the ISDC Community</h3>
            <p>Be a part of a thriving student network working on impactful projects. Enhance your resume, gain industry exposure, and contribute to real-world solutions.</p>
          </div>
        </div>
      </div>
      
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;
