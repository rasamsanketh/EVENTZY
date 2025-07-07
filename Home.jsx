import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Added for navigation
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaPlay, 
  FaRegEnvelope, 
  FaPhoneAlt 
} from "react-icons/fa";
import { BiChevronsDown } from "react-icons/bi";

export default function Home() {
  const navigate = useNavigate(); // For navigation
  const [videoModal, setVideoModal] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "College Events",
      description: "Unleash creativity in cultural, tech, and sports fests.",
      icon: "/assets/college-icon.jpg",
      features: ["Cultural Festivals", "Tech Events", "Sports Tournaments", "Academic Conferences"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Wedding Planning",
      description: "Transform your special day into an unforgettable moment.",
      icon: "/assets/wedding-icon.jpg",
      features: ["Venue Selection", "Decor & Design", "Catering", "Entertainment"],
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "Corporate Events",
      description: "Professional event solutions for your business needs.",
      icon: "/assets/corporate-icon.jpg",
      features: ["Conferences", "Team Building", "Product Launches", "Award Ceremonies"],
      color: "from-purple-500 to-indigo-400",
    },
  ];

  const socialFeatures = [
    {
      platform: "Instagram",
      username: "@theeventzy",
      link: "https://www.instagram.com/theeventzy/",
      icon: <FaInstagram className="w-8 h-8" />,
      content: ["Event Highlights", "Behind the Scenes", "Client Stories"],
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      hoverEffect: "hover:shadow-pink-500/30",
    },
    {
      platform: "LinkedIn",
      username: "Eventzy Official",
      link: "https://www.linkedin.com/company/the-eventzy/about/?viewAsMember=true",
      icon: <FaLinkedin className="w-8 h-8" />,
      content: ["Industry Insights", "Success Stories", "Team Updates"],
      gradient: "from-blue-600 to-blue-800",
      hoverEffect: "hover:shadow-blue-500/30",
    },
    {
      platform: "YouTube",
      username: "Eventzy Events",
      link: "https://www.youtube.com/@THEEVENTZY",
      icon: <FaYoutube className="w-8 h-8" />,
      content: ["Event Vlogs", "Planning Tips", "Client Testimonials"],
      gradient: "from-red-600 to-red-700",
      hoverEffect: "hover:shadow-red-500/30",
    },
  ];

  return (
    <div className="bg-gray-50 overflow-hidden">
      <Navbar />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover"
            style={{ filter: "brightness(0.3)" }}
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                Create
              </span>
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Celebrate
              </span>
            </h1>

            <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-12">
              Transforming your vision into unforgettable experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/services")} // Redirect to Services page
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-medium group relative overflow-hidden"
              >
                <span className="relative z-10">Start Planning</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open("https://www.instagram.com/reel/DIb0-44PbPJ/?igsh=MTE5aXM4dnVoODhxNg==", "_blank")
                } // Open Instagram Reels
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium flex items-center gap-2 group"
              >
                <FaPlay className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                Watch Showreel
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <BiChevronsDown className="w-8 h-8 text-white animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Interactive Services Section */}
{/* Interactive Services Section */}
<section className="py-24 bg-white relative">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Our Services
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Discover how we can help you create memorable experiences
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          onClick={() => setActiveService(activeService === index ? null : index)}
          className="group cursor-pointer"
        >
          <div
            className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden ${
              activeService === index ? "ring-2 ring-purple-500" : ""
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            />
            <div className="relative z-10">
              {/* Updated Image Container */}
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`}
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {service.description}
              </p>

              {/* Expanded Features on Click */}
              <AnimatePresence>
                {activeService === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 mt-4">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center text-gray-600"
                        >
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Interactive Social Media Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px] bg-[linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px]" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              Connect & Engage
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our growing community across all platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {socialFeatures.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`block group relative rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm shadow-2xl ${social.hoverEffect}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="p-8 relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-xl">
                      {social.icon}
                    </div>
                    <span className="text-sm font-medium text-white/60 px-4 py-1 bg-white/5 rounded-full">
                      {social.stats}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {social.platform}
                  </h3>
                  <p className="text-white/60 mb-6">{social.username}</p>

                  <div className="space-y-2">
                    {social.content.map((item, i) => (
                      <p key={i} className="text-sm text-white/40 flex items-center">
                        <span className="w-1 h-1 bg-white/40 rounded-full mr-2" />
                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm text-white/60">Follow Us</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <FaPlay className="w-3 h-3 text-white/60 transform -rotate-90" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 p-4 rounded-full bg-white/5 backdrop-blur-sm">
              <a href="mailto:contact@eventzy.com=" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <FaRegEnvelope />
                <span>planeventzy@gmail.com</span>
              </a>
              <div className="w-px h-6 bg-white/10" />
              <a href="tel:+1234567890" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <FaPhoneAlt />
                <span>+91 9490940282</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/your-video-id"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}