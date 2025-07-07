import React, { useState } from "react";

export default function AdminForm({ addEvent }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDetails, setEventDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ name: eventName, date: eventDate, details: eventDetails });
    setEventName("");
    setEventDate("");
    setEventDetails("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <textarea
        placeholder="Event Details"
        value={eventDetails}
        onChange={(e) => setEventDetails(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded mb-4"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Add Event
      </button>
    </form>
  );
}
