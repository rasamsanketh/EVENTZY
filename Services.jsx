import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaRing, FaBuilding } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceModal from "../components/ServiceModal";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "College Events",
      description: "From fests to convocations, we bring your college events to life with innovative ideas and flawless execution.",
      image: "/assets/college-icon.jpg",
      icon: <FaGraduationCap className="text-3xl" />,
      gradient: "from-blue-500 to-indigo-600",
      delay: 0.2,
      offerings: [
        "Cultural Festivals & Annual Days",
        "Technical Symposiums & Workshops",
        "Graduation Ceremonies",
        "Sports Events & Tournaments",
        "Academic Conferences",
        "Alumni Meet Organization"
      ],
      whyChooseUs: "Our dedicated team brings years of experience in academic event management. We understand the unique requirements of educational institutions and ensure every event aligns with your institution's values while creating memorable experiences.",
      pricing: "We offer customized packages , tailored to your specific requirements and scale of the event ,contact us for a detailed quote."
    },
    {
      title: "Weddings",
      description: "Crafting elegant, memorable, and seamless wedding experiences that tell your unique love story.",
      image: "/assets/wedding-icon.jpg",
      icon: <FaRing className="text-3xl" />,
      gradient: "from-rose-500 to-pink-600",
      delay: 0.4,
      offerings: [
        "Complete Wedding Planning",
        "Venue Selection & Decoration",
        "Catering & Menu Design",
        "Entertainment & Music",
        "Photography & Videography",
        "Guest Management"
      ],
      whyChooseUs: "We believe every love story is unique and deserves a celebration that reflects it perfectly. Our attention to detail and personalized approach ensures your wedding day is exactly as you've dreamed it.",
      pricing: "Wedding packages , with customizable options to suit your vision and budget, contact us for a detailed quote."
    },
    {
      title: "Corporate Events",
      description: "Elevating your business events with professional planning and impeccable organization.",
      image: "/assets/corporate-icon.jpg",
      icon: <FaBuilding className="text-3xl" />,
      gradient: "from-emerald-500 to-teal-600",
      delay: 0.6,
      offerings: [
        "Conferences & Seminars",
        "Product Launches",
        "Team Building Events",
        "Award Ceremonies",
        "Corporate Retreats",
        "Business Meetings"
      ],
      whyChooseUs: "Our corporate event management team combines creativity with professionalism to deliver events that achieve your business objectives while leaving lasting impressions on attendees.",
      pricing: "Corporate event packages are customized based on your requirements,contact us for a detailed quote."
    },
  ];

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-40"></div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              Our Expertise
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
              Services that Make
              <span className="relative mx-4 whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Memories
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-lg"></div>
              </span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <div className={`w-full h-full bg-gradient-to-br ${service.gradient}`}></div>
                </div>
                
                <div className="relative p-6">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 text-white bg-gradient-to-br ${service.gradient}`}>
                    {service.icon}
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  
                  <button 
                    onClick={() => handleOpenModal(service)}
                    className="w-full group relative px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 text-white overflow-hidden transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Explore More
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-32 group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
      
      <Footer />
    </div>
  );
}