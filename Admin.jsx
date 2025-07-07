import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import { ContactContext } from "../context/ContactContext";
import { useAuth } from "../context/AuthContext";
import { FaSignOutAlt, FaTrash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import AdminForm from "../components/AdminForm";
import toast from "react-hot-toast";

export default function Admin() {
  const navigate = useNavigate();
  const { events, setEvents } = useContext(EventContext);
  const { contacts, deleteContact } = useContext(ContactContext);
  const { logout } = useAuth();

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("Logged out successfully");
  };

  const handleDeleteContact = (contactId) => {
    deleteContact(contactId);
    toast.success("Contact deleted successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900">Admin Dashboard</h2>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors duration-200"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Events Section */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Manage Events
                </h3>
                <AdminForm addEvent={addEvent} />
                <div className="mt-8 space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6">
                      <h4 className="text-xl font-bold text-slate-900">{event.name}</h4>
                      <p className="text-slate-600">{event.date}</p>
                      <p className="text-slate-600">{event.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Submissions Section */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Submissions
                </h3>
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div key={contact.id} className="group bg-white rounded-xl shadow-md p-6 relative">
                      <button
                        onClick={() => handleDeleteContact(contact.id)}
                        className="absolute top-4 right-4 p-2 text-red-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        title="Delete contact"
                      >
                        <FaTrash />
                      </button>
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-slate-900">{contact.name}</h4>
                        <span className="text-sm text-slate-500">{contact.date}</span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-slate-600">
                          <span className="font-medium">Email:</span> {contact.email}
                        </p>
                        <p className="text-slate-600">
                          <span className="font-medium">Phone:</span> {contact.phone}
                        </p>
                        <p className="text-slate-600">
                          <span className="font-medium">Message:</span><br />
                          {contact.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}