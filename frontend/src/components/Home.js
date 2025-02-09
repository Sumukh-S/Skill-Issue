import React from 'react';
import Hero from './Hero';
import '../styles/components/Home.css';

const Home = () => {
    return (
        <div className="home">
            <Hero />

            <section className="features">
                <div className="feature-section animate-on-scroll">
                    <div className="feature-content">
                        <h2>Innovate & Create</h2>
                        <p>Join our community of innovators and creators. Work on real-world projects, learn cutting-edge technologies, and develop solutions that matter.</p>
                        <ul className="feature-list">
                            <li>Hands-on Project Experience</li>
                            <li>Industry Expert Sessions</li>
                            <li>Technical Workshops</li>
                            <li>Networking Opportunities</li>
                        </ul>
                    </div>
                    <div className="feature-image">
                        <img src="/images/innovation.svg" alt="Innovation" />
                    </div>
                </div>

                <div className="feature-section reverse animate-on-scroll">
                    <div className="feature-image">
                        <img src="/images/community.svg" alt="Community" />
                    </div>
                    <div className="feature-content">
                        <h2>Learn & Grow Together</h2>
                        <p>Be part of a vibrant community that supports your growth. Share knowledge, collaborate on projects, and build lasting connections.</p>
                        <ul className="feature-list">
                            <li>Peer Learning Groups</li>
                            <li>Mentorship Programs</li>
                            <li>Team Projects</li>
                            <li>Skill Development</li>
                        </ul>
                    </div>
                </div>

                <div className="feature-section animate-on-scroll">
                    <div className="feature-content">
                        <h2>Events & Activities</h2>
                        <p>Participate in exciting events throughout the year. From hackathons to workshops, there's always something happening at ISDC.</p>
                        <ul className="feature-list">
                            <li>Annual Hackathon</li>
                            <li>Tech Talks</li>
                            <li>Code Competitions</li>
                            <li>Industry Visits</li>
                        </ul>
                    </div>
                    <div className="feature-image">
                        <img src="/images/events.svg" alt="Events" />
                    </div>
                </div>
            </section>

            <section className="cta-section animate-on-scroll">
                <h2>Ready to Join Us?</h2>
                <p>Take the first step towards your tech journey with ISDC</p>
                <button className="cta-button">
                    Join Now
                </button>
            </section>
        </div>
    );
};

export default Home; 