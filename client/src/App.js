import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Preloader from './loaders/Preloader';
import LoginPage from './loginPage/loginsignUP';
import HomePage from './homePage/navBar'; // Assuming this is your main navbar and home component
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulating auth check
    const timer = setTimeout(() => {
      const storedAuth = localStorage.getItem('authToken'); // Assume token stored during login
      setIsAuthenticated(!!storedAuth); // Authenticate if token exists
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleAuthentication = (authState) => {
    setIsAuthenticated(authState);
    if (authState) {
      localStorage.setItem('authToken', 'yourAuthToken'); // Store token
    } else {
      localStorage.removeItem('authToken'); // Clear token
    }
  };

  if (loading) {
    return (
      <div className="preloader">
        <Preloader />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <LoginPage setAuth={handleAuthentication} />
            )
          }
        />
        {/* Home Route (Direct Access in Development) */}
        <Route
          path="/home"
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/" replace />
          }
        />
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
