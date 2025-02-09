import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Announcements from './components/Announcements';
import Projects from './components/Projects';
import Blogs from './components/Blogs'; // Import Blogs component
import Team from './components/Team';
import JoinUs from './components/JoinUs';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
