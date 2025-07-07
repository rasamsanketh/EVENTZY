import React from "react";

export default function EventCard({ event }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform">
      <h3 className="text-xl font-bold text-blue-800">{event.name}</h3>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-500 mt-2">{event.details}</p>
    </div>
  );
}
