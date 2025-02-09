import React from 'react';
import { Link } from 'react-router-dom';
// Temporarily remove logo import until we have the actual logo file
import '../styles/components/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-text">
          ISDC
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/announcements">Announcements</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/team">Team</Link>
        <Link to="/join-us">Join Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
