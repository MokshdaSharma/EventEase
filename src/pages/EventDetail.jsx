import React, { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import './EventDetail.css';

const EventDetail = () => {
  const { id } = useParams();
  const { getEventById } = useContext(EventContext);
  const navigate = useNavigate();
  const event = getEventById(id);

  if (!event) {
    return (
      <div className="event-detail-page">
        <div className="event-not-found">
          <h2>Event Not Found</h2>
          <p>Sorry, the event you're looking for doesn't exist.</p>
          <Link to="/events" className="back-button">Back to Events</Link>
        </div>
      </div>
    );
  }

  const daysUntilEvent = Math.ceil(
    (new Date(event.date) - new Date()) / (1000 * 60 * 60 * 24)
  );
  
  const spotsLeft = event.maxCapacity - event.attendees;
  const isFull = spotsLeft === 0;

  const handleRegister = () => {
    if (!isFull) {
      alert(`Successfully registered for ${event.title}!`);
    }
  };

  return (
    <div className="event-detail-page">
      <div className="event-detail-container">
        <Link to="/events" className="back-link">← Back to Events</Link>

        <div className="event-detail-content">
          {/* Image Section */}
          <div className="event-detail-image">
            <img src={event.image} alt={event.title} />
            <div className="event-info-badges">
              <span className="category-badge">{event.category}</span>
              {daysUntilEvent > 0 && (
                <span className="days-badge">{daysUntilEvent} days away</span>
              )}
              {isFull && (
                <span className="full-badge">Event Full</span>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="event-detail-main">
            <div className="event-header">
              <h1>{event.title}</h1>
              <p className="event-organizer">Organized by {event.organizer}</p>
            </div>

            {/* Key Information */}
            <div className="event-key-info">
              <div className="info-item">
                <span className="info-icon">📅</span>
                <div>
                  <p className="info-label">Date</p>
                  <p className="info-value">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">🕐</span>
                <div>
                  <p className="info-label">Time</p>
                  <p className="info-value">{event.time}</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <p className="info-label">Location</p>
                  <p className="info-value">{event.location}</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">👥</span>
                <div>
                  <p className="info-label">Attendees</p>
                  <p className="info-value">{event.attendees}/{event.maxCapacity}</p>
                </div>
              </div>
            </div>

            {/* Registration Info */}
            <div className="registration-section">
              <h3>Registration Status</h3>
              <div className="progress-container">
                <div className="progress-bar-large">
                  <div 
                    className="progress-fill-large"
                    style={{ width: `${(event.attendees / event.maxCapacity) * 100}%` }}
                  ></div>
                </div>
                <p className="progress-text">
                  {isFull ? (
                    <span className="full-text">Event is full</span>
                  ) : (
                    <span>{spotsLeft} spots available</span>
                  )}
                </p>
              </div>

              <button 
                className={`register-button ${isFull ? 'disabled' : ''}`}
                onClick={handleRegister}
                disabled={isFull}
              >
                {isFull ? 'Event Full' : 'Register Now'}
              </button>
            </div>

            {/* Description */}
            <div className="event-description">
              <h3>About This Event</h3>
              <p>{event.details || event.description}</p>
            </div>

            {/* Additional Info */}
            <div className="event-additional-info">
              <div className="info-box">
                <h4>Event Type</h4>
                <p>{event.category}</p>
              </div>
              <div className="info-box">
                <h4>Capacity</h4>
                <p>{event.maxCapacity} participants</p>
              </div>
              <div className="info-box">
                <h4>Current Registrations</h4>
                <p>{event.attendees}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="share-section">
          <h3>Share This Event</h3>
          <div className="share-buttons">
            <button className="share-btn facebook">f</button>
            <button className="share-btn twitter">𝕏</button>
            <button className="share-btn whatsapp">W</button>
            <button className="share-btn email">✉</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
