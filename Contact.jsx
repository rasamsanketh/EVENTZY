import React, { useState, useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import { FaEnvelope, FaPhone, FaUser, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

export default function Contact() {
  const { addContact } = useContext(ContactContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addContact(formData);
      toast.success("Message sent successfully! We will contact you soon.", {
        duration: 4000,
        icon: "👋",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Visit Us",
      details: "India, Telangana, Hyderabad",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Us",
      details: "planeventzy@gmail.com",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91 9490940282",
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon - Fri: 9AM to 6PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <div className="relative py-20 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Have a question or want to discuss your event? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-indigo-600 group-hover:text-purple-600 transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{info.title}</h3>
                        <p className="text-slate-600 mt-1">{info.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your Good Name"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 relative">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                        placeholder="+91 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-8 w-full group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        "Send Message"
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-32 group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
