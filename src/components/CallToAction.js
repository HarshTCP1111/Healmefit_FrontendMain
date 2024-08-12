import React from 'react';
import './CallToAction.css';
import ctaImage from '../assets/Frame 97.png'; 

const CallToAction = () => {
  return (
    <section className="cta-wrapper">
      <div className="cta-container">
        <div className="cta-image">
          <img src={ctaImage} alt="Call to Action" />
        </div>
        <div className="cta-content">
          <h2>Join us on our mission to improve driver health and safety</h2>
          <button className="cta-button">Take a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;