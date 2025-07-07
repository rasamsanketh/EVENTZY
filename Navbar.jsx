import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo with subtle animation */}
          <Link to="/" className="group">
            <motion.span
              className="text-3xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-[#F43F5E] via-[#3B82F6] to-[#10B981]
                       hover:from-[#10B981] hover:via-[#3B82F6] hover:to-[#F43F5E]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              EVENTZY
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  className="relative text-lg font-medium text-gray-700 hover:text-[#2563EB] 
                           transition-colors duration-300 px-2 py-1"
                >
                  <span className="relative z-10">{link.name}</span>
                  {location.pathname === link.path ? (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-blue-100/80 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-transparent rounded-lg -z-10 
                                transition-colors duration-300 hover:bg-blue-50/80" />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/80 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isOpen ? (
                <FaTimes className="text-2xl text-[#2563EB]" />
              ) : (
                <FaBars className="text-2xl text-[#2563EB]" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-x-0 top-[72px] bg-white/95 backdrop-blur-lg 
                     border-t border-gray-100 shadow-lg md:hidden overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center px-4 py-3 rounded-lg text-gray-700
                             hover:bg-blue-50/80 hover:text-[#2563EB] transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg font-medium">{link.name}</span>
                    {location.pathname === link.path && (
                      <motion.div 
                        layoutId="activeMobileNav"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-[#2563EB]" 
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}