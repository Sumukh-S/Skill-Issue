import React, { useEffect } from 'react';

const AnimatedBackground = () => {
    useEffect(() => {
        const createParticle = () => {
            const particles = document.querySelector('.animated-particles');
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Random position and size
            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            particles.appendChild(particle);

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 6000);
        };

        // Create particles periodically
        const interval = setInterval(createParticle, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animated-background">
            <div className="animated-particles" />
        </div>
    );
};

export default AnimatedBackground; 