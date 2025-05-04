import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Announcements from './components/Announcements';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Team from './components/Team';
import JoinUs from './components/JoinUs';
import AnimatedBackground from './components/AnimatedBackground';
import './styles/globals.css';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1>Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>Refresh Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
const Loading = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loading />}>
          <div className="App">
            <AnimatedBackground />
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={
                <ErrorBoundary>
                  <Projects />
                </ErrorBoundary>
              } />
              <Route path="/events" element={
                <ErrorBoundary>
                  <Events />
                </ErrorBoundary>
              } />
              <Route path="/announcements" element={
                <ErrorBoundary>
                  <Announcements />
                </ErrorBoundary>
              } />
              <Route path="/blogs" element={
                <ErrorBoundary>
                  <Blogs />
                </ErrorBoundary>
              } />
              <Route path="/team" element={
                <ErrorBoundary>
                  <Team />
                </ErrorBoundary>
              } />
              <Route path="/join-us" element={
                <ErrorBoundary>
                  <JoinUs />
                </ErrorBoundary>
              } />
            </Routes>
          </div>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
