import { useState, useEffect } from 'react';
import {  Navigate } from 'react-router-dom';

// Dummy authentication check (replace with actual API call)
const isAuthenticated = () => {
  // Replace with your actual authentication logic
  return localStorage.getItem('token') !== null;
};

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, []);

  return isLoggedIn ? children : <Navigate to="/login" />;
};
export default ProtectedRoute