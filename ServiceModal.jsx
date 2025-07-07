import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheck, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export default function ServiceModal({ isOpen, onClose, service }) {
  const navigate = useNavigate(); // Initialize navigate

  // Lock scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Return null if no service is provided
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Modal Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="w-full max-w-4xl">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Hero Section */}
                  <div className="relative h-64 sm:h-72">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <button
                      onClick={onClose}
                      className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                    <div className="absolute bottom-6 left-8 right-8">
                      <div className={`w-14 h-14 flex items-center justify-center rounded-2xl text-white bg-gradient-to-br ${service.gradient} shadow-lg`}>
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-white mt-4">{service.title}</h3>
                      <p className="text-white/80 text-lg mt-2">{service.description}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 max-h-[calc(100vh-20rem)] overflow-y-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                          <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-sm`}>
                            <FaCheck />
                          </span>
                          Services Offered
                        </h4>
                        <ul className="space-y-4">
                          {service.offerings.map((offering, index) => (
                            <li key={index} className="flex items-start gap-3 text-slate-600">
                              <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mt-0.5 shadow-sm`}>
                                <FaCheck className="w-3 h-3 text-white" />
                              </span>
                              <span className="text-lg">{offering}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-4">Why Choose Us</h4>
                          <p className="text-slate-600 text-lg leading-relaxed">{service.whyChooseUs}</p>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-4">Pricing</h4>
                          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <p className="text-slate-600 text-lg">{service.pricing}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                      <button
                        onClick={() => navigate('/contact')} // Redirect to Contact Page
                        className="flex-1 group relative px-8 py-4 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2 text-lg font-medium">
                          Get a Quote
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} translate-y-32 group-hover:translate-y-0 transition-transform duration-300`}></div>
                      </button>
                      <button
                        onClick={onClose}
                        className="px-8 py-4 rounded-xl border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 font-medium"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
