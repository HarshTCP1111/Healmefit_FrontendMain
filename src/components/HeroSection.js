import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to <span>Heal Me Fit!</span></h1>
        <p>
          A cutting-edge SaaS platform enhancing safety and well-being in the trucking industry 
          through biometric data analysis. We provide real-time, actionable health insights to 
          mitigate risks and reduce compliance costs.
        </p>
        <button 
          onClick={() => handleScroll('services')}
          className="learn-more-button" 
          style={{ position: 'relative', zIndex: 10, marginTop: 15 }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HeroSection;