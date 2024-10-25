import React, { useState, useEffect } from 'react';
import Preloader from './loaders/Preloader';
import './App.css';
import LoginPage from './loginPage/loginsignUP';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulated loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <Preloader /> : 
      <>
      
      </>
    }
    <LoginPage/>
    </div>
  );
}

export default App;
