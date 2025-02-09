import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/join');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text animate-fade-in-left">
          <h1>Information Science Developers Club</h1>
          <p>Connecting Innovators, Building Solutions, Empowering Futures.</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={handleJoinClick}>
              Join ISDC
            </button>
          </div>
        </div>
        <div className="hero-image animate-fade-in-right">
          <img src="/images/hero-illustration.svg" alt="ISDC Hero" />
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
