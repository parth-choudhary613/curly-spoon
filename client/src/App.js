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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleAuthentication = (authState) => {
    setIsAuthenticated(authState);
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
        {/* Redirect to login if unauthenticated */}
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
        {/* Protected Home Page */}
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
