import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/HealMeFit-Logo.webp';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
        </ul>
        {/* Updated Take a Demo button */}
        <a href="https://app.healmefit.io" className="demo-button" target="_blank" rel="noopener noreferrer">
          Take a Demo
        </a>
      </nav>
    </header>
  );
};

export default Header;
