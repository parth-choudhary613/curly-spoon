import React from 'react';
import '../loaders/Preloader.css';
import porscheImage from '../assets/loaderbg.jpg'; 
import porscheLoader from '../assets/Face_2.png'; 

const Preloader = () => {
    return (
        <div className="preloader" style={{ backgroundImage: `url(${porscheImage})` }}>
            <img src={porscheLoader} alt="Loading" className="loading-wheel" />
        </div>
    );
};

export default Preloader;
