import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>EventEase</h4>
            <p>Simplifying college event management with a modern, intuitive platform for discovering and creating events.</p>
          </div>
          
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/create-event">Create Event</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h5>Contact</h5>
            <p>Email: info@eventease.com</p>
            <p>Phone: +91 (0) 123-456-7890</p>
          </div>
          
          <div className="footer-section">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} EventEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
