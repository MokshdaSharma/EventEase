import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ event }) => {
  const daysUntilEvent = Math.ceil(
    (new Date(event.date) - new Date()) / (1000 * 60 * 60 * 24)
  );

  const spotsLeft = event.maxCapacity - event.attendees;

  return (
    <div className="event-card">
      <div className="event-card-image">
        <img src={event.image} alt={event.title} />
        <span className="event-category-badge">{event.category}</span>
        {daysUntilEvent > 0 && (
          <span className="event-days-badge">{daysUntilEvent} days left</span>
        )}
      </div>
      <div className="event-card-body">
        <h5 className="event-card-title">{event.title}</h5>
        <p className="event-card-text">{event.description}</p>
        
        <div className="event-card-meta">
          <div className="meta-item">
            <span className="meta-label">📅</span>
            <span className="meta-value">{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">🕐</span>
            <span className="meta-value">{event.time}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">📍</span>
            <span className="meta-value">{event.location}</span>
          </div>
        </div>

        <div className="event-card-footer">
          <div className="attendees-info">
            <span className="attendees-count">{event.attendees}/{event.maxCapacity}</span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(event.attendees / event.maxCapacity) * 100}%` }}
              ></div>
            </div>
            <span className="spots-left">{spotsLeft} spots left</span>
          </div>
          <Link to={`/event/${event.id}`} className="view-button">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
