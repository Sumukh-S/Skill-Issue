import React from 'react';
import isdcLogo from '../assets/images/isdclogo.png';
import './Hero.css'; // Ensure this exists

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Information Science</h1>
        <h1>Developer Community</h1>
        <p>
          A community driven by tech enthusiasts and open-source contributors, to help young
          students be part of the open-source ecosystem by providing training and skill
          development.
        </p>
      </div>
      <div className="hero-logo">
        <img src={isdcLogo} alt="Logo" className="logo-image" />
      </div>
    </section>
  );
}

export default Hero;
