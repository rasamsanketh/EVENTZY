import React, { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const value = {
    user,
    isAuthenticated,
    login: async (credentials) => {
      try {
        // Demo authentication
        if (credentials.email === 'admin@eventzy.com' && credentials.password === 'admin123') {
          setUser({ email: credentials.email, role: 'admin' });
          setIsAuthenticated(true);
          return true;
        }
        throw new Error('Invalid credentials');
      } catch (error) {
        toast.error(error.message);
        return false;
      }
    },
    logout: () => {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}