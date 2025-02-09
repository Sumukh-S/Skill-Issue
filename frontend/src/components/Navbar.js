import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/events">Events</Link>
        <Link to="/announcements">Announcements</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/team">Team</Link>
        <Link to="/join-us">Join Us</Link>
      </div>
      <div className="navbar-icons">
        <span>Icon1</span>
        <span>Icon2</span>
        <span>Icon3</span>
      </div>
    </nav>
  );
}

export default Navbar;
