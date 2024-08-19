import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import ContactForm from './ContactForm';
import HealmeFitlogo from '../assets/HEAL ME FIT-logo transparent.png';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <img src={HealmeFitlogo} alt="HealMeFit Logo" style={styles.logo} />
          <p style={styles.description}>
          A cutting-edge SaaS platform enhancing safety and well-being in the trucking industry through 
          biometric data analysis. We provide real-time, actionable health insights to mitigate risks and 
          reduce compliance costs.
          </p>
          <div style={styles.socialIcons}>
            <a href="https://www.facebook.com/HealMeFit" style={styles.icon}><FaFacebookF /></a>
            <a href="https://www.twitter.com/HealMeFit" style={styles.icon}><FaTwitter /></a>
            <a href="https://www.instagram.com/HealMeFit" style={styles.icon}><FaInstagram /></a>
            <a href="mailto:sales@healmefit.com" style={styles.icon}><FaEnvelope /></a>
          </div>
        </div>
        
        <div style={styles.column}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p>Email: <a href="mailto:sales@healmefit.com" style={styles.link}>sales@healmefit.com</a></p>
          <p>Phone: <a href="tel:+14808081388" style={styles.link}>(480) 808-1388</a></p>
          <p>Address: 3104 E. Camelback Rd, Ste 2634, Phoenix, AZ 85016</p>
        </div>
        
        <div style={styles.column}>
          <ContactForm />
        </div>
      </div>
      
      <div style={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} HealMeFit. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'black',
    color: '#fff',
    padding: '40px 0 20px',
    minHeight: '400px', // Add this line
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    minHeight: '320px', // Add this line
  },
  column: {
    flex: '1 1 300px',
    margin: '0 10px 20px',
  },
  logo: {
    maxWidth: '150px',
    marginBottom: '15px',
  },
  description: {
    fontSize: '14px',
    lineHeight: '1.5',
    marginBottom: '15px',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    color: '#fff',
    fontSize: '18px',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  bottom: {
    textAlign: 'center',
    borderTop: '1px solid #444',
    paddingTop: '20px',
    marginTop: '20px',
  },
};

export default Footer;