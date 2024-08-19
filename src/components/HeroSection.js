import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to <span>Heal Me Fit!</span></h1>
        <p>A cutting-edge SaaS platform enhancing safety and well-being in the trucking industry through 
          biometric data analysis. We provide real-time, actionable health insights to mitigate risks and 
          reduce compliance costs.</p>
        <a href="#learn-more-section" className="learn-more-button">Learn More</a>
      </div>
    </div>
  );
};

export default HeroSection;
