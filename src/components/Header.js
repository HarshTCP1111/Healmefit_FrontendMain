import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/HealMeFit-Logo.webp';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenuRef = useRef(null);

  useEffect(() => {
    // Handle scroll to make the header sticky
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    // Handle click outside to close the mobile menu
    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Heal Me Fit" style={{ width: '150px' }} />
        </a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`} ref={navMenuRef}>
        <ul>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/faqs" onClick={() => setIsMenuOpen(false)}>FAQs</Link></li>
        </ul>
        <a href="https://app.healmefit.io" className="demo-button" target="_blank" rel="noopener noreferrer">
          Take a Demo
        </a>
      </nav>
    </header>
  );
};

export default Header;
