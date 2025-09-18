// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'; // Assuming you have a firebase.js file for Firebase authentication

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap your application and provide authentication state
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup function
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
