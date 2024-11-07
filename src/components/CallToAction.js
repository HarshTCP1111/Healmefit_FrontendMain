// CallToAction.js
import React from 'react';
import './CallToAction.css';
import ctaImage from '../assets/CTA-hmf.webp';

const CallToAction = ({ openModal }) => {
  return (
    <section className="cta-wrapper">
      <div className="cta-container">
        <div className="cta-image">
          <img src={ctaImage} alt="Call to Action" />
        </div>
        <div className="cta-content">
          <h2>Join us on our mission to improve driver health and safety</h2>
          <button className="cta-button" onClick={openModal}>
            Take a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
