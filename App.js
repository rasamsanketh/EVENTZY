import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { EventProvider } from "./context/EventContext";
import { ContactProvider } from "./context/ContactContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

// Components
import PrivateRoute from "./components/PrivateRoute";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <ContactProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: '#333',
                    color: '#fff',
                    borderRadius: '0.75rem',
                  },
                }}
              />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route 
                  path="/admin/*" 
                  element={
                    <PrivateRoute>
                      <Admin />
                    </PrivateRoute>
                  } 
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </Router>
        </ContactProvider>
      </EventProvider>
    </AuthProvider>
  );
}

export default App;