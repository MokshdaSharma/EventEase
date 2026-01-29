import React, { useContext } from 'react';
import EventCard from '../components/EventCard';
import SearchFilter from '../components/SearchFilter';
import { EventContext } from '../context/EventContext';
import './Events.css';

const Events = () => {
  const { filteredEvents } = useContext(EventContext);

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>All Events</h1>
        <p>Explore all upcoming college events and find something that interests you</p>
      </div>

      <div className="events-container">
        <SearchFilter />

        {filteredEvents.length > 0 ? (
          <div className="events-grid">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="no-events">
            <div className="no-events-icon">😢</div>
            <h2>No Events Found</h2>
            <p>We couldn't find any events matching your search. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
