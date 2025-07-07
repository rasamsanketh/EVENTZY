import React, { useState, useEffect } from "react";
import {
  FaPlay,
  FaArrowRight,
  FaLightbulb,
  FaHeart,
  FaShieldAlt,
  FaRocket,
  FaQuoteLeft,
  FaLinkedin
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/animations.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach(section => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries with creative solutions.",
      icon: <FaLightbulb />,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      shadowColor: "shadow-blue-500/25",
    },
    {
      title: "Excellence",
      description: "Delivering beyond expectations.",
      icon: <FaRocket />,
      color: "bg-gradient-to-br from-rose-500 to-pink-600",
      shadowColor: "shadow-rose-500/25",
    },
    {
      title: "Integrity",
      description: "Building trust through transparency.",
      icon: <FaShieldAlt />,
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/25",
    },
    {
      title: "Passion",
      description: "Driven by love for what we do.",
      icon: <FaHeart />,
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      shadowColor: "shadow-amber-500/25",
    },
  ];

  const team = [
    {
      name: "TEJASWI REDDY",
      role: "Founder & CEO",
      image: "/assets/TEJASWI.jpg",
      bio: "Tejaswi, Co-Founder of Eventzy, is passionate about curating unique and impactful event experiences.With a keen eye for detail and a strong sense of creativity, she ensures every event reflects excellence and elegance.For more information, connect with her on LinkedIn.",
      quote: "Every event tells a unique story, and we're here to make it unforgettable.",
      linkedin: "https://www.linkedin.com/in/tejaswi-reddy-jale-6279b5342/" // Add LinkedIn URL
    },
    {
      name: "SAI VAMSHI",
      role: "Co-Founder & COO",
      image: "/assets/vamshi.jpg",
      bio: "I’m Palamuri Saivamshi, Co-Founder of Eventzy, dedicated to delivering exceptional and seamless event experiences.I specialize in bringing creative vision and operational excellence together to execute memorable events.For more information, feel free to connect with me on LinkedIn.",
      quote: "Success lies in the details and the passion we bring to each project.",
      linkedin: "https://www.linkedin.com/in/sai-vamshi-328035282/" // Add LinkedIn URL
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="fixed inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="fixed inset-0 bg-mesh opacity-20 pointer-events-none"></div>

      <div className="relative z-10">
        <Navbar />
        
        <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium text-indigo-600 bg-indigo-50 ring-1 ring-inset ring-indigo-500/20 animate-pulse-slow">
                Established 2025
              </span>
              
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900">
                We Create
                <span className="relative mx-4 whitespace-nowrap animate-float inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-shimmer">
                    Magic
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
                </span>
                Together
              </h1>

              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                Where dreams transform into unforgettable moments. We craft experiences that resonate, inspire, and leave lasting impressions.
              </p>

              <div className="flex flex-wrap gap-6 justify-center pt-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Creating 
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-32 group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                
                <button className="group px-8 py-4 text-slate-700 rounded-xl overflow-hidden border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <span className="flex items-center gap-2">
                    <FaPlay className="text-sm" /> Watch Our Story
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 group">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-[length:0%_2px] group-hover:bg-[length:100%_2px] bg-no-repeat bg-left-bottom transition-all duration-500">
                  About the Company
                </span>
              </h2>
              <div className="h-1 w-20 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              <p className="text-lg text-slate-600 leading-relaxed">
              At EVENTZY, we don’t just plan events—we create experiences that resonate, inspire, and leave a lasting impact. With innovation at our core, we transform ordinary moments into extraordinary memories. Our team blends creativity with precision, crafting tailor-made solutions for every occasion. Let’s make magic together!
              </p>
            </div>
          </div>
        </section>

        <section id="values" className="py-32 relative bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Our Core Values
              </h2>
              <div className="h-1 w-20 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group relative p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                    <div className={`w-full h-full ${value.color}`}></div>
                  </div>
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 text-white ${value.color} ${value.shadowColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Meet Our Founders
              </h2>
              <div className="h-1 w-20 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
  {team.map((member, index) => (
    <div
      key={index}
      className="group relative p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative group-hover:rotate-6 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            src={member.image}
            alt={member.name}
            className="relative w-32 h-32 rounded-full object-cover ring-4 ring-white group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {member.name}
            </h3>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
          <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
          <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
            {member.bio}
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-start gap-2 text-slate-500">
              <FaQuoteLeft className="flex-shrink-0 mt-1" />
              <p className="italic">{member.quote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}