import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { EventContext } from '../context/EventContext';
import './Home.css';

const Home = () => {
  const { filteredEvents } = useContext(EventContext);
  const upcomingEvents = filteredEvents.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to EventEase</h1>
          <p>Discover and manage college events, fests, workshops, and hackathons all in one place</p>
          <Link to="/events" className="cta-button">
            Explore Events
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-container">
          <h2 className="section-title">Why Choose EventEase?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Event Discovery</h3>
              <p>Browse and discover upcoming events, workshops, and fests happening in your college.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✏️</div>
              <h3>Create Events</h3>
              <p>Easily create and manage your own events with detailed information and registration.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Access EventEase seamlessly on mobile, tablet, and desktop devices.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Built with React for instant page transitions without page reloads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <div className="section-container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {filteredEvents.length > 3 && (
            <div className="view-all">
              <Link to="/events" className="view-all-button">
                View All Events
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{filteredEvents.length}</div>
              <div className="stat-label">Active Events</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{filteredEvents.reduce((sum, e) => sum + e.attendees, 0)}</div>
              <div className="stat-label">Total Attendees</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Event Types</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Ready to Create Your Event?</h2>
          <p>Organize and manage your college events with EventEase today</p>
          <Link to="/create-event" className="cta-button-secondary">
            Create Event Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
