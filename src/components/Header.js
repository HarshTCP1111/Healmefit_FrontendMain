// Header.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/HealMeFit-Logo.webp';

const Header = ({ openModal }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
        setIsMenuOpen(false);
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
          <li><Link 
      to="/" 
      onClick={(e) => {
        e.preventDefault(); // Prevent default link behavior
        const target = document.getElementById("pricing-section");
        const offset = -100; // Adjust this value based on your header height
        const yPosition = target.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
        setIsMenuOpen(false);
      }}
    >
      Pricing
    </Link></li>

        </ul>
        <button className="demo-button" onClick={openModal}>
          Take a Demo
        </button>
      </nav>
    </header>
  );
};

export default Header;
