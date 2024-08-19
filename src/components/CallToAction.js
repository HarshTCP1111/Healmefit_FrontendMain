import React from 'react';
import './CallToAction.css';
import ctaImage from '../assets/CTA-hmf.webp'; 

const CallToAction = () => {
  return (
    <section className="cta-wrapper">
      <div className="cta-container">
        <div className="cta-image">
          <img src={ctaImage} alt="Call to Action" />
        </div>
        <div className="cta-content">
          <h2>Join us on our mission to improve driver health and safety</h2>
          <a href="https://app.healmefit.io" className="cta-button" target="_blank" rel="noopener noreferrer">
          Take a Demo
        </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;