import React from 'react';
import './Footer.css';
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <center><h2>Join us on our mission to improve driver health and safety</h2></center>
            <p>Email: <a href="mailto:sales@healmefit.com">sales@healmefit.com</a></p>
            <p>Phone: (480) 808-1388</p>
            <p>Address: 3104 E. Camelback Rd, Ste 2634, Phoenix, AZ 85016</p>
          </div>
          <ContactForm />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Heal Me Fit. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/HealMeFit" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.twitter.com/HealMeFit" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/HealMeFit" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </>
  );
};

export default Footer;
