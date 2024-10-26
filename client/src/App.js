import React, { useState, useEffect } from 'react';
import Preloader from './loaders/Preloader';
import './App.css';
import LoginPage from './loginPage/loginsignUP';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Preloader duration (3 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className={`preloader ${!loading ? 'fade-out' : ''}`}>
        <Preloader />
      </div>
      <div className={`main-content ${!loading ? 'fade-in' : ''}`}>
        <LoginPage />
      </div>
    </div>
  );
}

export default App;
