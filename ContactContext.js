import React, { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load contacts from localStorage on mount
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  // Save contacts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = async (contact) => {
    setLoading(true);
    try {
      // Validate contact data
      if (!contact.name || !contact.email || !contact.phone || !contact.message) {
        throw new Error('Please fill in all required fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contact.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Phone validation
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(contact.phone)) {
        throw new Error('Please enter a valid phone number');
      }

      // Create new contact with additional fields
      const newContact = {
        ...contact,
        id: Date.now(),
        date: new Date().toLocaleString(),
        status: 'pending'
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setContacts(prevContacts => [...prevContacts, newContact]);
      toast.success('Message sent successfully!');
      return true;

    } catch (error) {
      toast.error(error.message || 'Failed to send message. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (contactId) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setContacts(prevContacts => 
        prevContacts.filter(contact => contact.id !== contactId)
      );
      toast.success('Contact deleted successfully');
    } catch (error) {
      toast.error('Failed to delete contact');
      throw error;
    }
  };

  const updateContactStatus = async (contactId, status) => {
    try {
      setContacts(prevContacts =>
        prevContacts.map(contact =>
          contact.id === contactId
            ? { ...contact, status, lastUpdated: new Date().toLocaleString() }
            : contact
        )
      );
      toast.success(`Contact status updated to ${status}`);
    } catch (error) {
      toast.error('Failed to update contact status');
      throw error;
    }
  };

  const getContactById = (contactId) => {
    return contacts.find(contact => contact.id === contactId);
  };

  return (
    <ContactContext.Provider 
      value={{ 
        contacts, 
        addContact, 
        deleteContact, 
        updateContactStatus, 
        getContactById,
        loading 
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}