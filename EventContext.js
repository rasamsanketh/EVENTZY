import React, { createContext, useState } from 'react';

export const EventContext = createContext(null);

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  const value = {
    events,
    addEvent: (event) => setEvents(prev => [...prev, { ...event, id: Date.now() }]),
    deleteEvent: (id) => setEvents(prev => prev.filter(event => event.id !== id)),
    updateEvent: (id, data) => setEvents(prev => 
      prev.map(event => event.id === id ? { ...event, ...data } : event)
    )
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
}