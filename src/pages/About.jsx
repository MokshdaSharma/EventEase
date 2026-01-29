import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About EventEase</h1>
        <p>Simplifying Event Management for Modern Colleges</p>
      </div>

      <div className="about-container">
        {/* Mission Section */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            EventEase is designed to revolutionize how college events are discovered and managed. 
            We believe that every student should have easy access to information about campus events, 
            from workshops and hackathons to cultural fests and seminars. Our mission is to create 
            a centralized, user-friendly platform that connects event organizers with interested participants.
          </p>
        </section>

        {/* Features Section */}
        <section className="about-section">
          <h2>Key Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-number">1</span>
              <div>
                <h4>Event Discovery</h4>
                <p>Browse through all upcoming events in one centralized location with detailed information about each event.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-number">2</span>
              <div>
                <h4>Easy Event Creation</h4>
                <p>Clubs and departments can easily create and manage their events with a simple, intuitive form.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-number">3</span>
              <div>
                <h4>Smart Filtering</h4>
                <p>Filter events by category (Workshop, Hackathon, Fest, Seminar) or search by keywords.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-number">4</span>
              <div>
                <h4>Responsive Design</h4>
                <p>Access EventEase seamlessly on any device - mobile, tablet, or desktop.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-number">5</span>
              <div>
                <h4>Real-time Updates</h4>
                <p>Instantly view registration status, available spots, and other important event details.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-number">6</span>
              <div>
                <h4>Single Page Experience</h4>
                <p>Lightning-fast navigation with no page reloads - built with React for optimal performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="about-section">
          <h2>Technology Stack</h2>
          <p>EventEase is built with modern, industry-standard technologies:</p>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>React</h4>
              <p>The core framework for building interactive UI components</p>
            </div>
            <div className="tech-item">
              <h4>React Router</h4>
              <p>Client-side routing for seamless page navigation</p>
            </div>
            <div className="tech-item">
              <h4>Bootstrap</h4>
              <p>Responsive design framework for mobile-first layouts</p>
            </div>
            <div className="tech-item">
              <h4>Material UI</h4>
              <p>Modern UI components following Material Design principles</p>
            </div>
            <div className="tech-item">
              <h4>Context API</h4>
              <p>Global state management for event data</p>
            </div>
            <div className="tech-item">
              <h4>Vite</h4>
              <p>Fast build tool and development server</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            EventEase was developed as an academic project to demonstrate modern web development concepts
            including component-based architecture, state management, routing, and responsive design. 
            The project showcases practical skills in building production-ready single-page applications.
          </p>
        </section>

        {/* Why EventEase */}
        <section className="about-section">
          <h2>Why Choose EventEase?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h4>Lightning Fast</h4>
              <p>Built with React for instant page transitions</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h4>Fully Responsive</h4>
              <p>Works perfectly on all devices and screen sizes</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h4>User-Friendly</h4>
              <p>Intuitive interface designed for college students</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h4>Secure</h4>
              <p>Built with modern security best practices</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="about-section about-contact">
          <h2>Get in Touch</h2>
          <p>Have questions or suggestions? We'd love to hear from you!</p>
          <div className="contact-info">
            <p><strong>Email:</strong> info@eventease.com</p>
            <p><strong>Phone:</strong> +91 (0) 123-456-7890</p>
            <p><strong>Follow us:</strong> Facebook | Twitter | Instagram</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
