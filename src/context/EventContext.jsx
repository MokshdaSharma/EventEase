import React, { createContext, useState, useCallback } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'React Workshop',
      description: 'Learn React from basics to advanced concepts',
      date: '2024-02-15',
      time: '10:00 AM',
      location: 'Auditorium A',
      category: 'Workshop',
      image: 'https://picsum.photos/500/300?random=1',
      attendees: 45,
      maxCapacity: 100,
      organizer: 'Tech Club',
      details: 'A comprehensive workshop covering React fundamentals, hooks, routing, and state management. Perfect for beginners and intermediate developers.'
    },
    {
      id: 2,
      title: 'Annual Hackathon 2024',
      description: '24-hour coding marathon with amazing prizes',
      date: '2024-03-10',
      time: '09:00 AM',
      location: 'Tech Lab',
      category: 'Hackathon',
      image: 'https://picsum.photos/500/300?random=2',
      attendees: 120,
      maxCapacity: 200,
      organizer: 'Developer Community',
      details: 'Join our 24-hour hackathon where innovative teams compete to build amazing projects. Prizes worth ₹1,00,000 at stake!'
    },
    {
      id: 3,
      title: 'College Fest 2024',
      description: 'Annual cultural festival with performances and competitions',
      date: '2024-02-20',
      time: '05:00 PM',
      location: 'Open Ground',
      category: 'Fest',
      image: 'https://picsum.photos/500/300?random=3',
      attendees: 500,
      maxCapacity: 1000,
      organizer: 'Cultural Club',
      details: 'Celebrate our annual college fest with music, dance, drama, and various cultural performances from students.'
    },
    {
      id: 4,
      title: 'Web Development Seminar',
      description: 'Industry experts discussing latest web technologies',
      date: '2024-02-25',
      time: '02:00 PM',
      location: 'Seminar Hall',
      category: 'Seminar',
      image: 'https://picsum.photos/500/300?random=4',
      attendees: 80,
      maxCapacity: 150,
      organizer: 'Computer Department',
      details: 'Industry experts will share insights about the latest trends in web development, including Web3, AI integration, and modern frameworks.'
    }
  ]);

  const [filteredEvents, setFilteredEvents] = useState(events);

  const addEvent = useCallback((newEvent) => {
    const event = {
      ...newEvent,
      id: Math.max(...events.map(e => e.id), 0) + 1,
      attendees: 0,
      image: newEvent.image || 'https://picsum.photos/500/300?random=5'
    };
    setEvents(prev => [...prev, event]);
    setFilteredEvents(prev => [...prev, event]);
    return event;
  }, [events]);

  const updateEvent = useCallback((id, updatedEvent) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, ...updatedEvent } : e));
    setFilteredEvents(prev => prev.map(e => e.id === id ? { ...e, ...updatedEvent } : e));
  }, []);

  const deleteEvent = useCallback((id) => {
    setEvents(prev => prev.filter(e => e.id !== id));
    setFilteredEvents(prev => prev.filter(e => e.id !== id));
  }, []);

  const getEventById = useCallback((id) => {
    return events.find(e => e.id === parseInt(id));
  }, [events]);

  const filterEvents = useCallback((category) => {
    if (category === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(e => e.category === category));
    }
  }, [events]);

  const searchEvents = useCallback((query) => {
    if (!query.trim()) {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(
        events.filter(e =>
          e.title.toLowerCase().includes(query.toLowerCase()) ||
          e.description.toLowerCase().includes(query.toLowerCase()) ||
          e.category.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [events]);

  return (
    <EventContext.Provider value={{
      events,
      filteredEvents,
      addEvent,
      updateEvent,
      deleteEvent,
      getEventById,
      filterEvents,
      searchEvents
    }}>
      {children}
    </EventContext.Provider>
  );
};
