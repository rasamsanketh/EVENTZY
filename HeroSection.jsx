import React from "react";

export default function HeroSection() {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fadeIn">
        Push Yourself – Beyond Events, We Create Experiences
      </h1>
      <p className="text-lg md:text-2xl mb-6 drop-shadow-sm animate-fadeIn delay-1">
        Let us make your events unforgettable.
      </p>
      <div className="flex space-x-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg shadow-lg transition duration-200">
          Explore Services
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg transition duration-200">
          Contact Us
        </button>
      </div>
    </div>
  );
}
